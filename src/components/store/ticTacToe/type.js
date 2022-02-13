export const ACTION = {
    START_GAME: 'START_GAME',
    END_GAME: 'END_GAME',
    CIRCLE: 'STEP_CIRCLE',
    CROSS: 'STEP_CROSS',
}

export const STEP = {
    CIRCLE: 'CIRCLE',
    CROSS: 'CROSS',
}

export const CELLS = {
    cell0: 'cell0',
    cell1: 'cell1',
    cell2: 'cell2',
    cell3: 'cell3',
    cell4: 'cell4',
    cell5: 'cell5',
    cell6: 'cell6',
    cell7: 'cell7',
    cell8: 'cell8',
}

const { cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8 } = CELLS

export const winningCombination = [
    [cell0, cell1, cell2],
    [cell3, cell4, cell5],
    [cell6, cell7, cell8],
    [cell0, cell3, cell6],
    [cell1, cell4, cell7],
    [cell2, cell5, cell8],
    [cell0, cell4, cell8],
    [cell2, cell4, cell6],
]

export const initialGameBoard = [
    { id: cell0, step: '', isFilled: false, isWinning: false, value: null },
    { id: cell1, step: '', isFilled: false, isWinning: false, value: null },
    { id: cell2, step: '', isFilled: false, isWinning: false, value: null },
    { id: cell3, step: '', isFilled: false, isWinning: false, value: null },
    { id: cell4, step: '', isFilled: false, isWinning: false, value: null },
    { id: cell5, step: '', isFilled: false, isWinning: false, value: null },
    { id: cell6, step: '', isFilled: false, isWinning: false, value: null },
    { id: cell7, step: '', isFilled: false, isWinning: false, value: null },
    { id: cell8, step: '', isFilled: false, isWinning: false, value: null },
]
