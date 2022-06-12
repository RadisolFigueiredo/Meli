import styled from 'styled-components';
import { Link } from 'react-router-dom';
import iconShipping from '../../assets/images/iconShipping2x.png';

export const Container = styled.div`
  width: 100%;
  margin-top: 48px;
  padding: 0 135px;
  border: 1px solid transparent;
`;

export const Box = styled.div`
  background: #ffffff;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 40px;
`;

export const StyleLink = styled(Link)`
  text-decoration: none;
`;

export const CardItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 210px;
  background: #ffffff;
  border-radius: 4px;
`;

export const BoxImage = styled.div`
  border-radius: 4px;
  margin: 16px;
`;

interface ImageProduct {
  src: string;
  alt: string;
}

export const ImgProduct = styled.img.attrs<ImageProduct>(({ src, alt }) => ({
  src: src,
  alt: alt,
  width: '180px',
  height: '180px',
}))``;

export const BoxInformation = styled.div`
  width: 630px;
  height: 180px;
  margin-right: 10px;
`;

export const Information = styled.div`
  display: flex;
`;

interface ShowIcon {
  showIcon: boolean;
}

export const ImgShipping = styled.img.attrs<ShowIcon>(() => ({
  src: iconShipping,
  alt: 'Shipping to Capital Federal',
  width: '18px',
  height: '18px',
}))<ShowIcon>`
  display: ${({ showIcon }) => (showIcon ? 'flex' : 'none')};
  margin: 16px 0 0 5px;
`;

export const TextValue = styled.p`
  padding: 16px 0 32px 0;
  font-size: 18px;
  color: #333333;
  max-width: 420px;
`;

export const TextTitle = styled.p`
  width: 630px;
  height: 180px;
  color: #333333;
`;

export const BoxInfoState = styled.div`
  height: 180px;
`;

export const TextState = styled.p`
  padding-top: 16px;
  font-size: 12px;
  color: #333333;
`;

export const DividingLine = styled.div`
  padding: 0 135px;
  border: 1px solid #eeeeee;
  margin: 16px;
  margin-bottom: 0;
`;
