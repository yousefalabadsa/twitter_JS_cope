//Creat Array
var dataArray = [];

window.onscroll =()=>{
    myFunction()
};

// Get the navbar
var navbar = document.getElementById("topbar");
var sticky = navbar.offsetTop;

// Crate some nessisary Function
function myFunction() {
if (window.pageYOffset >= sticky) {
navbar.classList.add("sticky");
mainTweet = document.querySelector('#mainPost')
mainTweet.classList.add("padding_top15");
} else {
navbar.classList.remove("sticky");
mainTweet.classList.remove("padding_top15")
}
}

// Creat the tweet div and the tweet 

const tweetGenerator = (userName , tweet) => {
    var tweetDiv = document.createElement('div');
    var postText = document.createElement('p');
    postText.innerHTML=`<strong>${userName}</strong>:<p>${tweet}</p>`;
    tweetDiv.appendChild(postText);
    var likeBtn = document.createElement("div");
    likeBtn.classList.add('likeBtn');
    likeBtn.innerHTML=`<img src="img/love-png-5.png" width="100%" height=100%>`;
    likeBtn.addEventListener("click",like);
    tweetDiv.appendChild(likeBtn);
    var shareBtn = document.createElement("div");
    shareBtn.classList.add('shareBtn');
    shareBtn.innerHTML=`<img src="img/139784.png" width="100%" height="100%">`;
    shareBtn.addEventListener("click",share);
    tweetDiv.appendChild(shareBtn);
    tweetDiv.classList.add('post');
    var postOb = {userName:`${userName}`, tweet:`${tweet}`, ip:`${count}`};
    count++;
    console.log(dataArray);
    console.log(postOb);
    if (newsFeed.hasChildNodes()){
        newsFeed.insertBefore(tweetDiv,newsFeed.childNodes[0]);
        dataArray.push(postOb);
    }else {
        newsFeed.appendChild(tweetDiv);
    };
    closeForm();
}
// Count the number of tweets

var count = 0;

// Open & close the pop-up window

function openForm() {
    document.getElementById("postForm").style.display = "block";
}

var newsFeed = document.querySelector('.newsFeed');

function closeForm() {
    document.getElementById("postForm").style.display = "none";
    document.getElementById("tweet").value = "";

}

// Creating the like and retweet Functions

like= (e)=>{
    e.currentTarget.parentElement.classList.toggle("liked");
}

share = (e) => {
    var userName = e.currentTarget.parentElement.firstChild.firstChild.innerHTML;
    var tweet = e.currentTarget.parentElement.firstChild.childNodes[2].innerHTML;
    tweetGenerator(userName,tweet);
}

// Adding the like and retweet Functions and submitting the tweet

var submitBtn = document.querySelector('.submit');
submitBtn.addEventListener("click", ()=>{
    var userName = "Yousef";
    var tweet = document.getElementById("tweet").value;
    tweetGenerator(userName,tweet);
});

var mainSubBtn = document.querySelector('#Tweet_button');
mainSubBtn.addEventListener("click", ()=>{
    var userName = "Yousef";
    var mainPost = document.getElementById("mainPost").value;
    document.getElementById("mainPost").value = "";
    tweetGenerator(userName,mainPost);
});
