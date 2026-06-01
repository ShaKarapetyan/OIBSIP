import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).use(initReactI18next).init({
  lng: 'en',          // Հիմնական լեզուն դարձավ անգլերեն
  fallbackLng: 'en',  // Եթե լեզուն չի գտնվում, վերադառնում է անգլերենին
  resources: {
    hy: {
      translation: {
        "brand_name": "Շահեն.dev",
        "home": "Գլխավոր", "about": "Իմ մասին", "projects": "Պրոյեկտներ", "contact": "Կապ",
        "hero_greet": "Ողջույն, ես եմ",
        "hero_name": "Շահեն Կարապետյան", 
        "role": "Frontend Developer",
        "desc": "Ստեղծում եմ մոդեռն, արագ և ինտերակտիվ վեբ հավելվածներ։",
        "portfolio_btn": "Պորտֆոլիո", "contact_btn": "Կապ",
        "about_title": "Իմ Մասին", "about_desc": "Ծրագրավորմամբ սկսել եմ զբաղվել, քանի որ սիրում եմ լուծել խնդիրներ և ստեղծել գեղեցիկ ինտերֆեյսներ։",
        "contact_name": "Ձեր Անունը", "contact_name_placeholder": "Շահեն",
        "contact_email": "Էլ-փոստ", "contact_message": "Հաղորդագրություն",
        "contact_message_placeholder": "Ինչպե՞ս կարող եմ օգնել...", "contact_send": "Ուղարկել",
        "cat_all": "Բոլորը", "cat_react": "React", "cat_js": "JS",
        "footer_rights": "Շահեն.dev. Բոլոր իրավունքները պաշտպանված են։"
      }
    },
    en: {
      translation: {
        "brand_name": "Shahen.dev",
        "home": "Home", "about": "About Me", "projects": "Projects", "contact": "Contact",
        "hero_greet": "Hello, I am",
        "hero_name": "Shahen Karapetyan", 
        "role": "Frontend Developer", "desc": "I build modern, fast, and interactive web applications.",
        "portfolio_btn": "Portfolio", "contact_btn": "Contact",
        "about_title": "About Me", "about_desc": "I started programming because I love solving problems and creating beautiful interfaces.",
        "contact_name": "Your Name", "contact_name_placeholder": "Shahen",
        "contact_email": "Email", "contact_message": "Message",
        "contact_message_placeholder": "How can I help you...", "contact_send": "Send",
        "cat_all": "All", "cat_react": "React", "cat_js": "JS",
        "footer_rights": "Shahen.dev. All rights reserved."
      }
    },
    ru: {
      translation: {
        "brand_name": "Шаген.dev",
        "home": "Главная", "about": "Обо мне", "projects": "Проекты", "contact": "Контакты",
        "hero_greet": "Привет, я",
        "hero_name": "Шаген Карапетян", 
        "role": "Frontend разработчик", "desc": "Создаю современные, быстрые и интерактивные веб-приложения.",
        "portfolio_btn": "Портфолио", "contact_btn": "Связаться",
        "about_title": "Обо мне", "about_desc": "Я начал программировать, потому что люблю решать задачи и создавать красивые интерфейсы.",
        "contact_name": "Ваше имя", "contact_name_placeholder": "Шаген",
        "contact_email": "Email", "contact_message": "Сообщение",
        "contact_message_placeholder": "Как я могу помочь...", "contact_send": "Отправить",
        "cat_all": "Все", "cat_react": "React", "cat_js": "JS",
        "footer_rights": "Шаген.dev. Все права защищены."
      }
    },
    de: {
      translation: {
        "brand_name": "Shahen.dev",
        "home": "Startseite", "about": "Über mich", "projects": "Projekte", "contact": "Kontakt",
        "hero_greet": "Hallo, ich bin",
        "hero_name": "Shahen Karapetyan", 
        "role": "Frontend-Entwickler", "desc": "Ich erstelle moderne, schnelle und interaktive Webanwendungen.",
        "portfolio_btn": "Portfolio", "contact_btn": "Kontakt",
        "about_title": "Über mich", "about_desc": "Ich habe mit dem Programmieren angefangen, weil ich es liebe, Probleme zu lösen und schöne Schnittstellen zu erstellen.",
        "contact_name": "Ihr Name", "contact_name_placeholder": "Shahen",
        "contact_email": "E-Mail", "contact_message": "Nachricht",
        "contact_message_placeholder": "Wie kann ich helfen...", "contact_send": "Senden",
        "cat_all": "Alle", "cat_react": "React", "cat_js": "JS",
        "footer_rights": "Shahen.dev. Alle Rechte vorbehalten."
      }
    }
  }
});

export default i18n;