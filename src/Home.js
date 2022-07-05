
import { useState, useEffect } from "react";
import UserList from "./UserList";

    /*
        This is my home component, where most of the data is displayed. 
        In the home component I display the userList but also some backup screens such as:
        1. Loading screen
        2. Error states and messages
    */

const Home = () => {
  
    const[users, SetUsers] = useState(null);
    const [isLoading, setIsPending] = useState(true);
    const [error, SetError] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:8000/users')
        .then(res => {
            return res.json();
            //! for not true (not loading properly)
            if(!res.ok){
                throw Error('404 - No data found')
            }
            return res.json();
        })
        .then(data=>{
            SetUsers(data);
            //this is for the loading screen...
            setIsPending(false);
        })
        .catch(err => {
            SetError(err.message);
            setIsPending(false);
        })

    },[]);

    return (
        /*
        now we use condtiional visibility on the loading div, only need to be shown while loading data...
        userlist is displayed normally, after loading...
        */
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>One moment please...</div>}
           {users && <UserList users= {users}></UserList>}
        </div>
      );
}
 
export default Home;
