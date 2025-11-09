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
    source: initialData?.source || "",
    userType: "lead",
  };
};

export const leadStatusOptions = [
  { label: "Fresh Leads", value: "fresh_leads" },
  { label: "In Progress", value: "in_progress" },
  { label: "Converted", value: "converted" },
  { label: "Lost", value: "lost" },
];

export const initialValues = {
  name: "",
  contact: "",
  duration: "",
  email: "",
  departure: "",
  destination: "",
  departureDate: "",
  budget: "",
  noOfGuests: "",
  leadStatus: "fresh_leads",
  source: "",
  userType: "lead",
};
