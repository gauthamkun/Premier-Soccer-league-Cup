import axios from "axios";

const API_URL = "http://localhost:8080/v1/";
const getPlayerData = () =>{

    return axios.get(API_URL + "Referee", { "Content-Type": "application/json" })
}

export default getPlayerData;