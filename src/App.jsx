import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import Login from './views/Login';
import SignUp from './views/SignUp';
import UserView from './views/UserView/UserView';
import AdminView from './views/AdminView/AdminView';
import { UserProvider } from './UserContext';
import './App.css'
import { useContext } from "react";
import { UserContext } from './UserContext';


function App() {

  return (
    <UserProvider>
      <Content/>
    </UserProvider>
  )
}


const Content = () => {
  const { user } = useContext(UserContext);

  return (
    <Router >
      <Routes>
        <Route path="/" element={<Login/>} />

        <Route
          path="/"
          element={
            <ProtectedRoute
              redirectPath="/"
              isAllowed={
                user !== null && user.type.includes('ADMIN')
              }
            >
              <Login/>
            </ProtectedRoute>
          }
        />

        
        <Route
          path="/user"
          element={
            <ProtectedRoute
              redirectPath="/"
              isAllowed={
                user !== null && user.type.includes('USER')
              }
            >
              <UserView/>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/signup"
          element={
            <ProtectedRoute
              redirectPath="/"
              isAllowed={
                user !== null && user.type.includes('ADMIN')
              }
            >
              <SignUp/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute
              redirectPath="/"
              isAllowed={
                user !== null && user.type.includes('ADMIN')
              }
            >
              <AdminView/>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<p>There's nothing here: Error 404!</p>} />
      </Routes>
    </Router>
  );
}

export default App


