const workedMonths = "5 años";
const workedMonthsEn = "5 years";

//PROFILE TEXT - TEXTO DE PERFIL
const profileText = `Como desarrollador front-end con una trayectoria de ${workedMonths} en la
industria, cuento con un sólido entendimiento y habilidad para abstraer
los requerimientos que se presentan en cada proyecto. A lo largo de mi
carrera, he desarrollado landing pages eficaces, dashboards
administrativos. Mi historial incluye colaboraciones en proyectos de
envergadura para distinguidas instituciones bancarias y empresas líderes
en el sector de las telecomunicaciones. Mi experiencia me ha capacitado
para adaptarme con facilidad a una amplia variedad de códigos y proyectos
relacionados con JavaScript, lo que me permite aportar soluciones
efectivas en distintos contextos. Mi habilidad para integrarme con éxito
en equipos de trabajo y mantener una sincronía armoniosa contribuye a un
ambiente de colaboración productivo y eficiente.`;

const profileTextEn = `As a front-end developer with ${workedMonthsEn} of experience in the industry, I have a solid understanding and ability to abstract the requirements that arise in each project. Throughout my career, I have conceived and developed impactful landing pages and effective administrative dashboards. My background includes collaborations on large projects for distinguished banking institutions and leading companies in the telecommunications sector. My experience has enabled me to easily adapt to a wide variety of codes and projects related to JavaScript, which allows me to provide effective solutions in different contexts. My ability to successfully integrate into work teams and maintain harmonious synchronicity contributes to a productive and efficient collaborative environment.`;

//JOB EXPERIENCE - EXPERIENCIA LABORAL
const jobExperienceTitle = `Experiencia laboral (${workedMonths})`;
const jobExperienceTitleEn = `Work experience (${workedMonthsEn})`;
const jobExperienceData = [
  {
    title: "Front end developer en Bizagi, Bogotá",
    description: "marzo 2022 - actualmente",
  },
  {
    title: "Software Engineer II en Indra, Barranquilla",
    description: "agosto 2021 - enero 2022",
  },
  {
    title: "Analista de desarrollo en Red5g, Barranquilla",
    description: "octubre 2020 - agosto 2021",
  },
  {
    title: "Desarrollador web en TejidoDigital, Barranquilla",
    description: "marzo 2019 - octubre 2020",
  },
];

const jobExperienceDataEn = [
  {
    title: "Front end developer in Bizagi, Bogotá",
    description: "March 2022 - Now",
  },
  {
    title: "Software Engineer II in Indra, Barranquilla",
    description: "August 2021 - January 2022",
  },
  {
    title: "Development analyst in Red5g, Barranquilla",
    description: "October 2020 - August 2021",
  },
  {
    title: "Web developer in TejidoDigital, Barranquilla",
    description: "March 2019 - October 2020",
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
  },
  {
    title:
      "Jostin Rojas Moreno - It helpdesk regional supervisor en Sykes Colombia S.A.S",
    description: "+57 3043788467",
  },
];

const referenceDataEn = [
  {
    title: "Ruben Cabrera Ricaurte - Software Developer at Neoris",
    description: "+57 3164186222",
  },
  {
    title:
      "Jostin Rojas Moreno - It helpdesk regional supervisor at Sykes Colombia S.A.S",
    description: "+57 3043788467",
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
  {
    title: "Github",
    description: "https://github.com/le7els10",
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
  {
    title: "Github",
    description: "https://github.com/le7els10",
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
    value: 2,
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
