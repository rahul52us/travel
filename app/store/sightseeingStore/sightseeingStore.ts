import { makeAutoObservable } from "mobx";
import axios from "axios";
import { authStore } from "../authStore/authStore";

class SightSeeingStore {
  testimonialLayout = "table";

  sightSeeing : any = {
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

  getSightSeeing = async (sendData: {
    limit?: number;
    page: number;
    search?: string;
  }) => {
      this.sightSeeing.loading = true;
      try {
        const { limit = 10, page, search } = sendData;
        const searchQuery = search
          ? `&search=${encodeURIComponent(search)}`
          : "";

        const { data } = await axios.get(
          `/sightSeeing/get?page=${page}&limit=${limit}${searchQuery}`
        );

        this.sightSeeing.data = data?.data?.data || [];
        this.sightSeeing.totalPages = data?.data?.totalPages || 0;
        return data.data;
      } catch (err: any) {
        return Promise.reject(err?.response?.data || err);
      } finally {
        this.sightSeeing.loading = false;
      }
  };

  // Delete Destination
  deleteSightSeeing = async (sendData: any) => {
    try {
      const { data } = await axios.delete(`/sightSeeing/${sendData._id}`);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    }
  };

  // Create Destination
  createSightSeeing = async (sendData: any) => {
    try {
      const { data } = await axios.post(`/sightseeing/create`, {
        ...sendData,
        company: authStore.company,
      });
      this.sightSeeing.data.unshift(data.data);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data);
    }
  };

  // Edit Destination
  updateSightSeeing = async (id: any, sendData: any) => {
    try {
      const { data } = await axios.put(`/sightseeing/${id}`, sendData);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response || err);
    }
  };

}

export const sightSeeingStore = new SightSeeingStore();