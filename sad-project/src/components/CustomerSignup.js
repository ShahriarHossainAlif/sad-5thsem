import React, { useState } from "react";
import { auth, db } from "./firebase"; // Now we are correctly importing the initialized `auth`
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {setDoc,doc} from "firebase/firestore";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
function CustomerSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState(""); 
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, { displayName: name });
      if(user){
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          name: name,
          phone: phone
        })
      }
      console.log("User created successfully:", user);
      toast.success("User registered successfully", {
        position: "top-center",
        autoClose: 2000,

      });
    } catch (error) {
      setError(error.message);
      toast.success(error.message, {
        position: "bottom-center",
        autoClose: 2000,

      });
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <h2>Customer Signup</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input type="text" placeholder="Username" onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="phone" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} required />
        <button type="submit">Signup</button>
        <Link to="/login">Already have an account</Link>
      </form>
    </div>
  );
}

export default CustomerSignup;
