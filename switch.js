

document.getElementById('iconToggle').addEventListener('change', function() {
    var moonIcon = document.getElementById('moonIcon');
   var img = document.getElementById('imgo');

    if (this.checked) {

        img.style.display = 'none';
      moonIcon.classList.remove('fa-moon');
      moonIcon.classList.add('fa-sun'); 
    } else {
    
      moonIcon.classList.remove('fa-sun');
      moonIcon.classList.add('fa-moon');
    }
    
    const iconElements = document.getElementsByClassName('icon');
    for (var i = 0; i < iconElements.length; i++) {
      iconElements[i].style.color = this.checked ? 'black' : '';
    }
    var rootStyle = document.documentElement.style;
    rootStyle.setProperty('--main-color', this.checked ? 'black' : '');
    rootStyle.setProperty('--background-color', this.checked ? 'white' : '');
    rootStyle.setProperty('--logo-color', this.checked ? 'black' : '');
   rootStyle.setProperty('--border-color', this.checked ? 'red' : '');
    rootStyle.getPropertyPriority
  }
  );

  document.getElementById('make').addEventListener('mouseenter', function() {
    document.getElementById('st').classList.add('loi');
  
  });
  document.getElementById('make').addEventListener('mouseleave', function() {
  document.getElementById('st').classList.remove('loi');
  console.log("exit")
});
// for the project next prev buttons
   var i = 0;
  
  const backwards = document.getElementById('b1');
  const cards = document.getElementsByClassName('project-card');

  if(i == 0){
    backwards.style.display = 'none';
  }
  const forwards = document.getElementById('b2');
  document.getElementById('b2').addEventListener('click', function() {
    if(i == cards.length-2){
      forwards.style.display = 'none';
    }
    if(i+1!=0){
    backwards.style.display = 'flex';
  }
    
    cards[i+1].style.display = 'flex';
    cards[i+1].classList.add('anim');
    

    i++;
  });
  //These are the buttons b1 and b2 which have eventlisteners added to them
  document.getElementById('b1').addEventListener('click', function() {
    if(i == cards.length-1 && i!= 0){
    forwards.style.display = 'flex';
    }
    if(i == 1){
      backwards.style.display = 'none';
    }
    cards[i].style.display = 'none';
 i--;
  });
  let keydownHandler = function(event) {
    if (event.key === "ArrowRight") {
      document.getElementById('b2').click();
    }
    else if(event.key === "ArrowLeft"){
      if(i != 0){
        document.getElementById('b1').click();  
      }
    }
  };
  
  document.getElementById('PASS').addEventListener('mouseenter', function() {
    document.body.addEventListener('keydown', keydownHandler);
  });
  
  document.getElementById('PASS').addEventListener('mouseleave', function() {
    document.body.removeEventListener('keydown', keydownHandler);
  });

  let startX, startY, endX, endY;
const targetDiv = document.getElementById('PASS');

targetDiv.addEventListener('mousedown', function(event) {
  const rect = targetDiv.getBoundingClientRect();
  startX = event.clientX - rect.left;
  startY = event.clientY - rect.top;
});

targetDiv.addEventListener('mouseup', function(event) {
  const rect = targetDiv.getBoundingClientRect();
  endX = event.clientX - rect.left;
  endY = event.clientY - rect.top;
  
  let deltaX = endX - startX;
  let deltaY = endY - startY;
  
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX > 0) {
      document.getElementById('b2').click();
    } else {
      if(i != 0){
        document.getElementById('b1').click();  
      }
    }
  } 
});
const target1Div = document.getElementById('PASS');

let start1X, start1Y;

target1Div.addEventListener('touchstart', function(event) {
  const touch = event.touches[0];
  start1X = touch.clientX;
  start1Y = touch.clientY;
});

targetDiv.addEventListener('touchend', function(event) {
  const touch = event.changedTouches[0];
  const endX = touch.clientX;
  const endY = touch.clientY;

  const deltaX = endX - start1X;
  const deltaY = endY - start1Y;

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX > 0) {
      document.getElementById('b2').click();
    } else { 
      if (i != 0) {
        document.getElementById('b1').click();  
      }
    }
  }
});

