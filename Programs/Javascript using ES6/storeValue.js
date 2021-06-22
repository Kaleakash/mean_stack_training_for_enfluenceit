function storeData() {
    let name  = document.getElementById("name").value;
    console.log("Name is "+name);
    sessionStorage.setItem("obj1",name);
    localStorage.setItem("obj2",name);
}