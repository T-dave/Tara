import { AuthService } from "@/src/services/auth.service";

const useAuth = ()=>{
    const handleSignup = async (name:string, email: string, password: string) => {
    try {
        const user = await AuthService.signup(name, email, password);
        console.log('User:', user);
    } catch (err: any) {
        console.log(err.message);
    }
    };
    const handleSignIn = async (email: string, password: string) => {
    try {
        const user = await AuthService.login(email, password);
        console.log('User:', user);
    } catch (err: any) {
        console.log(err.message);
    }
    };
    return { handleSignup, handleSignIn }
}

export default useAuth;