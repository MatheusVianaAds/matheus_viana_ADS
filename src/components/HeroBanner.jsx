import Container from "./Container";
import Button from "./Button";
import bannerImg from "../assets/banner.png";

const HeroBanner = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center">
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
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              <span className="text-blue-500">
                Pare de viver na incerteza no fim do mês,
              </span>{" "}
              meu trabalho é ajudar você a aumentar seus agendamentos.
            </h1>

            <p className="mt-6 text-gray-300 text-base md:text-lg">
              Atuo como parceiro da sua empresa, tratando seus investimentos
              como se fossem meus, sempre buscando melhores resultados ao
              menor custo possível.
            </p>

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
        </div>
      </Container>
    </section>
  );
}

export default HeroBanner
