import React, {useEffect, useState} from 'react';
import './App.css';
import BoardComponent from "./component/bordComponent";
import Bord from "./modules/Bord";

function App() {
    const [board, setBoard] = useState(new Bord())
    const [reset, setReset] = useState(true)

    useEffect(() => {
        const board = new Bord()
        board.initItem()
        setBoard(board)
        console.log(board)
    }, [reset])

    const resetGame = () => {
        setReset(!reset)
    }
    return (
        <div className="App">

            <BoardComponent board={board} setBoard={setBoard}/>
            <div className={'text'} onClick={resetGame}>reset game</div>
        </div>
    );
}

export default App;
