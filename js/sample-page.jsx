import React from "react";
import { Link } from "react-router";
import {
  Code,
  CustomerQuote, CustomerQuotes,
  DropdownMenu, DropdownToggle,
  Footer, FooterAddress,
  Hero,
  HorizontalSplit,
  ImageList, ImageListItem,
  Navbar, NavItem,
  Page,
  PricingPlan, PricingTable,
  Section,
  SignupInline, SignupModal,
  Stripe,
  Team,
  TeamMember,
} from "neal-react";

const brandName = "Колыгин Дмитрий";
const brand = <span>{brandName}</span>;

const onSignup = ({ name: name, email: email, password: password }) => Stripe.StripeHandler.open({
  name: "Stripe Integration Included",
  description: "Like this? Donate $5 <3",
  panelLabel: "Donate {{amount}}",
  email: email,
  amount: 500,
});

const businessAddress = (
  <address>
    <strong>{brandName}</strong><br/>
    1337 Market Street, Suite 1337<br/>
    San Francisco, CA 94103<br/>
    +1 (123) 456-7890
  </address>
);

const pricingPlan1 = {
  name: "Personal",
  description: "Describe your plans with easy-to-use pricing tables. Each plan provides callbacks to handle visitor clicks.",
  price: "$99",
  features: {
    "Describe pricing plans as JSON": true,
    "Features can be active/inactive": true,
    "Works on mobile": true,
    "Custom callbacks": true,
    "Extra Feature 1": false,
    "Extra Feature 2": false,
  },
  onClick: onSignup,
};

const pricingPlan2 = Object.assign({}, pricingPlan1, {
  price: "$499",
  name: "Startup",
  features: Object.assign({}, pricingPlan1.features, {
    "Extra Feature 1": true,
  }),
});

const pricingPlan3 = Object.assign({}, pricingPlan2, {
  price: "$999",
  name: "Enterprise",
  features: Object.assign({}, pricingPlan2.features, {
    "Extra Feature 2": true,
  }),
});

const sampleCode = `<Page>
  <Hero><h1>{ /* Content */ }</h1></Hero>
  <Section heading="Hello!">
    <HorizontalSplit padding="md"> { /* Content */ } </HorizontalSplit>
  </Section>
  <Section>
    <Team>
      <TeamMember name="Link" title="Co-founder" imageUrl="img/link.jpg"> { /* Description */ } </TeamMember>
      <TeamMember name="Yoshi" title="Co-founder" imageUrl="img/yoshi.jpg"> { /* Description */ } </TeamMember>
    </Team>
  </Section>
  <Section>
    <PricingTable>
      <PricingPlan {... pricingPlan1} />
      <PricingPlan {... pricingPlan2} />
      <PricingPlan {... pricingPlan3} />
    </PricingTable>
    <SignupInline onSubmit={onSignupCallback}/>
  </Section>
</Page>
`;

export default (props) => {
  return (
    <Page>

      <Navbar brand={brand}>
        <NavItem><Link to="Home" className="nav-link">Главная</Link></NavItem>
        <NavItem><Link to="Home" className="nav-link">Услуги</Link></NavItem>
        <NavItem><Link to="Home" className="nav-link">Обо мне</Link></NavItem>
        <NavItem><Link to="Home" className="nav-link">Публикации</Link></NavItem>
        <NavItem><Link to="Home" className="nav-link">Контакты</Link></NavItem>
        <NavItem dropdown={true}>
          <DropdownToggle>Github</DropdownToggle>
          <DropdownMenu>
            <a href="https://github.com/dennybritz/neal-react" className="dropdown-item" target="_blank">
              Neal React
            </a>
            <a href="https://github.com/dennybritz/neal-sample" className="dropdown-item" target="_blank">
              Sample Page
            </a>
          </DropdownMenu>
        </NavItem>
      </Navbar>

      <Hero backgroundImage="img/hero-bg-01.jpg"
        className="text-xs-center">
        <img src="img/people/новое_фото.jpg" alt="" className="round"/>
        <p className="lead">Здравствуйте, меня зовут Дмитрий Колыгин.
          Я - психолог, специализируюсь на индивидуальной и семейной психологи.
          Помогу изменить качество Вашей жизни к лучшему:
          Снизить уровень стресса и тревоги;
          Наладить семейные отношения(супружеские/детско-родительские);
          Преодолеть жизненные кризисы или психологические травмы;
          Разобраться в себе и стать активным автором собственной жизни;
          8 925 464 86 10 | kolygin.d@gmail.com</p>
        <p>
        </p>
      </Hero>

      <Section>
        <CustomerQuotes>
          <CustomerQuote name="Paul Graham" title="YC" imageUrl="img/people/paulgraham.jpg">
            <p>What I tell founders is not to sweat the business model too much at first. The most important task at first is to build something people want. If you don't do that, it won't matter how clever your business model is.</p>
          </CustomerQuote>
          <CustomerQuote name="Elon Musk" imageUrl="img/people/elonmusk.jpg">
            <p>I came to the conclusion that we should aspire to increase the scope and scale of human consciousness in order to better understand what questions to ask. Really, the only thing that makes sense is to strive for greater collective enlightenment.</p>
          </CustomerQuote>
          <CustomerQuote name="Reid Hoffman" title="Linkedin" imageUrl="img/people/reidhoffman.jpg">
            <p>If you are not embarrassed by the first version of your product, you've launched too late.</p>
          </CustomerQuote>
        </CustomerQuotes>
      </Section>

      <Section>
        <Team>
          <TeamMember name="Индивидуальная консультация психолога" title="" imageUrl="http://mariadolgopolova.ru/images/individual-counseling-of-a-psychologist.png">
            Если вы оказались в трудной жизненной ситуации, утратили душевный покой, у вас есть вопросы к себе и близким, сомнения, страхи, вы можете прийти ко мне на консультацию для того, чтобы помочь себе с этим справиться.
          </TeamMember>
          <TeamMember name="Консультация психолога онлайн" title="" imageUrl="http://mariadolgopolova.ru/images/psychological-counseling-online-skype.png">
            Я также консультирую в Skype™. Занимаюсь адаптацией классических техник в онлайн-формат. Как бы сильно я ни ценила личное общение, жизнь вносит свои коррективы. Несовпадение расписаний, загруженный график работы, эмиграция, маленькие дети и другие радости жизни не обязаны быть помехой для психологической работы.
          </TeamMember>
          <TeamMember name="Психологическое консультирование пар" title="" imageUrl="http://mariadolgopolova.ru/images/counseling-couples.png">
            Для супружеских и других пар, которые хотят изменить, прояснить или улучшить отношения друг с другом.
          </TeamMember>
          <TeamMember name="Семейное консультирование для детей и родителей" title="" imageUrl="http://mariadolgopolova.ru/images/family-counseling-children-and-parents.png">
            ‒ которые хотят восстановить, улучшить отношения с «трудным» ребенком / выбирают для себя подходящую родительскую позицию и линию поведения / ищут новые способы помочь ребенку (замкнутость, агрессивность, повторяющиеся неудачи, низкий контроль эмоций)
          </TeamMember>
        </Team>
      </Section>

      <Footer brandName={brandName}
        facebookUrl="http://www.facebook.com"
        twitterUrl="http://www.twitter.com/dennybritz"
        githubUrl="https://github.com/dennybritz/neal-react"
        address={businessAddress}>
      </Footer>
    </Page>
  );
};
