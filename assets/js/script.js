var color = document.querySelector("#color");
var page = document.querySelector("#page");

const obj = {
  red1: [
    1, 21, 33, 52, 76, 8, 40, 50, 79, 81, 11, 20, 46, 63, 83, 15, 25, 51, 77,
    85, 12, 36, 43, 64, 82, 3, 23, 39, 58, 66, 5, 26, 41, 65, 74, 10, 37, 53,
    60, 89, 17, 38, 42, 75, 84,
  ],
  red2: [
    27, 49, 59, 72, 80, 2, 19, 32, 48, 67, 14, 22, 57, 78, 90, 16, 28, 45, 68,
    87, 4, 29, 35, 55, 73, 9, 30, 54, 62, 88, 6, 18, 47, 69, 86, 13, 31, 44, 61,
    70, 7, 24, 34, 56, 71,
  ],
  green1: [
    5, 21, 38, 52, 76, 13, 33, 57, 67, 82, 11, 26, 44, 69, 79, 9, 24, 51, 64,
    81, 3, 28, 48, 53, 80, 17, 37, 45, 63, 77, 4, 30, 40, 61, 78, 10, 27, 41,
    56, 86, 20, 39, 59, 60, 83,
  ],
  green2: [
    7, 16, 32, 66, 73, 18, 29, 46, 55, 88, 2, 23, 34, 50, 75, 15, 22, 58, 70,
    89, 12, 31, 43, 68, 90, 1, 42, 65, 72, 87, 19, 35, 49, 71, 85, 8, 14, 47,
    54, 74, 6, 25, 36, 62, 84,
  ],
  blue1: [
    19, 28, 46, 68, 75, 5, 26, 39, 58, 78, 14, 37, 50, 69, 84, 3, 25, 57, 60,
    86, 16, 31, 49, 77, 89, 8, 17, 48, 59, 79, 15, 20, 44, 52, 70, 4, 33, 41,
    61, 83, 9, 29, 30, 62, 88,
  ],
  blue2: [
    10, 34, 56, 63, 80, 6, 35, 43, 64, 71, 13, 21, 54, 74, 90, 7, 24, 32, 53,
    67, 2, 36, 47, 65, 72, 11, 23, 45, 51, 81, 18, 22, 55, 76, 87, 12, 38, 40,
    66, 82, 1, 27, 42, 73, 85,
  ],
  yellow1: [
    16, 21, 43, 58, 78, 6, 37, 40, 65, 82, 2, 22, 39, 67, 83, 14, 28, 50, 75,
    90, 19, 31, 49, 68, 81, 5, 20, 47, 77, 84, 15, 24, 44, 64, 79, 4, 29, 30,
    51, 76, 17, 32, 53, 63, 88,
  ],
  yellow2: [
    7, 23, 56, 61, 85, 11, 34, 42, 71, 87, 3, 13, 45, 54, 74, 8, 25, 35, 52, 62,
    9, 33, 46, 60, 73, 10, 27, 48, 59, 86, 12, 38, 55, 69, 89, 1, 36, 41, 66,
    72, 18, 26, 57, 70, 80,
  ],
  orange1: [
    12, 34, 40, 75, 89, 2, 16, 42, 55, 77, 5, 24, 33, 67, 83, 1, 25, 58, 69, 90,
    7, 21, 41, 56, 87, 11, 32, 44, 61, 70, 3, 15, 37, 60, 71, 10, 20, 43, 54,
    85, 8, 26, 35, 59, 76,
  ],
  orange2: [
    4, 28, 31, 57, 72, 17, 36, 52, 64, 80, 19, 23, 45, 62, 74, 6, 39, 49, 68,
    73, 13, 22, 48, 53, 88, 29, 30, 50, 65, 82, 14, 27, 51, 78, 84, 18, 38, 46,
    63, 81, 9, 47, 66, 79, 86,
  ],
  purple1: [
    24, 34, 53, 67, 85, 23, 40, 57, 76, 87, 1, 16, 33, 65, 78, 19, 32, 58, 64,
    84, 13, 20, 48, 55, 77, 2, 21, 46, 75, 82, 5, 29, 30, 56, 80, 10, 35, 54,
    63, 81, 4, 26, 45, 61, 79,
  ],
  purple2: [
    6, 18, 39, 62, 70, 25, 41, 59, 74, 83, 17, 38, 44, 60, 86, 8, 22, 47, 66,
    72, 9, 12, 37, 42, 88, 15, 36, 51, 68, 90, 7, 14, 49, 50, 71, 3, 28, 31, 52,
    73, 11, 27, 43, 69, 89,
  ],
  pink1: [
    18, 29, 58, 74, 90, 17, 38, 44, 69, 88, 2, 27, 37, 55, 67, 7, 23, 36, 53,
    75, 5, 48, 59, 72, 84, 14, 28, 42, 60, 87, 13, 22, 41, 61, 86, 3, 24, 34,
    52, 71, 1, 35, 56, 64, 83,
  ],
  pink2: [
    26, 47, 50, 79, 89, 4, 10, 30, 49, 66, 15, 25, 51, 76, 81, 9, 16, 46, 65,
    80, 11, 32, 45, 68, 78, 8, 21, 33, 57, 73, 6, 20, 43, 63, 77, 12, 31, 54,
    62, 85, 19, 39, 40, 70, 82,
  ],
  lightGreen1: [
    5, 10, 41, 56, 72, 4, 22, 33, 54, 74, 13, 26, 40, 61, 82, 3, 20, 46, 67, 73,
    8, 11, 34, 45, 87, 19, 39, 55, 60, 89, 12, 35, 59, 68, 80, 15, 24, 42, 57,
    76, 1, 27, 48, 79, 81,
  ],
  lightGreen2: [
    29, 30, 58, 62, 83, 21, 43, 52, 75, 84, 6, 18, 32, 69, 70, 7, 16, 31, 65,
    77, 23, 44, 50, 71, 85, 14, 37, 49, 63, 88, 9, 25, 38, 53, 86, 17, 36, 51,
    64, 90, 2, 28, 47, 66, 78,
  ],
};
loadUI();
var textElements = document.querySelectorAll(
  `#bingo-box1 .col1, 
  #bingo-box1 .col2, 
  #bingo-box1 .col3, 
  #bingo-box1 .col4, 
  #bingo-box1 .col5, 
  #bingo-box1 .col6, 
  #bingo-box1 .col7, 
  #bingo-box1 .col8, 
  #bingo-box1 .col9, 

  #bingo-box2 .col1, 
  #bingo-box2 .col2, 
  #bingo-box2 .col3, 
  #bingo-box2 .col4, 
  #bingo-box2 .col5, 
  #bingo-box2 .col6, 
  #bingo-box2 .col7, 
  #bingo-box2 .col8, 
  #bingo-box2 .col9`
);
var inputText = document.querySelector("#input-textarea"),
  array = [], almostList = [];
