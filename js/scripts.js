Describe: roboResponse(numbers)

test: "should tell you a number is a number"
code: roboResponse(2)
expected output: (number)

test: "Should tell you a number includes 3"
code: roboResponse(53)
expected output: (true)

function roboResponse(element) {
  console.log(typeof(element)) 
  if (element.includes(3)) {
    return true
  }
}