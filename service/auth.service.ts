import { AuthRequest, SignupRequest } from "@/app/lib/types/auth";
import { http } from "@/utils/http";

const ServiceId = {
    LOGIN: '/api/v1/auth/login',
    SIGNUP: '/api/v1/auth/signup',
}

const login = (data: AuthRequest) => {
    return http.post(ServiceId.LOGIN, data)
}

const signup = (data: SignupRequest) => {
    return http.post(ServiceId.SIGNUP, data)
}

export const authService = {
    login,
    signup,
}

export default authService;