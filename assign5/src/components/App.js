import { Container } from 'react-bootstrap';
import Signup from './signup';
import Dashboard from './Dashboard';
import LogIn from './LogIn';
import { AuthProvider } from '../context/authContext';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import PrivateRoute from './privateRoute';
import ForgotPassword from './ForgotPassword';

function App() {
  return (
      <div className="App">
      <Container className='d-flex align-items-center justify-content-center' style={{minHeight:'100vh'}}>
        <div className="w-100" style={{maxWidth: "400px"}}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute  path = "/" exact component ={Dashboard}/>
                <Route  path = "/signup" exact component ={Signup}/>
                <Route  path = "/login" exact component ={LogIn}/>
                <Route  path = "/forgot-password" component = {ForgotPassword}/>
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
      </div>
  );
}

export default App;
