import axios from "axios";

export const fetchSenderId = async () => {
  const {
    data: { data },
  } = await axios.get("/sender-id");

  return data;
};
