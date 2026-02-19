import Container from "./Container";
import Button from "./Button";
import Typography from "./Typography";
import banner480 from "../assets/banner-480.webp";
import banner768 from "../assets/banner-768.webp";
import banner1200 from "../assets/banner-1200.webp";
import banner1600 from "../assets/banner-1600.webp";


const HeroBanner = () => {
  return (
    <section className="bg-black-gradient text-white-custom">
      <Container className="pt-20 pb-8 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-center">


          {/* IMAGEM */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <img
              src={banner1600} // fallback padrão
              srcSet={`
                ${banner480} 480w,
                ${banner768} 768w,
                ${banner1200} 1200w,
                ${banner1600} 1600w
              `}
              sizes="
                (max-width: 576px) 90vw,
                (max-width: 1200px) 50vw,
                600px
              "
              alt="Profissional"
              className="w-full max-w-[800px] object-contain"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </div>

          {/* TEXTO */}
          <div className="order-2 lg:order-1 flex flex-col justify-center  text-center lg:text-left">
            <Typography
              as="h1"
              className="text-3xl md:text-5xl font-bold leading-tight"
            >
              <span className="text-blue-custom">
                Pare de viver na incerteza no fim do mês,
              </span>{" "}
              meu trabalho é ajudar você a aumentar seus agendamentos.
            </Typography>

            <Typography as="p" className="mx-auto lg:mx-0 mt-6 text-lg text-gray-200 max-w-xl ">
              Atuo como parceiro da sua empresa, tratando seus investimentos
              como se fossem meus, sempre buscando melhores resultados ao
              menor custo possível.
            </Typography>

            <div className="mt-8 flex justify-center lg:justify-start">

              <a
                href="https://api.whatsapp.com/send/?phone=5511975099618&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="px-10 py-4 text-lg font-semibold cursor-pointer"> FAÇA SEU ORÇAMENTO</Button>

              </a>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default HeroBanner;
