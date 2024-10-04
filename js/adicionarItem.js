import { criarItemDalista } from './criarItemDaLista.js';

const item = document.getElementById('input-item');

const listaDeCompras = document.getElementById('lista-de-compras');

export function adicionarItem(evento) {
  evento.preventDefault();

  const itemDaLista = criarItemDalista(item.value);
  listaDeCompras.appendChild(itemDaLista);
}
