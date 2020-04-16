const ColorsPieces = {
    BLACK: 'black',
    WHITE: 'white',
    NO_Color: 'none'
}

const FirstRowOfUserBoard = {
    ROOK: 'Rook',
    KNIGHT: 'knight',
    BISHOP: 'bishop',
    QUEEN: 'queen',
    KING: 'king',
    SECOND_BISHOP: 'bishop',
    SECOND_KNIGHT: 'knight',
    SECOND_ROOK: 'Rook'
}

var secondRowUserBoard = {
    PAWN: 'pawn'
}

const AllPieces = {
    WHITE_KING: { color: ColorsPieces.WHITE, piece: FirstRowOfUserBoard.KING },
    BLACK_KING: { color: ColorsPieces.BLACK, piece: FirstRowOfUserBoard.KING },
    WHITE_QUEEN: { color: ColorsPieces.WHITE, piece: FirstRowOfUserBoard.QUEEN },
    BLACK_QUEEN: { color: ColorsPieces.BLACK, piece: FirstRowOfUserBoard.QUEEN },
    WHITE_ROOK: { color: ColorsPieces.WHITE, piece: FirstRowOfUserBoard.ROOK },
    BLACK_ROOK: { color: ColorsPieces.BLACK, piece: FirstRowOfUserBoard.ROOK },
    WHITE_KNIGHT: { color: ColorsPieces.WHITE, piece: FirstRowOfUserBoard.KNIGHT },
    BLACK_KNIGHT: { color: ColorsPieces.BLACK, piece: FirstRowOfUserBoard.KNIGHT },
    WHITE_BISHOP: { color: ColorsPieces.WHITE, piece: FirstRowOfUserBoard.BISHOP },
    BLACK_BISHOP: { color: ColorsPieces.BLACK, piece: FirstRowOfUserBoard.BISHOP },
    WHITE_PAWN: { color: ColorsPieces.WHITE, piece: secondRowUserBoard.PAWN },
    BLACK_PAWN: { color: ColorsPieces.BLACK, piece: secondRowUserBoard.PAWN },
    Empty: 'empty'
}


// var UnicodePieces = {
//     WHITE_KING: '\u{2654}',
//     BLACK_KING: '\u{265A}',
//     WHITE_QUEEN: '\u{2655}',
//     BLACK_QUEEN: '\u{265B}',
//     WHITE_ROOK: '\u{2656}',
//     BLACK_ROOK: '\u{265C}',
//     WHITE_KNIGHT: '\u{2658}',
//     BLACK_KNIGHT: '\u{265E}',
//     WHITE_BISHOP: '\u{2657}',
//     BLACK_BISHOP: '\u{265D}',
//     WHITE_PAWN: '\u{2659}',
//     BLACK_PAWN: '\u{265F}'
// };



