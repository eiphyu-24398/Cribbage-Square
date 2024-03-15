var cards=[
    'S1','S2','S3','S4','S5','S6','S7','S8','S9','S10','S11','S12','S13',
    'C1','C2','C3','C4','C5','C6','C7','C8','C9','C10','C11','C12','C13',
    'H1','H2','H3','H4','H5','H6','H7','H8','H9','H10','H11','H12','H13',
    'D1','D2','D3','D4','D5','D6','D7','D8','D9','D10','D11','D12','D13'
]

var card1 = null;
var card2 = null;
var card3 = null;
var card4 = null;
var card5 = null;
var card6 = null;
var card7 = null;
var card8 = null;
var card9 = null;
var card10 = null;
var card11 = null;
var card12 = null;
var card13 = null;
var card14 = null;
var card15 = null;
var card16 = null;
var card17 = null;
var card18 = null;
var card19 = null;
var card20 = null;
var card21 = null;
var card22 = null;
var card23 = null;
var card24 = null;
var card25 = null;

var pickCard = null;
var choosedCardElement =null;
var p1=null;
var p2=null;

var p1_scroll = 0;
var p2_scroll = 0;

var delarOrNonDelar=null;

function shuffleCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
}

var shaffeledCards = shuffleCards(cards);
var playerOneCards=shaffeledCards.slice(0, 13);
var playerTwoCards=shaffeledCards.slice(13, 26);
card1 = shaffeledCards[44];


function popup(){
    let popup=document.getElementById("popup");
    popup.classList.add('open-popup')
}

function p_select(p){
    delarOrNonDelar=p;
    document.getElementById("two").addEventListener('click',two);
    document.getElementById('p_select').style.display = "none";
}


function delar(cards,element){
    for(var i= cards.length-1;i>0;i--){
        var card = document.createElement('div');
        card.className = 'p-card';
        card.dataset.card = cards[i];
        card.addEventListener('click',chooseCard);
        var image = document.createElement('img');
        image.src = './img/'+cards[i]+'.png';
        image.alt = cards[i];
        card.appendChild(image);
        element.appendChild(card);
    }
}

function chooseCard(){
    choosedCardElement = this;
    pickCard = this.dataset.card;
}

function turn(turn,off){
    for (let i = 0; i < turn.length; i++) {
        turn[i].addEventListener('click',chooseCard);
    }
    for (let i = 0; i < off.length; i++) {
        off[i].removeEventListener('click',chooseCard);
    }
}

function two(){
    if(choosedCardElement){
        card2 = pickCard;
        choosedCardElement.remove();
        document.getElementById('two').innerHTML = `<img src="./img/${card2}.png" alt="${card2}">`;
        document.getElementById("three").addEventListener('click',three);
        document.getElementById('two').removeEventListener("click", two);
        choosedCardElement = null;
        turn(document.getElementById('p2').children,document.getElementById('p1').children);
        let result=score(card1,card2)
        let scoreResult=result.score;
        p1_scroll=p1_scroll+scoreResult;
        scoreName(result.name);
    } 
}

function three(){
    if(choosedCardElement){
        card3 = pickCard;
        choosedCardElement.remove();
        document.getElementById('three').innerHTML = `<img src="./img/${card3}.png" alt="${card3}">`;
        document.getElementById("four").addEventListener('click',four);
        document.getElementById('three').removeEventListener("click", three);
        choosedCardElement = null;
        turn(document.getElementById('p1').children,document.getElementById('p2').children);
        let result=score(card2,card3)
        let scoreResult=result.score;
        p2_scroll=p2_scroll+scoreResult;
        scoreName(result.name);
    }
}

function four(){
    if(choosedCardElement){
        card4 = pickCard;
        choosedCardElement.remove();
        document.getElementById('four').innerHTML = `<img src="./img/${card4}.png" alt="${card4}">`;
        document.getElementById("five").addEventListener('click',five);
        document.getElementById('four').removeEventListener("click", four);
        choosedCardElement = null;
        turn(document.getElementById('p2').children,document.getElementById('p1').children);
        let result=score(card3,card4)
        let result2=score(card1,card4)
        let scoreResult=result.score;
        let scoreResult2=result2.score;
        p1_scroll=p1_scroll+scoreResult+scoreResult2;
        scoreName(...result.name,...result2.name);
    }
}

