// Hotel utility functions
export const generateHotelInitialValues = (data: any = {}) => {
    return {
        ...data,
      image: data?.image?.url
        ? { file: data.image }
        : { file: [] },
    };
  };