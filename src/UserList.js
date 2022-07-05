import { Link } from "react-router-dom";

const UserList = (props) => {
const users = props.users;
const title = props.title

/*
- Our user list component is a dynamic element, that shows a preview of our total user data. 
- I wrapped the button in link block, as to make it visually easier for my self to understand.
- There are definantly better options than line breaks in this case to give some margin, but that was quick and easy
*/


    return (
        <div className="user-list">
            

            {users.map((users) => (

                <div className="users-preview" key={users.id}>
                    <h2>Name:</h2>
                    <h2>{users.name}</h2> <br></br>
                    <p> Username: {users.username}</p> <br></br>
                    <p> User id: {users.id}</p>
                    
                    <Link to={`/users/${users.id}`}>
                    <button className="mainbutton"> More information </button>
                    </Link>
                </div>

            ))}
        </div>
    );
}

export default UserList;