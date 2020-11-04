import axios from "axios";

const instance = axios.create({
	baseURL: "https://us-central1-e-clone-35922.cloudfunctions.net/api", //The API (Cloud function) URL
});

export default instance;

// https://us-central1-e-clone-35922.cloudfunctions.net/api   ---> Cloud functions URl

// http://localhost:5001/e-clone-35922/us-central1/api   -----> local URL
