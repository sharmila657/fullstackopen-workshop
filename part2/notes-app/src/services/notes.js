import axios from "axios";
const baseUrl = "/api/notes";

const getAll = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};

const create = async (newObject, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  console.log(config, "config");
  const response = await axios.post(baseUrl, newObject, config);

  return response.data;
};
const update = (id, updatedObject) => {
  return axios.put(`${baseUrl}/${id}`, updatedObject);
};
export default {
  getAll,
  create,
  update,
};
