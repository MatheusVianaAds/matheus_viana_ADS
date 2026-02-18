import Container from "./Container";
import Button from "./Button";
import Typography from "./Typography";
import bannerImg from "../assets/banner.png";

const HeroBanner = () => {
  return (
    <Container>
      <div
        className="
          flex 
          flex-col-reverse 
          md:flex-row 
          items-center 
          justify-between 
          gap-12
          py-12
        "
      >
        {/* TEXTO */}
        <div className="max-w-xl text-center md:text-left">

          <Typography as="h1">
            <span className="text-blue-500">
              Pare de viver na incerteza no fim do mês,
            </span>{" "}
            meu trabalho é ajudar você a aumentar seus agendamentos.
          </Typography>

          <Typography as="p" className="mt-6">
            Atuo como parceiro da sua empresa, tratando seus investimentos
            como se fossem meus, sempre buscando melhores resultados ao
            menor custo possível.
          </Typography>


          <div className="mt-8 flex justify-center md:justify-start">
            <Button>

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
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={bannerImg}
            alt="Profissional"
            className="max-h-[500px] object-contain"
          />

        </div>
      </div >
    </Container >
  );
};

export default HeroBanner;
