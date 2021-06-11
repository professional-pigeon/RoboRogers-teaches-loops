Describe: roboResponse(numbers)

test: "should tell you a number is a number"
code: roboResponse(2)
expected output: (number)

test: "should recognize a number is 3"
code: roboResponse(3)
expected output: (true)

test: "should turn a number into a range of numbers"
code: roboResponse(5)
expected output: [1, 2, 3, 4, 5]

test

function roboResponse(element) {
  console.log(typeof(element)) 

  let number = 1
  let numberArray = []

  for (i = 0; i < 100; i ++) {
    if (element > i) {
      numberArray.push(i)
    }
    return numberArray
  }
}



  if (true === numberString.includes("3")) {
    return true
  }
}