var subVal = "";

color.onchange = function () {
  var row = document.querySelectorAll(".row");
  // for (var x of row) {
  //   x.style.backgroundColor = color.value
  // }
  clear();
  loadText(obj[color.value + "1"].concat(obj[color.value + "2"]));
  document.querySelector('#color').style.backgroundColor = color.value
  if (color.value == 'blue' || color.value == 'green' || color.value == 'purple') {
    document.querySelector('#color').style.color = '#ccc'
  } else {
    document.querySelector('#color').style.color = 'black'
  }
  highlight(array)
};

page.onchange = function () {
  if (page.value == 'one') {
    onePage()
  } else {
    twoPage()
  }
}

for (var textElement of textElements) {
  textElement.onclick = function (e) {
    var kt = true
    for (var x of array) {
      if (x == e.target.textContent) {
        kt = false
        break
      }
    }
    if (kt && e.target.textContent != '') {
      array.push(e.target.textContent)
    } else {
      if (kt == false) {
        for (var i = 0; i < array.length; i++) {
          if (array[i] == e.target.textContent) {
            array.splice(i, 1)
          }
        }
      }
    }
    inputText.value = array.join(' ')
    reload(e.target.textContent)
  }
}

function reload(str) {
  loadBallList(array)
  highlight(array)
  checkBingo(array)
};

