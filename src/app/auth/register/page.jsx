"use client"
import VantaBackground from "@/components/VantaBackground/VantaBackground";
import React, { useState ,useContext} from "react";
import UserContext from "@/contexts/UserContext";
import './page.css'
import Link from "next/link";
import { useRouter } from "next/navigation";

function register() {
    const router = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const {setUser, user} = useContext(UserContext)

    const handleSubmit =(e)=>{
        e.preventDefault();
        setUser({username,password,email});
        router.push("/")
    }
    function userperson(){
      if (user) return <div>{user.username}</div>
    }
    return (
        <div className="main">
            <div className="login">
                <VantaBackground/>
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="loginheading">
                            <h2>Register</h2>
                            <h3>Create an account to continue</h3>
                        </div>
                        <div className="username">
                            <label htmlFor="username">Username:</label>
                            <input type="text" name="username" id="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                        </div>
                        <div className="username">
                          <label htmlFor="email">Email:</label>
                          <input type="text" name="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <div className="username">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        </div>
                        <button type="submit">Register</button>
                    </form>
                    <div className="register">
                        <h4>Already registered?</h4>
                        <Link href={"/auth/login"}>Sign in to your Account</Link>
                        {userperson()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default register