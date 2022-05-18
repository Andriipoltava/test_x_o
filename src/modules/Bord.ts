import {Item} from "./Item";

export default class Bord {
    items: Item[][] = []
    step: number = 0
    round: string | null

    constructor() {
        this.round = this.step % 2 === 0 ? "x" : 'o'
    }

    public initItem() {
        let count = 0
        for (let i = 0; i < 3; i++) {
            const row: Item[] = []
            for (let j = 0; j < 3; j++) {
                row.push(new Item(this, i, j, count))
                count++

            }
            this.items.push(row)
        }
    }

    public getCopyBoard(): Bord {
        const newBoard = new Bord()
        newBoard.items = this.items;
        return newBoard
    }

    public getCell(x: number, y: number) {
        return this.items[y][x]
    }
    updateBorder(target: Bord){
        target.step++
        if( target.gameWin(target)){
            alert('Win : ' + target.round)
        }
    }

    gameWin(target: Bord) {
        return (this.isVertical(target) ||
            this.isDiagonal(target) ||
            this.isHorizontal(target));
    }

    isVertical(target: Bord): boolean {
        let c
        for (let x = 0; x < 3; x++) {
            c = 0
            for (let y = 0; y < 3; y++) {
                if (target.getCell(x, y).game === target.round) {
                    c++
                }
            }
            if (c === 3) {
                return true
            }
        }
        return c === 3

    }

    isHorizontal(target: Bord): boolean {

        let c = 0
        for (let y = 0; y < 3; y++) {
            c = 0
            for (let x = 0; x < 3; x++) {
                if (target.getCell(x, y).game === target.round) {
                    c++
                }
                if (c === 3) {
                    return true
                }
            }
        }
        return c === 3

    }

    isDiagonal(target: Bord): boolean {


        let c = 0
        let d = 2
        for (let x = 0; x < 3; x++) {
            if (target.getCell(x, x)?.game === target.round) {
                c++
            }
        }
        for (let x = 0; x < 3; x++) {
            if (target.getCell(x, d)?.game === target.round) {
                d--
            }
        }


        return (c === 3) || (d === -1)


    }


}