inputText.onkeyup = function (event) {

  var currentArray = inputText.value.split(' ');
  for (var i = 0; i < currentArray.length; i++) {
    if (currentArray[i] == '') {
      currentArray.splice(i, 1);
      i--
    } else {
      for (var j = 0; j < currentArray[i].length; j++) {
        if (currentArray[i][j] >= 0 && currentArray[i][j] <= 9) {
        } else {
          currentArray.splice(i, 1);
          currentArray.splice(i, 1);
          break
        }
      }
    }
  }

  array = currentArray

  // Chack bingo
  checkBingo()

  // Highlight the Number
  highlight(array);

  // Load number ball
  loadBallList(array)
};

document.querySelector('.clear-button').onclick = function (e) {
  array = [];
  inputText.value = array.join(' ')
  reload(e.target.textContent)
  console.log(array)
}

document.querySelector('#check-close-button').onchange = function (e) {
  document.querySelector('.aside-left').classList.toggle('display-none')
  document.querySelector('.aside-left-content').classList.toggle('display-none')
  document.querySelector('.aside-left').classList.toggle('w50px-h50px')
  setTimeout(() => {
    document.querySelector('.aside-left').classList.toggle('display-none')
  }, 200);
}

function loadBallList(array) {
  var listOfBall = '<div class="number-ball">' + array.join('</div>\n<div class="number-ball">') + '</div>';
  if (listOfBall == `<div class="number-ball"></div>`) {
    listOfBall = ''
  }
  document.querySelector('.number-list-box').innerHTML = listOfBall;
}

function highlight(array) {
  for (var textElement of textElements) {
    if (array.includes(textElement.textContent)) {
      textElement.classList.add("highlight");
    } else clearHightlight(textElement);
  }
}

function clearHightlight(textElement) {
  textElement.classList.remove("highlight");
}

function loadUI() {
  var bingo = document.querySelector("#bingo-box");

  var colDiv = "";
  for (var i = 1; i < 10; i++) {
    colDiv = colDiv + `\t\t<div class="col col${i}"></div>\n`;
  }

  var rowDiv = "";
  for (var i = 0; i < 3; i++) {
    rowDiv = '\t<div class="row">\n' + colDiv + "</div>\n";
  }

  var bingoGroupDiv = "";
  for (var i = 0; i < 3; i++) {
    bingoGroupDiv =
      '<div class="bingo-group">\n' + rowDiv + rowDiv + rowDiv + "</div>\n";
  }

  var html = "";
  for (var i = 0; i < 3; i++) {
    html = html + bingoGroupDiv;
  }

  html =
    '<div id="bingo-box1">' +
    html +
    "</div>" +
    '<div id="bingo-box2">' +
    html +
    "</div>";

  bingo.innerHTML = html;
  onePage(1)
  loadText(obj.red1.concat(obj.red2));
}

function loadText(obj) {
  var textElements = document.querySelectorAll(
    `#bingo-box1 .col1, 
  #bingo-box1 .col2, 
  #bingo-box1 .col3, 
  #bingo-box1 .col4, 
  #bingo-box1 .col5, 
  #bingo-box1 .col6, 
  #bingo-box1 .col7, 
  #bingo-box1 .col8, 
  #bingo-box1 .col9, 

  #bingo-box2 .col1, 
  #bingo-box2 .col2, 
  #bingo-box2 .col3, 
  #bingo-box2 .col4, 
  #bingo-box2 .col5, 
  #bingo-box2 .col6, 
  #bingo-box2 .col7, 
  #bingo-box2 .col8, 
  #bingo-box2 .col9`
  );
  var objIndex = 0;
  var colIndex = 0;
  for (var textElement of textElements) {
    if (obj[objIndex] > 0 && obj[objIndex] < 10) {
      colIndex = 1;
    } else if (obj[objIndex] < 20) {
      colIndex = 2;
    } else if (obj[objIndex] < 30) {
      colIndex = 3;
    } else if (obj[objIndex] < 40) {
      colIndex = 4;
    } else if (obj[objIndex] < 50) {
      colIndex = 5;
    } else if (obj[objIndex] < 60) {
      colIndex = 6;
    } else if (obj[objIndex] < 70) {
      colIndex = 7;
    } else if (obj[objIndex] < 80) {
      colIndex = 8;
    } else if (obj[objIndex] <= 90) {
      colIndex = 9;
    }
    if (textElement.classList.contains("col" + colIndex)) {
      textElement.innerHTML = "<p>" + obj[objIndex] + "</p>";
      objIndex++;
    }
    if (textElement.textContent != "") {
      textElement.style.backgroundColor = "";
      textElement.classList.add("number");
    } else {
      textElement.classList.remove("number");
      textElement.style.backgroundColor = color.value;
    }
  }
}

