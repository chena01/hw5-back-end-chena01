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
                    <div className="card"style={{ backgroundColor: "#d3f8e2", margin: "0rem 0rem 0rem 30rem ", padding: "1rem 3rem 1rem 3rem"}} >
                    
                        <div className="card-header">
                        <h1 style={{color: "#01497c"}}>show House details</h1>
                        </div>
                            <strong style={{color: "#01497c"}}>ID:</strong>
                            <strong style={{color: "#01497c"}}>{user?.id}</strong>
                            <br />
                            <strong style={{color: "#01497c"}}>House name:</strong>
                            <strong style={{color: "#01497c"}}>{user?.hname}</strong>
                            <br />
                            <strong style={{color: "#01497c"}}>Number of room:</strong>
                            <strong style={{color: "#01497c"}}>{user?.noroom}</strong>
                            <br />
                            <strong style={{color: "#01497c"}}>Zipcode:</strong>
                            <strong style={{color: "#01497c"}}>{user.zipcode}</strong>
                            <br />
                            <strong style={{color: "#01497c"}}>Country:</strong>
                            <strong style={{color: "#01497c"}}>{user?.country}</strong>
                            <br />
                            <strong style={{color: "#01497c"}}>city:</strong>
                            <strong style={{color: "#01497c"}}>{user?.city}</strong>
                            <br />
                            <Link to="/" style={{color: "#01497c"}}>
                                <button style={{backgroundColor: "#01497c"}}>go home</button>
                            </Link>
                        </div>
                    
                </div>
            </div>
        );
    
}

export default View;