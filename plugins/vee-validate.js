import { extend, localize } from 'vee-validate'

import en from 'vee-validate/dist/locale/en.json'
import he from 'vee-validate/dist/locale/he.json'

import { required, email } from 'vee-validate/dist/rules'

extend('required', required)
extend('email', email)

localize({
  en,
  he
})

localize({
  en: {
    names: {
      name: 'Name',
      username: 'Username',
      website: 'Website',
      email: 'Email',
      phone: 'Phone'
    }
  },
  he: {
    names: {
      name: 'שם',
      username: 'שם משתמש',
      website: 'אתר',
      email: 'דוא"ל',
      phone: 'טלפון'
    }
  }
})