function five(){
    if(choosedCardElement){
        card5 = pickCard;
        choosedCardElement.remove();
        document.getElementById('five').innerHTML = `<img src="./img/${card5}.png" alt="${card5}">`;
        document.getElementById("six").addEventListener('click',six);
        document.getElementById('five').removeEventListener("click", five);
        choosedCardElement = null;
        turn(document.getElementById('p1').children,document.getElementById('p2').children);
        let preResult=score(card3,card4)
        let result=score(card3,card4,card5)
        let scoreResult=result.score;
        let scroeNamesList=[];
        if(check(preResult.name,result.name,preResult.score,result.score)){
            p2_scroll=p2_scroll+scoreResult;
            scroeNamesList=result.name;
        }
        scoreName(scroeNamesList);
    }
}

function six(){
    if(choosedCardElement){
    card6 = pickCard;
    choosedCardElement.remove();
    document.getElementById('six').innerHTML = `<img src="./img/${card6}.png" alt="${card6}">`;
    document.getElementById("seven").addEventListener('click',seven);
    document.getElementById('six').removeEventListener("click", six);
    choosedCardElement = null;
    turn(document.getElementById('p2').children,document.getElementById('p1').children);
    let preResult=score(card1,card2);
    let result=score(card2,card6,card1)
    let result2=score(card5,card6)
    let scoreResult=result.score;
    let scoreResult2=result2.score;
    let scroeNamesList=result2.name;
    p1_scroll=p1_scroll+scoreResult2;
    if(check(preResult.name , result.name , preResult.score , result.score)){
        p1_scroll=p1_scroll+scoreResult;
        scroeNamesList=[...scroeNamesList,...result.name]
    }
    scoreName(scroeNamesList);
}
}

function seven(){
    if(choosedCardElement){
    card7 = pickCard;
    choosedCardElement.remove();
    document.getElementById('seven').innerHTML = `<img src="./img/${card7}.png" alt="${card7}">`;
    document.getElementById("eight").addEventListener('click',eight);
    document.getElementById('seven').removeEventListener("click", seven);
    choosedCardElement = null;
    turn(document.getElementById('p1').children,document.getElementById('p2').children);
    let preResult=score(card5,card6)
    let result=score(card5,card6,card7)
    let scoreResult=result.score;
    let scroeNamesList=[];
    if(check(preResult.name , result.name , preResult.score , result.score)){
        p2_scroll=p2_scroll+scoreResult;
        scroeNamesList=result.name;
    }
    scoreName(scroeNamesList);
}
}

function eight(){
    if(choosedCardElement){
    card8 = pickCard;
    choosedCardElement.remove();
    document.getElementById('eight').innerHTML = `<img src="./img/${card8}.png" alt="${card8}">`;
    document.getElementById("nine").addEventListener('click',nine);
    document.getElementById('eight').removeEventListener("click",eight );
    choosedCardElement = null;
    turn(document.getElementById('p2').children,document.getElementById('p1').children);
    let result=score(card7,card8)
    let result2=score(card1,card8,card4)
    let preResult=score(card1,card4)
    let scoreResult=result.score;
    let scoreResult2=result2.score;
    p1_scroll=p1_scroll+scoreResult;
    let scroeNamesList=result.name;
    if(check(preResult.name , result2.name , preResult.score , result2.score)){
        p1_scroll=p1_scroll+scoreResult2;
        scroeNamesList=[...scroeNamesList,...result2.name]
    }
    scoreName(scroeNamesList);
}
}

function nine(){
    if(choosedCardElement){
    card9 = pickCard;
    choosedCardElement.remove();
    document.getElementById('nine').innerHTML = `<img src="./img/${card9}.png" alt="${card9}">`;
    document.getElementById("ten").addEventListener('click',ten);
    document.getElementById('nine').removeEventListener("click",nine );
    choosedCardElement = null;
    turn(document.getElementById('p1').children,document.getElementById('p2').children);
    let preResult=score(card7,card8)
    let preResult2=score(card3,card2)
    let result=score(card7,card8,card9)
    let result2=score(card9,card3,card2)
    let scoreResult=result.score;
    let scoreResult2=result2.score;
    let scroeNamesList=[];
    if(check(preResult.name , result.name , preResult.score , result.score)){
        p2_scroll=p2_scroll+scoreResult;
        scroeNamesList=result.name;
    }
    if(check(preResult2.name , result2.name , preResult2.score , result2.score)){
        p2_scroll=p2_scroll+scoreResult2;
        scroeNamesList=[...scroeNamesList,...result2.name]
    }
    scoreName(scroeNamesList);
}
}

