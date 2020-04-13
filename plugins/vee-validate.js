import { extend } from 'vee-validate';

import { required } from 'vee-validate/dist/rules';
import { email } from 'vee-validate/dist/rules';

extend('required', required);
extend('email', email);
