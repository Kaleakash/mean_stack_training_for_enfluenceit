// function addData() {
//     var divTag = document.getElementById("main");           // got reference of div tag 

//     var myH1Tag = document.createElement("h1");         // h1 tag reference ready 
//     var myH1TagContent = document.createTextNode("Welcome to My DOM Operation")     // text node. 
//     myH1Tag.appendChild(myH1TagContent);        // added content to h1 tag 

//     divTag.appendChild(myH1Tag);            // added h1 tag as a child to div tag. 
// }
var flag = 0;
function addData() {
    var divTag = document.getElementById("main");           // reference of div tag 
    var name = document.getElementById("name").value;       // name value     
    var age = document.getElementById("age").value;            // age value 
    console.log(name+" "+age);
    if(name.length==0 || age.length==0){
        document.getElementById("error").innerHTML="Plz enter details";
    }else {
        document.getElementById("error").innerHTML=""
        var myPTag = document.createElement("p");
        var myPTagContent = document.createTextNode("Name is "+name+", Age is "+age);
        flag++;
        myPTag.setAttribute("style","color:orange");
        myPTag.setAttribute("class","myFontClass");
        myPTag.setAttribute("id",flag);

        var deleteNode = document.createElement("a");
        var deleteTextNode = document.createTextNode("X");
        deleteNode.setAttribute("href","#");
        deleteNode.setAttribute("onClick","deleteNode("+flag+")");
        deleteNode.appendChild(deleteTextNode);    

        myPTag.appendChild(myPTagContent);          // dynamic content must be child of p 
        myPTag.appendChild(deleteNode);
        divTag.appendChild(myPTag);                 // p tag is a child of div
        reset();
    }
     
}
function reset() {
    document.getElementById("name").value=""
    document.getElementById("age").value=""
}
function deleteNode(idValue){
    console.log("Event fired..."+idValue)
    var obj = document.getElementById(idValue);
    obj.remove();
}