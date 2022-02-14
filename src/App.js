import './App.css';
import { Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Schedule from './pages/Schedule';
import Messages from './pages/Messages';
import Patients from './pages/Patients';

function App() {



  return (
    <div>
      <Header />
          <Route exact path='/' > 
            <Schedule/>
          </Route>
          <Route exact path='/messages' > 
            <Messages/>
          </Route>
          <Route exact path='/patients' > 
            <Patients/>
          </Route>
    </div>
 
  )
}

export default App


