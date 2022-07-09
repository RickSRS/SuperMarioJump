//Função responsavel pelo pulo
const jump = () => {
    //Adicionando a classe que vai ter a animação do pulo
   mario.classList.add('jump');

   setTimeout(() =>{
       mario.classList.remove('jump');
   }, 500);
}

function timer(){
   if((millisecondNone += 10) == 5000){
       clearInterval(cron);
       timeStart.style.display = 'none';

       mario.src = './images/mario.gif';
       mario.style.width = '100px';
       mario.style.marginLeft = '50px';
       millisecond = 0;
   }
   if((millisecond += 10) == 1000){
       second--;
       if(second == 0){
           document.getElementById('second').innerText = 'GO';
           timeStart.style.marginLeft = '245px';
       }else{
           millisecond = 0;
           document.getElementById('second').innerText = second;
       }
   }
}

function gameOverContainerAnimation(){
   setTimeout(() => {
       gameOverContainer.classList.add('fade-gameover');
   }, 3000);
}

function updateScenery(pipePosition,marioPosition,clouds1Position,clouds2Position,clouds3Position,grassPosition,booPosition){
   musicController();
   gameOverContainerAnimation();
   
   pipe.style.animation = 'none';
   pipe.style.left = `${pipePosition}px`;

   mario.style.animation = 'none';
   mario.style.bottom = `${marioPosition}px`;
   mario.src = './images/game-over.png';
   mario.style.width = '55px';
   mario.style.marginLeft = '45px';

   clouds1.style.animation = 'none';
   clouds2.style.animation = 'none';
   clouds3.style.animation = 'none';
   clouds1.style.left = `${clouds1Position}px`;
   clouds2.style.left = `${clouds2Position}px`;
   clouds3.style.left = `${clouds3Position}px`;

   grass.style.animation = 'none';
   grass.style.left = `${grassPosition}px`;

   boo.style.animation = 'none';
   boo.style.left = `${booPosition}px`;

   gameOver.innerText = 'GAMER OVER';
}

function musicController(){
   function stopAudioStart(){
       audioStart.pause();
   }stopAudioStart();

   audioGameOver.play();
   function stopAudio(){
       audioGameOver.pause();
   }setTimeout(stopAudio, 8000);
}

function booAnimationController(){
   if(millisecond == 1000){
       boo.classList.remove('boo-animation');
   }
   if((millisecond += 10) == 5000){
       millisecond = 0;
       boo.classList.add('boo-animation');
   }
}

const startGame = () => {
   if(!stopGame){
       stopGame = true;
       pressStart.style.display = 'none';
       //Chamar o contador pra informar que o jogo vai começar
       cron = setInterval(() => {timer(); }, 10);
   
       setTimeout(() => {
           const loop = setInterval(() => {     
               audioStart.play();
   
               const pipePosition = pipe.offsetLeft;
               const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
               const clouds1Position = clouds1.offsetLeft;
               const clouds2Position = clouds2.offsetLeft;
               const clouds3Position = clouds3.offsetLeft;
               const grassPosition = grass.offsetLeft;
               const booPosition = boo.offsetLeft;

               grass.classList.add('grass-animation');
               clouds1.classList.add('clouds1-animation');
               clouds2.classList.add('clouds2-animation');
               clouds3.classList.add('clouds3-animation');
               pipe.classList.add('pipe-animation');
               booAnimationController();

               if((pipePosition <= 105 && pipePosition > 0 && marioPosition < 75) /*Pipe*/
                   || (booPosition <= 105 && booPosition > 0 && marioPosition >= 30 && marioPosition <= 140) /*Boo*/)
               {
                   updateScenery(pipePosition,marioPosition,clouds1Position,clouds2Position,clouds3Position,grassPosition,booPosition);
                   
                   clearInterval(loop);
               }
           }, 10)
       }, 5000);
   }
}