import { useEffect, useState } from "react";
import Container from "../components/Container";
import Typography from "../components/Typography";
import MethodCard from "../components/MethodCard";
import Button from "../components/Button";

const MethodologySection = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/methodology.json");
                const data = await response.json();
                setCards(data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="bg-[#f5f5f5] py-14">

            <Container>

                {/* Título principal */}
                <div className="text-center mb-16">
                    <Typography as="h2" className="w-full text-shadow-gray-dark lg:w-[70%] mx-auto ">
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
                    <Typography as="h2" className=" w-full text-gray-dark lg:w-[70%] mx-auto">
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

                {/* Botão */}
                <div className="flex justify-center mt-10">
                    <Button className="px-10 py-4 text-lg">
                        FAÇA SEU ORÇAMENTO
                    </Button>
                </div>

            </Container>
        </section>
    );
};

export default MethodologySection;
