var canCutGrid = function(grid) {
    let rows = grid.length, cols = grid[0].length;
    for (let r = 0; r < rows - 1; r++) {
        if (grid[r].every((val, i) => val === grid[r + 1][i])) return true;
    }
    for (let c = 0; c < cols - 1; c++) {
        if (grid.every(row => row[c] === row[c + 1])) return true;
    }
    return false;
};
