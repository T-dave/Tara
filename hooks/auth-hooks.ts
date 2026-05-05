import { AuthService } from "@/src/services/auth.service";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuth = ()=>{
    const handleSignup = async (name:string, email: string, password: string) => {
        try {
            const user = await AuthService.signup(name, email, password);
            AsyncStorage.setItem("user", JSON.stringify(user));
            router.replace("/(tabs)");
        } catch (err: any) {
            console.log(err);
        }
    };
    const handleSignIn = async (email: string, password: string) => {
        try {
            const user = await AuthService.login(email, password);
            AsyncStorage.setItem("user", JSON.stringify(user));
            router.replace("/(tabs)");
        } catch (err: any) {
            if(err.message === "Firebase: Error (auth/invalid-credential).") alert("Invalid Credentials");
            console.log(err.message);
        }
    };
    // const googleAuth = ()=>{
    //     const auth = getAuth();
    //     signInWithPopup(auth, provider)
    //     .then((result) => {
    //         // This gives you a Google Access Token. You can use it to access the Google API.
    //         const credential = GoogleAuthProvider.credentialFromResult(result);
    //         const token = credential?.accessToken;
    //         // The signed-in user info.
    //         const user = result.user;
    //         // IdP data available using getAdditionalUserInfo(result)
    //         // ...
    //         console.log(credential);
    //         console.log(token);
    //         console.log(user);
    //     }).catch((error) => {
    //         // Handle Errors here.
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         // The email of the user's account used.
    //         const email = error.customData.email;
    //         // The AuthCredential type that was used.
    //         const credential = GoogleAuthProvider.credentialFromError(error);
    //         // ...
    //     });
    //}
    return { handleSignup, handleSignIn }
}

export default useAuth;