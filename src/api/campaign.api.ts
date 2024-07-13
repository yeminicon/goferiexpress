import axios from "axios";

export const createDraftCampaign = async (payload: any) => {
  const {
    data: { data },
  } = await axios.post("/campaign/draft", payload);

  return data;
};

export const createCampaign = async (payload: any) => {
  const {
    data: { data },
  } = await axios.post("/campaign", payload);

  return data;
};

export const fetchDraftCampaign = async (
  page: number,
  search?: string,
  sort?: string,
) => {
  const {
    data: { data },
  } = await axios.get(
    `/campaign/draft?page=${page}&limit=9&search=${search}&sort=${sort}`,
  );
  return data;
};

export const fetchScheduledCampaign = async (
  page: number,
  search?: string,
  sort?: string,
) => {
  const {
    data: { data },
  } = await axios.get(
    `/campaign/scheduled?page=${page}&limit=9&search=${search}&sort=${sort}`,
  );
  return data;
};

export const deleteCampaign = async (id: string) => {
  const { data } = await axios.delete(`/campaign/${id}`);

  return data;
};

export const fetchSentCampaign = async () => {
  const {
    data: { data },
  } = await axios.get("/campaign/sent");

  return data;
};

export const editCampaign = async (id: string, payload: any) => {
  const { data } = await axios.patch(`/campaign/${id}`, payload);

  return data;
};

export const forwardSavedCampaign = async (id: string, payload: any) => {
  const { data } = await axios.post(`/campaign/forward/${id}`, payload);

  return data;
};

export const fetchCampaignMessages = async (id: string) => {
  const {
    data: { data },
  } = await axios.get(`/message/campaign/${id}`);

  return data;
};

export const resendfailedCampaign = async (campaignId: string) => {
  const data = await axios.post(`/message/resend?id=${campaignId}`);

  return data;
};
