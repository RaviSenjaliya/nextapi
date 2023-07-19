"use client";

import axios from "axios";
import { useState } from "react";

export default function page() {
  const [data, setdata] = useState({
    name: "",
    age: "",
  });
  const mychange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const mysub = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/users", data).then((e) => {
      console.log(e.data);
    });
  };

  return (
    <>
      <h1>New User</h1>
      <form onSubmit={mysub}>
        <input type="text" name="name" placeholder="name" onChange={mychange} />
        <br />
        <input type="number" name="age" placeholder="age" onChange={mychange} />
        <br />
        <input type="submit" placeholder="submit" />
      </form>
    </>
  );
}
