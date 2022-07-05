import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

/*
This is the dynamic user page, brought out the information that I could, struggled to get the address and company list. 
Will ask about that in the interview, should I get the chance.
*/

const BlogDetails = () => {
  const { id } = useParams();
  const { data: user, error, isPending } = useFetch('http://localhost:8000/users/' + id);
  
  return (
    <div className="userpage-wrapper">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {user && (
        <div className="users-preview" key={user.id}>
          <h2>Name:</h2>
          <div className="content-left">
          <h1>{user.name}</h1> <br></br>

          <p> Username: {user.username}</p>
          <p> User id: {user.id}</p>
          <p> User phone: {user.phone}</p>
          <p> User email: {user.email}</p>

          

          
          
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogDetails;