

// Business Logic

function roboResponse(element) {

  let numberArray = []

  for (i = 0; i <= element; i ++) {
    if (element >= i) {
      numberArray.push(i)
    }
  }

  stringArray = numberArray.toString()
  stringArray = stringArray.split(",")

  stringArray.forEach(function(string) {
    if (string.includes("3")) {
      stringArray.splice(stringArray.indexOf(string), 1, "Won't you be my Neighbor?");
    } else if (string.includes("2")) {
      stringArray.splice(stringArray.indexOf(string), 1, "Boop!");
    } else if (string.includes("1")) {
      stringArray.splice(stringArray.indexOf(string), 1, "Beep!");
    } else {
    }
  });
}

// User Interface Logic

$(document).ready(function(){
  $("#numberForm").submit(function(event){
    event.preventDefault();

    let element = $("#validationDefault01").val()
    stringArray = []
    alert(element)

    roboResponse(element)
    alert(stringArray)

    $("h4").html("<p>" + stringArray + "</p>")

  });
});