import Container from "../components/Container";
import Typography from "../components/Typography";
import MethodCard from "../components/MethodCard";
import Button from "../components/Button";

const MethodologySection = () => {

    const cards = [
        {
            "id": 1,
            "before": "Ninguém entende melhor do negócio do que o dono.",
            "strong": "Meu papel é aplicar as melhores estratégias",
            "after": "para aumentar o número de agendamentos."
        },
        {
            "id": 2,
            "before": "Antes de qualquer anúncio,",
            "strong": "entendo a fundo a realidade do seu negócio",
            "after": "o perfil dos pacientes e a situação da sua agenda para criar uma estratégia personalizada e eficiente."
        },
        {
            "id": 3,
            "before": "",
            "strong": "Trabalhamos juntos para melhorar seus resultados,",
            "after": "tratando cada real investido com o mesmo cuidado que eu teria no meu próprio negócio."
        }
    ]


    return (
        <section className="bg-[#f5f5f5] py-14">

            <Container className="max-w-[1200px]">

                {/* Título principal */}
                <div className="text-center mb-16">
                    <Typography as="h2" className=" text-shadow-gray-dark  mx-auto ">
                        Como vou fazer você lotar sua agenda rapidamente?
                    </Typography>
                </div>

                {/* Card azul superior */}
                <div className="flex justify-center mb-16">
                    <div className="
            bg-blue-200
            rounded-2xl
            px-8
            py-6
            max-w-2xl
            w-full
            flex
            items-center
            gap-4
          ">
                        <div className="w-12 h-12 bg-blue-custom rounded-full" />

                        <Typography as="p" className=" text-black ">
                            <strong>NÃO VOU</strong>, esse é o EXATO perfil de cliente que eu <strong>NÃO ACEITO aqui</strong>.
                        </Typography>
                    </div>
                </div>

                {/* Divisor */}
                <div className="flex justify-center mb-16">
                    <div className="w-24 h-1 bg-blue-custom rounded-full" />
                </div>

                {/* Subtítulo */}
                <div className="text-center mb-16">
                    <Typography as="h2" className="  text-gray-dark  mx-auto">
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
