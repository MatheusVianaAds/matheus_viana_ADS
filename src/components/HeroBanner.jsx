import Container from "./Container";
import Button from "./Button";
import Typography from "./Typography";
import bannerImg from "../assets/banner.png";

const HeroBanner = () => {
  return (

    <section className="bg-gradient-to-r from-[#000000] to-[#1b1b1b]">
      <Container>
        <div
          className="
          flex 
          flex-col-reverse 
          lg:flex-row 
          items-center 
          justify-between 
          gap-12
          pb-8
          lg:pb-0
        "
        >
          {/* TEXTO */}
          <div className="max-w-xl text-center md:text-left">

            <Typography as="h1" className="text-white-custom">
              <span className="text-blue-custom">
                Pare de viver na incerteza no fim do mês,
              </span>{" "}
              meu trabalho é ajudar você a aumentar seus agendamentos.
            </Typography>

            <Typography as="p" className="mt-6 text-white-custom">
              Atuo como parceiro da sua empresa, tratando seus investimentos
              como se fossem meus, sempre buscando melhores resultados ao
              menor custo possível.
            </Typography>


            <div className="mt-8 flex justify-center md:justify-start">
              <Button className="w-[70%]">
                <a
                  href="https://form.respondi.app/XN5iIrID"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FAÇA SEU ORÇAMENTO
                </a>
              </Button>
            </div>
          </div>

          {/* IMAGEM */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end md:shrink-0">
            <img
              src={bannerImg}
              alt="Profissional"
              className="h-[600px] lg:h-[650px] object-contain"
            />
          </div>
        </div >
      </Container >
    </section>

  );
};

export default HeroBanner;
