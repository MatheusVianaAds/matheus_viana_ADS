import Button from "../components/Button";
import Container from "../components/Container";
import Typography from "../components/Typography";

export default function SolutionSection() {
    return (
        <section className="bg-[#F3F4F6] py-24">
            <Container className="max-w-[1200px]">
                {/* HEADER */}
                <div className="text-center mb-16">
                    <Typography as="h2" className="mb-4">
                        Solução que eu ofereço
                    </Typography>

                    <Typography as="p" className="max-w-4xl mx-auto text-gray-600">
                        A solução que eu ofereço é simples:{" "}
                        <span className="text-blue-custom font-semibold">
                            aumentar o seu número de agendamentos.
                        </span>{" "}
                        Sou transparente e direto. Ao se tornar parceiro, vou fazer de tudo
                        para otimizar seu tempo e colocar ainda mais dinheiro no seu bolso.
                        Mas como isso funciona?
                    </Typography>
                </div>

                <div className="space-y-8">
                    {/* CARD 1 */}
                    <div className="bg-white-custom rounded-2xl shadow-md lg:h-[250px] grid md:grid-cols-3 items-center gap-8 lg:pr-8">

                        <div className="bg-blue-custom rounded-2xl flex h-full items-center justify-center ">
                            <img src="/icons/ads.svg" alt="Anúncios Online" className="h-16" loading="lazy" />
                        </div>

                        <div className="md:col-span-2 p-4">
                            <Typography as="h3" className="mb-4">
                                Anúncios Online (Tráfego pago)
                            </Typography>

                            <Typography as="p" className="text-gray-600">
                                Estruturo funis de marketing focados em atrair pacientes que já estão
                                buscando ativamente pelos serviços que você oferece, utilizando
                                plataformas de anúncios online (Google Ads e Meta Ads) para gerar
                                leads qualificados.
                            </Typography>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="bg-white-custom rounded-2xl shadow-md lg:h-[250px] grid md:grid-cols-3 items-center gap-8 lg:pl-8">

                        <div className="md:order-2 bg-blue-custom rounded-2xl flex items-center justify-center h-full ">
                            <img src="/icons/diagnostic.svg" alt="Diagnóstico Comercial" className="h-16" loading="lazy" />
                        </div>

                        <div className="md:col-span-2 md:order-1 p-4">
                            <Typography as="h3" className="mb-4">
                                Diagnóstico Comercial
                            </Typography>

                            <Typography as="p" className="text-gray-600">
                                Realizo uma análise completa da sua oferta, do atendimento e da
                                experiência de venda para identificar possíveis gargalos que estejam
                                travando seus resultados e garantir que os leads gerados pelo
                                marketing realmente se transformem em dinheiro no seu bolso.
                            </Typography>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="bg-white-custom rounded-2xl shadow-md lg:h-[250px] grid md:grid-cols-3 items-center gap-8 lg:pr-8">

                        <div className="bg-blue-custom rounded-2xl flex h-full items-center justify-center ">
                            <img src="/icons/data.svg" alt="Insight Guiado por Dados" className="h-16" loading="lazy" />
                        </div>

                        <div className="md:col-span-2 p-4">
                            <Typography as="h3" className="mb-4">
                                Insight Guiado por Dados
                            </Typography>

                            <Typography as="p" className="text-gray-600">
                                Após entender em que pé está o seu negócio, realizo ajustes
                                práticos no seu processo comercial, ajudando sua empresa a
                                entender quais são as etapas do seu funil de vendas e ajudando
                                você a lotar sua agenda no fim do mês.
                            </Typography>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-8 flex justify-center">
                    <Button className="px-10 py-4 text-lg font-semibold cursor-pointer">FAÇA SEU ORÇAMENTO</Button>
                </div>
            </Container>
        </section>
    );
}
