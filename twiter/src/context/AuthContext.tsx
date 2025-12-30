"use client";
import React, { useEffect, useState } from "react";
import { use, useContext } from "react";
import { createContext } from "react";

interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  bio?: string;
  joinedDate: string;
  email?: string;
  website?: string;
  location?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (
    email: string,
    password: string,
    username: string,
    displayName: string
  ) => Promise<void>;
  updateProfile: (profileData: {
    displayName: string;
    bio: string;
    location: string;
    website: string;
  }) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const savedUser = localStorage.getItem("twiter-user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);
  
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const mockUser: User = {
      id: "1",
      username: "johndoe",
      displayName: "John Doe",
      avatar:
        "https://www.pexels.com/photo/silhouette-of-a-man-in-a-dimly-lit-room-35048026/",
      bio: "Just another user",
      joinedDate: new Date().toISOString(),
    };
    setUser(mockUser);
    localStorage.setItem("twiter-user", JSON.stringify(mockUser));
    setIsLoading(false);
  };

  const signup = async (
    email: string,
    password: string,
    username: string,
    displayName: string
  ) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const mockUser: User = {
      id: "1",
      username: username,
      displayName: displayName,
      avatar:
        "https://www.pexels.com/photo/silhouette-of-a-man-in-a-dimly-lit-room-35048026/",
      bio: "Just another user",
      joinedDate: new Date().toISOString(),
    };
    setUser(mockUser);
    localStorage.setItem("twiter-user", JSON.stringify(mockUser));
    setIsLoading(false);
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem("twiter-user");
  };

  const updateProfile = async (profileData: {
    displayName: string;
    bio: string;
    location: string;
    website: string;
  }) => {
    if (!user) return;
    const updatedUser = {
      ...user,
      displayName: profileData.displayName,
      bio: profileData.bio,
    };
    setUser(updatedUser);
    localStorage.setItem("twiter-user", JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider
      value={{ user, login, signup, logout, updateProfile, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
