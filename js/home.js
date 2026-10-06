// JS específico da página Início
document.getElementById('cat-tiles').innerHTML = Object.keys(CATEGORIES)
  .map(catId => catTileHTML(catId))
  .join('');
