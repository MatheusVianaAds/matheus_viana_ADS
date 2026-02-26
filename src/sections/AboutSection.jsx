import Container from "@/components/Container";
import Typography from "@/components/Typography";

export default function AboutSection() {
  return (
    <section className="bg-black-custom lg:bg-black-gradient text-white-custom py-6 lg:py-0 lg:pt-10">
      <Container>
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-12 items-center">

          {/* IMAGEM */}
          <div className="flex flex-col justify-end mx-auto lg:justify-end lg:max-w-full h-full">
            <img
              src="/about.avif"
              alt="Matheus Viana"
              loading="lazy"
              className="
      object-contain
      mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]
      [-webkit-mask-image:linear-gradient(to_top,transparent_0%,black_20%,black_80%,transparent_100%)]
    "
            />
          </div>

          {/* TEXTO */}
          <div>
            <span className="inline-block bg-blue-custom text-white-custom px-5 py-2 rounded-2xl mb-6 text-[26px] font-bold font-Manrope">
              Quem está por trás?
            </span>

            <Typography as="h2" className="mb-6">
              Muito prazer, eu sou{" "}
              <span className="text-blue-custom">Matheus Viana.</span>
            </Typography>

            <Typography as="p" className="mb-4 text-white-custom  leading-relaxed">
              Agenda vazia, contas se acumulando, trabalho mal remunerado e aquela
              viagem de fim de ano que você planejou há meses sendo adiada mais uma vez.
            </Typography>

            <Typography as="p" className="mb-4 text-white-custom  leading-relaxed">
              Eu sei como é se sentir frustrado e <strong className="font-bold">viver na incerteza.</strong> Mas também sei
              exatamente qual caminho trilhar e quais estratégias aplicar para contornar
              essa situação e colocar mais dinheiro no seu bolso, de forma consistente.
            </Typography>

            <Typography as="p" className="mb-4 text-white-custom  leading-relaxed">
              Atuo no mercado da área da saúde, <strong className="font-bold">ajudando médicos, dentistas,
                psicólogos e outros profissionais a aumentarem o número de
                agendamentos</strong> por meio de um planejamento estratégico focado
              em alcançar pessoas que realmente estão interessadas no seu serviço.
            </Typography>

            <Typography as="p" className="text-white-custom leading-relaxed">
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
