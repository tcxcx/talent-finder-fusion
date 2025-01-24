import { Profile } from "@/types/profile";

export interface MatchingCriteria {
  skills: string[];
  role?: string;
  experience?: string;
  projectType?: string;
}

// Calculates similarity score between two sets of skills
const calculateSkillSimilarity = (userSkills: string[], targetSkills: string[]): number => {
  const intersection = userSkills.filter(skill => 
    targetSkills.some(targetSkill => 
      targetSkill.toLowerCase().includes(skill.toLowerCase()) ||
      skill.toLowerCase().includes(targetSkill.toLowerCase())
    )
  );
  return (intersection.length / Math.max(userSkills.length, targetSkills.length)) * 100;
};

// Calculates role relevance score
const calculateRoleRelevance = (searchRole: string, profileRole: string): number => {
  if (!searchRole) return 100;
  const roleWords = searchRole.toLowerCase().split(' ');
  const profileRoleWords = profileRole.toLowerCase().split(' ');
  
  const matchingWords = roleWords.filter(word => 
    profileRoleWords.some(profileWord => 
      profileWord.includes(word) || word.includes(profileWord)
    )
  );
  
  return (matchingWords.length / roleWords.length) * 100;
};

// Main matching algorithm
export const calculateMatchScore = (criteria: MatchingCriteria, profile: Profile): number => {
  const weights = {
    skills: 0.6,
    role: 0.3,
    experience: 0.1,
  };

  const skillScore = calculateSkillSimilarity(criteria.skills, profile.skills);
  const roleScore = calculateRoleRelevance(criteria.role || '', profile.role);

  const totalScore = (
    skillScore * weights.skills +
    roleScore * weights.role
  );

  return Math.round(totalScore);
};

// Enhanced AI matching function
export const aiMatchProfiles = (
  criteria: MatchingCriteria,
  profiles: Profile[]
): Profile[] => {
  return profiles
    .map(profile => ({
      ...profile,
      matchScore: calculateMatchScore(criteria, profile)
    }))
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3); // Return top 3 matches
};