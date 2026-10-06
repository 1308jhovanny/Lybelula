// Dados do catálogo — gerados a partir das pastas de imagens enviadas.
// Pra adicionar/remover peças: edite o array PRODUCTS. Pra trocar nomes de categoria: edite CATEGORIES.

const WHATSAPP_NUMBER = '5562985171031';

const CATEGORIES = {
  'action-figure': { label: 'Action Figure', accent: 'var(--magenta)', subcats: null },
  infantil: { label: 'Infantil', accent: 'var(--orange)', subcats: { brinquedos: 'Brinquedos', sensoriais: 'Brinquedos Sensoriais', plaquinhas: 'Plaquinhas de Colorir' } },
  casa: { label: 'Casa', accent: 'var(--blue)', subcats: null },
  especiais: { label: 'Especiais', accent: 'var(--green)', subcats: { natal: 'Natal' } },
  personalizado: { label: 'Personalizado', accent: 'var(--magenta)', subcats: null }
};

const PRODUCTS = [
  { id: "batman", name: "Batman", cat: "action-figure", subcat: null, image: "assets/products/action-figure/batman.webp" },
  { id: "busto-homem-de-ferro", name: "Busto homem de ferro", cat: "action-figure", subcat: null, image: "assets/products/action-figure/busto-homem-de-ferro.webp" },
  { id: "ciclope", name: "Ciclope", cat: "action-figure", subcat: null, image: "assets/products/action-figure/ciclope.webp" },
  { id: "deadpull", name: "Deadpull", cat: "action-figure", subcat: null, image: "assets/products/action-figure/deadpull.webp" },
  { id: "demolidor", name: "Demolidor", cat: "action-figure", subcat: null, image: "assets/products/action-figure/demolidor.webp" },
  { id: "homem-aranha", name: "Homem Aranha", cat: "action-figure", subcat: null, image: "assets/products/action-figure/homem-aranha.webp" },
  { id: "pantera-negra", name: "Pantera negra", cat: "action-figure", subcat: null, image: "assets/products/action-figure/pantera-negra.webp" },
  { id: "rambo", name: "Rambo", cat: "action-figure", subcat: null, image: "assets/products/action-figure/rambo.webp" },
  { id: "tartaruga-ninja", name: "Tartaruga ninja", cat: "action-figure", subcat: null, image: "assets/products/action-figure/tartaruga-ninja.webp" },
  { id: "zoro", name: "Zoro", cat: "action-figure", subcat: null, image: "assets/products/action-figure/zoro.webp" },
  { id: "bandeja-japandi", name: "Bandeja Japandi", cat: "casa", subcat: null, image: "assets/products/casa/bandeja-japandi.webp" },
  { id: "bandeja-moderna", name: "Bandeja Moderna", cat: "casa", subcat: null, image: "assets/products/casa/bandeja-moderna.webp" },
  { id: "bandeja-perola", name: "Bandeja perola", cat: "casa", subcat: null, image: "assets/products/casa/bandeja-perola.webp" },
  { id: "coracao-de-rosa-eterna", name: "Coração de rosa eterna", cat: "casa", subcat: null, image: "assets/products/casa/coracao-de-rosa-eterna.webp" },
  { id: "decoracao-home", name: "Decoração Home", cat: "casa", subcat: null, image: "assets/products/casa/decoracao-home.webp" },
  { id: "decoracao-lua-crescente", name: "Decoração lua crescente", cat: "casa", subcat: null, image: "assets/products/casa/decoracao-lua-crescente.webp" },
  { id: "escorredor-de-utensilios", name: "Escorredor de utensilios", cat: "casa", subcat: null, image: "assets/products/casa/escorredor-de-utensilios.webp" },
  { id: "jarro-floral-pavao", name: "Jarro floral pavão", cat: "casa", subcat: null, image: "assets/products/casa/jarro-floral-pavao.webp" },
  { id: "jarros-japandi", name: "Jarros Japandi", cat: "casa", subcat: null, image: "assets/products/casa/jarros-japandi.webp" },
  { id: "lar-aconchegante", name: "Lar aconchegante", cat: "casa", subcat: null, image: "assets/products/casa/lar-aconchegante.webp" },
  { id: "organizador-de-maquiagem", name: "Organizador de maquiagem", cat: "casa", subcat: null, image: "assets/products/casa/organizador-de-maquiagem.webp" },
  { id: "organizador-de-mesa-escritorio", name: "Organizador de mesa escritorio", cat: "casa", subcat: null, image: "assets/products/casa/organizador-de-mesa-escritorio.webp" },
  { id: "organizador-de-pia", name: "Organizador de pia", cat: "casa", subcat: null, image: "assets/products/casa/organizador-de-pia.webp" },
  { id: "organizador-mesa-escritorio", name: "Organizador mesa escritorio", cat: "casa", subcat: null, image: "assets/products/casa/organizador-mesa-escritorio.webp" },
  { id: "organizados-de-gaveta", name: "Organizados de gaveta", cat: "casa", subcat: null, image: "assets/products/casa/organizados-de-gaveta.webp" },
  { id: "pestisqueira", name: "Pestisqueira", cat: "casa", subcat: null, image: "assets/products/casa/pestisqueira.webp" },
  { id: "prateleira-de-parede", name: "Prateleira de parede", cat: "casa", subcat: null, image: "assets/products/casa/prateleira-de-parede.webp" },
  { id: "suporte-bolo-canelado", name: "Suporte bolo canelado", cat: "casa", subcat: null, image: "assets/products/casa/suporte-bolo-canelado.webp" },
  { id: "suporte-escorredor", name: "Suporte escorredor", cat: "casa", subcat: null, image: "assets/products/casa/suporte-escorredor.webp" },
  { id: "suporte-papel-toalha", name: "Suporte papel toalha", cat: "casa", subcat: null, image: "assets/products/casa/suporte-papel-toalha.webp" },
  { id: "suporte-utensilios", name: "Suporte utensílios", cat: "casa", subcat: null, image: "assets/products/casa/suporte-utensilios.webp" },
  { id: "tigela-trelica", name: "Tigela Treliça", cat: "casa", subcat: null, image: "assets/products/casa/tigela-trelica.webp" },
  { id: "vasos-felicia", name: "Vasos Felícia", cat: "casa", subcat: null, image: "assets/products/casa/vasos-felicia.webp" },
  { id: "brinquedo-argolas-de-encaixe", name: "Brinquedo argolas de encaixe", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/brinquedo-argolas-de-encaixe.webp" },
  { id: "brinquedo-de-encaixe", name: "Brinquedo de encaixe", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/brinquedo-de-encaixe.webp" },
  { id: "brinquedo-encaixe-formas-geometricas", name: "Brinquedo encaixe formas geometricas", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/brinquedo-encaixe-formas-geometricas.webp" },
  { id: "helicoptero", name: "Helicoptero", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/helicoptero.webp" },
  { id: "jogo-equilibrio-dinosauro", name: "Jogo Equilibrio Dinosauro", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/jogo-equilibrio-dinosauro.webp" },
  { id: "jogo-equilibrio-do-dragao", name: "Jogo Equilíbrio do Dragão", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/jogo-equilibrio-do-dragao.webp" },
  { id: "jogo-jenga", name: "Jogo Jenga", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/jogo-jenga.webp" },
  { id: "jogo-nao-quebre-o-gelo", name: "Jogo Não Quebre o Gelo", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/jogo-nao-quebre-o-gelo.webp" },
  { id: "jogo-tetris-equilibrio", name: "Jogo Tetris equilíbrio", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/jogo-tetris-equilibrio.webp" },
  { id: "jogo-da-forca", name: "Jogo da Forca", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/jogo-da-forca.webp" },
  { id: "jogo-da-memoria-pinos", name: "Jogo da memória pinos", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/jogo-da-memoria-pinos.webp" },
  { id: "jogo-das-cores", name: "Jogo das cores", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/jogo-das-cores.webp" },
  { id: "katana-samurai", name: "Katana Samurai", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/katana-samurai.webp" },
  { id: "piao", name: "Pião", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/piao.webp" },
  { id: "quebra-cabeca-chase", name: "Quebra cabeça Chase", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/quebra-cabeca-chase.webp" },
  { id: "quebra-cabeca-formas-geometricas", name: "Quebra cabeça Formas geométricas", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/quebra-cabeca-formas-geometricas.webp" },
  { id: "quebra-cabeca-marshall", name: "Quebra cabeça Marshall", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/quebra-cabeca-marshall.webp" },
  { id: "quebra-cabeca-rubble", name: "Quebra cabeça Rubble", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/quebra-cabeca-rubble.webp" },
  { id: "quebra-cabeca-sky", name: "Quebra cabeça Sky", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/quebra-cabeca-sky.webp" },
  { id: "quebra-cabeca-bluey", name: "Quebra cabeça bluey", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/quebra-cabeca-bluey.webp" },
  { id: "quebra-cabeca-esqueleto-de-dinossauro", name: "Quebra cabeça esqueleto de dinossauro", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/quebra-cabeca-esqueleto-de-dinossauro.webp" },
  { id: "quebra-cabeca-geometrico", name: "Quebra cabeça geometrico", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/quebra-cabeca-geometrico.webp" },
  { id: "quebra-cabeca-logico", name: "Quebra cabeça logico", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/quebra-cabeca-logico.webp" },
  { id: "tetris-equilibrio", name: "Tetris Equilíbrio", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/tetris-equilibrio.webp" },
  { id: "tetris-em-pe", name: "Tetris em pé", cat: "infantil", subcat: "brinquedos", image: "assets/products/infantil/brinquedos/tetris-em-pe.webp" },
  { id: "arraia-manta", name: "Arraia Manta", cat: "infantil", subcat: "sensoriais", image: "assets/products/infantil/sensoriais/arraia-manta.webp" },
  { id: "brinquedo-sensorial-formas-giratorias", name: "Brinquedo sensorial formas giratórias", cat: "infantil", subcat: "sensoriais", image: "assets/products/infantil/sensoriais/brinquedo-sensorial-formas-giratorias.webp" },
  { id: "brinquedos-sensorial-pregos", name: "Brinquedos sensorial pregos", cat: "infantil", subcat: "sensoriais", image: "assets/products/infantil/sensoriais/brinquedos-sensorial-pregos.webp" },
  { id: "cubo-infinito", name: "Cubo infinito", cat: "infantil", subcat: "sensoriais", image: "assets/products/infantil/sensoriais/cubo-infinito.webp" },
  { id: "dragao-articulado-2", name: "Dragão articulado 2", cat: "infantil", subcat: "sensoriais", image: "assets/products/infantil/sensoriais/dragao-articulado-2.webp" },
  { id: "dragao-articulado", name: "Dragão articulado", cat: "infantil", subcat: "sensoriais", image: "assets/products/infantil/sensoriais/dragao-articulado.webp" },
  { id: "estrela-brincalhona", name: "Estrela Brincalhona", cat: "infantil", subcat: "sensoriais", image: "assets/products/infantil/sensoriais/estrela-brincalhona.webp" },
  { id: "estrela-articulada-de-10-pontas", name: "Estrela articulada de 10 pontas", cat: "infantil", subcat: "sensoriais", image: "assets/products/infantil/sensoriais/estrela-articulada-de-10-pontas.webp" },
  { id: "odon-dragao-articulado", name: "Odon Dragão Articulado", cat: "infantil", subcat: "sensoriais", image: "assets/products/infantil/sensoriais/odon-dragao-articulado.webp" },
  { id: "ovo-de-dragao", name: "Ovo de dragão", cat: "infantil", subcat: "sensoriais", image: "assets/products/infantil/sensoriais/ovo-de-dragao.webp" },
  { id: "polvo-articulado", name: "Polvo Articulado", cat: "infantil", subcat: "sensoriais", image: "assets/products/infantil/sensoriais/polvo-articulado.webp" },
  { id: "polvo-articulado2", name: "Polvo articulado2", cat: "infantil", subcat: "sensoriais", image: "assets/products/infantil/sensoriais/polvo-articulado2.webp" },
  { id: "tartaruga-articulado", name: "Tartaruga Articulado", cat: "infantil", subcat: "sensoriais", image: "assets/products/infantil/sensoriais/tartaruga-articulado.webp" },
  { id: "torre-giratoria", name: "Torre Giratoria", cat: "infantil", subcat: "sensoriais", image: "assets/products/infantil/sensoriais/torre-giratoria.webp" },
  { id: "torre-de-encaixe", name: "Torre de encaixe", cat: "infantil", subcat: "sensoriais", image: "assets/products/infantil/sensoriais/torre-de-encaixe.webp" },
  { id: "plaquinha-blue-9-pecas", name: "Plaquinha Blue 9 peças", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-blue-9-pecas.webp" },
  { id: "plaquinha-carros-8-pecas", name: "Plaquinha Carros 8 peças", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-carros-8-pecas.webp" },
  { id: "plaquinha-dinossauro-3-pecas", name: "Plaquinha Dinossauro 3 peças", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-dinossauro-3-pecas.webp" },
  { id: "plaquinha-dinossauro-4-pecas", name: "Plaquinha Dinossauro 4 peças", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-dinossauro-4-pecas.webp" },
  { id: "plaquinha-divertidamente-9-pecas", name: "Plaquinha Divertidamente 9 peças", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-divertidamente-9-pecas.webp" },
  { id: "plaquinha-fazendinha-10-pecas", name: "Plaquinha Fazendinha 10 peças", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-fazendinha-10-pecas.webp" },
  { id: "plaquinha-frutas-4-pecacs", name: "Plaquinha Frutas 4 peçacs", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-frutas-4-pecacs.webp" },
  { id: "plaquinha-fundo-do-mar-4-pecas", name: "Plaquinha Fundo do mar 4 peças", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-fundo-do-mar-4-pecas.webp" },
  { id: "plaquinha-hallowen-4-pecas", name: "Plaquinha Hallowen 4 peças", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-hallowen-4-pecas.webp" },
  { id: "plaquinha-hello-kitty-6-pecas", name: "Plaquinha Hello Kitty 6 peças", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-hello-kitty-6-pecas.webp" },
  { id: "plaquinha-homem-aranha-6-pecas", name: "Plaquinha Homem Aranha 6 peças", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-homem-aranha-6-pecas.webp" },
  { id: "plaquinha-kpop-4-pecas", name: "Plaquinha Kpop 4 peças", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-kpop-4-pecas.webp" },
  { id: "plaquinha-kpop-9-pecas", name: "Plaquinha Kpop 9 peças", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-kpop-9-pecas.webp" },
  { id: "plaquinha-mandala-3-pecas", name: "Plaquinha Mandala 3 peças", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-mandala-3-pecas.webp" },
  { id: "plaquinha-mandala-4-pecas", name: "Plaquinha Mandala 4 peças", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-mandala-4-pecas.webp" },
  { id: "plaquinha-mandala-6-pecas", name: "Plaquinha Mandala 6 peças", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-mandala-6-pecas.webp" },
  { id: "plaquinha-mickey-4-pecas", name: "Plaquinha Mickey 4 peças", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-mickey-4-pecas.webp" },
  { id: "plaquinha-minecraft-6-pecas", name: "Plaquinha MineCraft 6 peças", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-minecraft-6-pecas.webp" },
  { id: "plaquinha-patrulia-canina-5-pecas", name: "Plaquinha Patrulia Canina 5 peças", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-patrulia-canina-5-pecas.webp" },
  { id: "plaquinha-princesa-4-pecas", name: "Plaquinha Princesa 4 peças", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-princesa-4-pecas.webp" },
  { id: "plaquinha-principe-4-pecas", name: "Plaquinha Principe 4 peças", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-principe-4-pecas.webp" },
  { id: "plaquinha-sonic-5-pecas", name: "Plaquinha Sonic 5 peças", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-sonic-5-pecas.webp" },
  { id: "plaquinha-princesa-disney-5-pecas", name: "Plaquinha princesa disney 5 peças", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-princesa-disney-5-pecas.webp" },
  { id: "plaquinha-safari-4-pecas", name: "Plaquinha safari 4 peças", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-safari-4-pecas.webp" },
  { id: "plaquinha-selvagem-6-pecas", name: "Plaquinha selvagem 6 peças", cat: "infantil", subcat: "plaquinhas", image: "assets/products/infantil/plaquinhas/plaquinha-selvagem-6-pecas.webp" },
  { id: "anjo-decoracao", name: "Anjo decoração", cat: "especiais", subcat: "natal", image: "assets/products/especiais/natal/anjo-decoracao.webp" },
  { id: "arvore-japandi", name: "Arvore Japandi", cat: "especiais", subcat: "natal", image: "assets/products/especiais/natal/arvore-japandi.webp" },
  { id: "arvore-natal-moderna", name: "Arvore Natal Moderna", cat: "especiais", subcat: "natal", image: "assets/products/especiais/natal/arvore-natal-moderna.webp" },
  { id: "bolas-de-natal", name: "Bolas de Natal", cat: "especiais", subcat: "natal", image: "assets/products/especiais/natal/bolas-de-natal.webp" },
  { id: "casal-de-cervo-minimalista", name: "Casal de Cervo minimalista", cat: "especiais", subcat: "natal", image: "assets/products/especiais/natal/casal-de-cervo-minimalista.webp" },
  { id: "casinha-pra-vela", name: "Casinha pra vela", cat: "especiais", subcat: "natal", image: "assets/products/especiais/natal/casinha-pra-vela.webp" },
  { id: "enfeite-natal-linha-artistica", name: "Enfeite natal linha artistica", cat: "especiais", subcat: "natal", image: "assets/products/especiais/natal/enfeite-natal-linha-artistica.webp" },
  { id: "enfeites-flocos-de-neve", name: "Enfeites Flocos de neve", cat: "especiais", subcat: "natal", image: "assets/products/especiais/natal/enfeites-flocos-de-neve.webp" },
  { id: "enfeites-de-natal", name: "Enfeites de Natal", cat: "especiais", subcat: "natal", image: "assets/products/especiais/natal/enfeites-de-natal.webp" },
  { id: "letreiro-feliz-natal", name: "Letreiro Feliz Natal", cat: "especiais", subcat: "natal", image: "assets/products/especiais/natal/letreiro-feliz-natal.webp" },
  { id: "natividade", name: "Natividade", cat: "especiais", subcat: "natal", image: "assets/products/especiais/natal/natividade.webp" },
  { id: "porta-guardanapo", name: "Porta Guardanapo", cat: "especiais", subcat: "natal", image: "assets/products/especiais/natal/porta-guardanapo.webp" },
  { id: "presepio-decorativo", name: "Presépio decorativo", cat: "especiais", subcat: "natal", image: "assets/products/especiais/natal/presepio-decorativo.webp" },
  { id: "presepio-simples", name: "Presépio simples", cat: "especiais", subcat: "natal", image: "assets/products/especiais/natal/presepio-simples.webp" },
  { id: "quebra-nozes", name: "Quebra nozes", cat: "especiais", subcat: "natal", image: "assets/products/especiais/natal/quebra-nozes.webp" },
  { id: "rena-treno-tigela", name: "Rena treno tigela", cat: "especiais", subcat: "natal", image: "assets/products/especiais/natal/rena-treno-tigela.webp" },
  { id: "suporte-giratorio", name: "Suporte giratório", cat: "especiais", subcat: "natal", image: "assets/products/especiais/natal/suporte-giratorio.webp" },
  { id: "tigela-boneco-de-neve", name: "Tigela Boneco de neve", cat: "especiais", subcat: "natal", image: "assets/products/especiais/natal/tigela-boneco-de-neve.webp" },
  { id: "tigela-papai-noel", name: "Tigela papai noel", cat: "especiais", subcat: "natal", image: "assets/products/especiais/natal/tigela-papai-noel.webp" },
  { id: "tres-reis-magos", name: "Tres reis magos", cat: "especiais", subcat: "natal", image: "assets/products/especiais/natal/tres-reis-magos.webp" },
];


function waLink(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function productMessage(p) {
  const cat = CATEGORIES[p.cat];
  let where = cat.label;
  if (p.subcat && cat.subcats) where += ' > ' + cat.subcats[p.subcat];
  return `Olá! Tenho interesse nesta peça: ${p.name} (categoria: ${where})`;
}

// Card de produto (catálogo e destaques)
function productCardHTML(p) {
  const cat = CATEGORIES[p.cat];
  return `<div class="card" style="--accent:${cat.accent}">
    <a class="card-media" href="produto.html?id=${p.id}">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
    </a>
    <div class="card-body">
      <span class="tag">${cat.label}${p.subcat ? ' · ' + cat.subcats[p.subcat] : ''}</span>
      <h3><a href="produto.html?id=${p.id}">${p.name}</a></h3>
      <a class="btn btn-wa" href="${waLink(productMessage(p))}" target="_blank" rel="noopener">Pedir no WhatsApp</a>
    </div>
  </div>`;
}

// Ladrilho de categoria (home)
function catTileHTML(catId) {
  const cat = CATEGORIES[catId];
  const count = PRODUCTS.filter(p => p.cat === catId).length;
  const countLabel = catId === 'personalizado' ? 'sob encomenda' : count + ' peças';
  return `<a class="cat-tile" style="--accent:${cat.accent}" href="catalogo.html?cat=${catId}">
    <h3>${cat.label}</h3>
    <p>${countLabel}</p>
  </a>`;
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}
