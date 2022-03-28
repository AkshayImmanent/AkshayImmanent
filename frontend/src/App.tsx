import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import { ProtectedRoute } from "./auth";
import {
  Header,
  Loading
} from "./components"
import {
  Dashboard,
  Profile
} from "./views"


function App() {
  const { isLoading } = useAuth0();
  return (
    <>
      <Header />
      <main className='main_content'>
        {isLoading ?
          <Loading />
          :
          <Routes>
            <Route index element={<h1>Index Route</h1>} />
            <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
            <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
          </Routes>
        }
      </main>
    </>
  )
}

export default App
