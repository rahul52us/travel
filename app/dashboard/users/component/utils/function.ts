// import { initialValues, leadStatusOptions } from "./constant";

export const generateInitialValues = (initialData: any) => {
  return {
    name: initialData?.name || "",
    contact: initialData?.contact || "",
    duration: initialData?.duration || "",
    email: initialData?.email || "",
    departure: initialData?.departure || "",
    destination: initialData?.destination || "",
    departureDate: initialData?.departureDate || "",
    budget: initialData?.budget || "",
    noOfGuests: initialData?.noOfGuests || "",
    leadStatus: initialData?.leadStatus || "fresh_leads",
    notes: initialData?.notes || "",
    followUpDate: initialData?.followUpDate || "",
    source: initialData?.source || "",
    userType: "lead",
  };
};