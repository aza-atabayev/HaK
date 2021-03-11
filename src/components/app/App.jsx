import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import Registration from '../authorization/Registration';
import Login from '../authorization/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/registration" component = {Registration}/>
          <Route path="/login" component = {Login}/>
          <Redirect to="/login"/>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
