// Itinerary utility functions
export const generateItineraryInitialValues = (data: any = {}) => {
    return {
        ...data,
      image: data?.image?.url
        ? { file: data.image }
        : { file: [] },
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
