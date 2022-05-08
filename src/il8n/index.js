import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    msg: {
      test: 'hello world'
    }
  },
  zh: {
    msg: {
      test: '你好世界'
    }
  }
}

const locale = 'en'

const il8n = createI18n({
  // 使用composition api 模式，则需要将其设置为false
  legacy: false,
  globalInjection: true,
  locale,
  messages
})

export default il8n
