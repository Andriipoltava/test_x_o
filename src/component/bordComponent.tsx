import React, {FC, useEffect, useState} from 'react';
import Bord from "../modules/Bord";
import {Item} from "../modules/Item";

interface BoardProps {
    board: Bord
    setBoard: (board: Bord) => void
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {

    const [item, setItem] = useState<Item | null>(null);

    const clickItem = (item: Item) => {

        if (!item.getActive()) {
            item.setActive()

            setBoard(board)

            setItem(item)
            board.updateBorder(board)
        }


    }


    return (

        <div>
            <div className={'text'}>
               player   {board.step % 2 === 0 ? "x" : 'o'}
            </div>
            <div className={'board'}>


                {board.items.map((row, index) =>
                    <React.Fragment key={index}>
                        {row.map(item =>
                            <div className={'item'} key={item.key} onClick={() => {
                                clickItem(item)
                            }}> {item.game}</div>
                        )}
                    </React.Fragment>
                )}


            </div>
        </div>
    );
};

export default BoardComponent;
