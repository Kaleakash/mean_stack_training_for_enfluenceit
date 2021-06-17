/*document.write("Welcome to JavaScript program using document object");
window.document.write("<br/>Welcome to JavaScript program using window object")
alert("Welcome to Javascript")
window.alert("Welcome to JavaScript")*/
var obj;
function openWin() {
    //window.open("home.html","","width=300px,height=300px,left=200px,top=300px")
obj = window.open("myWin","","width=300px,height=300px,left=200px,top=300px")
obj.document.write("This is my custom window")
}

function closeWin() {
obj.close();
}