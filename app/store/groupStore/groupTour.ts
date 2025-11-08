import { makeAutoObservable } from "mobx";
import axios from "axios";
import { authStore } from "../authStore/authStore";

class GroupTour {
  testimonialLayout = "table";

  groupTour : any = {
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

  getGroupTour = async (sendData: any) => {
    this.groupTour.loading = true;
    try {
      const { limit = 10, page, search, location, groupTour } = sendData;

      const searchQuery = search ? `&search=${encodeURIComponent(search)}` : "";
      const locationQuery = location ? `&location=${encodeURIComponent(location)}` : "";

      // Handle `groupTour` correctly (if it's an array, join it; if not, encode normally)
      const destinationTitle =
        Array.isArray(groupTour) && groupTour.length > 0
          ? `&groupTour=${groupTour.map(encodeURIComponent).join(",")}`
          : groupTour
          ? `&groupTour=${encodeURIComponent(groupTour)}`
          : "";

      const { data } = await axios.get(
        `/groupTour/get?page=${page}&limit=${limit}${searchQuery}${locationQuery}${destinationTitle}`
      );

      this.groupTour.data = data?.data?.data || [];
      this.groupTour.totalPages = data?.data?.totalPages || 0;
      return data.data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    } finally {
      this.groupTour.loading = false;
    }
  };


  // Delete Destination
  deleteGroupTour = async (sendData: any) => {
    try {
      const { data } = await axios.delete(`/groupTour/${sendData._id}`);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    }
  };

  // Create Destination
  createGroupTour = async (sendData: any) => {
    try {
      const { data } = await axios.post(`/groupTour/create`, {
        ...sendData,
        company: authStore.company,
      });
      this.groupTour.data.unshift(data.data);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data);
    }
  };

  // Edit Destination
  updateGroupTour = async (id: any, sendData: any) => {
    try {
      const { data } = await axios.put(`groupTour/${id}`, sendData);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response || err);
    }
  };

  // Download Destination List
  downloadTestimonialList = async (sendData: any) => {
    try {
      const response = await axios.post(
        "/groupTour/download/list",
        sendData,
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "groupTour.xlsx");
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

export const groupTourStore = new GroupTour();