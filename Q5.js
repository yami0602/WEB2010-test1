// What is the value of the result variable in the following code? You must show
// your work and explain your thinking or else receive 0 points.

var result = mystery("cow");
function mystery(animal){
  var callCount = 0;
  if (animal == "chicken"){
    return cluck();                                      
  }
  else if (animal == "cow"){
    return moo();
  }
  else return callCount;

  function cluck(){
    callCount++;
    return "cluck";
  }
  function moo(){
    animal = "chicken";
    return "moo" + mystery(animal);
  }
}
console.log(result)

// Answer:
The value is moocluck. var results = mystery('cow').. the function mystery calls animal. so it says if animal = cow than return moo. 
