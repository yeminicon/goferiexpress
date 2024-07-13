import axios from "axios";


export const fetchCampaignsByCount = async (channel: string, month?: any) => {
  if (month === "") {
    const startDate = "";
    const endDate = "";
    const {
      data: { data },
    } = await axios.get(
      `/analytics/status?channel=${channel}&startDate=${startDate}&endDate=${endDate}`,
    );

    return data;
  } else {
    const startDate = month[0];
    const endDate = month[1];
    const {
      data: { data },
    } = await axios.get(
      `/analytics/status?channel=${channel}&startDate=${startDate}&endDate=${endDate}`,
    );
    return data;
  }
};

export const fetchCampaignsByCountForBarChart = async (activities: string) => {
  const {
    data: { data },
  } = await axios.get(`/analytics/status/filter?variant=${activities}`);
  return data;
};
