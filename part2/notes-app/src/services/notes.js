import axios from "axios";
const baseUrl = "/api/notes";

const getAll =()=>{
    const request = axios.get(baseUrl);
    return request.then((response)=>{
        return response.data;
    })
};

const create = (newObject, token)=>{
    return axios.post(baseUrl, newObject,{
    headers:{Authorization:`Bearer ${token}`},
});
};
const update = (id, updatedObject)=>{
    return axios.put(`${baseUrl}/${id}`,updatedObject);
};
export default {
    getAll,
    create,
    update,
};