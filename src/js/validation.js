import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

extend('required', {
    ...required,
    message: '{ _field_ } can not be empty'
});
extend('email', email);
