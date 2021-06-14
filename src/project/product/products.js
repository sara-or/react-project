import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import {
    BrowserRouter as Router,
    Link,
    Route,

} from 'react-router-dom';
import { actions } from '../redux/actions';
 function mapStateToProps(state)
 {
     return{products:state.productsReducer.products}
}
const mapDispatcToProps = (dispatch) => ({
    addProductToBasket:(product)=> dispatch(actions.addProduct(product)),
    
   
})

export default connect(mapStateToProps,mapDispatcToProps) (function Products(props) {
    const {products,addProductToBasket,addAmount}=props;
      useEffect(function () {
        { }

        return function moveToPay() {
            document.title = "payment";


        }
    }, [])




    return (
        <>
         < Link to="/choozenProducts">צפיה בסל</Link>
        <div className="row justify-content-around">
        
            {products.map((item) =>
                <div key={item.id} className="card text-black text-center bg-blue mb-3 col-3" style={{ maxWidth: "16rem" }}>
                    <div className="card-header bg-primary font-weight-bold">{item.name}</div>
                    <div className="card-body">
                        <span>{'₪'+item.price} 'מחיר ליח</span>
                        <img className="card-img-top" src={item.img} style={{ maxWidth: "12rem", maxHeight: "9rem" }}></img>
                        <button
                            className="text-center text-black btn btn-outline bg-primary font-weight-bold"
                            onClick={() => addProductToBasket(item)} disabled={item.disable}
                        >הוסף לסל
                        </button>
                    </div>
                    
                    <Link data-toggle="modal" data-target="#exampleModalCenter" to={`/oneProduct/${item.id}`}>לתצוגה מלאה</Link>
                </div>
                 
            )}
        </div>
       
    </>
    )

}
)
