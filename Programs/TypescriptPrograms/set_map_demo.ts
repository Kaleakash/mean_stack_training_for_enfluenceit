let ss = new Set();     // it doesnt allow duplicate 
ss.add(100);
ss.add(200)
ss.add(300)
ss.add(400)
ss.add(400)
    console.log(ss)
ss.forEach(v=>console.log(v))
console.log(ss.size)
console.log(ss.has(100))
console.log(ss.has(10));

let mm = new Map();     // key is unique and value may be duplicate 
mm.set(100,"Ravi");
mm.set(101,"Ramesh");
mm.set(102,"Lokesh");
mm.set(103,"Rajesh");
console.log(mm)
                mm.set(100,"Raju");
mm.set(104,"Rajesh");
console.log(mm)
console.log(mm.get(100))
console.log(mm.get(1))
console.log(mm.has(100))
console.log(mm.has(1))

