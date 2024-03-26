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

      gridItem.addEventListener("mouseenter", () => {
        gridItem.style.backgroundColor = "#d65d0e";
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
