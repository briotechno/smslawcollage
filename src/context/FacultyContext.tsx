"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

// Types
export interface Faculty {
  id: string;
  name: string;
  position: string;
  education: string;
  image: string;
  description?: string;
  specialization?: string;
  experience?: string;
}

interface FacultyContextType {
  faculty: Faculty[];
  loading: boolean;
  error: string | null;
  refreshFaculty: () => Promise<void>;
}

// Create context with default values
const FacultyContext = createContext<FacultyContextType>({
  faculty: [],
  loading: false,
  error: null,
  refreshFaculty: async () => {},
});

// Custom hook to use faculty context
export const useFaculty = () => {
  const context = useContext(FacultyContext);
  if (!context) {
    throw new Error('useFaculty must be used within a FacultyProvider');
  }
  return context;
};

// Provider component
export const FacultyProvider = ({ children }: { children: React.ReactNode }) => {
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastFetch, setLastFetch] = useState<number>(0);
  const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

  const fetchFaculty = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/faculty');
      if (!response.ok) {
        throw new Error('Failed to fetch faculty data');
      }
      const data = await response.json();
      setFaculty(data?.data);
      setLastFetch(Date.now());
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const refreshFaculty = async () => {
    const now = Date.now();
    if (now - lastFetch > CACHE_DURATION) {
      await fetchFaculty();
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchFaculty();
  }, []);

  return (
    <FacultyContext.Provider value={{ faculty, loading, error, refreshFaculty }}>
      {children}
    </FacultyContext.Provider>
  );
};