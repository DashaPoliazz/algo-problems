export default {
  draw,
  highlight,
};

const BOARD_SIZE = 8;

// ****************************

function draw(boardEl) {
  // TODO: draw the chessboard, 8 rows (divs)
  // of 8 tiles (divs) each, inserting all DOM
  // elements into `boardEl` div

  for (let i = 0; i < BOARD_SIZE; i++) {
    const rowEl = document.createElement("div");

    for (let j = 0; j < BOARD_SIZE; j++) {
      const tileEl = document.createElement("div");

      rowEl.appendChild(tileEl);
    }

    boardEl.appendChild(rowEl);
  }
}

function highlight(tileEl) {
  // TODO: clear previous highlights (if any) and
  // then find the tiles in the two diagonals
  // (major and minor) that `tileEl` belongs to,
  // to highlight them via CSS class "highlighted"
}
