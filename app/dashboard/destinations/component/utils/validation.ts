// utils/validation.ts
import * as Yup from 'yup';

// Validation schema for the FormComponent
const validations = Yup.object().shape({
  // Image validation
  image:Yup.mixed(),
  // Basic fields
  location: Yup.mixed().required('location is required'),
  description: Yup.string(),
  destination: Yup.array(),
  price: Yup.number()
    .required('Price is required')
    .positive('Price must be a positive number')
    .max(1000000, 'Price cannot exceed 1,000,000'),

  days: Yup.number()
    .required('Days is required')
    .positive('Days must be a positive number')
    .integer('Days must be a whole number')
    .max(365, 'Days cannot exceed 365'),

  rating: Yup.number()
    .required('Rating is required')
    .min(0, 'Rating cannot be less than 0')
    .max(5, 'Rating cannot exceed 5'),

  perks: Yup.array()
    .of(Yup.string().max(50, 'Each perk must be less than 50 characters'))
    .min(1, 'At least one perk is required')
    .max(10, 'Cannot add more than 10 perks'),

    highlights: Yup.array()
    .of(
        Yup.string()
            .required('Each highlight is required')
            .min(2, 'Each highlight must be at least 1 characters')
            .max(500, 'Each highlight must be less than 500 characters')
    )
    .min(1, 'At least one highlight is required')
    .required('Highlights are required'),


  // Itinerary array validation
  itinerary: Yup.array()
    .of(
      Yup.object().shape({
        place: Yup.string()
          .required('Place is required')
          .min(2, 'Place must be at least 2 characters')
          .max(100, 'Place must be less than 100 characters'),
        nights: Yup.number()
          .required('Nights is required')
          .positive('Nights must be a positive number')
          .integer('Nights must be a whole number')
          .max(30, 'Nights cannot exceed 30 per location'),
      })
    )
    .min(1, 'At least one itinerary item is required')
    .max(20, 'Cannot add more than 20 itinerary items'),
});


export default validations;
