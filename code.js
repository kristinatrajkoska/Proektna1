var post1= document.getElementById("post1");
post1.addEventListener("click", function ()
{
    var commentBoxValue= document.getElementById("comment-box1").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
});
var post2= document.getElementById("post2");
post2.addEventListener("click", function (){
    var commentBoxValue= document.getElementById("comment-box2").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
});
var post3= document.getElementById("post3");
post3.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box3").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
});
var post4= document.getElementById("post4");
post4.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box4").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
});
var post5= document.getElementById("post5");
post5.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box5").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
});
var post6= document.getElementById("post6");
post6.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box6").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
});



function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }
