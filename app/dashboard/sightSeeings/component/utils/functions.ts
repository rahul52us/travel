export const generateInitialValues = (data: any = {}) => {
  return {
    ...data,
    coverImage: data?.coverImage?.url
      ? { file: data.coverImage }
      : { file: [] },

    images: Array.isArray(data?.images) && data.images.length > 0
      ? data.images.map((img) => ({ file: img }))
      : { file: [] },
  };
};
