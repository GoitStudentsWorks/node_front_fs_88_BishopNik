import * as Yup from 'yup';

const addCardValidationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string(),
    color: Yup.string().required('Color is required'),
    deadline: Yup.date(),
  });

  export default addCardValidationSchema;