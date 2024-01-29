import axios from 'axios';
import {getSession, signOut} from "next-auth/react";

export const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ME_REAN_API_URL,
});

http.interceptors.request.use(async (request) => {
    const userSession = await getSession();
    if(!userSession) return request;

    // @ts-ignore
    request.headers.Authorization = `Bearer ${userSession?.token}`;
    return request;
});

http.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const response = error?.response
        const data = response?.data
        if(!response){
            return Promise.reject(error);
        }else if (!response.ok) {
            const error = (data && data?.message) || response.statusText || data?.status?.message;

            if([401].includes(response.status)){
                signOut()
                return;
            }

            return Promise.reject({
                message: error,
                status: response.status
            });
        }
    },
);

