"use client";

import { useState } from "react";
import supabase from "../../utils/supabase";

export default function PostForm() {
  const [post, setPost] = useState("");

  async function handleSubmit() {
    const { data, error } = await supabase.from("posts").insert({
      content: post,
    });

    if (error) {
      console.error(error);
    }

    setPost("");
  }

  return (
    <div className="grid h-screen place-items-center">
      <textarea
        className="border-slate-800 border-2"
        onChange={(e) => setPost(e.target.value)}
        value={post}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
