function scuberGreetingForFeet(aNumber){
  if (aNumber <= 400) {
    return "This one is on me!"
  } else if (aNumber > 2000 && aNumber <= 2500) {
    return "I will gladly take your thirty bucks."
  } else if (aNumber > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(someCity){
  if (someCity === "NYC") {
    return "Ok, sounds good."
  } else {
    return "No go."
  }
}

function switchOnCharmFromTip(tips){
  if (tips === "generous") {
    return "Thank you so much."
  } else if (tips === "not as generous") {
    return "Thank you."
  } else {
    return "Bye."
  }
}