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
                            <th style={{textAlign: "center", color: "#01497c"}}>serial number</th> 
                            <th style={{textAlign: "center", color: "#01497c"}}>House name</th>
                            <th style={{textAlign: "center", color: "#01497c"}}>No of room</th>
                            <th style={{textAlign: "center", color: "#01497c"}}>Zip code</th>
                            <th style={{textAlign: "center", color: "#01497c"}}>country</th>
                            <th style={{textAlign: "center", color: "#01497c"}}>city</th>
                            <th style={{textAlign: "center", color: "#01497c"}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.map((item, index)=>{
                                return (
                                    <tr key ={index}>
                                        <th style={{color: "#669bb"}} scope='row'>{index+1}</th>
                                        <td style={{color: "#669bb"}}>{item.hname}</td>
                                        <td style={{color: "#669bb"}}>{item.noroom}</td>
                                        <td style={{color: "#669bb"}}>{item.zipcode}</td>
                                        <td style={{color: "#669bb"}}>{item.country}</td>
                                        <td style={{color: "#669bb"}}>{item.city}</td>
                                        <td><Link to={`/update/${item.id}`}>
                                            <button style={{backgroundColor: "#01497c"}} className='btn btnSuccess'>Edit</button>
                                        </Link></td>
                                        <td><Link to={`/user/${item.id}`}>
                                            <button style={{backgroundColor: "#c1121f"}} className='btn btnSuccess'onClick={()=>onDeleteHouse(item.id)}>Delete</button>
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