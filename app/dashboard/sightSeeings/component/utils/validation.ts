// utils/validation.ts
import * as Yup from 'yup';

// Validation schema for the FormComponent
const validations = Yup.object().shape({
  // Image validation
  image:Yup.mixed(),
  destinationName:Yup.mixed(),
  coverImage : Yup.mixed(),
  // Basic fields
  duration: Yup.mixed().required('location is required'),
  destination: Yup.mixed()
    .required('Destination is required'),
  price: Yup.number()
    .required('Price is required')
    .positive('Price must be a positive number')
    .max(1000000, 'Price cannot exceed 1,000,000'),

});


export default validations;
