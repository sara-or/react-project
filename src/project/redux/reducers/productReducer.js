import produce from 'immer'
import createReducer from './utilReducer'
import img1 from '../../images/1.jpeg'
import img2 from '../../images/2.jpeg'
import img3 from '../../images/3.jpeg'
import img4 from '../../images/4.jpeg'
import img5 from '../../images/5.jpeg'
import img6 from '../../images/img6.png'

const initialState = {
    products:[{ id: 1, name: "בלונים צבעוניים", price: 25, amount: 1,chooze:false,img:img1 },
        { id: 2, name: "בלוני מספרים", price: 37, amount: 1,img:img2 },
        { id: 3, name: "בלוני קונפטי", price: 17, amount: 1,img:img3 },
        { id: 4, name: "בלוני אותיות", price: 25, amount: 1,img:img4 },
        { id: 5, name:"בלוני ילדים", price: 40, amount: 1 ,img:img5 },
        { id: 6, name:"ימי הולדת", price: 60, amount: 1 ,img:img6 }],
        choozenProducts: []
       
   
}
const basket = {
    addProduct(state, action) {
        console.log("addProduct")
        if (!(state.choozenProducts.find(item => item.id === action.payload.id)))
            state.choozenProducts.push(action.payload);
    },
    addAmount(state, action) {
        console.log("addamount")
        const index = state.choozenProducts.findIndex(p => p.id == action.payload);
        state.choozenProducts[index].amount++;
        },
        reduceAmount(state, action) {
        console.log("reduce")
        const index = state.choozenProducts.findIndex(p => p.id == action.payload);
        if (state.choozenProducts[index].amount > 0)
            state.choozenProducts[index].amount--;
        },
    removeFromBasket(state, action) {
        console.log("remove")
        const index = state.choozenProducts.findIndex(p => p.id == action.payload);
        state.choozenProducts = state.choozenProducts.filter(element => element.id !== action.payload);
         state.choozenProducts.splice(index, 1);
    },
}

export default produce((state, action) => createReducer(state, action, basket), initialState)


