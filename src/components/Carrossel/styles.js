import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ContainerCarrosel = styled.section``;

export const CarrosselTitulo = styled.h2`
  font-weight: 700;
  font-size: 18px;
  background: #ffffff;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  padding: 1em 0 0.5em 0;
  color: #eb9b00;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 1024px) {
    font-size: 26px;
  }
`;

export const ImageSwiper = styled.img`
  width: 100%;
  opacity: 1;
`;

export const SwiperStyled = styled(Swiper)`
  padding: 0.5em 0;
  display: flex;
  flex-direction: column-reverse;
  @media screen and (min-width: 1024px) {
    width: 60%;
  }
  .swiper-pagination {
    position: inherit;
    margin-top: 0.5em;

    @media screen and (min-width: 1024px) {
      margin: 2em 0 3em 0;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
    @media screen and (min-width: 1024px) {
      display: block;
      top: 60%;
    }
  }
`;

export const SwiperSlideStyled = styled(SwiperSlide)`
  background-color: red;
`;
