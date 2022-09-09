import { createI18n } from "vue-i18n";
import en from './en.json';
import es from './es.json'
import tr from './tr.json'

const i18n = createI18n({ //Setup
    locale: "en",
    messages :{
      en: en,
      es:es,
      tr:tr
    }
  }
)

export default i18n;