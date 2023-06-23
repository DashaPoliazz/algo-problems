export default {
  draw,
  highlight,
};

let originalBoard;
const BOARD_SIZE = 8;

// ****************************

function draw(boardEl) {
  // TODO: draw the chessboard, 8 rows (divs)
  // of 8 tiles (divs) each, inserting all DOM
  // elements into `boardEl` div
  originalBoard = boardEl;

  for (let i = 0; i < BOARD_SIZE; i++) {
    const rowEl = document.createElement("div");

    for (let j = 0; j < BOARD_SIZE; j++) {
      const tileEl = document.createElement("div");

      rowEl.appendChild(tileEl);
    }

    boardEl.appendChild(rowEl);
  }
}

function getTile(rowIndex, colIndex) {
  return document.querySelector(
    `#board > div:nth-child(${rowIndex + 1}) > div:nth-child(${colIndex + 1})`
  );
}

function highlight(tileEl) {
  // TODO: clear previous highlights (if any) and
  // then find the tiles in the two diagonals
  // (major and minor) that `tileEl` belongs to,
  // to highlight them via CSS class "highlighted"
  const tiles = document.querySelectorAll("div");

  // clear all currently highlighted tiles
  for (let el of tiles) {
    el.classList.remove("highlighted");
  }

  if (!tileEl) {
    return;
  }

  const rowEl = tileEl.parentNode;
  const tileRowIdx = [...originalBoard.childNodes].indexOf(rowEl);
  const tileColIdx = [...rowEl.childNodes].indexOf(tileEl);

  // up-left
  for (let i = tileRowIdx, j = tileColIdx; i >= 0 && j >= 0; i--, j--) {
    const tileToHighlight = getTile(i, j);

    tileToHighlight.classList.add("highlighted");
  }

  // up-right
  for (let i = tileRowIdx, j = tileColIdx; i >= 0 && j < 8; i--, j++) {
    const tileToHighlight = getTile(i, j);

    tileToHighlight.classList.add("highlighted");
  }

  // down-right
  for (let i = tileRowIdx, j = tileColIdx; i < 8 && j < 8; i++, j++) {
    const tileToHighlight = getTile(i, j);

    tileToHighlight.classList.add("highlighted");
  }

  // down-left
  for (let i = tileRowIdx, j = tileColIdx; i < 8 && j >= 0; i++, j--) {
    const tileToHighlight = getTile(i, j);

    tileToHighlight.classList.add("highlighted");
  }
}
