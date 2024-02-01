import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { updateUserAction } from "../Config/actions"
import { useNavigate } from "react-router-dom";
import { useState } from "react"

function UpdateUser() {
    const { id } = useParams()
    const user = useSelector(data => data.users.find((u) => u.id === parseInt(id)));
    const [plat, setPlat] = useState(user.plat);
    const [drink, setDrink] = useState(user.drink);
    const [dessert, setDessert] = useState(user.dessert);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    const handleClick = () => {
        dispatch(updateUserAction({
            id: id,
            plat: plat,
            drink: drink,
            dessert: dessert
        }))
        navigate('/')
    }
    
    return (
        <form>
            <label>Plat:</label>
            <input type="text" value={plat} onChange={(e) => setPlat(e.target.value)} />
            <br/><br/>
            <label>Drink:</label>
            <input type="text" value={drink} onChange={(e) => setDrink(e.target.value)} />
            <br/><br/>
            <label>Dessert:</label> 
            <input type="text" value={dessert} onChange={(e) => setDessert(e.target.value)} />
            <br/><br/>
            <button onClick={handleClick}>Enregistrer</button>
        </form>
    )
}

export default UpdateUser
