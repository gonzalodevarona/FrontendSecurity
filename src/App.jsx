import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import Login from './views/Login';
import SignUp from './views/SignUp';
import AddBatch from './views/Batch/AddBatch';
import AddUpdate from './views/Update/AddUpdate';
import { UserProvider } from './UserContext';
import './App.css'
import Header from './layout/Header';
import Footer from './layout/Footer';
import { Box } from '@mui/material';
import Home from './views/Home';
import FindObject from './views/components/FindObject';
import { getAllBatches, getBatchById } from './services/BatchService';
import { getAllUpdates, getUpdateById } from './services/UpdateService';
import ShowAllObjects from './views/components/ShowAllObjects';
import { authGetName, authUserLoggedIn } from './services/AuthService';
import QrReview from './views/QrReview';

function App() {

  return (
    <Box>
    <Router >
    <Header/>
    <Routes>
      <Route path="/updates/:batchId" element={<QrReview/>} />
      <Route
        exact path="/"
        element={
          <ProtectedRoute
            redirectPath="/login"
            isAllowed={
              authUserLoggedIn() == true
            }
          >
            <Home/>
          </ProtectedRoute>
        }
      />

      <Route
        path="/login"
        element={
          <ProtectedRoute
            redirectPath="/"
            isAllowed={
              authUserLoggedIn() == false
            }
          >
            <Login/>
          </ProtectedRoute>
        }
      />

      <Route
        path="/signup"
        element={
          <ProtectedRoute
            redirectPath="/"
            isAllowed={
              authUserLoggedIn() == false
            }
          >
            <SignUp/>
          </ProtectedRoute>
        }
      />

      <Route
        path="/findbatch"
        element={
          <ProtectedRoute
            redirectPath="/login"
            isAllowed={
              authGetName() !== ""
            }
          >
            <FindObject name="lote" action={getBatchById}/> 
          </ProtectedRoute>
        }
      />

      <Route
        path="/addbatch"
        element={
          <ProtectedRoute
            redirectPath="/login"
            isAllowed={
              authGetName() !== ""
            }
          >
            <AddBatch/>
          </ProtectedRoute>
        }
      />

      <Route
          path="/allbatches"
          element={
            <ProtectedRoute
              redirectPath="/login"
              isAllowed={
                authGetName() !== ""
              }
            >
              <ShowAllObjects name="lotes" action={getAllBatches}/>
            </ProtectedRoute>
          }
        />


      <Route
        path="/findupdate"
        element={
          <ProtectedRoute
            redirectPath="/login"
            isAllowed={
              authGetName() !== ""
            }
          >
            <FindObject name="novedad" action={getUpdateById}/> 
          </ProtectedRoute>
        }
      />

      <Route
        path="/addupdate"
        element={
          <ProtectedRoute
            redirectPath="/login"
            isAllowed={
              authGetName() !== ""
            }
          >
            <AddUpdate/>
          </ProtectedRoute>
        }
      />

      <Route
        path="/allupdates"
        element={
          <ProtectedRoute
            redirectPath="/login"
            isAllowed={
              authGetName() !== ""
            }
          >
            <ShowAllObjects name="novedades" action={getAllUpdates}/>
          </ProtectedRoute>
        }
      />


      
      

      <Route path="*" element={<p>No hay nada aqui: Error 404!</p>} />
    </Routes>
    </Router>
    <Footer/>
    </Box>
  );
}

export default App


