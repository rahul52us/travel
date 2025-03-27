import { makeAutoObservable } from "mobx";
import axios from "axios";

class DashboardStore {
  count : any = {
    data: {},
    loading: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  // Fetch Testimonials

  getDashboardCount = async () => {
    this.count.loading = true;
    try {
      const { data } = await axios.get(`/dashboard/counts`);

      this.count.data = data?.data || {};
      return data.data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    } finally {
      this.count.loading = false;
    }
  };
}

export const dashboardStore = new DashboardStore();
