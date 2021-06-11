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

test: "will convert an array into a string"

test: "will convert a string into a string array"

test: "will remove any string with a '3' from a string array"
code: roboResponse(14)
expected output: ["0", "1", "2", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14"]

test: "will replace any strings containing a 3 with the phrase 'Won't you be my neighbor'"