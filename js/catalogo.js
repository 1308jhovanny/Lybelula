// JS específico da página Catálogo — filtro por categoria e, quando existir, por subcategoria.

const filtersEl = document.getElementById('filters');
const subfiltersEl = document.getElementById('subfilters');
const gridEl = document.getElementById('grid');
const emptyEl = document.getElementById('empty');
const catIds = ['todos', ...Object.keys(CATEGORIES)];

filtersEl.innerHTML = catIds
  .map(k => `<button class="filter" data-filter="${k}">${k === 'todos' ? 'Todos' : CATEGORIES[k].label}</button>`)
  .join('');

function renderSubfilters(catId, activeSub) {
  const cat = CATEGORIES[catId];
  if (!cat || !cat.subcats) {
    subfiltersEl.classList.remove('show');
    subfiltersEl.innerHTML = '';
    return;
  }
  const subKeys = ['todas', ...Object.keys(cat.subcats)];
  subfiltersEl.innerHTML = subKeys
    .map(s => `<button class="subfilter${s === activeSub ? ' active' : ''}" data-subfilter="${s}">${s === 'todas' ? 'Todas' : cat.subcats[s]}</button>`)
    .join('');
  subfiltersEl.classList.add('show');
}

function renderCatalog(catId, subId) {
  // Personalizado: sem peças ainda, só uma chamada para o WhatsApp.
  if (catId === 'personalizado') {
    gridEl.innerHTML = '';
    emptyEl.style.display = 'none';
    gridEl.insertAdjacentHTML('afterend', `
      <div class="empty-cat" id="personalizado-cta">
        <h3>Pedidos personalizados</h3>
        <p>Essa categoria ainda não tem catálogo pronto — cada peça personalizada é combinada direto com você. Me chama no WhatsApp contando a ideia, referência ou desenho.</p>
        <a class="btn btn-wa" style="margin-top:18px;display:inline-flex" href="${waLink('Olá! Quero fazer um pedido personalizado na Lybelula Arts 3D.')}" target="_blank" rel="noopener">Pedir no WhatsApp</a>
      </div>`);
    return;
  }
  document.getElementById('personalizado-cta')?.remove();

  const list = PRODUCTS.filter(p => {
    if (catId !== 'todos' && p.cat !== catId) return false;
    if (catId !== 'todos' && subId && subId !== 'todas' && p.subcat !== subId) return false;
    return true;
  });
  gridEl.innerHTML = list.map(productCardHTML).join('');
  emptyEl.style.display = list.length ? 'none' : 'block';
  filtersEl.querySelectorAll('.filter').forEach(f => f.classList.toggle('active', f.dataset.filter === catId));
}

function setCatalog(catId, subId) {
  const url = new URL(window.location);
  if (catId === 'todos') url.searchParams.delete('cat');
  else url.searchParams.set('cat', catId);
  if (subId && subId !== 'todas') url.searchParams.set('sub', subId);
  else url.searchParams.delete('sub');
  window.history.replaceState({}, '', url);
  renderSubfilters(catId, subId || 'todas');
  renderCatalog(catId, subId);
}

filtersEl.addEventListener('click', e => {
  const btn = e.target.closest('.filter');
  if (!btn) return;
  setCatalog(btn.dataset.filter, 'todas');
});

subfiltersEl.addEventListener('click', e => {
  const btn = e.target.closest('.subfilter');
  if (!btn) return;
  const catId = getQueryParam('cat') || 'todos';
  setCatalog(catId, btn.dataset.subfilter);
});

setCatalog(getQueryParam('cat') || 'todos', getQueryParam('sub') || 'todas');
