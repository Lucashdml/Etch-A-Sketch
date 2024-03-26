const container =  document.querySelector('.container');

const createGrid = (gridAmount) => {
  for (let i = 0; i < gridAmount; i++) {
    const row =  document.createElement('div');  
    row.classList.add('grid-row');

    for (let j = 0; j < gridAmount; j++) {
      const widthAndHeight = 960 / gridSize; 
      const gridItem =  document.createElement('div');
      gridItem.classList.add('grid-item');
      gridItem.style.height = `${widthAndHeight}`;
      gridItem.style.width = `${widthAndHeight}`;
      row.appendChild(gridItem)
    }
    
    container.appendChild(row)
  }
  
}
