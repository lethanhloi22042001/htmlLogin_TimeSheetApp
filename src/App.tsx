import React from 'react';
import LoginApp from './views/login-logout/LoginApp';
import Main_TimeSheet from './views/main_TimeSheet/Main_TimeSheet';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
  useLocation,
} from "react-router-dom";
function App() {
  return (
    // <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/login" element={ <LoginApp/> } />
            <Route path="/login/app" element={ <Main_TimeSheet/>  } />

          </Routes>
      </BrowserRouter>
    // </div>
  );
}

export default App;
