

let winners = new Array();
let player1Selections = new Array();
let player2Selections = new Array();
let currentPlayer = 0;
let points1 = 0;    // player 1 points
let points2 = 0;    // player 2 points
let size = 3;

// JavaScript
function drawBoard()
{
    let parent = document.getElementById("game");
    let counter = 1;

    for (let i = 0; i < 3; i++)
    {
        let row = document.createElement("tr");

        for(let x = 0; x < size; x++)
        {
            let col = document.createElement("td");
            col.innerHTML = counter;

            row.appendChild(col);
        }
        parent.appendChild(row);
    }
}

function loadAnswers()
{
    winners.push([1, 2, 3]);
    winners.push([4, 5, 6]);
    winners.push([7, 8, 9]);
    winners.push([1, 4, 7]);
    winners.push([2, 5, 8]);
    winners.push([3, 6, 9]);
    winners.push([1, 5, 9]);
    winners.push([3, 5, 7]);
}
function drawBoard() {
  var Parent = document.getElementById("game");
  var counter = 1;
  
  while (Parent.hasChildNodes()) {
      Parent.removeChild(Parent.firstChild);
  }

  for (s = 0; s < 3; s++) {
      var row = document.createElement("tr");
      
      for (r = 0; r < 3; r++) {
          var col = document.createElement("td");
          col.id = counter;
          col.innerHTML = counter;

          var handler = function(e) {
              if (currentPlayer == 0) {
                  this.innerHTML = "X";
                  player1Selections.push(parseInt(this.id));
                  player1Selections.sort(function(a, b) { return a - b });
              }

              else {
                  this.innerHTML = "O";
                  player2Selections.push(parseInt(this.id));
                  player2Selections.sort(function(a, b) { return a - b });
              }

              if (checkWinner())
              {
                  if(currentPlayer == 0)
                      points1++;
                  else
                      points2++;

                  document.getElementById("player1").innerHTML = points1;
                  document.getElementById("player2").innerHTML = points2;

                  reset();
                  drawBoard();
              }

              else
              {
                  if (currentPlayer == 0)
                      currentPlayer = 1;
                  else
                      currentPlayer = 0;
                  this.removeEventListener('click', arguments.callee);
              }
          };

          col.addEventListener('click', handler);

          row.appendChild(col);
          counter++;
      }

      Parent.appendChild(row);
  }

  loadAnswers();
}

function checkWinner() {
  // check if current player has a winning hand
  // only start checking when player x has size number of selections
  var win = false;
  var playerSelections = new Array();

  if (currentPlayer == 0)
      playerSelections = player1Selections;
  else
playerSelections = player2Selections;
  
  if (playerSelections.length >= size) {
      // check if any 'winners' are also in your selections
      
      for (i = 0; i < winners.length; i++) {
          var sets = winners[i];  // winning hand
          var setFound = true;
          
          for (r = 0; r < sets.length; r++) {
              // check if number is in current players hand
              // if not, break, not winner
              var found = false;
              
              // players hand
              for (s = 0; s < playerSelections.length; s++) {
                  if (sets[r] == playerSelections[s]) {
                      found = true;
                      break;
                  }
              }

              // value not found in players hand
              // not a valid set, move on
              if (found == false) {
                  setFound = false;
                  break;
              }
          }

          if (setFound == true) {
              win = true;
              break;
          }
      }
  }

  return win;
} 

if (checkWinner())
{
      if(currentPlayer == 0)
          points1++;
      else
          points2++;

      document.getElementById("player1").innerHTML = points1;
      document.getElementById("player2").innerHTML = points2;

      reset();
      drawBoard();
 }

else if (player2Selections.length + player1Selections.length == 9)
 {
     reset();
     drawBoard();
}

function reset()
{
    currentPlayer = 0;
    player1Selections = new Array();
    player2Selections = new Array();
    d('player1').classList.add('selected');
    d('player2').classList.remove('selected');
}