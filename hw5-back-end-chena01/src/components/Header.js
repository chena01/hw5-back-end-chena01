import React,{ useEffect,useState}  from 'react';
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = ()=> {
    const [activatet, setactivet]=useState("Home")
    const location =useLocation();
    useEffect(()=>{
        if (location.pathname==="/") {
            setactivet("Home")
        }else if(location.pathname==="/register"){
            setactivet("Register")
        }else if(location.pathname==="/view"){
            setactivet("View");
        }
    }, [location])
     
        return (
            <div className='Header'>
                <h4 style={{color: "#01497c"}} className='logo'>House management System</h4>
                <div className='header header-right' style={{display: "inline-flex"}}>
                
                    <Link to="/" style={{flexDirection: "flex-end"}}>
                    <p  style={{color: "#01497c"}} className={`${activatet==="Register" ? "ative": ""}`} onClick={()=>setactivet("Home")}>Home</p>
                    </Link>
                    <Link to="/register" style={{flexDirection: "flex-end"}}>
                        <p style={{color: "#01497c"}} className={`${activatet==="Register" ? "ative": ""}`} onClick={()=>setactivet("Register")}>Add House</p>
                    </Link>

                </div>
            </div>
        );
    
}



export default Header;