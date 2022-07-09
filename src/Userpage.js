import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

/*
This is the dynamic user page, brought out the information that I could, struggled to get the address and company list. 
Will ask about that in the interview, should I get the chance.
*/

const Userdetails = () => {
  const { id } = useParams();
  const { data: user, error, isPending } = useFetch('https://jsonplaceholder.typicode.com/users/' + id);
  

 
  
  
  return (
    <div className="userpage-wrapper">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {user && (
        <div className="users-preview" key={user.id}>
          
          <div className="content-left">
          <h1>{user.name}</h1> <br></br>
          <p> id: {user.id}</p> 
          <p> Username: {user.username}</p> 
          <p> email: {user.email}</p>
          <p> phone: {user.phone}</p>
          <p> company: {user.company.name}</p>
          <p> website: {user.website}</p> <br></br>
         
         <div>
          <ul> <h3>address:</h3>
            <li>{user.address.street}</li>
            <li>{user.address.suite}</li>
            <li>{user.address.city}</li>
            <li>{user.address.zipcode}</li>
          </ul>
          </div>

          
          </div>
        </div>
        
      )}
    </div>
  );
}

export default Userdetails;