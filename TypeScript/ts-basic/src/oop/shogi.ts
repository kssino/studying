// still in progress ......

// class Game {}
// class Piece {}
// class Position {}

// class Osho extends Piece {}

// type alias
type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type Player = 'first' | 'second'

// position
class Position {
    constructor(private suji: Suji, private dan: Dan) {

    } 
} 

// koma class
abstract class Piece {
    // piece $ sub class only accessible property
    protected position: Position

    constructor(
        private readonly player: Player,
        suji: Suji,
        dan: Dan
    ) {
        // this := inside class 
        this.position = new Position(suji, dan)
    }

    // method
    // for moving method
    moveTo(position: Position) {
        this.position = position
    }

    // whether you can move to ? methond
    abstract canMoveTo(position: Position, player: Player) : boolean




}

//
// new Piece('first', 1, "1")