function clear() {
  for (var textElement of textElements) {
    textElement.textContent = "";
  }
}

function onePage(page) {
  document.querySelector('.radio-page').style.display = 'flex';
  document.querySelector('.check-area').classList.add('mr-0px')
  if (page == 1) {
    document.querySelector('#bingo-box1').style.display = 'none';
    document.querySelector('#bingo-box2').style.display = 'block';
  } else {
    document.querySelector('#bingo-box1').style.display = 'block';
    document.querySelector('#bingo-box2').style.display = 'none';
  }
  bingoBox = document.querySelector('#bingo-box').style.width = '300px'
}

function twoPage() {
  document.querySelector('.radio-page').style.display = 'none';
  document.querySelector('.check-area').classList.remove('mr-0px')
  document.querySelector('#bingo-box1').style.display = 'block';
  document.querySelector('#bingo-box2').style.display = 'block';
  var bingoBox = document.querySelector('#bingo-box')
  bingoBox.style.display = "flex"
  bingoBox.style.width = "600px"
}

function page1() {
  onePage(1)
}

function page2() {
  onePage(2)
}

function checkArea() {
  document.querySelector('.textarea').classList.toggle('display-none')
}

function checkWaiting() {
  document.querySelector('.message').classList.toggle('display-none')
}

function checkBingo(arr) {
  var html = ''
  almostList = []
  for (var key in obj) {
    var x = 0
    for (var num = 0; num < obj[key].length; num += 5) {
      var results = check5Number(key.substring(0, key.length - 1), obj[key][num], obj[key][num + 1], obj[key][num + 2], obj[key][num + 3], obj[key][num + 4])
      if (results == 'bingo') {
        alert(key.substring(0, key.length - 1) + ' bingo')
      } else if (results != '' && typeof results == 'object') {
        isAlmost = false
        var kt = true
        for (var x of almostList) {
          if (x[0] == results[0] && x[1] == results[1]) {
            kt = false
            break
          }
        }
        if (kt) {
          almostList.push(results)
          html = divBall(almostList)
          document.querySelector('.message').innerHTML = html
        }
      }
    }
  }
  document.querySelector('.message').innerHTML = html
}

function divBall(results) {
  var str = ''
  for (var result of results) {
    if (result[0] == 'blue' || result[0] == 'green' || result[0] == 'purple') {
      str = str + `<div class="number-ball" style="background-color: ${result[0]}; color: #ccc">${result[1]}</div>`;
    } else {
      str = str + `<div class="number-ball" style="background-color: ${result[0]}; color: black">${result[1]}</div>`;
    }
  }
  console.log(results);
  return str
}

function check5Number(key, num1, num2, num3, num4, num5) {
  num1 = String(num1);
  num2 = String(num2);
  num3 = String(num3);
  num4 = String(num4);
  num5 = String(num5);
  var count = 0
  if (array.includes(num1)) {
    count++
  }
  if (array.includes(num2)) {
    count++
  }
  if (array.includes(num3)) {
    count++
  }
  if (array.includes(num4)) {
    count++
  }
  if (array.includes(num5)) {
    count++
  }
  if (count == 5) return 'bingo'
  if (count == 4) {
    if (!array.includes(num1)) {
      return ([key, num1])
    }
    if (!array.includes(num2)) {
      return ([key, num2])
    }
    if (!array.includes(num3)) {
      return ([key, num3])
    }
    if (!array.includes(num4)) {
      return ([key, num4])
    }
    if (!array.includes(num5)) {
      return ([key, num5])
    }
  }
  return ''
}