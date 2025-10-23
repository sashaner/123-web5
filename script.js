const gameArea = document.getElementById("game-area");          //квадратики
const scoreDisplay = document.getElementById("score");          //рахунок гравця     з index.html
const startBtn = document.getElementById("start-btn");          // кнопка старт

let score = 0;      
let gameActive = false;  // чи активна гра
let square;
let gameTimer;          //таймер

startBtn.addEventListener("click", startGame);  //запуск функції при натисканні Sartgame

function startGame() {
  score = 0;
  scoreDisplay.textContent = "Рахунок: 0";
  startBtn.disabled = true;  //без натиснення двічі
  gameActive = true;

  spawnSquare(); //створення 1-го квадрату

  // 10 сек
  gameTimer = setTimeout(endGame, 10000); 
}

function spawnSquare() {
  if (!gameActive) return;   //умова якщо гра активна сворює квадрат

  if (square) square.remove();   //прибирання попередьного квадрату

  square = document.createElement("div");   //div з класом квадрат
  square.classList.add("square");

  const x = Math.random() * (gameArea.clientWidth - 50);  //Ккординати раптового появляння квадрату
  const y = Math.random() * (gameArea.clientHeight - 50);   //Ккординати раптового появляння квадрату

  square.style.left = `${x}px`;  //зявляння квадрату
  square.style.top = `${y}px`;       //зявляння квадрату

  square.addEventListener("click", () => {   //при натисканні
    score++; //+1 
    scoreDisplay.textContent = `Рахунок: ${score}`; //відмалювання рахунку
    spawnSquare();
  });

  gameArea.appendChild(square); // створення нового квадрату з дочірнього в батьківський
}

function endGame() {   //закінчення гри
  gameActive = false;  //вимикає гру
  square.remove();  //видаляє квадрат
  alert(`Гру закінчено! Ваш рахунок: ${score}`);  //повідомлення про закінчення гри
  startBtn.disabled = false;  //вмикання кнопки старт
}
