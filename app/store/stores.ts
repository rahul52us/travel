import { authStore } from "./authStore/authStore";
import { blogStore } from "./blogStore/blogStore";
import { CompanyStore } from "./companyStore/companyStore";
import { contactStore } from "./contactStore/contactStore";
import { testimonialStore } from "./testimonialStore/testimonialStore";
import { themeStore } from "./themeStore/themeStore";
import { userStore } from "./userStore/userStore";
import { layoutStore } from "./layoutStore/LayoutStore";
import { orderStore } from "./orderStore/orderStore";
import { locationStore } from "./locations/locationStore";
import { dashboardStore } from "./dashboardStore/dashboardStore";
import { destinationStore } from "./destinationStore/destination";
import { sightSeeingStore } from "./sightseeingStore/sightseeingStore";
import { bookingStore } from "./bookingStore/bookingStore";
import { leadStore } from "./leadStore/leadStore";
import { itineraryStore } from "./itineraryStore/itineraryStore"; // ✅ Added this

const stores = {
  auth: authStore,
  dashboardStore: dashboardStore,
  destinationStore: destinationStore,
  sightSeeingStore: sightSeeingStore,
  userStore: userStore,
  themeStore: themeStore,
  layout: layoutStore,
  contactStore: contactStore,
  BlogStore: blogStore,
  companyStore: CompanyStore,
  orderStore: orderStore,
  testimonialStore: testimonialStore,
  locationStore: locationStore,
  bookingStore: bookingStore,
  leadStore: leadStore,
  itineraryStore: itineraryStore,
};

export default stores;
