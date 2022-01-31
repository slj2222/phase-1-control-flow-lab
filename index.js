function scuberGreetingForFeet(someNumber){
  let result
  if (someNumber === 199) {
    result = "This one is on me!";
  } else if (someNumber === 2001) {
      result = "I will gladly take your thirty bucks.";
    } else if (someNumber === 2501) {
      result = "No can do.";
    }
  return result;
}

function ternaryCheckCity(someCity){
  return someCity === 'NYC'?'Ok, sounds good.' : 'No go.';
}


function switchOnCharmFromTip(someTip){
  switch(someTip) {
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return "Thank you."
    default:
      return "Bye."
  }
  
}