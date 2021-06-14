import { createStore, applyMiddleware } from 'redux'
import produce from 'immer';
import React from 'react';
const intialState = {
    user: {
        firstName: "sara",
        lastName: "or",
        age: "21",
        adress: "aa123"
    }
}

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'UPDATE_FIRST_NAME':
            { state.user.firstName = action.payLoad }
            break;
        case 'UPDATE_FIRST_NAME_WITH':
            { state.user.firstName = action.payLoad }
            break;

        case 'UPDATE_LAST_NAME':
            { state.user.lastName = action.payLoad }
            break;
        case 'UPDATE_AGE':
            { state.user.age = action.payLoad }
            break;
        case 'UPDATE_ADRESS':
            { state.user.adress = action.payLoad }
            break;
        // case 'ADD_USER':
        //     { state.user.push(action.payLoad) }
        //     break;
    }




}, intialState)

// const reducer=combineReducer({student})

const storeUser = createStore(reducer, applyMiddleware);
window.store = storeUser;
export default storeUser;