import { LegalCase } from '@/context/LegalAidContext';

class LegalAidService {
  private static instance: LegalAidService;
  private cache: { data: LegalCase[] | null; timestamp: number } = {
    data: null,
    timestamp: 0,
  };
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  private constructor() {}

  static getInstance(): LegalAidService {
    if (!LegalAidService.instance) {
      LegalAidService.instance = new LegalAidService();
    }
    return LegalAidService.instance;
  }

  async getCases(): Promise<LegalCase[]> {
    const now = Date.now();
    
    // Return cached data if it's still valid
    if (
      this.cache.data &&
      now - this.cache.timestamp < this.CACHE_DURATION
    ) {
      return this.cache.data;
    }

    // Fetch fresh data
    try {
      const response = await fetch('/api/legal-aid');
      if (!response.ok) {
        throw new Error('Failed to fetch legal aid cases');
      }
      const data = await response.json();
      
      // Update cache
      this.cache = {
        data,
        timestamp: now,
      };
      
      return data;
    } catch (error) {
      console.error('Error fetching legal aid cases:', error);
      throw error;
    }
  }

  clearCache(): void {
    this.cache = {
      data: null,
      timestamp: 0,
    };
  }
}

export const legalAidService = LegalAidService.getInstance();