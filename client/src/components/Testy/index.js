import { VIEW_USERS } from "../../utils/queries";
import { useQuery } from "@apollo/client";


const Testy = () => {
    const { loading, data } = useQuery(VIEW_USERS);
    const users = data?.viewUsers || [];
    return (
        <div className="bg-orange-300">
            {loading ?
            <div>The users have not been fetched yet! </div>
            : <div>
                {users.map(user => {
                    return(<div>
                        {user.name}
                    </div>)
                })}
            </div>
            }
        </div>
    )
}

export default Testy;