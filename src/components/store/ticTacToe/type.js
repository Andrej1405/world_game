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

export const winningCombination = [
    [CELLS.cell0, CELLS.cell1, CELLS.cell2],
    [CELLS.cell3, CELLS.cell4, CELLS.cell5],
    [CELLS.cell6, CELLS.cell7, CELLS.cell8],
    [CELLS.cell0, CELLS.cell3, CELLS.cell6],
    [CELLS.cell1, CELLS.cell4, CELLS.cell7],
    [CELLS.cell2, CELLS.cell5, CELLS.cell8],
    [CELLS.cell0, CELLS.cell4, CELLS.cell8],
    [CELLS.cell2, CELLS.cell4, CELLS.cell6],
]

export const initialGameBoard = [
    { id: CELLS.cell0, step: '', isFilled: false, isWinning: false, value: null },
    { id: CELLS.cell1, step: '', isFilled: false, isWinning: false, value: null },
    { id: CELLS.cell2, step: '', isFilled: false, isWinning: false, value: null },
    { id: CELLS.cell3, step: '', isFilled: false, isWinning: false, value: null },
    { id: CELLS.cell4, step: '', isFilled: false, isWinning: false, value: null },
    { id: CELLS.cell5, step: '', isFilled: false, isWinning: false, value: null },
    { id: CELLS.cell6, step: '', isFilled: false, isWinning: false, value: null },
    { id: CELLS.cell7, step: '', isFilled: false, isWinning: false, value: null },
    { id: CELLS.cell8, step: '', isFilled: false, isWinning: false, value: null },
]
