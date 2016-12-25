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


  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", objListener);
  oReq.open("GET", "https://www.reddit.com/r/pics.json");
  oReq.send();


  function objListener() {
    let imageObj = JSON.parse(this.responseText);
    console.log(this.responseText);

    // will loop through content of json object, pull info and build posts
    for(var i = 0; i < imageObj.data.children.length; i++) {
      if(imageObj.data.children[i].data.post_hint === 'image') { // will only grab post if it has an image

        var url = imageObj.data.children[i].data.url;
        var title = imageObj.data.children[i].data.title;
        var author = imageObj.data.children[i].data.author;
        var score = imageObj.data.children[i].data.score;
        var date = imageObj.data.children[i].data.created;
        var newDate = new Date(date * 1000);


          // create postContainer div appended to content div
        var postContainer = document.createElement('div');
        postContainer.className = 'postContainer';
        content.appendChild(postContainer);

          // create post div
        var post = document.createElement('div');
        post.className = 'post';
        postContainer.appendChild(post);

          // create postContent div
        var postContent = document.createElement('div');
        postContent.className = 'postContent';
        postContent.innerHTML = '';
        post.appendChild(postContent);


          // create img container
        var imgContainer = document.createElement('div');
        imgContainer.className = 'imgContainer';
        post.appendChild(imgContainer);


          // create post <img> for blog
        var postImage = document.createElement('img');
        postImage.src = url;
        imgContainer.appendChild(postImage);


          // check to see if img has .gigv ending
        var isGif = /gifv/.test(url);
        console.log(imageObj);

        if(isGif) {
          var url = url.replace(/gifv/i, 'gif');
        }
        console.log(url);


          // create postTitle div
        var postTitle = document.createElement('div');
        postTitle.className = 'postTitle';
        postTitle.innerHTML = title;
        post.appendChild(postTitle);

          // create imgVote div
        var imgVote = document.createElement('div');
        imgVote.className = 'vote';
        imgVote.innerHTML = 'Votes: ' + score;
        post.appendChild(imgVote);

          // create metaData div
        var metaData = document.createElement('div');
        metaData.className = 'metaData';
        metaData.innerHTML = 'by: ' + author;
        post.appendChild(metaData);

          // create dateUploaded div
        var dateUploaded = document.createElement('div');
        dateUploaded.className = 'dateLoaded';
        dateUploaded.innerHTML = 'Uploaded : ' + newDate;
        post.appendChild(dateUploaded);


      }

    }
  }























