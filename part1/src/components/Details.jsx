import React from "react";
import {useEffect, useState} from 'react'
export const Details = ({info}) =>{
    const [isLoading, setLoading] = useState(true)
    const [user, setUser] = useState([])
    
    useEffect(()=>{
        setTimeout(()=>{
        const ab= new AbortController();
        fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/' + info.id + '.json', {signal: ab.signal})
        .then(response => response.json())
        .then(user =>{
            setUser(user)
            setLoading(false)
        })
        
        return()=>{
            ab.abort();
            
        } }, 2000)
        setLoading(true) },[info.id])
   
    if (isLoading){
    return(
       <div>Загруууузка</div>
    )
}
     else {
        return<div>
         <div>{user.name}</div>
         <img src= {user.avatar} alt='avatar'/>
         <div>{user.details.city}</div>
         <div>{user.details.company}</div>
         <div>{user.details.position}</div>
         </div>
     }


}