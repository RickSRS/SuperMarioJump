//Obtendo o elemento da imagem do mario e pipe
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds1 = document.querySelector('.clouds1');
const clouds2 = document.querySelector('.clouds2');
const clouds3 = document.querySelector('.clouds3');
const boo = document.querySelector('.boo');
const grass = document.querySelector('.grass');
const timeStart = document.getElementById('second');
const gameOver = document.getElementById('gameOver');
const pressStart = document.getElementById('pressStart');
const audioStart = new Audio('./music/audio-mario-world.mp3');
const audioGameOver = new Audio('./music/audio-gameover.mp3');
const gameOverContainer = document.querySelector('.gameover-container');

let second = 4;
let millisecond = 0;
let millisecondNone = 0;
let cron;
let stopGame = false;