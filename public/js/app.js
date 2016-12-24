 // building out topContainer
var topContainer = document.getElementById('topContainer');

 // create header div
var header = document.createElement('div');
header.id = 'header';
topContainer.appendChild(header);


// create img and append to header div
var headerImg = document.createElement('img');
headerImg.src = "./assets/logo.svg";
header.appendChild(headerImg);

// create plusbtn & append to header div
var plusBtn = document.createElement('div');
plusBtn.id = 'plusBtn';
plusBtn.innerHTML = '+';
header.appendChild(plusBtn);


//create nav & append to topContainer
var nav = document.createElement('nav');
topContainer.appendChild(nav);

// create random area on nav
var randomNav = document.createElement('div');
randomNav.id = 'random';
nav.appendChild(randomNav);

// create h2 for randomNav
var randomNav_h2 =  document.createElement('h2');
randomNav_h2.innerHTML = 'RANDOM';
randomNav.appendChild(randomNav_h2);

// create myBoard for nav area
var myBoards = document.createElement('div');
myBoards.id = 'myBoards';
nav.appendChild(myBoards);

// create h2 for myBoard
var myBoards_h2 = document.createElement('h2');
myBoards_h2.innerHTML = 'MY BOARDS';
myBoards.appendChild(myBoards_h2);

// create getAPP for nav area
var getApp = document.createElement('div');
getApp.id = 'getApp';
nav.appendChild(getApp);

// create h2 for getApp
var getApp_h2 = document.createElement('h2');
getApp_h2.innerHTML = 'GET THE APP';
getApp.appendChild(getApp_h2);

//---------------end topContainer--------------


// Start content area

var content =  document.getElementById('content');

// create postContainer div appended to content div
var postContainer = document.createElement('div');
postContainer.className = 'postContainer';
content.appendChild(postContainer);



