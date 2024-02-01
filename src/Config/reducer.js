const initialState = {
    users:[ 
        { id: 1, plat: "PIZZA", drink: "WIN", dessert: "CREPE"},
        { id: 2, plat: "PASTA", drink: "COOKTAIL", dessert: "CHEESE CAKE"}
    ] 
};
const reducer = (state=initialState, action) => {
    switch(action.type) {
        case "Add_user":
            return {...state, users:[...state.users, action.payload]}
        case "Update_user":
            const user = state.users.find((u)=>u.id===parseInt(action.payload.id))
            if (user) {
                user.plat = action.payload.plat
                user.drink = action.payload.drink
                user.dessert = action.payload.dessert
            }
            return state
        case "Delete_user":
            return {...state, users:[...state.users.filter((u)=>u.id!==parseInt(action.payload))]}
        default:
            return state
    }
}
export default reducer