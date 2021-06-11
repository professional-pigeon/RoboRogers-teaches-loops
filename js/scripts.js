Describe: roboResponse(numbers)

test: "should tell you a number is a number"
code: roboResponse(2)
expected output: (number)

test: "should recognize a number is 3"
code: roboResponse(3)
expected output: (true)

test: "should recognize a number with a 3 in any position"
code: roboResponse(13)
expected output: (true)

test

function roboResponse(element) {
  console.log(typeof(element)) 
  numberString = toString(element)
  console.log(element)
  console.log(numberString.includes("3"))

  if (true === numberString.includes("3")) {
    return true
  }
}

