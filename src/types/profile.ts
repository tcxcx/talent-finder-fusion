export interface Profile {
  name: string;
  role: string;
  avatar: string;
  skills: string[];
  social: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
  matchScore: number;
  location?: string;
  experience?: string;
  portfolio?: string;
}

export interface SearchFilters {
  role?: string;
  experience?: string;
  projectType?: string;
}