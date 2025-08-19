import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('about');

  const navigationItems = [
    { id: 'about', label: 'КТО Я', icon: 'User' },
    { id: 'rituals', label: 'ОБРЯДЫ', icon: 'Leaf' },
    { id: 'reviews', label: 'ОТЗЫВЫ', icon: 'MessageSquare' },
    { id: 'contact', label: 'СВЯЗЬ', icon: 'Mail' }
  ];

  const ritualTypes = [
    {
      id: 'christian',
      title: 'Христианской магией',
      description: 'Основана на работе с архангелами, ангелами, святыми, а также известными архетипами Пресвятой Девы и Отца Небесного.',
      icon: '✝️'
    },
    {
      id: 'runic',
      title: 'Рунической магией',
      description: 'Использование специальных знаков и символов (рун) для получения информации, предсказаний, влияния на окружающий мир.',
      icon: 'ᚱ'
    }
  ];

  const faqData = [
    { question: 'Как я могу связаться с вами?', answer: 'Вы можете написать мне через форму обратной связи или связаться любым удобным способом.' },
    { question: 'Как я могу вас отблагодарить?', answer: 'Благодарность принимается в любой форме - материальной или духовной, как подскажет сердце.' },
    { question: 'Вы практикуете порчу?', answer: 'Нет, я работаю только с белой магией и исцеляющими практиками.' },
    { question: 'Вы можете погадать на наши отношения с парнем/девушкой?', answer: 'Да, я провожу гадания на отношения и помогаю понять динамику взаимоотношений.' },
    { question: 'Сколько стоят ваши услуги?', answer: 'Стоимость услуг обсуждается индивидуально, в зависимости от сложности работы.' },
    { question: 'Со скольки лет вы принимаете?', answer: 'Я работаю с людьми любого возраста, но для несовершеннолетних требуется согласие родителей.' },
    { question: 'Чем конкретно вы занимаетесь?', answer: 'Провожу обряды, гадания, энергетические чистки, работаю с кармическими программами.' },
    { question: 'У вас есть ограничение в помощи по религии?', answer: 'Нет, я помогаю людям любых конфессий, главное - искренняя вера и открытое сердце.' }
  ];

  return (
    <div className="min-h-screen bg-mystic-gradient dark font-body text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="Sparkles" size={20} className="text-primary" />
              </div>
              <div>
                <h1 className="font-heading text-lg font-semibold">Раиса Ильинская</h1>
                <p className="text-sm text-primary">Маг</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-secondary/30 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex flex-col items-center py-4 px-2 transition-colors duration-200 ${
                  activeSection === item.id 
                    ? 'text-primary bg-primary/10' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={item.icon as any} size={20} className="mb-1" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-hero-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/80"></div>
        <div className="absolute inset-0">
          <img 
            src="/img/c483e9ce-197e-4ea2-94ca-8f77d28b77fc.jpg"
            alt="Mystical Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1">
              <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center">
                <img 
                  src="https://cdn.poehali.dev/files/668cc33c-f759-40d2-b05c-0392e16875a9.jpg"
                  alt="Раиса Ильинская"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Раиса Ильинская
          </h2>
          <p className="text-primary text-xl mb-8 animate-fade-in">Маг</p>
          <Button size="lg" className="animate-float font-heading">
            НАПИШИТЕ МНЕ <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-8 space-y-12">
        
        {/* About Section */}
        {activeSection === 'about' && (
          <section className="animate-fade-in">
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-4">
                    О
                  </div>
                  <h3 className="font-heading text-2xl font-semibold">Обо мне</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Магия пришла в мою жизнь очень рано. Я не понимала, как с этим справляться и как это 
                  контролировать. Не могла рассказать, что чувствую внутри. Думала, от меня 
                  откажутся. Уже с возрастом стала осознавать, что могу быть нужной, могу 
                  помогать людям и получать от них позитивную энергию, которая питает 
                  меня, как батарея питает теплом холодный дом. Мои дорогие сестры, товарищи, не 
                  стесняйтесь просить помощи, ведь наша сила в единстве. Постараюсь помочь 
                  вам, чем смогу. Сделаю все, что в моих силах. Моя магия не имеет цены. Если 
                  захотите, сможете отблагодарить меня после помощи, как пожелаете.
                </p>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Rituals Section */}
        {activeSection === 'rituals' && (
          <section className="animate-fade-in">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-4">
                Ч
              </div>
              <h3 className="font-heading text-2xl font-semibold">Чем я занимаюсь</h3>
            </div>
            
            <div className="space-y-6">
              {ritualTypes.map((ritual) => (
                <Card key={ritual.id} className="bg-card/50 backdrop-blur border-border hover:bg-card/70 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{ritual.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-heading text-xl font-semibold mb-2">{ritual.title}</h4>
                        <p className="text-muted-foreground">{ritual.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Reviews Section */}
        {activeSection === 'reviews' && (
          <section className="animate-fade-in">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-4">
                В
              </div>
              <h3 className="font-heading text-2xl font-semibold">Вопросы и ответы</h3>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg bg-card/30">
                  <AccordionTrigger className="px-6 py-4 font-heading hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="animate-fade-in">
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-4">Связь со мной</h3>
                <p className="text-muted-foreground mb-6">
                  Готова помочь вам в решении любых вопросов. Обращайтесь с открытым сердцем.
                </p>
                <Button size="lg" className="font-heading">
                  Написать мне
                </Button>
              </CardContent>
            </Card>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-border bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Раиса Ильинская. Магические услуги с любовью и заботой.
          </p>
        </div>
      </footer>
    </div>
  );
}