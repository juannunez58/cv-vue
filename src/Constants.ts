const workedMonths = "5 años";
const workedMonthsEn = "5 years";

//PROFILE TEXT - TEXTO DE PERFIL
const profileText = `Como desarrollador front-end con una trayectoria de ${workedMonths} en la
industria, cuento con un sólido entendimiento y habilidad para abstraer
los requerimientos que se presentan en cada proyecto. A lo largo de mi
carrera, he estado encargado de estimar y desarrollar landing pages eficaces, dashboards
administrativos, agregar nuevas funcionalidades a productos y dar soporte a dichos productos. Mi historial incluye colaboraciones en proyectos de
envergadura para distinguidas instituciones bancarias y empresas líderes
en el sector de las telecomunicaciones. Mi experiencia me ha capacitado
para adaptarme con facilidad a una amplia variedad de códigos y proyectos
relacionados con JavaScript, lo que me permite aportar soluciones
efectivas en distintos contextos. Mi habilidad para integrarme con éxito
en equipos de trabajo y mantener una sincronía armoniosa contribuye a un
ambiente de colaboración productivo y eficiente.`;

const profileTextEn = `
As a front-end developer with ${workedMonthsEn} of experience in the industry, I have a solid understanding and ability to abstract the requirements presented in each project. 
Throughout my career, I have been in charge of estimating and developing effective
landing pages, administrative dashboards, adding new functionalities to products, and
supporting said products. My track record includes collaborations on large-scale projects for distinguished banking institutions and leading companies in the telecommunications sector. My experience has equipped me to easily adapt to a wide variety of JavaScript-related code and projects, allowing me to provide effective solutions in different contexts. My ability to successfully integrate into teams and maintain harmonious synchronization contributes to a productive and efficient collaborative environment.`;

//JOB EXPERIENCE - EXPERIENCIA LABORAL
const jobExperienceTitle = `Experiencia laboral (${workedMonths})`;
const jobExperienceTitleEn = `Work experience (${workedMonthsEn})`;
const jobExperienceData = [
  {
    title: "Front end developer en Bizagi, Bogotá",
    description: "marzo 2022 - actualmente",
    experience: `
      En Bizagi estoy encargado de planear, estimar, desarrollar y dar soporte a nuevas funcionalidades para los productos de bizagi (editor, workportal, Apps) también estoy encargado de dar consultoría interna para los demás equipos de desarrollo.
      Se utiliza React, Angular, Javascript, Jquery, Sass, Css, Less, Html
      `
  },
  {
    title: "Software Engineer II en Indra, Barranquilla",
    description: "agosto 2021 - enero 2022",
    experience: `
      En Indra fui asignado al cliente de Movistar de Ecuador, estaba encargado de agregar funcionalidades y dar soporte a su aplicación web de pagos y recargas. 
      También debía agregar funcionalidades y dar soporte a su web administrativa que daba de alta a usuarios nuevos.
      En esta empresa utilizaba React, Php, Javascript, Jquery, Css, Sass, Html
    `
  },
  {
    title: "Fron end developer como Freelance, Barranquilla",
    description: "agosto 2021 - actualmente",
    experience: `
      Me dedico a estimar, desarrollar y dar soporte a landing pages y dashboards administrativos para diferentes clientes.
      En este caso he participado para clientes como Quirón virtual y Cesco y estoy utilizando los siguientes lenguajes de desarrollo: React, Vue, Javascript, Jquery, Css, Sass, Html
    `
  },
  {
    title: "Analista de desarrollo en Red5g, Barranquilla",
    description: "octubre 2020 - agosto 2021",
    experience: `
      Me dedicaba a estimar, desarrollar y dar soporte a nuevas funcionalidades, en este caso para un producto que es la página encargada de desembolsar créditos de Bancoomeva.
      En esta empresa se utilizaban los siguientes lenguajes de desarrollo: React, Javascript, Jquery, Css, Sass, Html
    `
  },
  {
    title: "Desarrollador web en TejidoDigital, Barranquilla",
    description: "marzo 2019 - octubre 2020",
    experience: "Encargado de estimar, desarrollar y dar soporte a múltiples landing pages para varios clientes del tipo mostrar la información principal de x empresa a que se dedican y como contactarlos. También participé en el desarrollo de una plataforma administrativa para llevar los datos del proceso de calidad de una empresa llamada Ditar que se dedica a la impresión y fabricación de bolsas de papel y empaques sustentables. Estuve presente en un proyecto para la gobernación de Cordoba que consistía en administrar los datos de los lotes de las personas y con estos datos(coordenadas) dibujar el polígono en el mapa. En esta empresa se utilizaba como lenguajes de desarrollo: Php, Sass, Css, Javascript, Jquery"
  },
];

