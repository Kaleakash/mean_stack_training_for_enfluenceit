// document.write("1st Statement")
// document.write("<br/>2nd Statement")
// document.write("<br/>3rd Statement");

// document.write("1st Statement")
// setTimeout('fun()',2000);       // only one time after specific time 
// setInterval('fun1()',1000)         //it call again and again after spcific period of time  
// document.write("<br/>3rd Statement");

// function fun() {
//    // document.write("<br/>2nd Statement")
//    document.getElementById("obj").innerHTML="2nd Statement"
// }
// var i=0;
// function fun1() {
//     document.getElementById("obj1").innerHTML="4th Statement "+i;
//     i++;
// }

function fun() {
    //setInterval("displayInfo()",1000)
}
var i=0;
function displayInfo() {
    if(i%2==0){
            //document.bgColor="RED";
            document.getElementsByTagName("body")[0].style.backgroundColor="RED"
            document.getElementById("obj").style.color="GREEN";
            document.getElementById("obj").style.fontSize="30px";
    }else {
            //document.bgColor="GREEN";
            document.getElementsByTagName("body")[0].style.backgroundColor="GREEN"
            document.getElementById("obj").style.color="WHITE";
            document.getElementById("obj").style.fontSize="50px";
    }
    i++;
}

function changeSize(){
    document.getElementById("obj").style.fontSize="70px";
}

function originalSize(){
    document.getElementById("obj").style.fontSize="30px";
}

function inImage() {
        document.getElementById("mId").style.width="400px";
        document.getElementById("mId").style.height="400px"
}
function outImage() {
    document.getElementById("mId").style.width="100px";
    document.getElementById("mId").style.height="100px"

}

function dateInfo() {
    var obj = new Date();
   /* document.write(obj+"<br/>")
    document.write("<Br/>Date "+obj.getDate())
    document.write("<Br/>Month "+obj.getMonth())
    obj.setMonth(obj.getMonth()+1);
    document.write("<Br/>Month "+obj.getMonth())
    document.write("<Br/>Year "+obj.getFullYear())
    document.write("<Br/>Hour "+obj.getHours())
    document.write("<Br/>Minute "+obj.getMinutes())
    document.write("<Br/>Second "+obj.getSeconds())*/
    document.getElementById("dateId").innerHTML=obj.getHours()+":"+obj.getMinutes()+":"+obj.getSeconds();
}
dateInfo();

function dis() {
   setInterval("dateInfo()",500);
}



