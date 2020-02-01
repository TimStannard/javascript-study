// lesson 2

var count = 0;

function cc(card) {
	document.getElementById("cards-dealt").innerHTML += card + " ";
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
      document.getElementById("bet-hint").innerHTML = "Hint: " + count + " Bet";
  } else {
      document.getElementById("bet-hint").innerHTML = "Hint: " + count + " Hold";
  }
}

// Add/remove calls to test your function.
cc(2); cc(3); cc(4); cc(5); cc(6);