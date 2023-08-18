const grid = document.getElementById('grid');
const puzzle_string = 'PCAESASREAHOYNCKORRDPEPDUTURHLIESLPMOAASGOLDSTWNOLRDEIGHKTETIMESJWIGZLQVOTREASURE';
const puzzle_array = puzzle_string.split('');

puzzle_array.forEach((letter) => {
  const span = document.createElement('span');
  grid.appendChild(span);
  span.innerHTML = letter;
});