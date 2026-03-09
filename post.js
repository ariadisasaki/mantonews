const API = "https://mantonews.ariadishut.workers.dev/post?id=";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function loadPost(){

const res = await fetch(API + id);
const data = await res.json();

document.getElementById("title").innerText = data.title;
document.getElementById("content").innerHTML = data.content;
document.getElementById("image").src = data.image;

}

loadPost();
