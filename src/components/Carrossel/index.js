import {
  ContainerCarrosel,
  CarrosselTitulo,
  ImageSwiper,
  SwiperStyled,
  ContainerCarosselSug,
} from './styles';
import { SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import Javascript from '../../assets/Javascript.svg';
import Tuning from '../../assets/Tuning.svg';
import Portugol from '../../assets/Portugol.svg';
import ApacheKafka from '../../assets/ApacheKafka.svg';
import Acessibilidade from '../../assets/Acessibilidade.svg';
import Guia_Front_end from '../../assets/Guia_Front_end.svg';
import Angular from '../../assets/Angular.svg';
import Gestao2 from '../../assets/Gestao2.svg';
import Sugestao from '../Sugestao';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Carrossel = (props) => {
  const {
    titulo,
    imgPrincipal,
    imgEstrelas,
    descTitulo,
    descTexto,
    descTituloLivro,
  } = props;

  return (
    <ContainerCarrosel>
      <CarrosselTitulo>{titulo}</CarrosselTitulo>
      <ContainerCarosselSug>
        <SwiperStyled
          modules={[Pagination, Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          pagination={{ clickable: true }}
          navigation={true}
        >
          <SwiperSlide>
            <ImageSwiper src={Javascript} />
          </SwiperSlide>
          <SwiperSlide>
            <ImageSwiper src={Tuning} />
          </SwiperSlide>
          <SwiperSlide>
            <ImageSwiper src={Portugol} />
          </SwiperSlide>
          <SwiperSlide>
            <ImageSwiper src={ApacheKafka} />
          </SwiperSlide>
          <SwiperSlide>
            <ImageSwiper src={Acessibilidade} />
          </SwiperSlide>
          <SwiperSlide>
            <ImageSwiper src={Guia_Front_end} />
          </SwiperSlide>
          <SwiperSlide>
            <ImageSwiper src={Angular} />
          </SwiperSlide>
          <SwiperSlide>
            <ImageSwiper src={Gestao2} />
          </SwiperSlide>
        </SwiperStyled>

        <Sugestao
          descTitulo={descTitulo}
          descTexto={descTexto}
          descTituloLivro={descTituloLivro}
          imgPrincipal={imgPrincipal}
          imgEstrelas={imgEstrelas}
        />
      </ContainerCarosselSug>
    </ContainerCarrosel>
  );
};

export default Carrossel;
