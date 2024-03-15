delar(playerOneCards,document.getElementById('p1'));
delar(playerTwoCards,document.getElementById('p2'));


document.getElementById('one').innerHTML = `<img src="./img/${card1}.png" alt="${card1}">`;


turn(document.getElementById('p1').children,document.getElementById('p2').children);   
