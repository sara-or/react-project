export function setFirstNameUser(firstName) {
  return {
    type: 'UPDATE_FIRST_NAME',
    payLoad: firstName
  }
}
export function setFirstNameUserwith(firstName) {
  return {
    type: 'UPDATE_FIRST_NAME_WITH',
    payLoad: firstName
  }
}
export function setLastNameUser(lastName) {
  return {
    type: 'UPDATE_LAST_NAME',
    payLoad: lastName
  }
}
// export function addUser(user) {
//   return {
//     type: 'ADD_USER',
//     payLoad: user
//   }
// }
// export function addnewUser(user) {
//   return {
//     type: 'ADD_NEW_USER',
//     payLoad: user
//   }
// }
