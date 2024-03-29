import i18next from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
    en: {
      translation: {
        home_me: 'Meet Andrii Vlasiuk, Full-Stack JavaScript Developer',
        app_name: "Shoes Store",
        Home: "Home",
        Projects: "Projects",
        Contact: "Contacts",
        Skills: "Skills",
        About: "About-me",
        about_me_header: 'Hi, I am Andrii!',
        about_me_first: "I am a dedicated and skilled full-stack developer with expertise in crafting robust and scalable web applications. My passion lies in solving real-world problems through innovative and efficient solutions. Explore my portfolio to discover the projects that showcase my proficiency in languages and frameworks, and how I bring value to users",
        about_me_last: "Your website should look stunning on any device. I specialize in responsive design, ensuring a seamless and enjoyable user journey across desktops, tablets, and smartphones.",
        home_description: "Andrii is a full-stack web developer",
        home_description2: "Are you ready to elevate your online presence? I specialize in crafting responsive and dynamic websites that seamlessly blend cutting-edge technologies with innovative design.",
        home_quote: "“The only way to do great work is to love what you do.”",
        contact_button: "Contact me",
        twitter: "Twitter",
        github: "Github",
        linkedin: "Linkedin",
        home_project_button: "Live",
        home_github_button: "Github",
        view_all: "View all",
        language_skill: "Languages",
        frameworks_skill: "Frameworks",
        databases_skill: "Databases",
        tools_skill: "Tools",
        other_skill: "Other",
        read_more: "Read more",
        contacts_text:"I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me",
        message_me: "Message me",
        list_of_my_projects: "List of my projects",
        compleate_appes: "compleate apps",
        small_projects: "small projects",
        my_fun_facts: "my-fun-fucts"
      },
    },
    uk: {
      translation: {
        home_me: 'Зустрічайте Андрія Власюка, Full-Stack JavaScript розробника',
        app_name: "Магазин взуття",
        Home: "Головна",
        Projects: "Проекти",
        Contact: "Контакти",
        About: "Про-мене",
        Skills: "Навички",
        about_me_header: 'Привіт, я Андрій!',
          about_me_first: "Досвідчений розробник із досвідом створення надійних і масштабованих веб-додатків. Моя пристрасть полягає у вирішенні проблем реального світу за допомогою інноваційних та ефективних рішень. Перегляньте моє портфоліо, щоб дізнатися про проекти, які демонструють мою майстерність у мовах і фреймворках, а також те, як я приношу цінність користувачам.",
          about_me_last: "Ваш веб-сайт повинен виглядати чудово на будь-якому пристрої. Я спеціалізуюся на адаптивному дизайні, забезпечуючи безшовну та приємну подорож користувача на настільних комп'ютерах, планшетах та смартфонах.",
        home_description: "Андрій - повноцінний веб-розробник",
        home_description2: "Ви готові підняти свою онлайн-присутність? Я спеціалізуюся на створенні адаптивних та динамічних веб-сайтів, які безшовно поєднують передові технології з інноваційним дизайном.",
        home_quote: "“Єдинний шлях досягнути успіху, полюбити те що ти робиш”",
        contact_button: "Зв'яжіться зі мною",
        twitter: "Твіттер",
        github: "Гітхаб",
        linkedin: "Лінкедін",
        home_project_button: "Переглянути",
        home_github_button: "Гітхаб",
        view_all: "Переглянути",
        language_skill: "Мови",
        frameworks_skill: "Фреймворки",
        databases_skill: "Бази даних",
        tools_skill: "Інструменти",
        other_skill: "Інше",
        read_more: "Детальніше",
        contacts_text:"Я зацікавлений у фріланс-можливостях. Однак, якщо у вас є інші запити або питання, не соромтеся зв'язатися зі мною",
        message_me: "Напишіть мені",
        list_of_my_projects: "Список моїх проектів",
        compleate_appes: "готові додатки",
        small_projects: "невеликі проекти",
        my_fun_facts: "цікаве-про-мене"
      },
    },
  };
  i18next
    .use(initReactI18next)
    .init({
      resources,
      lng: "en" ,
      interpolation: {
        escapeValue: false,
      },
      debug: true,
    });
  export default i18next;