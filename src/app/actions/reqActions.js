const axios = require("axios");
axios.defaults.baseURL = ("http://localhost:3000/api");

const doPost = async (url, data = {}) => {
    try {
        const res = await axios.post(url, data);
        return res.data;
    }
    catch (error) {
        console.log(error);
    }
}


const doGet = async (url, data) => {
    try {
        const res = await axios.get(data);
        return res;
    }
    catch (error) {
        return error;
    }
}


const doPatch = async (url, data) => {
    try {
        const res = await axios.patch(url, data);
        return res;
    }
    catch (error) {
        return error;
    }
}

const doDelete = async (url, data) => {
    try {
        const res = await axios.delete(url, data);
        return res.data;
    }
    catch (error) {
        return error;
    }
}

export { doPost, doGet, doPatch, doDelete };