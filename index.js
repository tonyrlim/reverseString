//Function that will reverse a String

function reverse(str){
  var myArray = str.split("");
  var reverseArray = [];
  for(let i = 0; i < myArray.length - 1; i++){
    reverseArray.unshift(myArray[i]);
  }

  console.log(reverseArray);
}

reverse("Hello World");