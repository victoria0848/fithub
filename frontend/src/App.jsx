import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { AuthContextProvider } from "./context/AuthContextProvider";
import { MainLayout } from "./layout/MainLayout";

// Sider
import { Frontpage } from "./pages/Frontpage";
import { WorkoutDetailPage } from "./pages/WorkoutDetailPage";
import { MySchedulePage } from "./pages/MySchedulePage";
import { Search } from "./pages/Search";
import { SplashScreen } from "./pages/SplashScreen";



function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onStart={() => setShowSplash(false)} />;
  }

  return (
    <AuthContextProvider>
      <BrowserRouter>
      <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Frontpage />} />
            <Route path="/workout/:id" element={<WorkoutDetailPage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/my-schedule" element={<MySchedulePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;