function ten(){
    if(choosedCardElement){
    card10 = pickCard;
    choosedCardElement.remove();
    document.getElementById('ten').innerHTML = `<img src="./img/${card10}.png" alt="${card10}">`;
    document.getElementById("eleven").addEventListener('click',eleven);
    document.getElementById('ten').removeEventListener("click", ten);
    choosedCardElement = null;
    turn(document.getElementById('p2').children,document.getElementById('p1').children);
    let preResult=score(card7,card8,card9)
    let result=score(card10,card7,card8,card9)
    let scoreResult=result.score;
    let scroeNamesList=[];
    if(check(preResult.name , result.name , preResult.score , result.score)){
        p1_scroll=p1_scroll+scoreResult;
        scroeNamesList=result.name;
    }
    scoreName(scroeNamesList);
}
}

function eleven(){
    if(choosedCardElement){
    card11 = pickCard;
    choosedCardElement.remove();
    document.getElementById('eleven').innerHTML = `<img src="./img/${card11}.png" alt="${card11}">`;
    document.getElementById("twelve").addEventListener('click',twelve);
    document.getElementById('eleven').removeEventListener("click",eleven );
    choosedCardElement = null;
    turn(document.getElementById('p1').children,document.getElementById('p2').children);
    let result=score(card10,card11)
    let result2=score(card1,card11,card2,card6)
    let preResult=score(card1,card2,card6)
    let scoreResult=result.score;
    let scoreResult2=result2.score;
    p2_scroll=p2_scroll+scoreResult;
    let scroeNamesList=result.name;
    if(check(preResult.name , result2.name , preResult.score , result2.score)){
        p2_scroll=p2_scroll+scoreResult2;
        scroeNamesList=[...scroeNamesList,...result2.name]
    }
    scoreName(scroeNamesList);
}
}

function twelve(){
    if(choosedCardElement){
    card12 = pickCard;
    choosedCardElement.remove();
    document.getElementById('twelve').innerHTML = `<img src="./img/${card12}.png" alt="${card12}">`;
    document.getElementById("thirteen").addEventListener('click',thirteen);
    document.getElementById('twelve').removeEventListener("click", twelve);
    choosedCardElement = null;
    turn(document.getElementById('p2').children,document.getElementById('p1').children);
    let result=score(card11,card12,card10)
    let result2=score(card3,card4,card5,card12)
    let preResult=score(card10,card11)
    let preResult2=score(card3,card4,card5)
    let scoreResult=result.score;
    let scoreResult2=result2.score;
    let scroeNamesList=[];
    if(check(preResult.name , result.name , preResult.score , result.score)){
        p1_scroll=p1_scroll+scoreResult;
        scroeNamesList=result.name;
    }
    if(check(preResult2.name , result2.name , preResult2.score , result2.score)){
        p1_scroll=p1_scroll+scoreResult2;
        scroeNamesList=[...scroeNamesList,...result2.name]
    }
    scoreName(scroeNamesList);
}
}

function thirteen(){
    if(choosedCardElement){
    card13 = pickCard;
    choosedCardElement.remove();
    document.getElementById('thirteen').innerHTML = `<img src="./img/${card13}.png" alt="${card13}">`;
    document.getElementById("fourteen").addEventListener('click',fourteen);
    document.getElementById('thirteen').removeEventListener("click", thirteen);
    choosedCardElement = null;
    turn(document.getElementById('p1').children,document.getElementById('p2').children);
    let result=score(card11,card12,card10,card13)
    let preResult=score(card10,card11,card12)
    let scoreResult=result.score;
    let scroeNamesList=[];
    if(check(preResult.name , result.name , preResult.score , result.score)){
        p2_scroll=p2_scroll+scoreResult;
        scroeNamesList=result.name;
    }
    scoreName(scroeNamesList);
}
}

