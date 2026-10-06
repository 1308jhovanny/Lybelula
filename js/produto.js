// JS específico da página de Produto

function renderProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const el = document.getElementById('product-content');
  if (!p) {
    el.innerHTML = '<p>Peça não encontrada. <a href="catalogo.html">Voltar ao catálogo</a>.</p>';
    return;
  }
  const cat = CATEGORIES[p.cat];
  document.title = `Lybelula Arts 3D — ${p.name}`;
  el.innerHTML = `
    <div class="product-gallery" style="--accent:${cat.accent}">
      <img src="${p.image}" alt="${p.name}">
    </div>
    <div class="product-info">
      <span class="tag">${cat.label}${p.subcat ? ' · ' + cat.subcats[p.subcat] : ''}</span>
      <h1>${p.name}</h1>
      <p class="desc">Peça impressa em 3D pela Lybelula Arts 3D. Fale no WhatsApp pra saber material, prazo e valor dessa peça.</p>
      <a class="btn btn-wa" href="${waLink(productMessage(p))}" target="_blank" rel="noopener">Pedir no WhatsApp</a>
    </div>`;
}

renderProduct(getQueryParam('id'));
