import './App.css';
import Home from './pages';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WineDetails from './WineDetails';
import WineList from './wines';
import Login from './login';
import SignUp from './signup';
import WineryList from './dashboard';
import { AuthProvider } from './auth';

function App(props) {

  return (

    <AuthProvider>
      <BrowserRouter>
        {/* <Nav /> */}
        <div className="container">
          <Routes>
            <Route path="/" element={<WineryList />} />
            <Route path="wineries/:id/wines/" element={<WineList />} />
            <Route path="/wineries/:winery_id/wines/:winevo_id/" element={<WineDetails />} />
            {/* <Route path="wineries/:id/" element={<WineList />} /> */}
            <Route path="wineries/:id/login/" element={<Login />} />
            <Route path="wineries/:id/signup/" element={<SignUp />} />

          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>

    // <Router>
    //   <Home />
    // </Router>

  );
}

export default App;