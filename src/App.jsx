import AboutSection from "./sections/AboutSection";
import FAQ from "./sections/FAQ";
import HeroBanner from "./sections/HeroBanner";
import MethodologySection from "./sections/MethodologySection";
import SolutionSection from "./sections/SolutionSection";

function App() {
  const faqItems = [
    {
      title:
        "O Google Ads realmente funciona para profi ssionais da área da saúde?",
      text: "Sim, funciona, desde que seja feito da forma correta. O Google Ads conecta o seu consultório diretamente com pessoas que já estão procurando ativamente pelo seu serviço. O diferencial está na estratégia: entender o seu público, respeitar as normas do conselho de classe e estruturar campanhas focadas em gerar agendamentos reais, não apenas cliques.",
    },
    {
      title: "Em quanto tempo começo a ver resultados?",
      text: "O Google Ads permite gerar oportunidades desde os primeiros dias, mas resultados consistentes vêm com otimização contínua. Normalmente, nas primeiras semanas já é possível validar a estratégia, ajustar o público e melhorar a qualidade dos leads, buscando previsibilidade e constância ao longo do tempo.",
    },
    {
      title: "Existe garantia de agendamentos ou pacientes?",
      text: "Não existe garantia de número de pacientes, e qualquer profi ssional que prometa isso não está sendo transparente. O que eu garanto é uma estratégia sólida, tráfego altamente qualifi cado e oportunidades reais de agendamento. A conversão fi nal depende também do atendimento, preço e experiência do paciente.",
    },
    {
      title: "Preciso investir muito dinheiro em anúncios?",
      text: "Não. O investimento é defi nido de acordo com a realidade do seu negócio, sua especialidade e seus objetivos. A ideia não é “gastar mais”, mas sim investir melhor, buscando o menor custo possível por agendamento e mantendo o controle total do orçamento."
    },
    {
      title: "O investimento em anúncios é pago para quem?",
      text: "O valor investido em anúncios é pago diretamente ao Google, sem intermediação. Meu trabalho é a gestão estratégica dessas campanhas, cuidando para que cada real seja usado da forma mais eficiente possível, sempre com total transparência.",
    },
  ];
  return (
    <>
      <HeroBanner />
      <MethodologySection />
      <AboutSection />
      <SolutionSection />
      <FAQ items={faqItems} />
    </>
  )

}

export default App;