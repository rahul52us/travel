import { makeAutoObservable } from "mobx";
import axios from "axios";
import { authStore } from "../authStore/authStore";

class LeadStore {
  leads: any = {
    loading: false,
    data: [],
    totalPages: 1
  };
  leadDetails: any = null;
  isLoading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  getAllLeads = async (payload: any) => {
    this.leads.loading = true;
    try {
      const response: any = await axios.post("/lead", {
        ...payload,
        company: authStore.company,
      });
      this.leads.data = response?.data?.data?.data || [];
      this.leads.totalPages = response?.data?.data?.totalPages || 1;
      return response;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err.message);
    } finally {
      this.leads.loading = false;
    }
  };

  getLeadById = async (leadId: string) => {
    this.isLoading = true;
    try {
      const response = await axios.get(`/lead/${leadId}`);
      this.leadDetails = response?.data?.data || null;
      return response;
    } catch (err: any) {
      this.error = err?.response?.data?.message || "Failed to fetch lead details.";
      return Promise.reject(err?.response?.data || err.message);
    } finally {
      this.isLoading = false;
    }
  };

  createLead = async (payload: any) => {
    this.isLoading = true;
    try {
      const response = await axios.post("/lead/create", {
        ...payload,
        company: authStore.company,
      });
      return response;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err.message);
    } finally {
      this.isLoading = false;
    }
  };

  updateLead = async (leadId: string, payload: any) => {
    this.isLoading = true;
    try {
      const response = await axios.put(`/lead/${leadId}`, {
        ...payload,
        company: authStore.company,
      });
      if (this.leadDetails && this.leadDetails.id === leadId) {
        this.leadDetails = response?.data?.data || this.leadDetails;
      }
      return response;
    } catch (err: any) {
      this.error = err?.response?.data?.message || "Failed to update lead.";
      return Promise.reject(err?.response?.data || err.message);
    } finally {
      this.isLoading = false;
    }
  };

  deleteLead = async (leadId: string) => {
    this.isLoading = true;
    try {
      const response = await axios.delete(`/lead/${leadId}`);
      this.leads.data = this.leads.data.filter((lead: any) => lead.id !== leadId);
      return response;
    } catch (err: any) {
      this.error = err?.response?.data?.message || "Failed to delete lead.";
      return Promise.reject(err?.response?.data || err.message);
    } finally {
      this.isLoading = false;
    }
  };

  clearLeadDetails = () => {
    this.leadDetails = null;
  };

  clearError = () => {
    this.error = null;
  };
}

export const leadStore = new LeadStore();