function fourteen(){
    if(choosedCardElement){
    card14 = pickCard;
    choosedCardElement.remove();
    document.getElementById('fourteen').innerHTML = `<img src="./img/${card14}.png" alt="${card14}">`;
    document.getElementById("fifteen").addEventListener('click',fifteen);
    document.getElementById('fourteen').removeEventListener("click", fourteen);
    choosedCardElement = null;
    turn(document.getElementById('p2').children,document.getElementById('p1').children);
    let result=score(card13,card14)
    let result2=score(card2,card3,card9,card14)
    let preResult=score(card2,card3,card9)
    let scoreResult=result.score;
    let scoreResult2=result2.score;
    p1_scroll=p1_scroll+scoreResult;
    let scroeNamesList=result.name;
    if(check(preResult.name , result2.name , preResult.score , result2.score)){
        p1_scroll=p1_scroll+scoreResult2;
        scroeNamesList=[...scroeNamesList,...result2.name];
    }
    scoreName(scroeNamesList);
}
}

function fifteen(){
    if(choosedCardElement){
    card15 = pickCard;
    choosedCardElement.remove();
    document.getElementById('fifteen').innerHTML = `<img src="./img/${card15}.png" alt="${card15}">`;
    document.getElementById("sixteen").addEventListener('click',sixteen);
    document.getElementById('fifteen').removeEventListener("click", fifteen);
    choosedCardElement = null;
    turn(document.getElementById('p1').children,document.getElementById('p2').children);
    let result=score(card13,card14,card15)
    let result2=score(card1,card4,card8,card15)
    let preResult=score(card13,card14)
    let preResult2=score(card1,card4,card8)
    let scoreResult=result.score;
    let scoreResult2=result2.score;
    let scroeNamesList=[];
    if(check(preResult.name , result.name , preResult.score , result.score)){
        p2_scroll=p2_scroll+scoreResult;
        scroeNamesList=result.name;
    }
    if(check(preResult2.name , result2.name , preResult2.score , result2.score)){
        p2_scroll=p2_scroll+scoreResult2;
        scroeNamesList=[...scroeNamesList,...result2.name]
    }
    scoreName(scroeNamesList);
}
}

function sixteen(){
    if(choosedCardElement){
    card16 = pickCard;
    choosedCardElement.remove();
    document.getElementById('sixteen').innerHTML = `<img src="./img/${card16}.png" alt="${card16}">`;
    document.getElementById("seventeen").addEventListener('click',seventeen);
    document.getElementById('sixteen').removeEventListener("click", sixteen);
    choosedCardElement = null;
    turn(document.getElementById('p2').children,document.getElementById('p1').children);
    let result=score(card13,card14,card15,card16)
    let result2=score(card5,card6,card7,card16)
    let preResult=score(card13,card14,card15)
    let preResult2=score(card5,card6,card7)
    let scoreResult=result.score;
    let scoreResult2=result2.score;
    let scroeNamesList=[];
    if(check(preResult.name , result.name , preResult.score , result.score)){
        p1_scroll=p1_scroll+scoreResult;
        scroeNamesList=result.name;
    }
    if(check(preResult2.name , result2.name , preResult2.score , result2.score)){
        p1_scroll=p1_scroll+scoreResult2;
        scroeNamesList=[...scroeNamesList,...result2.name]
    }
    scoreName(scroeNamesList);
}
}

function seventeen(){
    if(choosedCardElement){
    card17 = pickCard;
    choosedCardElement.remove();
    document.getElementById('seventeen').innerHTML = `<img src="./img/${card17}.png" alt="${card17}">`;
    document.getElementById("eighteen").addEventListener('click',eighteen);
    document.getElementById('seventeen').removeEventListener("click", seventeen);
    choosedCardElement = null;
    turn(document.getElementById('p1').children,document.getElementById('p2').children);
    let result=score(card13,card14,card15,card16,card17)
    let preResult=score(card13,card14,card15,card16)
    let scoreResult=result.score;
    let scroeNamesList=[];
    if(check(preResult.name , result.name , preResult.score , result.score)){
        p2_scroll=p2_scroll+scoreResult;
        scroeNamesList=result.name;
    }
    scoreName(scroeNamesList);
}
}

function eighteen(){
    if(choosedCardElement){
    card18 = pickCard;
    choosedCardElement.remove();
    document.getElementById('eighteen').innerHTML = `<img src="./img/${card18}.png" alt="${card18}">`;
    document.getElementById("nineteen").addEventListener('click',nineteen);
    document.getElementById('eighteen').removeEventListener("click", eighteen);
    choosedCardElement = null;
    turn(document.getElementById('p2').children,document.getElementById('p1').children);
    let result=score(card17,card18)
    let result2=score(card18,card3,card4,card5,card12)
    let preResult=score(card3,card4,card5,card12)
    let scoreResult=result.score
    let scoreResult2=result2.score;
    p1_scroll=p1_scroll+scoreResult;
    let scroeNamesList=result.name;
    if(check(preResult.name , result2.name , preResult.score , result2.score)){
        p1_scroll=p1_scroll+scoreResult2;
        scroeNamesList=[...scroeNamesList,...result2.name]
    }
    scoreName(scroeNamesList);
}
}

