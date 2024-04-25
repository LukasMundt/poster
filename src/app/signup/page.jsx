"use client";

import { useState } from "react";
import supabase from "../../../utils/supabase";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup() {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      console.log(error);
    }
  }

  return (
    <div className="space-y-5 grid w-20">
      <input
        name="email"
        value={email}
        className="border border-slate-800"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        name="password"
        className="border border-slate-800"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Registrieren</button>
    </div>
  );
}
