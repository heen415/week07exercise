
var myHeader = document.getElementById("myHeader");
myHeader.innerText = 'Hello World!';
var Anotherheader = document.getElementById('Anotherheader');

function displayResult(){
  var myInput= document.getElementById('myInput').value;
console.log(myInput);
Anotherheader.innerText = myInput;
}
var stringArray = ['hello','its','me','an','array'];
for(var i = 0; i < stringArray.length; i++) {
  console.log(stringArray[i]);
}

var newobjects =
{
  Hair:'brown',
  Eyes: 'black',
  Human: true
};

console.log(newobjects.Hair);
console.log(newobjects.Eyes);
console.log(newobjects.Human);

var heading1 = document.getElementById("heading1");
var heading2 = document.getElementById("heading2");
var heading3 = document.getElementById("heading3");

heading1.innerText = newobjects.Hair;
heading2.innerText = newobjects.Eyes;
heading3.innerText = newobjects.Human;
