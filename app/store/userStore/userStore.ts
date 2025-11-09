import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import { authStore } from "../authStore/authStore";

class UserStore {
  therapist: any = {
    loading: false,
    data: [],
    totalPages: 1,
    totalCount: 0,
    currentPage: 1,
  };
  
  userSettings: any = {};
  userPreferences: any = {};
  isLoading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchUserSettings = async () => {
    this.isLoading = true;
    try {
      const response = await axios.get("/user/settings");
      this.userSettings = response.data?.settings || {};
    } catch (err: any) {
      this.error = err?.response?.data?.message || "Failed to fetch settings.";
      throw err;
    } finally {
      this.isLoading = false;
    }
  };

  createUser = async (payload: any) => {
    this.isLoading = true;
    try {
      console.log("🚀 Creating user with payload:", payload);
      
      // Use the appropriate endpoint based on userType
      const endpoint = payload.userType === "lead" ? "/user/lead/create" : "/user/create";
      
      const response = await axios.post(endpoint, {
        ...payload,
        company: authStore.company,
      });
      
      console.log("✅ User created successfully:", response.data);
      return response;
    } catch (err: any) {
      console.error("❌ Error creating user:", err?.response?.data || err.message);
      return Promise.reject(err?.response?.data || err.message);
    } finally {
      this.isLoading = false;
    }
  };

  deleteUser = async (payload: any) => {
    try {
      // Use lead-specific delete endpoint if it's a lead
      const endpoint = payload.userType === "lead" 
        ? `/user/lead/${payload._id}`
        : `/user/profile/${payload._id}`;
      
      const response = await axios.delete(endpoint);
      return response;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err.message);
    }
  };

  updateUser = async (payload: any) => {
    this.isLoading = true;
    try {
      console.log("🔄 Updating user with payload:", payload);
      
      // Use lead-specific update endpoint if it's a lead
      const endpoint = payload.userType === "lead"
        ? `/user/lead/${payload._id}`
        : `/user/profile/${payload._id}`;
      
      const response = await axios.put(endpoint, {
        ...payload,
        company: authStore.company,
      });
      
      console.log("✅ User updated successfully:", response.data);
      return response;
    } catch (err: any) {
      console.error("❌ Error updating user:", err?.response?.data || err.message);
      return Promise.reject(err?.response?.data || err.message);
    } finally {
      this.isLoading = false;
    }
  };

  getUserByName = async (payload: any) => {
    try {
      const response = await axios.get(`/user/${payload.name}`);
      return response;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err.message);
    }
  };

  getAllUsers = async (payload: any) => {
    runInAction(() => {
      this.therapist.loading = true;
    });
    
    try {
      console.log("🔍 Fetching users with payload:", payload);
      console.log("🏢 Company:", authStore.company);
      
      const requestData = {
        page: payload.page || 1,
        limit: payload.limit || 30,
        company: authStore.company,
        ...(payload.search && { search: payload.search }),
        ...(payload.userType && { userType: payload.userType }),
        ...(payload.leadStatus && { leadStatus: payload.leadStatus }),
      };
      
      console.log("📤 Request data being sent:", requestData);
      
      // Use the new getUsersWithFilter endpoint
      const response: any = await axios.post("/user/filter", requestData);
      
      console.log("✅ Full response:", response);
      console.log("📊 Response status:", response.status);
      console.log("📦 Response data:", response.data);
      
      // Parse response data based on backend structure
      const userData = response?.data?.data || [];
      const totalPages = response?.data?.totalPages || 1;
      const totalCount = response?.data?.totalCount || 0;
      const currentPage = response?.data?.currentPage || 1;
      
      console.log("📊 Parsed user data:", userData);
      console.log("📄 Total pages:", totalPages);
      console.log("📝 Total count:", totalCount);
      
      runInAction(() => {
        this.therapist.data = userData;
        this.therapist.totalPages = totalPages;
        this.therapist.totalCount = totalCount;
        this.therapist.currentPage = currentPage;
        this.therapist.loading = false;
      });
      
      return response;
    } catch (err: any) {
      console.error("❌ Error response:", err?.response);
      console.error("❌ Error status:", err?.response?.status);
      console.error("❌ Error data:", err?.response?.data);
      console.error("❌ Full error:", err);
      
      runInAction(() => {
        this.therapist.loading = false;
        this.therapist.data = [];
        this.therapist.totalPages = 1;
        this.therapist.totalCount = 0;
      });
      return Promise.reject(err?.response?.data || err.message);
    }
  };

  // Get lead statistics
  getLeadStats = async () => {
    try {
      const response = await axios.post("/user/lead/stats", {
        company: authStore.company,
      });
      return response.data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err.message);
    }
  };

  // Convert lead to customer
  convertLead = async (leadId: string) => {
    try {
      const response = await axios.put(`/user/lead/${leadId}/convert`);
      return response.data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err.message);
    }
  };

  updateUserSettings = async (settings: any) => {
    this.isLoading = true;
    try {
      const response = await axios.put("/user/settings", settings);
      this.userSettings = response.data?.settings || {};
    } catch (err: any) {
      this.error = err?.response?.data?.message || "Failed to update settings.";
      throw err;
    } finally {
      this.isLoading = false;
    }
  };

  updateUserPreferences = async (preferences: any) => {
    this.isLoading = true;
    try {
      const response = await axios.put("/user/preferences", preferences);
      this.userPreferences = response.data?.preferences || {};
    } catch (err: any) {
      this.error =
        err?.response?.data?.message || "Failed to update preferences.";
      throw err;
    } finally {
      this.isLoading = false;
    }
  };
}

export const userStore = new UserStore();