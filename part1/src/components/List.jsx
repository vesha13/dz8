import React from "react";
import {useEffect, useState, useRef} from 'react'
import { Details } from "./Details";
export const List = () =>{

    const [users, setUsers] = useState([])
    const [info, setInfo] = useState([])
    const [isLoading,setLoading] = useState(true)
    const OURref = useRef();

    useEffect(()=>{
        const ab= new AbortController();
        fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json',{signal: ab.signal})
        .then(response => response.json())
        .then(users =>{
            setUsers(users)
            setLoading(false)
        })
        return()=>{
            ab.abort();
        }
    },[])

    const handleOnClick = (e)=>{
        setLoading(true) 
        if (isLoading)
        setLoading(false) 
    }

    return(
        <div >
        {users.map((user,index) =>
            <button key={index}
            value ={user}
            onMouseDown ={()=>setInfo({id:user.id, name: user.name})}
            onMouseUp ={(e)=> handleOnClick(e)}>{user.name}</button>
        )}
        {OURref.current!== OURref &&<Details info={info} ref={OURref}/>}
         
        </div>  
    ) 
    
} 