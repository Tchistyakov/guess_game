import "./App.css";
import { useState } from "react";
let success = false;

// получение случайного числа
let number = parseInt(Math.random()*100) 


function App() {
  const [num, setNum] = useState(number);
  const [userNum, setUserNum] = useState();
  let [count, setCount] = useState(1);
  let [prompt, setPromt] = useState("—");
  let [games, setGames] = useState(0);

// юзер пробует угадать число
  function reconciliation() {
    if (userNum == num) {
      success = true;
    } else if (userNum > num) {
      setCount(count + 1);
      setPromt("Меньше");
    } else {
      setCount(count + 1);
      setPromt("Больше");
    }
    setUserNum("");
  }

// начать игру сначала
  function startGame() {
    setNum(parseInt(Math.random()*100))
    setGames(games + 1);
    setUserNum();
    setCount(1);
    setPromt("—");
    success = false;
  }

  return (
    <div className="App">
      <div className="frame">
        <div>
          <h1 className="h1 text text_bold">Угадай число</h1>
          <h2 className="h2 text text_normal">
            Я загадал число от 1 до 100, ты должен угадать это число
          </h2>
        </div>
        <div>
          <form className={success == false ? "form" : "form hide"}>
            <input
              type="text"
              className="text_inpt input display"
              value={userNum}
              onChange={(e) => setUserNum(e.target.value)}
            ></input>
            <button
              type="button"
              className="text_inpt btn btn-guess"
              disabled={userNum == null && userNum <= 0}
              onClick={reconciliation}
            >
              Угадать
            </button>
          </form>
          <h3 className={success == false ? "hide" : "h3 text text_bold success"}>
            Угадал за {count} ходов
          </h3>
        </div>
        <div>
          <h3 className={success == false ? "h3 text" : "hide"}>{prompt}</h3>
          <button
            className={success == false ? "hide" : "text_inpt btn btn_start"}
            onClick={startGame}
          >
            Начать сначала
          </button>
        </div>
        <div>
          <h4 className="h4 text text_normal">Сыграно игр: <b>{games}</b></h4>
        </div>
      </div>
    </div>
  );
}

export default App;
