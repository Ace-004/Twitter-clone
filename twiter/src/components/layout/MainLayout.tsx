'use client'
import { useAuth } from "@/src/context/AuthContext";
import React, { useState } from "react";
import  SideBar  from "./SideBar";
import LoadingSpinner from "../LoadingSpinner";

export const MainLayout = ({ children }: any) => {
  const { user, isLoading } = useAuth();
  const [currentPage, setCurrentPage] = useState("home");
  if (isLoading) {
    return <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-white text-4xl font-bold mb-4">X</div>
          <LoadingSpinner size="lg" />
        </div>
      </div>
  }
  if (!user) {
    return <>{children}</>;
  }

  return <div>
    <div>
      <SideBar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
      {children}
    </main>
    </div>
    
  </div>;
};
