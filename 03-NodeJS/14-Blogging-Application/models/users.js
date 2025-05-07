const { Schema, model } = require("mongoose");
const { randomBytes, createHmac } = require("crypto");
const { createToken } = require("../services/authentication");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    profileImageUrl: {
      type: String,
      default: "./public/images/default.svg",
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return;

  const salt = randomBytes(16).toString();
  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");

  this.salt = salt;
  this.password = hashedPassword;

  next();
});

userSchema.static("matchPasswordAndGetToken", async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) throw new Error("User not found");

  const salt = user.salt;
  const hashedPassword = user.password;

  const userProvidedPass = createHmac("sha256", salt)
    .update(password)
    .digest("hex");

  if (hashedPassword !== userProvidedPass)
    throw new Error("Password not matched");

  const token = createToken(user);
  return token;
});

const User = model("user", userSchema);

module.exports = User;
  