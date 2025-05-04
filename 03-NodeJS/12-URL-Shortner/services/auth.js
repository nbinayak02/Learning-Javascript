const sIdToUserMap = new Map();

function setUser(id, user){
    sIdToUserMap.set(id, user);
    console.log("sidtousermap", sIdToUserMap);
}

function getUser(id){
    const user = sIdToUserMap.get(id);
    return user;
}

module.exports = {
    setUser,
    getUser,
}