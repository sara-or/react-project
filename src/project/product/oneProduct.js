import React from 'react'
import { useParams } from 'react-router'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {
    withRouter
} from "react-router-dom";

import './style.css'
function mapStateToProps(state) {
  return{products:state.productsReducer.products}
}

export default withRouter( connect(mapStateToProps)(function OneProduct(props) {
    const { id } = useParams();
    const { products,history} = props;
   
    
    function closeModal(){
      history.push('/products');
  }
    return (
      
        <>
        
         <Modal.Dialog>
  <Modal.Header closeButton>
     <Modal.Title className="a">{products[id-1].name}</Modal.Title>
   </Modal.Header>

  <Modal.Body>
  <img src={products[id-1].img} style={{ maxWidth: "13rem", maxHeight: "10rem", marginLeft: "36px" }}></img>
  <p>מחיר:{products[id-1].price}</p>
   </Modal.Body>

  <Modal.Footer>
     <Button variant="secondary" onClick={()=>closeModal()}>סגור</Button>
    
  </Modal.Footer>
 </Modal.Dialog>

        </>
    )
}))


