import Homepage from "./component/homepage";
import Navbar from "./component/navBar";
import {useSelector} from 'react-redux';
import { isSignedIn } from './features/userSlice';
import Blogs from "./component/blogs";

function App() {
  const signIn = useSelector(isSignedIn);
  return (
    <div className="App">
      <Navbar/>
      {signIn&&(<Blogs/>)}
      <Homepage/>
    </div>
  );
}

export default App;