function nineteen(){
    if(choosedCardElement){
    card19 = pickCard;
    choosedCardElement.remove();
    document.getElementById('nineteen').innerHTML = `<img src="./img/${card19}.png" alt="${card19}">`;
    document.getElementById("twenty").addEventListener('click',twenty);
    document.getElementById('nineteen').removeEventListener("click", nineteen);
    choosedCardElement = null;
    turn(document.getElementById('p1').children,document.getElementById('p2').children);
    let result=score(card17,card18,card19)
    let result2=score(card6,card1,card2,card11,card19)
    let preResult=score(card17,card18)
    let preResult2=score(card1,card2,card6,card11)
    let scoreResult=result.score;
    let scoreResult2=result2.score;
    let scroeNamesList=[];
    if(check(preResult.name , result.name , preResult.score , result.score)){
        p2_scroll=p2_scroll+scoreResult;
        scroeNamesList=result.name;
    }
    if(check(preResult2.name , result2.name , preResult2.score , result2.score)){
        p2_scroll=p2_scroll+scoreResult2;
        scroeNamesList=[...scroeNamesList,...result2.name]
    }
    scoreName(scroeNamesList);
}
}

function twenty(){
    if(choosedCardElement){
    card20 = pickCard;
    choosedCardElement.remove();
    document.getElementById('twenty').innerHTML = `<img src="./img/${card20}.png" alt="${card20}">`;
    document.getElementById("twentyone").addEventListener('click',twentyone);
    document.getElementById('twenty').removeEventListener("click", twenty);
    choosedCardElement = null;
    turn(document.getElementById('p2').children,document.getElementById('p1').children);
    let result=score(card17,card18,card19,card20)
    let result2=score(card7,card8,card9,card10,card20)
    let preResult=score(card17,card18,card19)
    let preResult2=score(card7,card8,card9,card10)
    let scoreResult=result.score;
    let scoreResult2=result2.score;
    let scroeNamesList=[]
    if(check(preResult.name , result.name , preResult.score , result.score)){
        p1_scroll=p1_scroll+scoreResult;
        scroeNamesList=result.name;
    }
    if(check(preResult2.name , result2.name , preResult2.score , result2.score)){
        p1_scroll=p1_scroll+scoreResult2;
        scroeNamesList=[...scroeNamesList,...result2.name];
    }
    scoreName(scroeNamesList);
}
}

function twentyone(){
    if(choosedCardElement){
    card21 = pickCard;
    choosedCardElement.remove();
    document.getElementById('twentyone').innerHTML = `<img src="./img/${card21}.png" alt="${card21}">`;
    document.getElementById("twentytwo").addEventListener('click',twentytwo);
    document.getElementById('twentyone').removeEventListener("click", twentyone);
    choosedCardElement = null;
    turn(document.getElementById('p1').children,document.getElementById('p2').children);
    let result=score(card17,card18,card19,card20,card21)
    let preResult=score(card17,card18,card19,card20)
    let scoreResult=result.score
    let scroeNamesList=[]
    if(check(preResult.name , result.name , preResult.score , result.score)){
        p2_scroll=p2_scroll+scoreResult;
        scroeNamesList=result.name;
    }
    scoreName(scroeNamesList);
}
}

function twentytwo(){
    if(choosedCardElement){
    card22 = pickCard;
    choosedCardElement.remove();
    document.getElementById('twentytwo').innerHTML = `<img src="./img/${card22}.png" alt="${card22}">`;
    document.getElementById("twentythree").addEventListener('click',twentythree);
    document.getElementById('twentytwo').removeEventListener("click", twentytwo);
    choosedCardElement = null;
    turn(document.getElementById('p2').children,document.getElementById('p1').children);
    let result=score(card21,card22)
    let result2=score(card5,card6,card7,card16,card22)
    let preResult=score(card5,card6,card7,card16)
    let scoreResult=result.score;
    let scoreResult2=result2.score;
    let scroeNamesList=result.name;
    p1_scroll=p1_scroll+scoreResult;
    if(check(preResult.name , result2.name , preResult.score , result2.score)){
        p1_scroll=p1_scroll+scoreResult2;
        scroeNamesList=[...scroeNamesList,...result2.name]
    }
    scoreName(scroeNamesList);
}
}

