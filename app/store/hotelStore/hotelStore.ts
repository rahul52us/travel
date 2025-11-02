import { makeAutoObservable } from "mobx";
import axios from "axios";
import { authStore } from "../authStore/authStore";

class HotelStore {
  hotelLayout = "table";

  hotels = {
    data: [],
    totalPages: 1,
    loading: true,
  };

  openHotelDrawer = {
    open: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  // Fetch Hotels
  getHotels = async (sendData: {
    limit?: number;
    page: number;
    search?: string;
  }) => {
      this.hotels.loading = true;
      try {
        const { limit = 10, page, search } = sendData;
        const searchQuery = search
          ? `&search=${encodeURIComponent(search)}`
          : "";

        const { data } = await axios.get(
          `/hotel/get?page=${page}&limit=${limit}${searchQuery}`
        );

        this.hotels.data = data?.data || [];
        this.hotels.totalPages = data?.totalPages || 0;
        return data.data;
      } catch (err: any) {
        return Promise.reject(err?.response?.data || err);
      } finally {
        this.hotels.loading = false;
      }
  };

  // Delete Hotel
  deleteHotel = async (sendData: any) => {
    try {
      const { data } = await axios.delete(`/hotel/${sendData._id}`);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    }
  };

  // Create Hotel
  createHotel = async (sendData: any) => {
    try {
      const { data } = await axios.post(`/hotel/create`, {
        ...sendData,
        company: authStore.company,
      });
      this.hotels.data.unshift(data.data);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data);
    }
  };

  // Edit Hotel
  updateHotel = async (id: any, sendData: any) => {
    try {
      const { data } = await axios.put(`hotel/${id}`, sendData);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response || err);
    }
  };

  // Download Hotel List
  downloadHotelList = async (sendData: any) => {
    try {
      const response = await axios.post(
        "/hotel/download/list",
        sendData,
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "hotels.xlsx");
      document.body.appendChild(link);
      link.click();
      return {
        data: "Hotel list downloaded successfully",
      };
    } catch (err: any) {
      return Promise.reject(err);
    }
  };

  // Toggle Hotel Drawer
  setOpenHotelDrawer = () => {
    this.openHotelDrawer.open = !this.openHotelDrawer.open;
  };

  // Toggle Layout (Table/Grid)
  setHotelLayout = () => {
    this.hotelLayout =
      this.hotelLayout === "table" ? "grid" : "table";
  };
}

export const hotelStore = new HotelStore();