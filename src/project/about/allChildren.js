import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
export default function AllChildren(props) {
const [currentPage,setCurrentPage]=useState(0)
const numbersOfPage=React.Children.count(props.children)
      return (
        <>
          <Button disabled={currentPage===numbersOfPage-1}
           onClick={(e)=>setCurrentPage(p=>p+1)}>הבא</Button>
       
          {props.children[currentPage]}
          <Button
          disabled={currentPage===0}
          onClick={(e)=>setCurrentPage(p=>p-1)}>הקודם</Button>
       </>
       )
      
 
 
 }