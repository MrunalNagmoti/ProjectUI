"use client"
import React from 'react'


    const Table = (props) => {
        const { headers, data, columns } = props;
        return (<table border='2px solid black'>
            <thead>
                <tr>
                    {
                        headers?.map((val, ind) => {
                            return <th key={val+ind}>{val}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((obj, ind) => {
                        return <tr key={obj + ind}>
                            {
                                columns?.map((key, index) => {
                                    return <td key={key + index}>{obj[key]}</td>
                                })

                            }
                        </tr>
                    })
                }
            </tbody>

        </table>
        )
    }
   export const Student = ({ users }) => {

        return (
        
            <div>
                <h3>Student</h3>
                <Table headers={["UId", "PASSWORD", "COUNTRY", "ADDRESS"]} data={users} columns={["userId", "pwd", "country", "address"]} />
            </div>
        
    )
}

