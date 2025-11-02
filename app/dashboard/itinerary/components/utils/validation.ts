import * as yup from 'yup'

const itineraryValidation = yup.object({
  title: yup.string().min(2, 'Title should be at least 2 characters').max(100, 'Title should not be greater than 100 characters').trim().required('Title is required').typeError('Title is required'),
  duration: yup.string().min(2, 'Duration should be at least 2 characters').max(50, 'Duration should not be greater than 50 characters').trim().required('Duration is required').typeError('Duration is required'),
  price: yup.number().min(0, 'Price must be a positive number').required('Price is required').typeError('Price must be a valid number'),
  description: yup.string().min(10, 'Description should be at least 10 characters').max(1800, 'Description should not be greater than 1800 characters').trim().required('Description is required').typeError('Description is required'),
})

export default itineraryValidation;