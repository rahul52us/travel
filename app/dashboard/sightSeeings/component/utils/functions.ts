export const generateInitialValues = (data: any = {}) => {
  return {
    ...data,
    coverImage: data?.coverImage?.url
      ? { file: data.coverImage }
      : { file: [] },
    destination:data?.destination ? `${data?.destination?._id}-${data.destinationName}` : undefined,
    images: Array.isArray(data?.images) && data.images.length > 0
      ? data.images.map((img) => ({ file: img }))
      : { file: [] },
  };
};
