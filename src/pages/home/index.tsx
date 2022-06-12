import { useState } from 'react';
import { formatPrice } from '../../utils/formatCurrency';

import Header from '../header';

import * as S from './styles';

interface Props {
  title: string;
  price: number;
  thumbnail: string;
  id: string;
  address: {
    state_name: string;
  };
}

const getRandom = (arr: any, nr: number) =>
  arr
    .slice()
    .sort(() => 0.5 - Math.random())
    .slice(0, nr);

export default function Home() {
  const [items, setItems] = useState([]);

  return (
    <>
      <Header setItems={setItems} items={items} />
      <S.Container>
        <S.Box>
          {items &&
            getRandom(items, 4).map((item: Props) => (
              <div key={item.id}>
                <S.StyleLink to={`/items/${item.id}`} state={{ data: item }}>
                  <S.CardItem>
                    <S.BoxImage>
                      <S.ImgProduct
                        src={item.thumbnail.replace('I', 'N')}
                        alt={item.title}
                      />
                    </S.BoxImage>
                    <S.BoxInformation>
                      <S.Information>
                        <S.TextValue>
                          {formatPrice(item.price).replace('$', '$ ')}
                        </S.TextValue>
                        <S.ImgShipping
                          showIcon={
                            item.address.state_name.toLocaleUpperCase() ===
                            'capital federal'.toLocaleUpperCase()
                          }
                        />
                      </S.Information>
                      <S.TextValue>{item.title}</S.TextValue>
                    </S.BoxInformation>
                    <S.BoxInfoState>
                      <S.TextState>{item.address.state_name}</S.TextState>
                    </S.BoxInfoState>
                  </S.CardItem>
                </S.StyleLink>
                <S.DividingLine />
              </div>
            ))}
        </S.Box>
      </S.Container>
    </>
  );
}
