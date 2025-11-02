import * as yup from 'yup'

const hotelValidation = yup.object({
  name: yup.string().min(2, 'Hotel name should be at least 2 characters').max(100, 'Hotel name should not be greater than 100 characters').trim().required('Hotel name is required').typeError('Hotel name is required'),
  location: yup.string().min(2, 'Location should be at least 2 characters').max(100, 'Location should not be greater than 100 characters').trim().required('Location is required').typeError('Location is required'),
  description: yup.string().min(10, 'Description should be at least 10 characters').max(1800, 'Description should not be greater than 1800 characters').trim().required('Description is required').typeError('Description is required'),
})

export default hotelValidation;