import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux'
import {
    BrowserRouter as Router,
    Link,
    Route,

} from 'react-router-dom';
import { actions } from '../redux/actions';
function mapStateToProps(state)
 {
     return{products:state.productsReducer.choozenProducts}
}
const mapDispatcToProps = (dispatch) => ({
   
    removeFromBasket:(product)=> dispatch(actions.removeFromBasket(product)),
    addAmount:(id)=>dispatch(actions.addAmount(id)),
    reduceAmount:(id)=>dispatch(actions.reduceAmount(id))
})

export default connect(mapStateToProps,mapDispatcToProps) (function Basket(props) {
    const {products,removeFromBasket,addAmount,reduceAmount}=props;
      useEffect(function () {
        { }

        return function moveToPay() {
            document.title = "payment";


        }
    }, [])




    return (
        <>
          <Link data-toggle="modal" data-target="#exampleModalCenter" to="/products">חזרה לבחירת המוצרים</Link>
        <h2>המוצרים שנבחרו עד כה</h2>
        <div className="row justify-content-around">
        
            {products.map((item) =>
                <div key={item.id} className="card text-black text-center bg-blue mb-3 col-3" style={{ maxWidth: "16rem" }}>
                    <div className="card-header bg-primary font-weight-bold color">{item.name}</div>
                    <div className="card-body">
                        <span>{'₪'+item.price} 'מחיר ליח</span><br/>
                        <span>{item.amount} : כמות</span>
                        <img className="card-img-top" src={item.img} style={{ maxWidth: "12rem", maxHeight: "9rem" }}></img>
                        <Button variant="primary"  onClick={() => addAmount(item.id)}>+</Button>  <Button variant="primary" onClick={() => reduceAmount(item.id)}>-</Button><br/>
                        <button
                            className="text-center text-black btn btn-outline bg-primary font-weight-bold"
                            onClick={() => removeFromBasket(item)} disabled={item.disable}
                        >הסר מהסל
                        </button>
                         </div>
                   
                </div>
            )}
        </div>
        < Link to="/payment">לעבור לתשלום</Link>
    </>
)
})
    