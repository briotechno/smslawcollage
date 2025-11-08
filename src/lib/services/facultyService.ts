import { Faculty } from '@/context/FacultyContext';

class FacultyService {
  private static instance: FacultyService;
  private cache: { data: Faculty[] | null; timestamp: number } = {
    data: null,
    timestamp: 0,
  };
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  private constructor() {}

  static getInstance(): FacultyService {
    if (!FacultyService.instance) {
      FacultyService.instance = new FacultyService();
    }
    return FacultyService.instance;
  }

  async getFaculty(): Promise<Faculty[]> {
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
      const response = await fetch('/api/faculty');
      if (!response.ok) {
        throw new Error('Failed to fetch faculty data');
      }
      const data = await response.json();
      
      // Update cache
      this.cache = {
        data,
        timestamp: now,
      };
      
      return data;
    } catch (error) {
      console.error('Error fetching faculty:', error);
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

export const facultyService = FacultyService.getInstance();