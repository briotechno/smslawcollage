"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

// Types
export interface LegalCase {
  id: string;
  title: string;
  excerpt: string;
  status: 'pending' | 'active' | 'resolved' | 'closed';
  category: string;
  image?: string;
  created_at: string;
  
}

interface LegalAidContextType {
  cases: LegalCase[];
  loading: boolean;
  error: string | null;
  refreshCases: () => Promise<void>;
}

// Create context
const LegalAidContext = createContext<LegalAidContextType>({
  cases: [],
  loading: false,
  error: null,
  refreshCases: async () => {},
});

// Custom hook
export const useLegalAid = () => {
  const context = useContext(LegalAidContext);
  if (!context) {
    throw new Error('useLegalAid must be used within a LegalAidProvider');
  }
  return context;
};

// Provider component
export const LegalAidProvider = ({ children }: { children: React.ReactNode }) => {
  const [cases, setCases] = useState<LegalCase[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastFetch, setLastFetch] = useState<number>(0);
  const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  const fetchCases = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/legal-aid');
      if (!response.ok) {
        throw new Error('Failed to fetch legal aid cases');
      }
      const data = await response.json();
      setCases(data?.data);
      setLastFetch(Date.now());
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const refreshCases = async () => {
    const now = Date.now();
    if (now - lastFetch > CACHE_DURATION) {
      await fetchCases();
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchCases();
  }, []);

  return (
    <LegalAidContext.Provider value={{ cases, loading, error, refreshCases }}>
      {children}
    </LegalAidContext.Provider>
  );
};