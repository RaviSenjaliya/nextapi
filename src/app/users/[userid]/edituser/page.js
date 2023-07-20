"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function page({ params }) {
  let id = params.userid;
  const [data, setdata] = useState({
    name: "",
    age: "",
  });

  const mychange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    setdata(data.result);
    return data;
  };
  const mysub = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/api/users/${id}`, data).then((e) => {
      console.log(e.data);
    });
  };
  return (
    <>
      <h1>Edit User</h1>
      <form onSubmit={mysub}>
        <input
          type="text"
          name="name"
          value={data.name}
          placeholder="name"
          onChange={mychange}
        />
        <br />
        <input
          type="number"
          name="age"
          value={data.age}
          placeholder="age"
          onChange={mychange}
        />
        <br />
        <input type="submit" placeholder="submit" />
      </form>
    </>
  );
}
