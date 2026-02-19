import Container from "../components/Container";
import Typography from "../components/Typography";

export default function AboutSection() {
  return (
    <section className="bg-[#0B0F19] text-white py-24 lg:py-0 lg:pt-10">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* IMAGEM */}
          <div className="flex justify-center mx-auto lg:justify-start max-w-[400px] lg:max-w-full">
            <img
              src="/banner-1600.webp"
              alt="Matheus Viana"
              className="object-contain "
              loading="lazy"
            />
          </div>

          {/* TEXTO */}
          <div>
            <span className="inline-block bg-blue-600 text-white text-sm px-5 py-2 rounded-full mb-6">
              Quem está por trás?
            </span>

            <Typography as="h2" className="mb-6">
              Muito prazer, eu sou{" "}
              <span className="text-blue-500">Matheus Viana.</span>
            </Typography>

            <Typography as="p" className="mb-4 text-gray-300 leading-relaxed">
              Agenda vazia, contas se acumulando, trabalho mal remunerado e aquela
              viagem de fim de ano que você planejou há meses sendo adiada mais uma vez.
            </Typography>

            <Typography as="p" className="mb-4 text-gray-300 leading-relaxed">
              Eu sei como é se sentir frustrado e viver na incerteza. Mas também sei
              exatamente qual caminho trilhar e quais estratégias aplicar para contornar
              essa situação e colocar mais dinheiro no seu bolso, de forma consistente.
            </Typography>

            <Typography as="p" className="mb-4 text-gray-300 leading-relaxed">
              Atuo no mercado da área da saúde, ajudando médicos, dentistas,
              psicólogos e outros profissionais a aumentarem o número de
              agendamentos por meio de um planejamento estratégico focado
              em alcançar pessoas que realmente estão interessadas no seu serviço.
            </Typography>

            <Typography as="p" className="text-gray-300 leading-relaxed">
              Atuo como parceiro, com visão de dono, sempre buscando o melhor
              resultado possível com o menor custo, visando sempre o melhor
              para sua empresa.
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
}
