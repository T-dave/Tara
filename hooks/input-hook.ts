import { useState } from "react";

export default function useInput(){
    const [ name, setName ] = useState("");
    const [ nameError, setNameError ] = useState<string | null>("");
    const handleNameError = ()=>{
        if(name.length > 2){
            setNameError(null);
        }else{
            setNameError("Enter a valid name")
        }
    }
    const handleNameText = (text:string)=>{
        setName(text);
         if(text.length > 2){
            setNameError(null);
        }else setNameError("");
    }

    const [ email, setEmail ] = useState("");
    const [ emailError, setEmailError ] = useState<string | null>("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const handleEmailError=()=>{
        if(emailRegex.test(email)) setEmailError(null);
        else setEmailError("Enter a valid email");
    }
    const handleEmailText = (text:string)=>{
        setEmail(text);
        if(emailRegex.test(email)) setEmailError(null);
        else setEmailError("");

    }

    const [ password, setPassword ] = useState("");
    const [ passwordError, setPasswordError ] = useState<string | null>("");
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).+$/;
    const handlePasswordError=()=>{
        if(password.length < 8){
            setPasswordError("Password must be 8 digits")
        }else if(!/[A-Z]/.test(password)){
            setPasswordError("Password must include an uppercase letter")
        }else if(!/[a-z]/.test(password)){
            setPasswordError("Password must include a lowercase letter")
        }else if(!/[^A-Za-z0-9]/.test(password)){
            setPasswordError("Password must include a special character")
        }else{
            setPasswordError("")
        }
    }
    const handlePasswordText = (text:string)=>{
        setPassword(text)
        if(passwordRegex.test(password)) setPasswordError(null);
        else setPasswordError("");
    }

    // const handleSignUp = ()=>{
    //     if(name && email){
    //         setLoading(true);
    //         createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed up 
    //             const user = userCredential.user;
    //             console.log(user)
    //             setLoading(false);
    //             router.navigate("/(tabs)");
    //             // ...
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             console.error(errorCode, errorMessage);
    //             setLoading(false);
    //             // ..
    //         });
    //     }
    // }

    // const handleLogin = ()=>{
    //     if(password && email){
    //         setLoading(true);
    //         signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed in 
    //             const user = userCredential.user;
    //             console.log(user)
    //             setLoading(false);
    //             router.navigate("/(tabs)");
    //             // ...
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             console.error(errorCode, errorMessage);
    //             setLoading(false);
    //             // ..
    //         });
    //     }
    // }

    return {
        name,
        nameError,
        setNameError,
        handleNameText,
        handleNameError,
        email,
        setEmail,
        emailError,
        setEmailError,
        handleEmailText,
        handleEmailError,
        password,
        passwordError,
        setPasswordError,
        handlePasswordText,
        handlePasswordError,
    }
}