import React,{useState,useEffect} from 'react';
import { useParams, Link } from "react-router-dom";
import axios  from 'axios';


const View =()=> {
    const[user, setuser]=useState({})
    const {id} = useParams();
    
   useEffect(()=>{
    if (id) {
        getCustomerUser(id)
    }
   }, [id])
   const getCustomerUser = async(id)=>{
    const response = await axios.get(`http://localhost:5000/singlehouse/${id}`);
    if (response.status===200) {
        setuser(...response.data)
    }

}
   
    
    
        return (
            <div>
                
                <div style={{marginTop: "150px"}}>
                    <div className="card">
                        <div className="card-header">
                        <h1>show House details</h1>
                        </div>
                        <div className="container">
                            <strong>ID:</strong>
                            <strong>{user?.id}</strong>
                            <br />
                            <strong>House name:</strong>
                            <strong>{user?.hname}</strong>
                            <br />
                            <strong>Number of room:</strong>
                            <strong>{user?.noroom}</strong>
                            <br />
                            <strong>Zipcode:</strong>
                            <strong>{user.zipcode}</strong>
                            <br />
                            <strong>Country:</strong>
                            <strong>{user?.country}</strong>
                            <br />
                            <strong>city:</strong>
                            <strong>{user?.city}</strong>
                            <br />
                            <Link to="/">
                                <button>go home</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}

export default View;