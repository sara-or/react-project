import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { setFirstNameUser, setLastNameUser, setFirstNameUserwith } from './actionsUser'
function mapStateToProps(state) {
    return { user: state.user, };
}
const mapDispatcToProps = (dispatch) => ({
    setFirstName: (firstName) => dispatch(setFirstNameUser(firstName)),
    setLastName: (lastName) => dispatch(setLastNameUser(lastName)),
    setFirstNameWith1: (firstName) => dispatch(setFirstNameUserwith(firstName)),
    // addnewUser: (user) => dispatch(addUser((user)))
    // setAge:(age)=>dispatch(setAgeUser(age)),
    // setAdress:(adress)=>dispatch(setAdressUser(adress))
})
export default connect(mapStateToProps, mapDispatcToProps)(function User(props) {
    const { user, setFirstName, setLastName, addnewUser, setFirstNameWith1 } = props;

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const ageRef = useRef();
    const adressRef = useRef();

    return (
        <>
            <div>


                <label>first_name</label><input value={user.firstName}
                    onChange={(e) => setFirstNameWith1(e.target.value)}></input>
                <label>last_name</label><input value={user.lastName}
                    onChange={(e) => setLastName(e.target.value)}></input>
                <label>age</label><input value={user.age}></input>
                <label>adress</label><input value={user.adress}></input>

            </div>

            <label>enter name</label><input ref={firstNameRef} type="text"></input>
            <label>enter last name</label><input ref={lastNameRef} type="text"></input><br></br>
            <label>enter age</label><input ref={ageRef} type="number"></input><br></br>
            <label>enteradress</label><input ref={adressRef} type="text"></input><br></br>

            {/* add a user<button onClick={() => addnewUser({ firstName: firstNameRef.current.value, age: ageRef.current.value })}>Add</button><br></br><br></br>‏ */}

        </>
    )



})