import { useEffect, useState } from 'react';
import Item from './Item';
import cardapio from '../../../data/cardapio.json';

import styles from './Itens.module.scss';

type Props = {
  busca: string,
  filtro: number | null,
  ordenador: string
}


export default function Itens({ busca, filtro, ordenador }: Props) {
  const [filteredCardapio, setFilteredCardapio] = useState(cardapio);



  useEffect(() => {
    function sortList(lista: typeof cardapio) {
      switch(ordenador) {
      case 'size':
        return lista.sort((a, b) => a.size > b.size ? 1 : -1);
      case 'serving':
        return lista.sort((a,b) => a.serving > b.serving ? 1 : -1);
      case 'price':
        return lista.sort((a,b) => a.price > b.price ? 1 : -1);
      default:
        return lista;
      }
    }

    setFilteredCardapio(sortList(cardapio.filter((itens) => {
      if(filtro) {
        return itens.title.toLowerCase().includes(busca.toLowerCase()) && itens.category.id === filtro;
      }
      return itens.title.toLowerCase().includes(busca.toLowerCase());
    })));
  }, [busca, filtro, ordenador]);

  return (
    <div className={styles.itens}>
      {filteredCardapio.map((item) => (
        <Item
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
}
