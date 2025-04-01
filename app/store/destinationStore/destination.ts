import { makeAutoObservable } from "mobx";
import axios from "axios";
import { authStore } from "../authStore/authStore";

class DestinationStore {
  testimonialLayout = "table";

  destination : any = {
    data: [],
    totalPages: 1,
    loading: true,
  };

  openTestimonialDrawer = {
    open: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  // Fetch Testimonials

  getDestinations = async (sendData: any) => {
    this.destination.loading = true;
    try {
      const { limit = 10, page, search, location, destination } = sendData;

      const searchQuery = search ? `&search=${encodeURIComponent(search)}` : "";
      const locationQuery = location ? `&location=${encodeURIComponent(location)}` : "";

      // Handle `destination` correctly (if it's an array, join it; if not, encode normally)
      const destinationTitle =
        Array.isArray(destination) && destination.length > 0
          ? `&destination=${destination.map(encodeURIComponent).join(",")}`
          : destination
          ? `&destination=${encodeURIComponent(destination)}`
          : "";

      const { data } = await axios.get(
        `/destination/get?page=${page}&limit=${limit}${searchQuery}${locationQuery}${destinationTitle}`
      );

      this.destination.data = data?.data?.data || [];
      this.destination.totalPages = data?.data?.totalPages || 0;
      return data.data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    } finally {
      this.destination.loading = false;
    }
  };


  // Delete Destination
  deleteDestination = async (sendData: any) => {
    try {
      const { data } = await axios.delete(`/destination/${sendData._id}`);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    }
  };

  // Create Destination
  createDestination = async (sendData: any) => {
    try {
      const { data } = await axios.post(`/destination/create`, {
        ...sendData,
        company: authStore.company,
      });
      this.destination.data.unshift(data.data);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data);
    }
  };

  // Edit Destination
  updateDestination = async (id: any, sendData: any) => {
    try {
      const { data } = await axios.put(`destination/${id}`, sendData);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response || err);
    }
  };

  // Download Destination List
  downloadTestimonialList = async (sendData: any) => {
    try {
      const response = await axios.post(
        "/destination/download/list",
        sendData,
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "destination.xlsx");
      document.body.appendChild(link);
      link.click();
      return {
        data: "Destination list downloaded successfully",
      };
    } catch (err: any) {
      return Promise.reject(err);
    }
  };

  // Toggle Destination Drawer
  setOpenTestimonialDrawer = () => {
    this.openTestimonialDrawer.open = !this.openTestimonialDrawer.open;
  };

  // Toggle Layout (Table/Grid)
  setTestimonialLayout = () => {
    this.testimonialLayout =
      this.testimonialLayout === "table" ? "grid" : "table";
  };
}

export const destinationStore = new DestinationStore();