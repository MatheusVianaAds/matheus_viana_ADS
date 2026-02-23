import Container from "@/components/Container";
import Button from "@/components/Button";
import Typography from "@/components/Typography";

const HeroBanner = () => {
  return (
    <section
  className="
    text-white-custom
    bg-[url('/banner-mobile.webp')]
    lg:bg-[url('/banner.webp')]
    lg:pt-0
    bg-cover
    bg-center
    bg-no-repeat
    md:bg-top
    pt-[45vh]
    py-9
  "
>
      <Container className="lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-8 lg:items-center">

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end"></div>

          {/* TEXTO */}
          <div className="order-2 lg:order-1 flex flex-col justify-center  text-center lg:text-left ">
            <Typography
              as="h1"
              className=" text-white-custom"
            >
              <span className="text-blue-custom">
                Pare de viver na incerteza no fim do mês,
              </span>{" "}
              meu trabalho é ajudar você a aumentar seus agendamentos.
            </Typography>

            <Typography as="p" className="mx-auto lg:mx-0 mt-6 text-white-custom max-w-xl">
              Atuo como parceiro da sua empresa, tratando seus investimentos
              como se fossem meus, sempre buscando melhores resultados ao
              menor custo possível.
            </Typography>

            <div className="mt-8 flex justify-center lg:justify-start">
              <Button className="px-10 py-4 text-lg font-semibold cursor-pointer">FAÇA SEU ORÇAMENTO</Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default HeroBanner;
