Describe: roboResponse(numbers)

test: "will tell you a number is a number"
code: roboResponse(2)
expected output: (number)

test: "will turn a number into a range of numbers"
code: roboResponse(5)
expected output: [1, 2, 3, 4, 5]

test: "will tell you if an array has the number 3"
code: roboResponse(5)
expected output: (true)

test: "will tell you the position of 3 in an array"
code: roboResponse(5)
expected output: (3)

test: "will remove 3 from array"
code: roboResponse(5)
expected output: [0, 1, 2, 4, 5]

test

function roboResponse(element) {
  console.log(typeof(element)) 

  let numberArray = []

  for (i = 0; i <= element; i ++) {
    if (element > i) {
      numberArray.push(i)
    }
  }
  console.log(numberArray.includes(3))
  numberArray.splice(numberArray.indexOf(3), 1)
  return numberArray
}



  if (true === numberString.includes("3")) {
    return true
  }
}

