"use client"
import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const TableComp = (props) => {
    const { headers, data, columns } = props;
    return <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
                <TableRow>
                    {
                        headers?.map((val, ind) => {
                            return <StyledTableCell key={val + ind}>{val}</StyledTableCell>

                        })
                    }

                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((obj, ind) => (
                    <StyledTableRow key={obj + ind}>
                        {
                            columns?.map((key, index) => {
                                return <StyledTableCell  key={key + index} align="left">{obj[key]}</StyledTableCell>
                                
                            })

                        }
                        
                    </StyledTableRow>
                ))}
            </TableBody>

        </Table>
    </TableContainer>
    
}
export const Student = ({ users }) => {

    return (

        <div>
            <h3 className='text-center bg-info'>Student</h3>
            <TableComp headers={["UId", "PASSWORD", "COUNTRY", "ADDRESS"]} data={users} columns={["userId", "pwd", "country", "address"]} />
        </div>

    )
}

