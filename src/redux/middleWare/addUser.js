import { addnewUser, setFirstNameUser } from '../actionsUser';

// export const add$ToCompanyName = ({ dispatch, getState }) => next => action => {
//     // debugger;
//     if (action.type === 'ADD_USER') {
//         let user = action.payload;
//         user.name += '!';
//         user.id = getState().userReducer.users[getState().userReducer.users.length - 1].id + 1;
//         dispatch(addnewUser(user));

//     }
//     // remeber!!!!!!!!!!!
//     return next(action);
// };
export const setFirstNameUserwith = ({ dispatch }) => next => action => {
    // debugger;
    if (action.type === 'UPDATE_FIRST_NAME_WITH') {
        let firstName = action.payload;
        firstName += '!';
        // user.id = getState().userReducer.users[getState().userReducer.users.length - 1].id + 1;
        dispatch(setFirstNameUser(firstName));

    }
    // remeber!!!!!!!!!!!
    return next(action);
};