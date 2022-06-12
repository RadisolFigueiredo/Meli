import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 48px 135px;
  max-width: 100%;
`;

export const BoxFirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;

export const BoxImage = styled.div`
  margin: 32px 32px 0 32px;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    max-width: 320px;
    width: 320px;
  }
  @media (min-width: 1024px) {
    margin-right: 0;
    max-width: 680px;
    width: 620px;
  }
`;

interface ImageProps {
  src: string;
  alt: string;
}

export const ImgProduct = styled.img.attrs<ImageProps>(({ src, alt }) => ({
  src: src,
  alt: alt,
}))<ImageProps>`
  max-width: 320px;
  width: 320px;
  @media (min-width: 768px) {
    max-width: 420px;
    width: 420px;
  }

  @media (min-width: 1024px) {
    width: 620px;
    max-width: 680px;
  }
`;

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px 32px 0 32px;
  width: 320px;
  @media (min-width: 768px) {
    width: 100px;
  }
  @media (min-width: 1024px) {
    width: 300px;
    padding-right: 10px;
  }
`;

export const TextSoldQuantity = styled.p`
  padding-bottom: 16px;
  font-size: 14px;
  color: #999999;
`;

export const TextTitleProduct = styled.p`
  padding-bottom: 32px;
  font-size: 24px;
  font-weight: 600;
  color: #333333;
`;

export const TextPrice = styled.p`
  padding-bottom: 32px;
  font-size: 46px;
  color: #333333;
`;

export const Button = styled.button`
  background-color: #3483fa;
  color: #ffffff;
  width: 100%;
  height: 40px;
  border-radius: 4px;
`;

export const BoxSecondRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px 32px 0 10px;
`;

export const BoxDescription = styled.div`
  margin: 32px;
  max-width: 600px;
  display: flex;
  flex-wrap: wrap;
`;

export const TitleDescription = styled.h3`
  font-size: 28px;
  color: #333333;
`;

export const TextDescription = styled.p`
  margin-top: 32px;
  font-size: 16px;
  color: #999999;
`;