const jobExperienceDataEn = [
  {
    title: "Front end developer in Bizagi, Bogotá",
    description: "March 2022 - Now",
    experience: `
      At Bizagi I am in charge of planning, estimating, developing and supporting new functionalities for Bizagi products (editor, workportal, Apps) I am also in charge of providing internal consulting for the other development teams.
      React, Angular, Javascript, Jquery, Sass, Css, Less, Html are used.
    `
  },
  {
    title: "Software Engineer II in Indra, Barranquilla",
    description: "August 2021 - January 2022",
    experience: `
      At Indra I was assigned to the Movistar client in Ecuador, I was in charge of adding functionalities and supporting their web application for payments and recharges.
      I also had to add functionalities and support their administrative website that registered new users.
      At this company I used React, Php, Javascript, Jquery, Css, Sass, Html
    `
  },
  {
    title: "Fron end developer as a Freelance, Barranquilla",
    description: "August 2021 - Now",
    experience: `
      I am dedicated to estimate, develop new functionalities and support landing pages and administrative dashboards for different clients.
      In this case I have participated for clients such as Quirón virtual and Cesco and i'm using the following development languages: React, Vue, Javascript, Jquery, Css, Sass, Html
    `
  },
  {
    title: "Development analyst in Red5g, Barranquilla",
    description: "October 2020 - August 2021",
    experience: `
      I was dedicated to estimating, developing and supporting new functionalities, in this case for a product that is the page in charge of disbursing Bancoomeva loans.
      The following development languages ​​were used in this company: React, Javascript, Jquery, Css, Sass, Html
    `
  },
  {
    title: "Web developer in TejidoDigital, Barranquilla",
    description: "March 2019 - October 2020",
    experience: `
      I was in charge of estimating, developing and supporting multiple landing pages for various clients, such as showing the main information about a company, what they do and how to contact them. I also participated in the development of an administrative platform to manage the quality process data of a company called Ditar, which is dedicated to the printing and manufacturing of paper bags and sustainable packaging.
      I was involved in a project for the government of Cordoba that consisted of managing the data of people's lots and using this data (coordinates) drawing the polygon on the map.
      In this company, the following development languages ​​were used: Php, Sass, Css, Javascript, Jquery 
    `
  },
];

//EDUCATION - EDUCACION
const educationData = [
  {
    title:
      "Ingeniero de sistemas, Universidad Autónoma del Caribe, Barranquilla",
    description: "febrero 2015 - marzo 2020",
  },
];

const educationDataEn = [
  {
    title: "Systems Engineer, Autónoma del Caribe college, Barranquilla",
    description: "February 2015 - March 2020",
  },
];

//REFERENCIAS
const referenceData = [
  {
    title: "Ruben Cabrera Ricaurte - Software Developer en Neoris",
    description: "+57 3164186222",
    type: "phone",
  },
  {
    title:
      "Jostin Rojas Moreno - It helpdesk regional supervisor en Sykes Colombia S.A.S",
    description: "+57 3043788467",
    type: "phone",
  },
];

const referenceDataEn = [
  {
    title: "Ruben Cabrera Ricaurte - Software Developer at Neoris",
    description: "+57 3164186222",
    type: "phone",
  },
  {
    title:
      "Jostin Rojas Moreno - It helpdesk regional supervisor at Sykes Colombia S.A.S",
    description: "+57 3043788467",
    type: "phone",
  },
];

//CURSOS
const cursosData = [
  {
    title: "Microsoft Certified: Azure Fundamentals - Microsoft",
    description: "noviembre 2022",
  },
  {
    title: "Javascript unit testing - Udemy",
    description: "agosto 2022",
  },
  {
    title: "EF SET English Certificate 72/100 (C2 Proficient)",
    description: "febrero 2022",
  },
  {
    title: "Angular - Udemy",
    description: "agosto 2021",
  },
  {
    title: "React native - Udemy",
    description: "mayo 2021",
  },
  {
    title: "React js - Udemy",
    description: "julio 2020",
  },
  {
    title: "Certificado de Inglés avanzado C1, Cesfa",
    description: "diciembre 2014",
  },
];

const cursosDataEn = [
  {
    title: "Microsoft Certified: Azure Fundamentals - Microsoft",
    description: "November 2022",
  },
  {
    title: "Javascript unit testing - Udemy",
    description: "August 2022",
  },
  {
    title: "EF SET English Certificate 72/100 (C2 Proficient)",
    description: "February 2022",
  },
  {
    title: "Angular - Udemy",
    description: "August 2021",
  },
  {
    title: "React native - Udemy",
    description: "May 2021",
  },
  {
    title: "React js - Udemy",
    description: "July 2020",
  },
  {
    title: "Advanced English Certificate C1, Cesfa",
    description: "December 2014",
  },
];

//DATOS PERSONALES
const personalData = [
  {
    title: "Correo",
    description: "aguilar.jdn@gmail.com",
    type: "email",
  },
  {
    title: "Teléfono",
    description: "+57 3002391674",
    type: "phone",
  },
  {
    title: "Linkedin",
    description:
      "https://www.linkedin.com/in/juan-david-nuñez-aguilar-92b729212/",
    type: "url",
  },
];

const personalDataEn = [
  {
    title: "Email",
    description: "aguilar.jdn@gmail.com",
    type: "email",
  },
  {
    title: "Cellphone",
    description: "+57 3002391674",
    type: "phone",
  },
  {
    title: "Linkedin",
    description:
      "https://www.linkedin.com/in/juan-david-nuñez-aguilar-92b729212/",
    type: "url",
  },
];

//Habilidades
const habilitiesData = [
  {
    title: "Javascript",
    value: 3,
  },
  {
    title: "React js",
    value: 3,
  },
  {
    title: "Typescript",
    value: 3,
  },
  {
    title: "Jquery",
    value: 3,
  },
  {
    title: "Html5",
    value: 3,
  },
  {
    title: "Css",
    value: 3,
  },
  {
    title: "Sass",
    value: 3,
  },
  {
    title: "Git",
    value: 3,
  },
  {
    title: "Vue",
    value: 2,
  },
  {
    title: "Angular",
    value: 1,
  },
  {
    title: "Tailwind",
    value: 1,
  },
  {
    title: "Jest",
    value: 1,
  },

  {
    title: "Mysql",
    value: 1,
  },
];
export {
  profileText,
  jobExperienceTitle,
  jobExperienceData,
  educationData,
  referenceData,
  cursosData,
  personalData,
  habilitiesData,
  profileTextEn,
  jobExperienceTitleEn,
  jobExperienceDataEn,
  educationDataEn,
  referenceDataEn,
  cursosDataEn,
  personalDataEn,
};
