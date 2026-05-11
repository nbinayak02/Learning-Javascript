import React, { use } from "react";

const UserCard = ({userProp}) => {
  try {
    return (
      <div className="profile-card">
        <div className="background">
          <div className="image-area">
            <img src={userProp.picture.large} alt="profile image" class="profile-image" />
            </div>
        </div>
        <div className="text-content">
          <div className="text1">{userProp.name.title}. {userProp.name.first} {userProp.name.last}</div>
          <div className="text2">{userProp.location.city}, {userProp.location.state}, {userProp.location.country}</div>
        </div>
        <div className="">
            <p>Email: {userProp.email}</p>
          <p>Contact: {userProp.phone}</p>
        </div>
        <div className="buttons">
          <button className="button">Subscribe</button>
          <button className="button">Message</button>
        </div>
        <div className="stats">
          <div className="data">
            <i class="bx bx-heart"></i>
            <span className="number">100K</span>
            <i class="bx bx-comment"></i>
            <span className="number">80K</span>
            <i class="bx bx-share"></i>
            <span className="number">16K</span>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return <p>Error: </p>;
  }
};

export default UserCard;
