import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUserAction } from "../Config/actions"
import { useNavigate } from "react-router-dom";
function AddUser() {
    const count = useSelector(data=>data.users.length);
    const [plat, setPlat] = useState("");
    const [drink, setDrink] = useState("");
    const [dessert, setDessert] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClick = () => {
        dispatch(addUserAction({
            id:count+1,
            plat:plat,
            drink:drink,
            dessert:dessert
        }))
        navigate('/')
    }
    return (
        <form>
            <label>Plat:</label>
            <input type="text" value={plat} onChange={(e)=>setPlat(e.target.value)} /> 
            <br/><br/>
            <label>Drink:</label>
            <input type="drink" value={drink} onChange={(e)=>setDrink(e.target.value)} />
            <br/><br/>
            <label>Dessert:</label>
            <input type="dessert" value={dessert} onChange={(e)=>setDessert(e.target.value)} />
            <br/><br/>
            <button onClick={handleClick}>Enregistrer</button>
        </form>
    )
}
export default AddUser