import axios from "axios"
const Base_Url ="https://project-server-eight.vercel.app/"
export class Api{
    
    static sendGetReq(url){
        return axios.get(Base_Url+url)
    }

    static sendPostReq(url,data){
        return axios.post(Base_Url+url,data)
    }
}