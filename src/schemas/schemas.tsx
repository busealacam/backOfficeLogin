import * as yup from 'yup';

/**** yup schema of regisration form ****/
export let FormSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Veuillez saisir un e-mail"),
    password: yup.string().min(8).max(32).required("Veuillez saisir un mot de passe"),
    operation: yup.string(),
}).required();

/**** yuh schema of dashboard form ****/
export let DashFormSchema = yup.object().shape({
    name: yup.string().required("Veuillez saisir un prénom"),
    email: yup.string().email("Invalid email format").required("Veuillez saisir un e-mail"),
    password: yup.string().min(8).max(32).required("Veuillez saisir un mot de passe"),
    type: yup.string(),
})