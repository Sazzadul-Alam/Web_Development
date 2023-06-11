//problem:5
const friends = [
    { name: "kamal", friend: "kaka" },
    { name: "kaka", friend: "kamal" },
]
function isBestFriend(bud) {

    if (friends.name == friends.friend) {
        return true;
    }
    else {
        return false;
    }


}
const buddy = isBestFriend(friends);
console.log(buddy);