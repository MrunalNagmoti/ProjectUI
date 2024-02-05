"use client"
import axios from 'axios'
import React, { useState } from 'react'

export const Register = ({ fnGetUsers }) => {

    const [data, setData] = useState({})
    const fnChange = (e) => {
        const { value, name, type, checked } = e.target
        // console.log(value, name)
        if (type == 'checkbox') {
            var checkedValue = data['hobbies'] ? data['hobbies'].split(',') : []
            if (checked) {
                checkedValue.push(value)['cri', 'fb']
            }
            else {
                checkedValue.splice(checkedValue.indexOf(value), 1)
            }
            setData({ ...data, 'hobbies': checkedValue.join() })

        } else {
            setData({ ...data, [name]: value })
        }
    }

    const handleButton = async () => {
        try {
            console.log(data)
            const res = await axios.post("http://localhost:2020/stdCtl/reg-std", { data })
            const { acknowledged, insertedId } = res.data
            if (acknowledged && insertedId) {
                setData({userId:"", pwd:"",hobbies:"",gen:"",country:"",address:"" })
                // setData({})
                alert("Success")
                fnGetUsers()
            } else {
                alert("Not Inserted")
            }
            // console.log(res)
        } catch (e) {
            console.error(e.message)
        } finally {

        }
    }
 

    return (
        <div>
            <h3> Registration</h3>

            <p>
                <b>User Id:</b><input value={data.userId} onChange={fnChange} name='userId' />
            </p>
            <p>
                <b>Password:</b><input value={data.pwd} onChange={fnChange} name='pwd' />
            </p>
            <p>
                <b>Gender</b>
                <input checked={data.gen === 'm'} value='m' name='gen' type='radio' onChange={fnChange} />Male
                <input checked={data.gen === 'f'} value='f' name='gen' type='radio' onChange={fnChange} />Female
            </p>
            <p>
                <b>Hobbies:</b>
                <input checked={data.hobbies?.includes("fb")} name='fb' type='checkbox' value='fb' onChange={fnChange} />Football
                <input checked={data.hobbies?.includes("cri")} name='cri' type='checkbox' value='cri' onChange={fnChange} />Cricket
            </p>
            <p>
                <b>Country:</b>
                <select onChange={fnChange} name='country' >
                    <option >Select option</option>
                    <option value='ind'>India</option>
                    <option value='chi'>China</option>
                    <option value='us'>USA</option>
                </select>
            </p>
            <p>
                <b>Address</b><textarea value={data.address} onChange={fnChange} name='address' />
            </p>
            <p>
                <button onClick={handleButton}>Register</button>
            </p>




        </div>
    )
}
