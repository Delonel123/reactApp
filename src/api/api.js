import * as axios from 'axios'
import { login } from '../redux/auth-reducer'


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "35e25900-aa22-461a-b106-8cf6072a0eea",
        "Access-Control-Allow-Origin": "*"
    }
})
export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    folow(userID) {
        return instance.post(`follow/${userID}`)
    },
    unfolow(userID) {
        return instance.delete(`follow/${userID}`)
    },
    getProfile(userId) {
        console.warn('obsolet method.Pleaase use profileAPI object')
        return profileAPI.getProfile(userId)
    },
    savePhoto(phoroFile){
        const formData = new FormData();
        formData.append("image", phoroFile);

        return instance.put(`profile/photo`, formData, {
            headers:{
                'Content-Type': 'multipart/form=data'
            }
        })
    },

}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userID) {
        return instance.get(`profile/status/` + userID)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    },
    saveProfile(profile){
        return instance.put(`/profile`, profile)
    }

}





export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email,password,rememberme = false){
        return instance.post('auth/login',{email,password,rememberme})
    },
    logout(){
        return instance.delete('auth/login')
    },
}