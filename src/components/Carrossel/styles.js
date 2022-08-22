import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const ContainerCarrosel = styled.section``;

export const CarrosselTitulo = styled.h2`
  font-weight: 700;
  font-size: 18px;
  background: #ffffff;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  padding: 1em 0 0.5em 0;
  color: #eb9b00;
  text-align: center;
  text-transform: uppercase;
`;

export const ImageSwiper = styled.img`
  width: 100%;
`;

export const SwiperStyled = styled(Swiper)`
  padding: 0.5em 0;
  display: flex;
  flex-direction: column-reverse;
  .swiper-pagination {
    position: inherit;
    margin-top: 0.5em;
  }
`;
