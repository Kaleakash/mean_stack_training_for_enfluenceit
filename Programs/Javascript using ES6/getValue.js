function getData() {
    let value1 = sessionStorage.getItem("obj1");
    let value2 = localStorage.getItem("obj2");
    console.log("Value from session storage is "+value1);
    console.log("Value from local storage is "+value2);
}