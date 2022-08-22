import {
  ContainerBanner,
  BannerTitulo,
  BannerTexto,
  BannerPesquisa,
} from "./styles";

const Banner = () => {
  return (
    <ContainerBanner>
      <BannerTitulo>Já Sabe por onde começar?</BannerTitulo>
      <BannerTexto>
        Encontre em nossa estante o que precisa para seu desenvolvimento!
      </BannerTexto>
      <BannerPesquisa
        type="search"
        placeholder="Qual será sua próxima leitura?"
      />
    </ContainerBanner>
  );
};

export default Banner;
