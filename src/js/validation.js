import { extend } from 'vee-validate';
import { required, email, max } from 'vee-validate/dist/rules';
export { extend }
extend("required", {
    ...required,
    message: "{_field_} no puede ser vacio",
});

extend("max", {
    ...max,
    message: "{_field_} no puede ser mayor a {length} caracteres",
});

extend("email", {
    ...email,
    message: "El email no es valido",
});