const h1 = document.querySelector("div.hello h1");

function handleTitleClick(){
    h1.innerHTML = "<h6>Wow Change!!</h6>";
}

function handMouseEnter(){
    h1.style.color = "blue";
}

function handMouseLeave(){
    h1.style.color = "red";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copy!!");
}

function handleWindowOffline(){
    alert("SOS no WIFI!!");
}

function handleWindowOnline(){
    alert("ALL GOOOD!!");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handMouseEnter);
h1.addEventListener("mouseleave", handMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);