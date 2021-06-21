fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.text()).then(data=>console.log(JSON.parse(data))).catch(error=>console.log(error));
