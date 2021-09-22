import createFullGrid from './'

describe('createFullGrid', () => {
  it('returns a valid 9x9 sudoku grid', () => {
    const grid = createFullGrid()
    for (let row in grid)
      for (let col in grid[row]) {
        expect(grid[row][col]).toBeGreaterThanOrEqual(1)
        expect(grid[row][col]).toBeLessThanOrEqual(9)
      }
  })
})
