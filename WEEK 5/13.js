function sorting(arrNumber) {
    for (i = 0; i < arrNumber.length; i++) {
      for (j = 0;j < arrNumber.length-1; j++) {
          if (arrNumber[j] > arrNumber[j+1]) {
              var tmp = arrNumber[j];
              arrNumber[j] = arrNumber[j+1];
              arrNumber[j+1] = tmp
          }
      }
    }
    return arrNumber
  }
  
  function getTotal(arrNumber) {
    var max = 0
    var counter = 0
    for (i = 0; i < arrNumber.length; i++) {
        if(max < arrNumber[i]){
            max = arrNumber[i]
            counter = 0
            i--
        } else if(max === arrNumber[i]){
            counter ++
        }
    }
    if(arrNumber == false){
        return "''"
    } else {
        return `angka paling besar adalah ${max} dan jumlah kemunculan sebanyak ${counter} kali`
    }
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''