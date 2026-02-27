import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userId: '',
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        // --- LIVE LOGIN LOGIC ---
        const response = await axios.post('https://netflix-backend-8v2d.onrender.com/login', {
          username: formData.userId, 
          password: formData.password
        });
        
        if (response.status === 200) {
          navigate('/browse'); 
        }
      } else {
        // --- LIVE REGISTRATION LOGIC ---
        const response = await axios.post('https://netflix-backend-8v2d.onrender.com/register', formData);
        
        if (response.status === 201) {
          alert("Registration successful! Please sign in.");
          setIsLogin(true); 
        }
      }
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred. Please try again.");
    }
  };

  return (
    <div 
      className="relative h-screen w-full bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw")`
      }}
    >
      {/* Dark overlay for authentic Netflix look */}
      <div className="absolute inset-0 bg-black/50 sm:bg-black/60 z-0"></div>

      {/* Header Logo */}
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
        alt="Netflix Logo" 
        className="absolute left-4 top-4 sm:left-10 sm:top-6 w-24 sm:w-40 z-20 cursor-pointer"
      />

      {/* Centered Login Card */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full pt-10 px-4">
        <div className="bg-black/80 p-10 sm:p-16 rounded-md w-full max-w-[450px]">
          <h1 className="text-3xl text-white font-bold mb-8">
            {isLogin ? "Sign In" : "Sign Up"}
          </h1>

          {error && <p className="p-3 bg-[#e87c03] text-white rounded mb-4 text-sm">{error}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="userId"
              placeholder="Username / User ID"
              value={formData.userId}
              onChange={handleInputChange}
              className="w-full p-4 bg-[#333] text-white rounded outline-none focus:bg-[#454545] transition"
              required
            />
            
            {!isLogin && (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-[#333] text-white rounded outline-none focus:bg-[#454545] transition"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-[#333] text-white rounded outline-none focus:bg-[#454545] transition"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-[#333] text-white rounded outline-none focus:bg-[#454545] transition"
                  required
                />
              </>
            )}

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-4 bg-[#333] text-white rounded outline-none focus:bg-[#454545] transition"
              required
            />

            <button 
              type="submit" 
              className="w-full bg-[#e50914] text-white font-bold py-4 rounded hover:bg-[#c11119] transition mt-6 cursor-pointer"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <div className="mt-16 text-[#737373]">
            {isLogin ? "New to Netflix? " : "Already have an account? "}
            <span 
              onClick={() => {
                setIsLogin(!isLogin);
                setError(""); 
              }} 
              className="text-white hover:underline cursor-pointer font-medium"
            >
              {isLogin ? "Sign up now." : "Sign in."}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;