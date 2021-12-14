import Homepage from "./component/homepage";
import Navbar from "./component/navBar";
import {useSelector} from 'react-redux';
import { isSignedIn } from './features/userSlice';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
    </div>
  );
}

export default App;
