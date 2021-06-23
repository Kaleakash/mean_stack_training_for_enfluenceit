let obj = new Object();
obj["id"]=100;
obj["name"]="Ramesh"
obj["salary"]=12000;

console.log(typeof obj)
console.log(obj.hasOwnProperty("desg"))
for(let kk of Object.keys(obj)) {
    console.log(kk)
}
for(let vv of Object.values(obj)) {
    console.log(vv)
}
for(let en of Object.entries(obj)){
    console.log(en)
}