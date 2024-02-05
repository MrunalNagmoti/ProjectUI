"use client"
import { Register } from "@/Register/Register";
import { Student } from "@/Student/Student";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Home() {

const [users, setUsers] = useState([])
  useEffect(() => {
    fnGetUsers();
  }, [])
  const fnGetUsers = async () => {
    try {
      const res = await axios.get("http://localhost:2020/stdCtl/get-std")
      setUsers(res.data);
    } catch (ex) {
      setUsers([])
    }

  }
  return (
    <div>
      
      <Register fnGetUsers={fnGetUsers}/>
      <Student users={users}/>
    </div>
  );
}
