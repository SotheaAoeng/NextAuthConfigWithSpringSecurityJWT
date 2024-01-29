import LoginForm from "@/app/components/ui/login/LoginForm";
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth";
import {authOption} from "@/app/lib/session/auth";
const Login = async () => {

    const session = await getServerSession(authOption);

    if (session){
        redirect("/")
    }

    return <LoginForm />;

}
export default Login