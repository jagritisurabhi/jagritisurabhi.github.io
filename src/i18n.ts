import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Navbar
          home: 'Home',
          about: 'About Us',
          contact: 'Contact Us',
          
          // Home Page
          welcome: 'Welcome to RedMango',
          subtitle: 'Your trusted partner in software development and IT solutions',
          getStarted: 'Get Started',
          ourServices: 'Our Services',
          
          // Services
          pythonDev: 'Python Development',
          pythonDesc: 'Django, Flask, Web Scraping, Machine Learning, and AI integration services.',
          qa: 'Quality Assurance',
          qaDesc: 'Comprehensive QA processes, testing methodologies, and quality control.',
          pentest: 'Penetration Testing',
          pentestDesc: 'Security assessment and vulnerability testing to protect your systems.',
          design: 'Graphic Design',
          designDesc: 'Professional design services for web and print media.',
          bigData: 'Big Data Management',
          bigDataDesc: 'Data processing, analytics, and management solutions.',
          devops: 'DevOps & Cloud',
          devopsDesc: 'Terraform, CI/CD, cloud infrastructure, and automation solutions.',
          
          // About Page
          aboutTitle: 'About RedMango',
          aboutDesc: 'RedMango is a leading technology solutions provider specializing in software development, web applications, and IT services. With years of experience in the industry, we help businesses transform their ideas into reality through cutting-edge technology solutions.',
          ourValues: 'Our Values',
          innovation: 'Innovation',
          innovationDesc: 'We stay ahead of the curve with innovative solutions and cutting-edge technologies.',
          team: 'Team Excellence',
          teamDesc: 'Our team of experts brings years of experience and dedication to every project.',
          growth: 'Growth Focus',
          growthDesc: 'We help businesses grow through scalable solutions and strategic planning.',
          
          // Contact Page
          contactTitle: 'Contact Us',
          contactSubtitle: 'Get in touch with our team for any inquiries or project discussions',
          sendMessage: 'Send us a Message',
          name: 'Name',
          email: 'Email',
          subject: 'Subject',
          message: 'Message',
          send: 'Send Message',
          contactInfo: 'Contact Information',
          businessHours: 'Business Hours',
          businessHoursValue: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday - Sunday: Closed'
        }
      },
      es: {
        translation: {
          // Navbar
          home: 'Inicio',
          about: 'Sobre Nosotros',
          contact: 'Contacto',
          
          // Home Page
          welcome: 'Bienvenido a RedMango',
          subtitle: 'Su socio de confianza en desarrollo de software y soluciones IT',
          getStarted: 'Comenzar',
          ourServices: 'Nuestros Servicios',
          
          // Services
          pythonDev: 'Desarrollo Python',
          pythonDesc: 'Servicios de Django, Flask, Web Scraping, Machine Learning e integración de IA.',
          qa: 'Control de Calidad',
          qaDesc: 'Procesos integrales de QA, metodologías de prueba y control de calidad.',
          pentest: 'Pruebas de Penetración',
          pentestDesc: 'Evaluación de seguridad y pruebas de vulnerabilidad para proteger sus sistemas.',
          design: 'Diseño Gráfico',
          designDesc: 'Servicios de diseño profesional para web y medios impresos.',
          bigData: 'Gestión de Big Data',
          bigDataDesc: 'Soluciones de procesamiento, análisis y gestión de datos.',
          devops: 'DevOps y Cloud',
          devopsDesc: 'Terraform, CI/CD, infraestructura en la nube y soluciones de automatización.',
          
          // About Page
          aboutTitle: 'Sobre RedMango',
          aboutDesc: 'RedMango es un proveedor líder de soluciones tecnológicas especializado en desarrollo de software, aplicaciones web y servicios IT. Con años de experiencia en la industria, ayudamos a las empresas a transformar sus ideas en realidad a través de soluciones tecnológicas de vanguardia.',
          ourValues: 'Nuestros Valores',
          innovation: 'Innovación',
          innovationDesc: 'Nos mantenemos a la vanguardia con soluciones innovadoras y tecnologías de punta.',
          team: 'Excelencia del Equipo',
          teamDesc: 'Nuestro equipo de expertos aporta años de experiencia y dedicación a cada proyecto.',
          growth: 'Enfoque en el Crecimiento',
          growthDesc: 'Ayudamos a las empresas a crecer a través de soluciones escalables y planificación estratégica.',
          
          // Contact Page
          contactTitle: 'Contáctenos',
          contactSubtitle: 'Póngase en contacto con nuestro equipo para cualquier consulta o discusión de proyectos',
          sendMessage: 'Envíenos un Mensaje',
          name: 'Nombre',
          email: 'Correo Electrónico',
          subject: 'Asunto',
          message: 'Mensaje',
          send: 'Enviar Mensaje',
          contactInfo: 'Información de Contacto',
          businessHours: 'Horario Comercial',
          businessHoursValue: 'Lunes - Viernes: 9:00 AM - 6:00 PM\nSábado - Domingo: Cerrado'
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 