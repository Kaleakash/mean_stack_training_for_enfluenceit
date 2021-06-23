let obj = new Promise((resolve, reject) => {
    resolve("Done");
});
obj.then(data => console.log(data)).catch(e => console.log(e));
