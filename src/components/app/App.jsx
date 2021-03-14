import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Registration from '../authorization/Registration';
import Login from '../authorization/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth } from '../../actions/user';
import Verification from '../authorization/Verification';
import Feed from '../feed/Feed';

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(auth())
  })

  return (
    <BrowserRouter>
      <div className="App">
        {!isAuth ?
        <Switch>
          <Route path="/registration" component = {Registration}/>
          <Route path="/login" component = {Login}/>
          <Route path="/verification" component = {Verification}/>
          <Redirect to="/login"/>
        </Switch>
        :
        <Switch>
          <Route exact path="/" component={Feed}/>
          <Redirect to="/"/>
        </Switch>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
