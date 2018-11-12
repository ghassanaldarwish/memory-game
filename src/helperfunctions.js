

export function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[
        i];
      array[i] = array[j];
      array[j] = temp;
  }
};

export function createArray(x,y){
  return Array.apply(null, Array(x)).map(function(e){
    return Array(y);
  });
}

export let gameStates = {
  WFTFC: "WAITING_FOR_THE_FIRST_CARD",
  WFTSC: "WAITING_FOR_THE_SECOND_CARD",
  WRONG: "WRONG"
}