function twentythree(){
    if(choosedCardElement){
    card23 = pickCard;
    choosedCardElement.remove();
    document.getElementById('twentythree').innerHTML = `<img src="./img/${card7}.png" alt="${card23}">`;
    document.getElementById("twentyfour").addEventListener('click',twentyfour);
    document.getElementById('twentythree').removeEventListener("click", twentythree);
    choosedCardElement = null;
    turn(document.getElementById('p1').children,document.getElementById('p2').children);
    let result=score(card21,card22,card23)
    let result2=score(card1,card4,card8,card15,card23)
    let preResult=score(card21,card22)
    let preResult2=score(card1,card4,card8,card15)
    let scoreResult=result.score;
    let scoreResult2=result2.score;
    let scroeNamesList=[]
    if(check(preResult.name , result.name , preResult.score , result.score)){
        p2_scroll=p2_scroll+scoreResult;
        scroeNamesList=result.name;
    }
    if(check(preResult2.name , result2.name , preResult2.score , result2.score)){
        p2_scroll=p2_scroll+scoreResult2;
        scroeNamesList=[...scroeNamesList,...result2.name]
    }
    scoreName(scroeNamesList);
}
}

function twentyfour(){
    if(choosedCardElement){
    card24 = pickCard;
    choosedCardElement.remove();
    document.getElementById('twentyfour').innerHTML = `<img src="./img/${card24}.png" alt="${card24}">`;
    document.getElementById("twentyfive").addEventListener('click',twentyfive);
    document.getElementById('twentyfour').removeEventListener("click", twentyfour);
    choosedCardElement = null;
    turn(document.getElementById('p2').children,document.getElementById('p1').children);
    let result=score(card21,card22,card23,card24)
    let result2=score(card2,card3,card9,card14,card24)
    let preResult=score(card21,card22,card23)
    let preResult2=score(card2,card3,card9,card14)
    let scoreResult=result.score;
    let scoreResult2=result2.score;
    let scroeNamesList=[]
    if(check(preResult.name , result.name , preResult.score , result.score)){
        p1_scroll=p1_scroll+scoreResult;
        scroeNamesList=result.name;
    }
    if(check(preResult2.name , result2.name , preResult2.score , result2.score)){
        p1_scroll=p1_scroll+scoreResult2;
        scroeNamesList=[...scroeNamesList,...result2.name]
    }
    scoreName(scroeNamesList);
}
}

function twentyfive(){
    if(choosedCardElement){
    card25 = pickCard;
    choosedCardElement.remove();
    document.getElementById('twentyfive').innerHTML = `<img src="./img/${card25}.png" alt="${card25}">`;
    document.getElementById('twentyfive').removeEventListener("click", twentyfive);
    choosedCardElement = null;
    turn(document.getElementById('p1').children,document.getElementById('p2').children);
    let result=score(card21,card22,card23,card24,card25)
    let result2=score(card10,card11,card12,card13,card25)
    let preResult=score(card21,card22,card23,card24)
    let preResult2=score(card10,card11,card12,card13)
    let scoreResult=result.score;
    let scoreResult2=result2.score;
    let scroeNamesList=[];
    if(check(preResult.name , result.name , preResult.score , result.score)){
        p2_scroll=p2_scroll+scoreResult;
        scroeNamesList=result.name;
    }
    if(check(preResult2.name , result2.name , preResult2.score , result2.score)){
        p2_scroll=p2_scroll+scoreResult2;
        scroeNamesList=[...scroeNamesList,...result2.name]
    }
    scoreName(scroeNamesList);
    document.getElementById('p1_final').innerHTML="Dealer Score :"+p1_scroll;
    document.getElementById('p2_final').innerHTML="Non-Dealer Score :"+p2_scroll;
    let winner=document.getElementById('winner');
    if(p1_scroll>p2_scroll){
        winner.innerHTML ="Dealer Win"
    }else{
        winner.innerHTML ="Non-Dealer Win"
    }
    popup();
}
}