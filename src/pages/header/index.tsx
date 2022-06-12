import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logo from '../../assets/images/logo.png';
import iconSearch from '../../assets/images/iconSearch.png';

import * as S from './styles';

export default function Header({ setItems, items }: any) {

  const [search, setSearch] = useState('');

  async function handleProducts() {
    
    try {
      const response = await api.get(encodeURI(`search?q=${search}`));
      setItems(response.data.results);
    } catch (err) {
      setItems([]);
    }
  }

  const resetItems = () => {
    setSearch('');
    setItems([]);
  };

  return (
    <S.Container>
      <S.Logo>
        <Link to='/'>
          <span onClick={() => resetItems()}>
            <img src={logo} alt='logo' />
          </span>
        </Link>
      </S.Logo>
      <S.BoxSearch>
        <S.Input
          type='text'
          name='search'
          id='search'
          placeholder='Nunca dejes de buscar'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <S.ButtonSearch onClick={() => handleProducts()}>
          <img src={iconSearch} alt='search' />
        </S.ButtonSearch>
      </S.BoxSearch>
    </S.Container>
  );
}
