import Container from "@/components/Container";
import Typography from "@/components/Typography";
import MethodCard from "@/components/MethodCard";
import Button from "@/components/Button";

const MethodologySection = () => {

    const cards = [
        {
            id: 1,
            before: "Ninguém entende melhor do negócio do que o dono.",
            strong: "Meu papel é aplicar as melhores estratégias",
            after: "para aumentar o número de agendamentos.",
            icon: "/icons/entendimento.png"

        },
        {
            id: 2,
            before: "Antes de qualquer anúncio,",
            strong: "entendo a fundo a realidade do seu negócio",
            after: "o perfil dos pacientes e a situação da sua agenda para criar uma estratégia personalizada e eficiente.",
            icon: "/icons/plano_estrategico.png"
        },
        {
            id: 3,
            before: "",
            strong: "Trabalhamos juntos para melhorar seus resultados,",
            after: "tratando cada real investido com o mesmo cuidado que eu teria no meu próprio negócio.",
            icon: "/icons/trabalho_junto.png"
        }
    ]


    return (
        <section className="bg-[#f5f5f5] py-14">

            <Container className="max-w-[1200px]">

                {/* Título principal */}
                <div className="text-center mb-16">
                    <Typography as="h2" className=" text-shadow-gray-dark  max-w-[900px] mx-auto ">
                        Como vou fazer você lotar sua agenda rapidamente?
                    </Typography>
                </div>

                {/* Card azul superior */}
                <div className="flex justify-center mb-16">
                    <div className="
            bg-blue-light-custom
            rounded-2xl
            px-14
            py-10
            max-w-[880px]
            w-full
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-4
            lg:gap-10

            text-center
          ">
                        <div className="w-20 aspect-square bg-blue-custom rounded-full overflow-hidden flex items-center justify-center">
                            <img
                                src="/icons/pare.png"
                                alt=""
                                className="w-12 h-12 object-cover"
                                loading="lazy"
                            />
                        </div>

                        <Typography as="custom" className=" text-black-custom text-[27px]/7 font-light ">
                            <strong className="font-bold">NÃO VOU</strong>, esse é o <strong className="font-bold">EXATO</strong> perfil de cliente que eu <strong className="font-bold">NÃO ACEITO aqui</strong>.
                        </Typography>


                    </div>
                </div>

                {/* Divisor */}
                <div className="flex justify-center mb-16">
                    <div className="w-[70px] h-[5px] bg-blue-custom " />
                </div>

                {/* Subtítulo */}
                <div className="text-center mb-16">
                    <Typography as="h3" className="text-gray-dark  mx-auto">
                        Como eu trabalho? Como confiar em minha metodologia?
                    </Typography>
                </div>

                {/* Grid de Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card) => (
                        <MethodCard
                            key={card.id}
                            before={card.before}
                            strong={card.strong}
                            after={card.after}
                            icon={card.icon}
                        />
                    ))}
                </div>

                {/* Texto final */}
                <div className="text-center mt-16 max-w-3xl mx-auto">
                    <Typography as="p" className="text-gray-dark">
                        <strong>
                            O resultado desse processo é mais agendamentos e previsibilidade,
                            para que você deixe de viver refém das contas no fim do mês.
                        </strong>
                    </Typography>
                </div>

                <div className="mt-8 flex justify-center">
                    <Button className="px-10 py-4 text-lg font-semibold cursor-pointer">FAÇA SEU ORÇAMENTO</Button>
                </div>

            </Container>
        </section>
    );
};

export default MethodologySection;
