// Itinerary utility functions
export const generateItineraryInitialValues = (itinerary: any) => {
  return {
    title: itinerary?.title || "",
    duration: itinerary?.duration || "",
    destination: itinerary?.destination || "",
    price: itinerary?.price || "",
    description: itinerary?.description || "",
    image: {
      file: [],
      url: itinerary?.image?.url || "",
      name: itinerary?.image?.name || "",
      isAdd: 0,
      isDeleted: 0,
    },
  };
};

// Hotel utility functions
export const generateHotelInitialValues = (hotel: any) => {
  return {
    name: hotel?.name || "",
    location: hotel?.location || "",
    starRating: hotel?.starRating || "",
    priceRange: hotel?.priceRange || "",
    description: hotel?.description || "",
    image: {
      file: [],
      url: hotel?.image?.url || "",
      name: hotel?.image?.name || "",
      isAdd: 0,
      isDeleted: 0,
    },
  };
};
