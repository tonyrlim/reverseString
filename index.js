//Function that will reverse a String

function reverse(str){
  //check input
  if(!str || str.length < 2 || typeof str !== 'string'){
    return "Big Problem Dawg";
  }

  const reverseArray = [];
  const totalItems = str.length - 1;
  for(let i = totalItems; i >= 0; i--){
    reverseArray.push(str[i]);
  }
  return reverseArray.join('');
}

function reverse2(str){
  return str.split('').reverse().join('');
}

reverse("Hello World");
reverse2("Easier Version");