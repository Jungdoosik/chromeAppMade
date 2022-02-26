const title = document.querySelector("div.hello h1");

function handleTitleClick(){
    title.innerHTML = "<h6>Wow Change!!</h6>";
}

function handMouseEnter(){
    title.style.color = "blue";
}

function handMouseLeave(){
    title.style.color = "red";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handMouseEnter);
title.addEventListener("mouseleave", handMouseLeave);