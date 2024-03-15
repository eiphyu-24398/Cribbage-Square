function score(...checkCards) {
  var name=[];
  var scorevalue=0;
  let cards = checkCards.map(card => ({
      rank: card.substring(1),
      suit: card.substring(0, 1)
  }));

  cards.sort((a, b) => a.rank - b.rank);

  let pair1 = {};
  let flush = {};
  let doublePairRoyal =0
  cards.forEach(card => {
      pair1[card.rank] = (pair1[card.rank] || 0) + 1;
      flush[card.suit] = (flush[card.suit] || 0) + 1;
  });
 
  for (const key in pair1) {
      if (Object.hasOwnProperty.call(pair1, key)) {
        const value = pair1[key];
        if(value==2){
          name.push("pair")
          doublePairRoyal++;
          scorevalue=scorevalue+2;
        }

        if(value==3){
          name.push('prail')
          doublePairRoyal=doublePairRoyal+2;
          scorevalue=scorevalue+6;
        }

        if(value==4){
          name.push("pair")
          doublePairRoyal=doublePairRoyal++;
          scorevalue=scorevalue+4;
        }
      }
  }
  for (const key in flush) {
      if (Object.hasOwnProperty.call(flush, key)) {
        const value = flush[key];
        if(value>2){
          name.push('flush') 
          scorevalue=scorevalue+value;
        }
      }
  }
  let sequence = 1;
  let preSeq = null;
  let seqValue =0;
  let seqCards =[];
  let preC=null;
  for (let i = 0; i < cards.length; i++) {
    if(preC !== cards[i].rank)seqCards.push(cards[i])
    preC=cards[i].rank
  }
  for (let i = 0; i < seqCards.length; i++) {
    if(preSeq){
      if(seqCards[i].rank-preSeq ===1){
        sequence++;
      }else if(sequence > 2){
        seqValue=sequence;
        sequence=1;
      }else{
        sequence=1;
      }
    }
    preSeq=seqCards[i].rank;
  }
  if(seqValue>=3){
    name.push("sequence")
    scorevalue=scorevalue+seqValue
  }
  if(sequence>2){
    name.push("sequence")
    scorevalue=scorevalue+sequence
  }

  if(doublePairRoyal==3){
      name.push("royal pair")
      scorevalue=12;
  }
  return {name:name,score:scorevalue};
}


function scoreName(...names){
  let nameResult={};
  let scoreName=[];
  names.forEach(e => {
    nameResult[e] = (nameResult[e] || 0) + 1;
  });
  for (const key in nameResult) {
    if (Object.hasOwnProperty.call(nameResult, key)) {
      if(nameResult[key]>1){
        scoreName.push(nameResult[key]+" "+key)
      }else{
        scoreName.push(' '+key);
      }
    }
  }
  console.log(scoreName)
  if(scoreName.length>0){
    document.getElementById('scoreName').innerHTML=scoreName;
  }
}

function check(name1,name2,score1,score2){
  if(!arraysEqual(name1, name2) && score1 !== score2){
      return true;
  }
  if(arraysEqual(name1, name2) && score1 !== score2){
      return true;
  }
  if(!arraysEqual(name1, name2) && score1 === score2){
      return true;
  }
  return false;
}
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
      return false;
  }
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
          return false;
      }
  }
  return true;
}