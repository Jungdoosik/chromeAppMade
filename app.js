const player = {
    name : "ddu",
    points : 10,
    fat : true, 
};
console.log(player);
console.log(player.name);
console.log(player["name"]);
console.log(player.points);
console.log(player.fat);
player.fat = false;
console.log(player);
player.lastName = "potato";
console.log(player);