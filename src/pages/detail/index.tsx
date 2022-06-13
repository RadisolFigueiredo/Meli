import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { isTemplateExpression } from 'typescript';
import { formatPrice, formatDecimal } from '../../utils/formatCurrency';
import Header from '../header';

import * as S from './styles';

type LocationState = {
  data: {
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    sold_quantity: number;
    permalink: string;
    id: string;
  };
};
export default function Detail() {
  const location = useLocation();

  const data = useMemo(
    () => (location?.state as LocationState).data,
    [location?.state]
  );

  const sold = data?.sold_quantity > 1 ? 'Vendidos' : 'Vendido';

  return (
    <>
      <Header />

      <S.Container>
        <S.BoxFirstRow>
          <S.BoxImage>
            <S.ImgProduct
              src={data?.thumbnail.replace('I', 'N')}
              alt={data?.title}
            />
          </S.BoxImage>
          <S.BoxInfo>
            <S.TextSoldQuantity>
              {formatDecimal(data?.sold_quantity)} {sold}
            </S.TextSoldQuantity>
            <S.TextTitleProduct>{data?.title}</S.TextTitleProduct>
            <S.TextPrice>
              {formatPrice(data?.price).replace('$', '$ ')}
            </S.TextPrice>
            <S.Button>Comprar</S.Button>
          </S.BoxInfo>
        </S.BoxFirstRow>

        <S.BoxSecondRow>
          <S.BoxDescription>
            <S.TitleDescription>Descripción del producto</S.TitleDescription>
            <S.TextDescription>{data.title}</S.TextDescription>
          </S.BoxDescription>
        </S.BoxSecondRow>
      </S.Container>
    </>
  );
}
