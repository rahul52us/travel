import * as yup from 'yup'

const testimonialValidation = yup.object({
 name : yup.string().min(2,'name should be atleast of 2 character').max(80,'name should not be greater than 80 character').trim().required('name is required').typeError('name is required'),
 profession : yup.string().min(1,'profession should be atleast of 1 character').max(160,'profession should not greater than 160 characters').trim().required('profession is required').typeError('profession is required'),
 rating : yup.number().min(1,'Rating must be Minium 1').max(5,'Raitng can not greater than 5').required('rating is required').typeError('rating is required'),
 description : yup.string().min(10,'description should be atleast of 10 character').max(1800,'description should not greater than 1800 characters').trim().required('description is required').typeError('description is required'),
})

export default testimonialValidation;
