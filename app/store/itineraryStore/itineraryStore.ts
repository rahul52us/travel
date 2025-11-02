import { makeAutoObservable } from "mobx";
import axios from "axios";
import { authStore } from "../authStore/authStore";

class ItineraryStore {
  itineraryLayout = "table";

  itineraries = {
    data: [],
    totalPages: 1,
    loading: true,
  };

  openItineraryDrawer = {
    open: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  // Fetch Itineraries
  getItineraries = async (sendData: {
    limit?: number;
    page: number;
    search?: string;
  }) => {
      this.itineraries.loading = true;
      try {
        const { limit = 10, page, search } = sendData;
        const searchQuery = search
          ? `&search=${encodeURIComponent(search)}`
          : "";

        const { data } = await axios.get(
          `/itinerary/get?page=${page}&limit=${limit}${searchQuery}`
        );

        this.itineraries.data = data?.data || [];
        this.itineraries.totalPages = data?.totalPages || 0;
        return data.data;
      } catch (err: any) {
        return Promise.reject(err?.response?.data || err);
      } finally {
        this.itineraries.loading = false;
      }
  };

  // Delete Itinerary
  deleteItinerary = async (sendData: any) => {
    try {
      const { data } = await axios.delete(`/itinerary/${sendData._id}`);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    }
  };

  // Create Itinerary
  createItinerary = async (sendData: any) => {
    try {
      const { data } = await axios.post(`/itinerary/create`, {
        ...sendData,
        company: authStore.company,
      });
      this.itineraries.data.unshift(data.data);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data);
    }
  };

  // Edit Itinerary
  updateItinerary = async (id: any, sendData: any) => {
    try {
      const { data } = await axios.put(`itinerary/${id}`, sendData);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response || err);
    }
  };

  // Download Itinerary List
  downloadItineraryList = async (sendData: any) => {
    try {
      const response = await axios.post(
        "/itinerary/download/list",
        sendData,
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "itineraries.xlsx");
      document.body.appendChild(link);
      link.click();
      return {
        data: "Itinerary list downloaded successfully",
      };
    } catch (err: any) {
      return Promise.reject(err);
    }
  };

  // Toggle Itinerary Drawer
  setOpenItineraryDrawer = () => {
    this.openItineraryDrawer.open = !this.openItineraryDrawer.open;
  };

  // Toggle Layout (Table/Grid)
  setItineraryLayout = () => {
    this.itineraryLayout =
      this.itineraryLayout === "table" ? "grid" : "table";
  };
}

export const itineraryStore = new ItineraryStore();