import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
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
export default function Detail({ search }: any) {
  const location = useLocation();

  const data = useMemo(
    () => (location?.state as LocationState).data,
    [location?.state]
  );

  const sold = data?.sold_quantity > 1 ? 'Vendidos' : 'Vendido';

  return (
    <>
      <Header search={search} />

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
            <S.TextDescription>
              Lorem ipsum congue nisi aliquam neque ornare commodo duis gravida
              justo varius, a quisque orci consequat odio nisi ad at facilisis
              congue volutpat non, pulvinar maecenas sollicitudin suspendisse
              curabitur a amet semper taciti velit. vulputate nisi litora
              pretium potenti ligula ante aliquam sagittis imperdiet nec vitae,
              mollis facilisis congue leo ligula cras etiam ultricies mauris.
              interdum commodo sodales pulvinar molestie leo tincidunt pulvinar
              nunc neque sapien, morbi inceptos suscipit convallis non magna et
              facilisis. enim mauris ultricies class orci malesuada semper
              felis, vulputate ultrices lacus vel gravida nam nunc, quam nisl
              maecenas nullam risus vel. Ad fermentum sem scelerisque,
              fringilla.
            </S.TextDescription>
          </S.BoxDescription>
        </S.BoxSecondRow>
      </S.Container>
    </>
  );
}
