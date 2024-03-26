const container =  document.querySelector('.container');

const gridSize = 10;

const createGrid = (gridAmount) => {
  for (let i = 0; i < gridAmount; i++) {
    const row =  document.createElement('div');  
    row.classList.add('grid-row');

    for (let j = 0; j < gridAmount; j++) {
      const widthAndHeight = 560 / gridSize; 
      const gridItem =  document.createElement('div');
      gridItem.classList.add('grid-item');
      gridItem.style.height = `${widthAndHeight}px`;
      gridItem.style.width = `${widthAndHeight}px`;
      
      gridItem.addEventListener('mouseenter', () => {
        gridItem.style.backgroundColor = '#d65d0e'
      })
      row.appendChild(gridItem)
    }
    
    container.appendChild(row)
  }
  
}

createGrid(gridSize);
