const container = document.querySelector(".container");
const resetButton = document.querySelector("button");
const gridSize = 16;

const createGrid = (gridAmount) => {
  container.replaceChildren();

  for (let i = 0; i < gridAmount; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");

    for (let j = 0; j < gridAmount; j++) {
      const widthAndHeight = 560 / gridAmount;
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.style.height = `${widthAndHeight}px`;
      gridItem.style.width = `${widthAndHeight}px`;
      gridItem.style.opacity = 1;

      function randomHexColor() {
        let hex = Math.round(Math.random() * 0xffffff).toString(16);
        while (hex.length < 6) hex = "0" + hex;
        return "#" + hex;
      }

      gridItem.addEventListener("mouseenter", () => {
        gridItem.style.backgroundColor = `${randomHexColor()}`;
        gridItem.style.opacity -= 0.1;
      });
      row.appendChild(gridItem);
    }

    container.appendChild(row);
  }
};

createGrid(gridSize);

resetButton.addEventListener("click", () => {
  let userSize = Number(prompt("Choose a grid size between 1 and 100"));
  if (userSize >= 1 && userSize <= 100) {
    createGrid(userSize);
  } else {
    alert("Error: Choosea number between 1 and 100");
  }
});
