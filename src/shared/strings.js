import { FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa';
//import { SiCodewars } from 'react-icons/si';

import Perfil from '../assets/images/lbm3.png';
import logo from '../assets/images/logolbm.png';

import LogoBootstrap from '../assets/images/icons/bootstrap.svg';
import LogoCPlusPlus from '../assets/images/icons/CPlusPlus.svg';
import LogoCss from '../assets/images/icons/css.svg';
import LogoExpress from '../assets/images/icons/express.svg';
import LogoFirebase from '../assets/images/icons/firebase.svg';
import LogoGit from '../assets/images/icons/git.svg';
import LogoHeroku from '../assets/images/icons/heroku.svg';
import LogoHtml from '../assets/images/icons/html.svg';
import LogoJava from '../assets/images/icons/java.svg';
import LogoJs from '../assets/images/icons/js.svg';
import LogoMongodb from '../assets/images/icons/mongodb.svg';
import LogoMysql from '../assets/images/icons/mysql.svg';
import LogoNetlify from '../assets/images/icons/netlify.svg';
import LogoNodejs from '../assets/images/icons/nodejs.svg';
import LogoReact from '../assets/images/icons/react.svg';
import LogoSqlServer from '../assets/images/icons/sqlServer.svg';
import Proyecto1 from '../assets/images/capturas/Proyecto1.png';
import Proyecto2 from '../assets/images/capturas/Proyecto2.png';
import Proyecto3 from '../assets/images/capturas/Proyecto3.png';
import Proyecto4 from '../assets/images/capturas/Proyecto4.png';


export const strings = {
    es: {
        lang: 'Idioma',
        langs: [
            { id: 'es', lang: 'Español' }, { id: 'en', lang: 'Inglés' }
        ],
        copyright: '© Copyright 2022',
        title: 'Hola, mi nombre es Luis Alberto Balam Mukul',
        subtitle: 'Soy Licenciado en Informática con una Maestría en Tecnologías de la Información',
        description: `Tengo más de 25 años de experiencia como docente, en instituciones de nivel Medio superior 
        y Superior, impartiendo asignaturas relacionadas con las Tecnologías de la Información.
        En Julio de 2021 inicié con una actualización muy importante en un area que había descuidado un poco, al participar
        en un Bootcamp con duración de 7 meses, a cargo de la Universidad UTEL, sobre lo más reciente en el área de Desarrollo Web
        y en el que me he especializado en tecnologías como HTML, CSS, Javascript, React y Node.Js.`,
        nav: [
            { id: 1, displayName: 'Inicio', uriRef: '#home' },
            { id: 2, displayName: 'Sobre mi', uriRef: '#about' },
            { id: 3, displayName: 'Educación', uriRef: '#education' },
            { id: 4, displayName: 'Habilidades', uriRef: '#skills' },
            { id: 5, displayName: 'Proyectos', uriRef: '#projects' },
            { id: 6, displayName: 'Contacto', uriRef: '#contact' },
        ],
        sites: [
            { id: 1, icon: FaLinkedin, url: 'https://www.linkedin.com/in/luisbalamm/' },
            { id: 2, icon: FaGithub, url: 'https://github.com/luisbalam' },
            //{ id: 3, icon: FaHackerrank, url: 'https://www.hackerrank.com/luisbalam' },
            { id: 4, icon: FaCodepen, url: 'https://codepen.io/luisbalam' },
            //{ id: 5, icon: SiCodewars, url: 'https://www.codewars.com/users/luisbalam' },
        ],
        about: {
            title: 'A cerca de mi',
            image: Perfil,
            description: `Desde hace 5 años formo parte del personal docente de una de las más importantes Universidades 
            Virtuales de mi país, la Universidad Tecnológica Latinoamericana UTEL, la cual me ha brindado la capacitación necesaria y me logré certificar 
            en las tecnologías y metodologías de trabajo que se utilizan en la UTEL, todas ellas relacionadas, al uso de herramientas tecnológicas para apoyar el trabajo del Docente Virtual.
            Ahora, con el Bootcamp que he finalizado sobre Programación Web Full Stack, tengo unas bases sólidas para desarrollarme, de igual forma con éxito, en este
            campo tan importante y emocionante, por lo pronto, siendo parte del equipo de desarrollo que se ha conformado con algunos compañeros de trabajo
            de la universidad en la que laboro de forma presencial, agradezco a todo el equipo del bootcamp, el cual recomiendo mucho, a quien quiera
            especializarse en este campo tecnológico, utilizando las herramientas más actualizadas y con mayor demanda en el mercado laboral.`,
            downloadMessage: 'Descarga mi Curriculum'
        },
        education: {
            title: 'Educación',
            educations: [
                {
                    id: 1,
                    institution: 'UTEL',
                    url: 'https://u-camp.utel.edu.mx/full-stack',
                    info: 'Bootcamp - Desarrollo Full Stack • Julio 2021 - Enero 2022',
                    description: `Soy Colaborador UTEL y con el apoyo de la universidad participé 
                    en el BootCamp de desarrollo Web Full Stack, en el que los coatches nos compartieron sus conocimientos y experiencias
                    de varios años como desarrolladores Web, fueron sesiones semanales los ´sabados de 9:00
                    a 2:PM y nos brindaban apoyo con asesorías individuales y workshops entre semana.`,
                    logo: logo
                },
                {
                    id: 2,
                    institution: 'Universidad Interamericana para el Desarrollo',
                    url: 'https://www.unid.edu.mx/?hsLang=es-mx',
                    info: 'Maestría en Tecnologías de la Información',
                    description: `Estudié la Maestría en Tecnologías de la información en la Universidad
                    Interamericana para el Desarrollo, en la Especialidad Base de Datos
                    en la maestría pude establecer las bases para trabajar con mejores resultados en el 
                    area de bases de datos, tuve unos excelentes maestros que me compartieron sus conocimintos
                    y esperiencia.`,
                    logo: logo
                },
                {
                    id: 3,
                    institution: 'Escuela Superior en Informática',
                    url: '.',
                    info: 'Licenciatura en Informática',
                    description: `Cursé la licenciatura en la Escuela Superior en Informática de mi natal
                    Valladolid, en el estado de Yucatán, lo cursé en el turno vespertino (5:00PM a 9:00PM)cuando ya tenía un trabajo en el nivel medio
                    Superior, fue un esfuerzo importante que tuve que realizar para poder terminar la licenciatura
                    ya que ya tenía familia y gracias a su apoyo, logré terminar la carrera.`,
                    logo: logo
                },
            ]
        },
        work: {
            title: 'Trabajo',
            works: [
                {
                    id: 0,
                    company: 'Universidad UTEL',
                    url: 'https://www.utel.edu.mx',
                    position: 'Docente Virtual',
                    description: `Docente de la universidad desde hace 6 años impartiendo
                    asignaturas relacionadas con Mercadotecnia en la web y Bases de Datos.`,
                    logo: logo
                },
                {
                    id: 1,
                    company: 'Tecnológico Nacional de México, Campus Valladolid',
                    url: 'https://valladolid,tecnm.mx',
                    position: 'Docente de Tiempo Completo',
                    description: `Docente de Tiempo Completo desde hace más de 20 años en la
                    que imparto asignaturas relacionadas con las Tecnologías de la información
                    y he sido coordinador de la carrera en 2 ocasiones.`,
                    logo: logo
                },
                {
                    id: 2,
                    company: 'Colegio de Educación Profeisonal Técnica, Plantel Valladolid',
                    url: 'https://www.conalepyucatan.edu.mx/planteles/plantel-valladolid',
                    position: 'Docente',
                    description: `Docente desde hace más de 27 años, en la que normalmente
                    imparto asignaturas en la carrera de P.T. en Informática, asignaturas
                    relacionadas con las Tecnologías de la Información`,
                    logo: logo
                },
                
            ],
            more: 'Ver más...'
        },
        skills: {
            title: 'Habilidades',
            technologies: {
                language: {
                    title: 'Lenguajes',
                    id: 'languages',
                    technologies: [
                        { id: 1, name: 'JavaScript', icon: LogoJs, url: 'https://developer.mozilla.org/es/docs/Web/JavaScript' },
                        { id: 2, name: 'HTML', icon: LogoHtml, url: 'https://developer.mozilla.org/es/docs/Web/HTML' },
                        { id: 3, name: 'CSS', icon: LogoCss, url: 'https://developer.mozilla.org/es/docs/Web/CSS' },
                        { id: 4, name: 'Java', icon: LogoJava, url: 'https://www.java.com/es/' },
                        { id: 5, name: 'C++', icon: LogoCPlusPlus, url: 'https://visualstudio.microsoft.com/es/vs/features/cplusplus/' },
                    ]
                },
                db: {
                    title: 'Bases de Datos',
                    id: 'dbs',
                    technologies: [
                        { id: 1, name: 'MongoDB', icon: LogoMongodb, url: 'https://www.mongodb.com/es' },
                        { id: 2, name: 'MS SQL Server', icon: LogoSqlServer, url: 'https://www.microsoft.com/es-mx/sql-server/sql-server-downloads' },
                        { id: 3, name: 'MySQL', icon: LogoMysql, url: 'https://www.mysql.com/' },
                    ]
                },
                css: {
                    title: 'Frameworks de CSS',
                    id: 'css',
                    technologies: [
                        { id: 1, name: 'Bootstrap', icon: LogoBootstrap, url: 'https://getbootstrap.com/' },
                    ]
                },
                framework: {
                    title: 'Frameworks',
                    id: 'frameworks',
                    technologies: [
                        { id: 1, name: 'Express.js', icon: LogoExpress, url: 'https://expressjs.com/es/' },
                        { id: 3, name: 'React', icon: LogoReact, url: 'https://es.reactjs.org/' },
                    ]
                },
                cloud: {
                    title: 'Nube',
                    id: 'cloud',
                    technologies: [
                        { id: 1, name: 'Firebase', icon: LogoFirebase, url: 'https://firebase.google.com/?hl=es' },
                        { id: 2, name: 'MongoDB Atlas', icon: LogoMongodb, url: 'https://www.mongodb.com/es/cloud/atlas' },
                        { id: 3, name: 'Heroku', icon: LogoHeroku, url: 'https://dashboard.heroku.com/' },
                        { id: 4, name: 'Netlify', icon: LogoNetlify, url: 'https://www.netlify.com/' },
                    ]
                },
                other: {
                    title: 'Otras',
                    id: 'other',
                    technologies: [
                        { id: 1, name: 'Git', icon: LogoGit, url: 'https://git-scm.com/' },
                        { id: 2, name: 'NodeJS', icon: LogoNodejs, url: 'https://nodejs.org/es/' },
                    ]
                },
            }
        },
        projects: {
            title: 'Proyectos',
            projects: [
                { id: 1, name: 'Proyecto 1', description: 'Landing Page, Creado en el Bootcamp de Desarrollo Web FullStack', url: 'https://luisbalam.github.io/Proyecto1_Ucamp/index.html?classId=37586c7a-f231-469c-9307-2b82cd705d00&assignmentId=dd041dc2-55ed-4da4-a38e-a89c34e1b5dd&submissionId=43ae42cb-9b6c-44d8-88d7-fdb6e89f1a58', repo: 'https://github.com/luisbalam/Proyecto1_Ucamp', image: Proyecto1 },
                { id: 2, name: 'Proyecto 2', description: 'Aplicación CRUD, Creado en el Bootcamp de Desarrollo Web FullStack', url: 'https://luisbalam.github.io/Proyecto2_Ucamp/', repo: 'https://github.com/luisbalam/Proyecto2_Ucamp', image: Proyecto2 },
                { id: 3, name: 'Proyecto 3', description: 'Dashboard COVID-19, Creado en el Bootcamp de Desarrollo Web FullStack', url: 'https://proyecto-3-dashboard-covid-19.netlify.app/?classId=37586c7a-f231-469c-9307-2b82cd705d00&assignmentId=e89c1ea7-58b8-4f92-b5bd-549a3c2ab317&submissionId=c407bdce-e7bf-4a07-064e-f58f54c394d2', repo: 'https://github.com/luisbalam/Proy3Ucamp_consumoAPI_Covid', image: Proyecto3 },
                { id: 4, name: 'Proyecto 4', description: '? Creado en el Bootcamp de Desarrollo Web FullStack', url: '#projects', repo: '', image: Proyecto4 },
            ]
        },
        contact: {
            title: 'Contacto',
            phone: '+52 985 101 84 44',
            email: 'luisbalam@gmail.com',
            country: 'Valladolid, Yucatán. México'
        }
    },
}