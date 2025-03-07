// store/index.ts
import { authStore } from "./authStore/authStore";
import { blogStore } from "./blogStore/blogStore";
import { CompanyStore } from "./companyStore/companyStore";
import { contactStore } from "./contactStore/contactStore";
import { testimonialStore } from "./testimonialStore/testimonialStore";
import { userStore } from "./userStore/userStore";

const stores = {
  auth : authStore,
  userStore : userStore,
  contactStore : contactStore,
  BlogStore : blogStore,
  companyStore : CompanyStore,
  testimonialStore : testimonialStore
};

export default stores;