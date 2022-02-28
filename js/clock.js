const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText =`${hours} : ${minutes} : ${seconds}`;   
}

getClock();
//페이지를 시작했을때 setInterval로 반복동작은 줬지만 시작(새로고침,새창이열림)
//했을때 바로 시간이 나오지 않기 때문에 getClock()을 한번 작동한뒤 반복동작시작
setInterval(getClock, 1000);
//setTimeout(getClock, 1000);

//setInterval === 밀리세컨드를 지정해주면 그 시간후에 반복동작(실시간)
//setTimeout === 밀리세컨드를 지정해주면 그 시간후에 동작 (끝)(1회성)

//padStart (원하는 만큼의 문자의 길이가아니라면 앞쪽에 지정한 문자를 채워넣음)
//padStart(2,"0") - 2는 원하는 문자길이, "0"은 문자길이가 2가되지않음 0을 넣어
//getSeconds 를 사용하게 되면 1초일 때 01 아니고 1 만 나옴
/*
1
2
3
4
5
6
7
8
9
10 이런식으로 나오는데 자리숫가 맞지않아 이쁘지도 않고 거슬림

01
02
03
04
05
06
07
08
09
10 이런식으로 나오게 하기위해 padStart를 사용하는데 이것은 String을 인지하고
변환하기에 getHours, getMinutes, getSeconds는 number이기때문에 형변환 후 
사용한것임
*/ 