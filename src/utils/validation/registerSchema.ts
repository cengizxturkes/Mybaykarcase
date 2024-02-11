import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
    name: Yup.string().required(),
    surname: Yup.string().required(),
    idNumber: Yup.number().required('TC Kimlik Numarası Zorunludur!'),
    phoneNumber: Yup.number().required('Telefon Numarası Zorunludur!'),
})