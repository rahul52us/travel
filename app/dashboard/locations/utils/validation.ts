import * as yup from 'yup'

const locationValidation = yup.object({
 name : yup.string().min(2,'name should be atleast of 2 character').max(80,'name should not be greater than 80 character').trim().required('name is required').typeError('name is required'),
 description : yup.string().max(1800,'description should not greater than 1800 characters').trim().typeError('description is required'),
})

export default locationValidation;
