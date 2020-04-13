import { extend } from 'vee-validate';

import { localize } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';

import { required } from 'vee-validate/dist/rules';
import { email } from 'vee-validate/dist/rules';

extend('required', required);
extend('email', email);

localize('en', en);
