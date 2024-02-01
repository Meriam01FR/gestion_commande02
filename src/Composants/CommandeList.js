import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import {deleteUserAction} from '../Config/actions'
function UserList() {
    const users = useSelector((data)=>data.users);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteUserAction(id))
    }
    return (
        <div>
            <p>
                <Link to="/add-commande">
                    <button>Add commande</button>
                </Link>
            </p>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Plat</td>
                        <td>Drink</td>
                        <td>Dessert</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index)=> {
                            return (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.plat}</td>
                                <td>{user.drink}</td>
                                <td>{user.dessert}</td>
                                <td>
                                    <Link to={`/update-commande/${user.id}`}>
                                        <button>Edit</button>
                                    </Link>
                                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                            )
                        }) }
                </tbody>
            </table>
        </div>
    )
}
export default UserList