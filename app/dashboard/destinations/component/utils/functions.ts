export const generateInitialValues = (data: any = {}) => {
    return {
        ...data,
      image: data?.image?.url
        ? { file: data.image }
        : { file: [] },
    };
  };