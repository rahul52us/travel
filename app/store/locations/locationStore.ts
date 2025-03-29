import { makeAutoObservable } from "mobx";
import axios from "axios";
import { authStore } from "../authStore/authStore";
import stores from "../stores";

class LocationStore {

  location = {
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

  getLocations = async (sendData: {
    limit?: number;
    page: number;
    search?: string;
    reset?:boolean
  }) => {
      this.location.loading = true;
      try {
        const { limit = 10, page, search } = sendData;
        const searchQuery = search
          ? `&search=${encodeURIComponent(search)}`
          : "";

        const { data } = await axios.get(
          `/location/get?page=${page}&limit=${limit}${searchQuery}&company=${stores.auth.company}`
        );

        this.location.data = data?.data?.data || [];
        this.location.totalPages = data?.data?.totalPages || 0;
        return data.data;
      } catch (err: any) {
        return Promise.reject(err?.response?.data || err);
      } finally {
        this.location.loading = false;
      }
  };

  // Delete Testimonial
  deleteLocation = async (sendData: any) => {
    try {
      const { data } = await axios.delete(`/location/${sendData._id}`);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    }
  };

  // Create Testimonial
  createLocation = async (sendData: any) => {
    try {
      const { data } = await axios.post(`/location/create`, {
        ...sendData,
        company: authStore.company,
      });
      this.location.data.unshift(data.data);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data);
    }
  };

  // Edit Testimonial
  updateLocation = async (id: any, sendData: any) => {
    try {
      const { data } = await axios.put(`location/${id}`, sendData);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response || err);
    }
  };

  // Download Testimonial List
  downloadLocation = async (sendData: any) => {
    try {
      const response = await axios.post(
        "/location/download/list",
        sendData,
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "location.xlsx");
      document.body.appendChild(link);
      link.click();
      return {
        data: "Testimonial list downloaded successfully",
      };
    } catch (err: any) {
      return Promise.reject(err);
    }
  };

}

export const locationStore = new LocationStore();
