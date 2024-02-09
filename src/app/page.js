"use client"
import { Register } from "@/Register/Register";
import { Student } from "@/Student/Student";
import { Api } from "@/services/Api";



import { useEffect, useState } from "react";

export default function Home() {

  const [users, setUsers] = useState([])
  useEffect(() => {
    fnGetUsers();
  }, [])
  const fnGetUsers = async () => {
    try {

      const res = await Api.sendGetReq("stdCtl/get-std")
      setUsers(res.data);
    } catch (ex) {
      setUsers([])
    }

  }
  return (
    <div>
      

      <Register fnGetUsers={fnGetUsers} />
      <Student users={users} />

      
    </div>
  );
}
