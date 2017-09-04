function forLoop(array){
  for (let i = 0; i < 25; i++) {
      if(i === 1){
        array.push(`I am ${i} strange loop.`)
      } else {
        array.push(`I am ${i} strange loops.`)
      }
  }
  return array;
}

function whileLoop(num){
  var index = num;
  while(index >= 0){
    console.log(index);
    index--;
  }
  return 'done';
}