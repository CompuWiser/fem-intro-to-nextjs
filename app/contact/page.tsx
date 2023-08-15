"use client";

import type { FC, FormEvent } from "react";
import { useState } from "react";

const Contact: FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log("🚀 ~ file: page.tsx:21 ~ handleSubmit");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Contact;
