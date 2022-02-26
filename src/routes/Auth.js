import { authService, firebaseInstance } from "fbase";
import React, { useState } from "react";

function Auth () {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ newAccount, setNewAccount ] = useState(true);
    const [ error, setError ] = useState("");

    const onChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = "";
            if (newAccount) {
                // create new account
                response = await authService.createUserWithEmailAndPassword(email, password);
            } else {
                // log in
                response = await authService.signInWithEmailAndPassword(email, password);
            }
            console.log(response);
        } catch(error) {
            setError(error.message);
        }
    };
    const toggleNewAccount = () => setNewAccount((current) => !current);

    const onSocialSignIn = async (event) => {
        const { target : {name}} = event;
        let provider = "";
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider;
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider;
        }
        const response = await authService.signInWithPopup(provider);
        console.log(response);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="email" type="text" placeholder="Email..." required value={email} onChange={onChange} />
                <input name="password" type="password" placeholder="Password..." required value={password} onChange={onChange} />
                <input type="submit" value={newAccount ? "Create Account" : "Sign In"} />
            </form>
            {error}
            <span onClick={toggleNewAccount}>{newAccount ? "Sign In" : "Create Account"}</span>
            <button onClick={onSocialSignIn} name="google">Continue with Google</button>
            <button onClick={onSocialSignIn} name="github">Continue with Github</button>
        </div>
    )
}
export default Auth;