var box = new Array(9);

  function checkEnd() {
  if (box[0]==='human' && box[1]==='human' && box[2]==='human')
    { document.getElementById('line').classList.add('line_1');
      return 1
    };
  if (box[3]==='human' && box[4]==='human' && box[5]==='human')
    { document.getElementById('line').classList.add('line_2');
      return 1
    };
  if (box[6]==='human' && box[7]==='human' && box[8]==='human')
    { document.getElementById('line').classList.add('line_3');
      return 1
    };
  if (box[0]==='human' && box[3]==='human' && box[6]==='human')
    { document.getElementById('line').classList.add('line_4');
      return 1
    };
  if (box[1]==='human' && box[4]==='human' && box[7]==='human')
    { document.getElementById('line').classList.add('line_5');
      return 1
    };
  if (box[2]==='human' && box[5]==='human' && box[8]==='human')
    { document.getElementById('line').classList.add('line_6');
      return 1
    };
  if (box[0]==='human' && box[4]==='human' && box[8]==='human')
    { document.getElementById('line').classList.add('line_7');
      return 1
    };
  if (box[2]==='human' && box[4]==='human' && box[6]==='human')
    { document.getElementById('line').classList.add('line_8');
      return 1
    };

  if (box[0]==='ai' && box[1]==='ai' && box[2]==='ai') {
    document.getElementById('line').classList.add('line_1');
    return 2
  };
  if (box[3]==='ai' && box[4]==='ai' && box[5]==='ai') {
    document.getElementById('line').classList.add('line_2');
    return 2
  };
  if (box[6]==='ai' && box[7]==='ai' && box[8]==='ai'){
    document.getElementById('line').classList.add('line_3');
    return 2
  };
  if (box[0]==='ai' && box[3]==='ai' && box[6]==='ai') {
    document.getElementById('line').classList.add('line_4');
    return 2
  };
  if (box[1]==='ai' && box[4]==='ai' && box[7]==='ai') {
    document.getElementById('line').classList.add('line_5');
    return 2
  };
  if (box[2]==='ai' && box[5]==='ai' && box[8]==='ai') {
    document.getElementById('line').classList.add('line_6');
    return 2
  };
  if (box[0]==='ai' && box[4]==='ai' && box[8]==='ai') {
    document.getElementById('line').classList.add('line_7');
    return 2
  };
  if (box[2]==='ai' && box[4]==='ai' && box[6]==='ai') {
    document.getElementById('line').classList.add('line_8');
    return 2
  };
  if (box[0] && box[1] && box[2] && box[3] && box[4] && box[5] && box[6] && box[7] && box[8]) return 3;
}

function ai() {
  var id = Math.floor(Math.random() * 9);//Return a random number between 1 and 9
  if (box[id]) {
    ai();
  }
  else {
      addicon(id, 'ai');
  }
}

function addicon(id, person) {
  if (box[id]) return false;
  box[id] = person;

  document.getElementById(id).className = 'box ' + person;

  if (checkEnd() != 1 && checkEnd() != 2 && checkEnd() != 3){
      if((person === 'human')){
        ai()
      }
    }
    else{
        if (checkEnd() == 1) {
          endMassegeWinHuman();
        } else if (checkEnd() == 2) {
          endMassegeWinAi();
        } else if (checkEnd() == 3) {
          endMassegeDraw();
        }
    }
  }

  function endMassegeWinHuman() {
    document.getElementById('end_massegeWinHuman').classList.add('vis');
    document.getElementById('overlay').classList.add('vis');
  }
  function endMassegeWinAi() {
    document.getElementById('end_massegeWinAi').classList.add('vis');
    document.getElementById('overlay').classList.add('vis');
  }
  function endMassegeDraw() {
    document.getElementById('end_massegeDraw').classList.add('vis');
    document.getElementById('overlay').classList.add('vis');
  }

function reload() {
  location.reload();
}
