import React,{useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';

const initialState ={
    hname:"",
    noroom:"",
    zipcode:"",
    country:"",
    city:""
}
const Register=()=>{
    const [state,setState] = useState(initialState);
   const {hname,noroom,zipcode,country,city}=state;
   const navigate =useNavigate;

   const addHouse= async(data)=>{
    const response = await axios.post("http://localhost:5000/register",data);
    if (response.status===200) {
        toast.success(response.data)
    }
   };

   const updateHouse= async(data, id)=>{
    const response = await axios.put(`http://localhost:5000/update/${id}`,data);
    if (response.status===200) {
        toast.success(response.data)
    }
   };

   const handleSubmit=(e)=>{
    e.preventDefault();
    if (!hname||!noroom || !zipcode || !country ||!country ||!city) {
      toast.error("you cannot submit empty form")  
    }else{ if (!id) {
        addHouse(state);
        navigate('/');
        setTimeout(()=>navigate.push('/'),500)
        
    }else{
        updateHouse(state,id)
        navigate('/');
    setTimeout(()=>navigate.push('/'),500)
    }
    
        
    }
    
   }
   const {id} = useParams();
   useEffect(()=>{
    if (id) {
        getSingeHouse(id);
    }
   }, [id])
   
   const getSingeHouse = async(id)=>{
        const response = await axios.get(`http://localhost:5000/singlehouse/${id}`);
        if (response.status===200) {
            setState(response.data[0])
        }
    
}


   const InputChange=(e)=>{
    let { name, value} = e.target;
    setState({...state, [name]: value})
   };
return (
    <div className="Register">
        <div className="container" style={{marginTop: "70px"}}>
        <h2 style={{color: "#01497c"}}>ADD NEW HOUSE</h2>
        
        <form  onSubmit={handleSubmit} style={{border: "4px solid #cddafd", borderRadius: "2rem", background: "#f0efeb"}}>
            <div className='inputdiv'>
            <label style={{marginLeft: "22px"}}>House Name:</label>
            <input type="text" placeholder='Enter house Name' style={{marginLeft: "22px",marginRight: "2rem"}} id="hname" name="hname" required onChange={InputChange} value={hname}/></div>
            <div className='inputdiv'>
            

            <label style={{marginLeft: "22px"}}>number of room:</label>
            <input type="text" placeholder='Enter number of room' id="noroom" name="noroom" required onChange={InputChange} value={noroom}/></div>
            <div className='inputdiv'>
            <label style={{marginLeft: "22px"}}>Zip code:</label>
            <input type="number" placeholder='Enter house zip code' id="zipcode" style={{marginLeft: "3.5rem",marginRight: "2rem"}} name="zipcode" required onChange={InputChange} value={zipcode}/></div>
            <div className='inputdiv'><label style={{marginLeft: "22px"}}>Country:</label>
            <input type="text" placeholder='Enter your Country' name="country" style={{marginLeft: "3.7rem",marginRight: "2rem"}}  id="country" required onChange={InputChange} value={country}/></div>
            <div className='inputdiv'><label style={{marginLeft: "22px"}}>City:</label>
            <input type="text" placeholder='Enter your City' style={{marginLeft: "5.43rem",marginRight: "2rem"}} name="city" id="city" required onChange={InputChange} value={city}/></div>
             <input type="submit" style={{marginLeft: "14rem", borderRadius: "1rem", marginBottom: "2rem", padding:".8rem", background: "#01497c",color: "#f0efeb"}} value={id ? "update" : "Register"}/>
             
        </form>
        </div>
    </div>
)
}
export default Register;