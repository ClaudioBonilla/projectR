import * as yup from "yup"

export const LoginFormikSchema = yup.object().shape({
    email : yup
    .email("Por favor introduzca un correo electronico valido")
    .required("Campo Requerido")
    ,
    password: yup
    .string()
    .require("Campo Requerido")
})
