//creating a map
const map = new Map();
map.set("name","binayak");
map.set("address","jhiljhile");

//accessing
for(let [key,value] of map){
    console.log(key+" : "+value);
}
console.log("The name is: "+map.get("name"));

//size
console.log("The size of map  is: "+map.size)

// removing element
// delete()

map.delete("address");
for(let [key,value] of map){
    console.log(key+" : "+value);
}

//clear() delete all
map.clear();
for(let [key,value] of map){
    console.log(key+" : "+value);
}


//map can contain any type of key where as object only accepts string as a key
const store = new Map();
var laptop = {
    "name":"Acer",
    "model":"Aspire 3"
}

store.set(laptop, "110000");




for(let [key,value] of store){
    console.log("Brand: "+key["name"]);
    console.log("Model: "+key["model"]);
    console.log("The price of laptop is: "+value);
}


