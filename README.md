# Robo-rogers language generator

#### Robo-rogers response generator

#### By Kyle Kay-Perez

#### Shortcuts
- [Technologies Used](#technologies-used)
- [Description](#description)
- [Setup/Installation Requirements](#setup/installation-requirements)
- [Known Bugs](#known-bugs)
- [Future Plans](#future-plans)
- [License](#license)
- [Contact Information](#contact-information)

## Technologies Used

* HTML
* CSS
* [Markdown](https://www.markdownguide.org/)
* [Javascript](https://www.javascript.com/)
* [jQuery](https://jquery.com/)
* [VS studio](https://code.visualstudio.com/)
* [Bootstrap](https://getbootstrap.com/) 

## Description

This is a practice in loops and arrays and ends up being deceptively simple. It takes numbers, turns them into a range, and replaces numbers in that range with the automated beeps and boops of a robot along with catchphrase of Mr. Rogers.

## Setup/Installation Requirements

* Clone this repository from github to your desktop: [Github link for this project](https://github.com/professional-pigeon/language-selector)
* navigate to the top level of the directory
* Open the file named "index.html" in your browser.

or

* open this [link]

## Known Bugs

* No known bugs

## Future plans

* includes() is string or array protoype. It can't take numbers. I was able to turn a number array into a string array and then manipulate the string how I wanted. I would love to know if there's a way to use an "includes" style method on a numerical value as I was not able to implement one in an efficient way. Reach out if you have a suggestion.

## Function Tests

Describe: roboResponse()

Test: "It should turn the number into an array equal to the range of that number"
Code: roboResponse(5)
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should locate the number 3 in the array"
Code: roboResponse(5)
Expected Output: (4)

Test: "It should locate any number that includes a 3 in an array"
Code: roboResponse(14)
Expected Output: (4, 14)

Test: "It should turn an array of numbers into an array of strings"
Code: roboResponse(14)
Expected Output: ["0", "1", "2", "3", "4", "5"]

Test: "It should remove any string containing a "3" in an array"
Code: roboResponse(14)
Expected Output: ["0", "1", "2", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14"]

Test: "It should replace any removed 3 with the phrase "Won't you be my Neighbor?""
Code: roboResponse(14)
Expected Output: ["0", "1",  "2", "Won't you be my Neighbor?", "4", "5", "6", "7", "8", "9", "10", "11", "12", "Won't you be my Neighbor?", "14"]

Test: "It should replace any string containing a "2" with "Boop!""
Code: roboResponse(14)
Expected Output: ["0", "1",  "Boop!", "Won't you be my Neighbor?", "4", "5", "6", "7", "8", "9", "10", "11", "Boop!", "Won't you be my Neighbor?", "14"]

Test: "It should replace any string containing a "1" with "Beep!""
Code: roboResponse(14)
Expected Output: ["0", "Beep!", "Boop!", "Won't you be my Neighbor?", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!", "Boop!", "Won't you be my Neighbor?", "Beep!"]

## License

MIT License

Copyright (c) Kyle Kay-Perez 2021

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contact Information

Kyle.KayPerez@gmail.com