const quotes = [
    {
        quote:"삶이 있는 한 희망은 있다.",
        author:"키케로",
    },
    {
        quote:"산다는것 그것은 치열한 전투이다.",
        author:"로망로랑",
    },
    {
        quote:"하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author:"사무엘존슨",
    },
    {
        quote:"언제나 현재에 집중할수 있다면 행복할것이다.",
        author:"파울로 코엘료",
    },
    {
        quote:"진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
        author:"찰리 채플린",
    },
    {
        quote:"직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
        author:"엘버트 허버드",
    },
    {
        quote:"신은 용기있는자를 결코 버리지 않는다.",
        author:"켄러",
    },
    {
        quote:"피할수 없으면 즐겨라",
        author:"로버트 엘리엇",
    },
    {
        quote:"행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다.",
        author:"헬렌켈러",
    },
    {
        quote:"단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
        author:"이드리스 샤흐",
    },
    {
        quote:"먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
        author:"엘사 맥스웰",
    },
    {
        quote:"먼저핀꽃은 먼저진다  남보다 먼저 공을 세우려고 조급히 서둘것이 아니다.",
        author:"채근담",
    },
    {
        quote:"행복한 삶을 살기위해 필요한 것은 거의 없다.",
        author:"마르쿠스 아우렐리우스 안토니우스",
    },
    {
        quote:"절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
        author:"L.론허바드",
    },
    {
        quote:"어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다.",
        author:"제임스 오펜하임",
    },
    {
        quote:"너무 소심하고 까다롭게 자신의 행동을 고민하지 말라. 모든 인생은 실험이다. 더많이 실험할수록 더나아진다.",
        author:"랄프 왈도 에머슨",
    },
    {
        quote:"한번의 실패와 영원한 실패를 혼동하지 마라.",
        author:"F.스콧 핏제랄드",
    },
    {
        quote:"행복은 습관이다,그것을 몸에 지니라.",
        author:"허버드",
    },
    {
        quote:"자신감 있는 표정을 지으면 자신감이 생긴다.",
        author:"찰스다윈",
    },
    {
        quote:"1퍼센트의 가능성, 그것이 나의 길이다.",
        author:"나폴레옹",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//const a = Math.floor(Math.random() * 20);
/*
이렇게 하면 랜덤숫자가 x.2109490238509, x.385589830349,x.2352390859023
처럼 소수점까지 나오게됨 (그소수점은 필요가 없기때문에 잘라버리는 작업을 할꺼임)

1. Math.round(1.3) === 1이라는 값이 나옴(이것은 자르는것이아닌 반올림을함)
   Math.round(1.6) === 2
   
2. Math.ceil() 1.01이라는 값이라고 할때 소수점 밑 숫자가 0이 아닌이상 무조건 올림
   Math.ceil(1.000002) 일때 값은 2 1.000000이라면 1
   
3. Math.floor() floor는 ceil과 반대 무조건 내림
*/
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
/*
Math.random() 랜덤수를 구함 명언을 보여주고 싶지만 명언의 갯수가
줄거나 많아질때마다 몇개인지를 세어서 값을 구하기엔 프로그래머로써 너무 귀찬
quotes.length(총 몇개인지)를 곱해주면 됨
*/
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;