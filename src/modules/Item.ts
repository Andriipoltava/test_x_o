import Bord from "./Bord";

export class Item {
    board: Bord
    key: number;
    game: string | null
    index: number
    private active: boolean = false

    x: number;
    y: number;


    constructor(board: Bord, x: number, y: number, index: number) {
        this.index = index
        this.board = board
        this.x = x
        this.y = y
        this.key = Math.random();

        if (board.step === 0) {
            this.game = null
        } else{
            this.game = board.step % 2 === 0 ? "x" : 'o'

        }
    }

    setActive() {
        if (!this.active) {
            this.active = true
            this.game = this.board.step % 2 === 0 ? "x" : 'o'
        }

    }

    getActive() {
        return this.active
    }

    isEmpty() {
        return this.game === null
    }




}