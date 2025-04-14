"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { stringify } from "querystring";
import { data } from "react-router-dom";

export function AuthPage({ isSignin: initialIsSignin }: { isSignin: boolean }) {
  const [isSignin, setIsSignin] = useState(initialIsSignin);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [name , setName] = useState("");
  const [loading, setLoading] =useState(false);
  const router = useRouter();

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  const handleSubmit = async () =>{
    setError("")
    setLoading(true);
  

  if(!email || !password){
    setError("Email and password are required");
    setLoading(false);
  }

  if(!isSignin && password != confirmPassword){
    setError("Password do not match");
    setLoading(false);
  }

  try{
    if(isSignin){
      const response = await fetch(`${API_BASE_URL}/signin`,{
        method:'POST',
        headers :{
          'Content-type':'application/json'
        },
        body :JSON.stringify({
          username:email,
          password:password
        })
      })

      const data = await response.json();

      if(!response.ok){
        throw new Error(data.message || 'Failed to sign in');
      }

      //Storing the jwt token in the localstorage
      localStorage.setItem('token', data.token);

      router.push('/rooms');
    }else{
      const response = await fetch (`${API_BASE_URL}/signup`,{
        method: 'POST',
        headers:{
          'content-Type' : 'application/json'
        },
        body: JSON.stringify({
          username:email,
          password:password,
          name: name || email.split('@')[0] // using the part of email if not provided.

        })
      })
      const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || 'Failed to create account');
        }
        setIsSignin(true);
        setError('');
        alert('Account created successfully! Please sign in');
        router.push('/signin');

    }
  }
  catch(error:any){
    setError(error.message || 'An unexpected error occured')
  }finally {
    setLoading(false);
  }
};

const toggleAuthMode = () => {
  setIsSignin(!isSignin);
  setError('');
  // Optionally change the URL to match the current mode
  router.push(isSignin ? "/signup" : "/signin");
};


return (
  <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100">
    <div className="p-8 m-2 bg-white rounded-lg shadow-lg max-w-md w-full border border-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        {isSignin ? "Welcome Back" : "Create Account"}
      </h1>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm border border-red-200 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </div>
      )}
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          placeholder="Your email address"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      
      {!isSignin && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      )}
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          type="password"
          placeholder="Your password"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      
      {!isSignin && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-black mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      )}

      <div className="mt-6">
        <button
          className={`w-full ${loading ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'} text-white rounded-md p-3 transition-colors font-medium shadow-sm`}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {isSignin ? "Signing In..." : "Signing Up..."}
            </span>
          ) : (
            isSignin ? "Sign In" : "Sign Up"
          )}
        </button>
      </div>
      
      <div className="mt-6 text-center text-sm">
        {isSignin ? (
          <p className="text-black">
            Don't have an account?{" "}
            <button 
              onClick={toggleAuthMode} 
              className="text-indigo-600 hover:text-indigo-800 font-medium hover:underline"
            >
              Sign up
            </button>
          </p>
        ) : (
          <p className="text-gray-600">
            Already have an account?{" "}
            <button 
              onClick={toggleAuthMode} 
              className="text-indigo-600 hover:text-indigo-800 font-medium hover:underline"
            >
              Sign in
            </button>
          </p>
        )}
      </div>

      {isSignin && (
        <div className="mt-4 text-center">
          <button className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline">
            Forgot password?
          </button>
        </div>
      )}
    </div>
  </div>
);
}