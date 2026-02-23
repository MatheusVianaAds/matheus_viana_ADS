import { useState } from 'react';
import Container from '@/components/Container';
import FAQItem from '@/components/FAQItem';
import Button from '@/components/Button';
import Typography from '@/components/Typography';

const FAQ = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 ">
          {/* COLUNA DIREITA — SUPORTE */}
          <div className="order-1 lg:order-2 flex flex-col gap-6 text-center lg:text-start">
            <Typography as='h2'>
              Dúvidas frequentes
            </Typography>

            <Typography as='p'>
              Se ainda restou alguma dúvida, fale diretamente comigo e entenda
              se essa solução faz sentido para o seu negócio.
            </Typography>
            <div>
              <Button className="px-10 py-4 text-lg font-semibold cursor-pointer">FAÇA SEU ORÇAMENTO</Button>
            </div>
          </div>

          {/* COLUNA ESQUERDA — FAQ */}
          <div className="order-2 lg:order-1 rounded-2xl bg-white">
            <ul className='flex flex-col gap-4'>
              {items.map((item, index) => (
                <FAQItem
                  key={index}
                  title={item.title}
                  text={item.text}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default FAQ