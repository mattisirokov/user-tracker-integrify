
    /*
        This is my home component, where most of the data is displayed. 
        In the home component I display the userList but also some backup screens such as:
        1. Loading screen
        2. Error states and messages
    */

        import UserList from "./UserList";
        import useFetch from "./useFetch";
        
        const Home = () => {
          const { error, isPending, data: users } = useFetch('https://jsonplaceholder.typicode.com/users')
        
          return (
            <div className="home">
              { error && <div>{ error }</div> }
              { isPending && <div>Loading...</div> }
              { users && <UserList users={users} /> }
            </div>
          );
        }
         
        export default Home;
 
