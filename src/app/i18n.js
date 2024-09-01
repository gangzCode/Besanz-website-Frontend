// import i18n from "i18next";
// import HttpBackend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
// import { initReactI18next } from "react-i18next";

// const apiKey = "yQofhdaD-2SDcpV7qcLn9Q";
// const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

// i18n
//   .use(HttpBackend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: "en",
//     //disabled in production
//     debug:true, 

//     //can have multiple namespaces, in case you want to divide a huge translation in to 
//     //smaller places and load them on demand
//     ns: ['common', 'home','contact','features','requestQuote','suscription', 'about'],  //["default"],
//     defaultNS: "home",

//     supportedLngs: ["en","fr","es"],
    
//     backend: {
//         //translation file path
//       loadPath: "../../public/assets/i18n/{{ns}}/{{lng}}.json"// loadPath
//     },
//     interpolation :{
//         escapeValue: false,
//         formatSeperator:","
//     },
//     react:{
//         wait : true
//     }
//   })

//   export default i18n