"use client"
import VantaBackground from "@/components/VantaBackground/VantaBackground";
import React, { useState ,useContext} from "react";
import UserContext from "@/contexts/UserContext";
import './page.css'
import Link from "next/link";

function login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit =(e)=>{
        e.preventDefault();
        setUser({username,password});
    }
    return (
        <div className="main">
            <div className="login">
                <VantaBackground/>
                <div className="container">
                    <form action="">
                        <div className="loginheading">
                            <h2>Login</h2>
                            <h3>Sign in to your account to continue</h3>
                        </div>
                        <div className="username">
                            <label htmlFor="username">Username:</label>
                            <input type="text" name="username" id="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                        </div>
                        <div className="username">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        </div>

                        <button onSubmit={handleSubmit}>Login</button>
                    </form>
                    <div className="register">
                        <h4>Not registered?</h4>
                        <Link href={"/auth/register"}>Create Account</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default login