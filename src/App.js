import Navbar from './Navbar';
import Home from './Home';
//used V5, as had issues with the Routes/Switch changes...
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Userpage from './Userpage';

/*
Hello! here is my version of the integrify task, I have written comments throughout the project for myself as not to get lost. While I have had some interaction with JavaScript, I learned some new concepts while completing this project,
*/


function App() {

  return (

    /*using Router to direct users to the appropriate pages and Switch to limit the amount of evaluations, we have a total of 2 different Routes. Home and users' page.*/

    <Router>
      <div className="App">
        <Navbar></Navbar>

        <div className='content'>
          <div className='user-block'>
            <Switch>
          
             <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/users/:id">
              <Userpage></Userpage>
            </Route>

          </Switch>

          </div>
        </div>
      </div>
    </Router>

  );
}

export default App;
