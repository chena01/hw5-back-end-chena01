import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';



const Home =()=> {
    const [data, setData]=useState([]);
    useEffect(()=>{
        getHouses();
    },[])
    const getHouses= async(data)=>{
        const response = await axios.get("http://localhost:5000/houses",data);
        if (response.status===200) {
            setData(response.data);
            toast.success(response.data);
        }
    }
    const onDeleteHouse =async(id)=>{
        if (window.confirm("you are about to delete user. are you sure you want to delete?")) {
            const response = await axios.delete(`http://localhost:5000/house/${id}`);
            if (response.status===200) {
                toast.success(response.data);
                getHouses()
            }
        }
    }
    console.log("data=>", data);
        return (
            <div style={{marginTop: "150px"}}>
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th style={{textAlign: "center"}}>serial number</th> 
                            <th style={{textAlign: "center"}}>House name</th>
                            <th style={{textAlign: "center"}}>No of room</th>
                            <th style={{textAlign: "center"}}>Zip code</th>
                            <th style={{textAlign: "center"}}>country</th>
                            <th style={{textAlign: "center"}}>city</th>
                            <th style={{textAlign: "center"}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.map((item, index)=>{
                                return (
                                    <tr key ={index}>
                                        <th scope='row'>{index+1}</th>
                                        <td>{item.hname}</td>
                                        <td>{item.noroom}</td>
                                        <td>{item.location}</td>
                                        <td>{item.country}</td>
                                        <td>{item.city}</td>
                                        <td><Link to={`/update/${item.id}`}>
                                            <button className='btn btnSuccess'>Edit</button>
                                        </Link></td>
                                        <td><Link to={`/user/${item.id}`}>
                                            <button className='btn btnSuccess'onClick={()=>onDeleteHouse(item.id)}>Delete</button>
                                        </Link></td>
                                        <td><Link to={`/view/${item.id}`}>
                                            <button className='btn btnSuccess'>View</button>
                                        </Link></td>
                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </table>
                
            </div>
        );
    
}


export default Home;