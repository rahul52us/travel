// Hotel utility functions
export const generateHotelInitialValues = (hotel: any) => {
  return {
    name: hotel?.name || "",
    location: hotel?.location || "",
    description: hotel?.description || "",
    image: {
      file: hotel?.image?.url ? hotel.image.url : [],
      url: hotel?.image?.url || "",
      name: hotel?.image?.name || "",
      isAdd: 0,
      isDeleted: 0,
    },
  };
};