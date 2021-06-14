import React from 'react'
import { connect } from 'react-redux'
function mapStateToProps(state) {
    return { basket: state.productsReducer.choozenProducts}
}
export default connect(mapStateToProps)(
function Payment(props) {
        const { basket } = props

        let sum = 0;
        basket.forEach(item => sum += item.price*item.amount);

        return (
            <>
                <div className="row justify-content-around">
                    {basket.map((item) =>
                        <div key={item.id} className="card text-black text-center bg-white mb-3 col-3" style={{ maxWidth: "16rem" }}>
                            <div className="card-header bg-primary font-weight-bold">{item.name}</div>
                            <div className="card-body">
                                <span>{'₪'+item.price} 'מחיר ליח</span><br></br>
                                <span>{item.amount}:כמות</span><br></br>
                                <span>{'₪'+item.price*item.amount}:מחיר כולל</span>
                                <img className="card-img-top" src={item.img} style={{ maxWidth: "12rem", maxHeight: "9rem" }}></img>
                            </div>
                        </div>
                    )}
                </div>
                <p className="text-center  text-primary font-weight-bold " style={{fontSize: "1.2em"}}>מחיר סופי:{'₪'+sum}</p>
            </>
        )
    })