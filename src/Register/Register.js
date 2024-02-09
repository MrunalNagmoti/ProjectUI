"use client"
import { Api } from '@/services/Api'

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
            // console.log(data)
            const res = await Api.sendPostReq("stdCtl/reg-std", { data })
            const { acknowledged, insertedId } = res.data
            if (acknowledged && insertedId) {
                setData({ userId: "", pwd: "", hobbies: "", gen: "", country: "", address: "" })
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
        <div className='container-fluid'>
            <h3 className='mb-3 text-center'> Registration</h3>
            <div className='row mb-3'>
                <div className='col-4 col-md-5 text-end'>
                    <b>User Id:</b>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <input className="form-control" value={data.userId} onChange={fnChange} name='userId' />
                </div>
            </div>

            <div className='row mb-3'>
                <div className='col-4 col-md-5 text-end'>
                    <b>Password:</b>
                </div>
                <div className='col-6 col-md-4 col-lg-3 '>
                    <input className="form-control" value={data.pwd} onChange={fnChange} name='pwd' />
                </div>
            </div>

            <div className='row mb-3'>
                <div className='col-4 col-md-5 text-end'>
                    <b>Gender</b>
                </div>
                <div className='col-6 col-md-4 col-lg-3 '>
                    <input className='me-2' checked={data.gen === 'm'} value='m' name='gen' type='radio' onChange={fnChange} />Male
                    <input className="ms-3 me-2" checked={data.gen === 'f'} value='f' name='gen' type='radio' onChange={fnChange} />Female
                </div>
            </div>

            <div className='row mb-3'>
                <div className='col-4 col-md-5 text-end'>
                    <b>Hobbies:</b>
                </div>
                <div className='col-6 col-md-4 col-lg-3 '>
                    <input className='me-2' checked={data.hobbies?.includes("fb")} name='fb' type='checkbox' value='fb' onChange={fnChange} />Football
                    <input  className="ms-3 me-2" checked={data.hobbies?.includes("cri")} name='cri' type='checkbox' value='cri' onChange={fnChange} />Cricket
                </div>
            </div>


            <div className='row mb-3'>
                <div className='col-4 col-md-5 text-end'>
                    <b>Country:</b>
                </div>
                <div className='col-6 col-md-4 col-lg-3 '>
                    <select className='form-control' onChange={fnChange} name='country' >
                        <option >Select option</option>
                        <option value='ind'>India</option>
                        <option value='chi'>China</option>
                        <option value='us'>USA</option>
                    </select>
                </div>
            </div>

            <div className='row mb-3'>
                <div className='col-4  col-md-5 text-end'>
                    <b>Address:</b>
                </div>
                <div className='col-6 col-md-4 col-lg-3 '>
                    <textarea className='form-control' value={data.address} onChange={fnChange} name='address' />
                </div>
            </div>

            <div className='row mb-3'>
                <div className='offset-4 offset-md-5 col-md-7 '>
                <button className='btn btn-danger ' onClick={handleButton}>Register</button>
                </div>
               
            </div>
           




        </div>
    )
}
