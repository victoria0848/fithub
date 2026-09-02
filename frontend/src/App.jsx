import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { Navigation } from "./components/Navigation/Navigation";
import { AuthContextProvider } from "./context/AuthContextProvider";

import { Frontpage } from "./pages/Frontpage";
import { WorkoutDetailPage } from "./pages/WorkoutDetailPage";
import { LoginPage } from "./pages/LoginPage";
import { Signup } from "./pages/Signup";
import { MySchedulePage } from "./pages/MySchedulePage";
import { SplashScreen } from "./pages/SplashScreen"; 
import { Search } from "./pages/Search";
import { MySchedulePage } from "./pages/MySchedulePage";



function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onStart={() => setShowSplash(false)} />;
  }

  return (
    <AuthContextProvider>
      <BrowserRouter>
        {/* Mobil Navigationen */}
        <Navigation />
        
        {/* Selve app-indholdet */}
        <main style={{ flex: 1, paddingBottom: "70px" }}>
          <Routes>
            <Route path="/" element={<Frontpage />} />
            <Route path="/workout/:id" element={<WorkoutDetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/my-schedule" element={<MySchedulePage />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;