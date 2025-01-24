import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import { aiMatchProfiles } from "@/utils/aiMatching";
import type { Profile } from "@/types/profile";

// Sample profiles database (in a real app, this would come from an API)
const profilesDatabase: Profile[] = [
  {
    name: "Alex Chen",
    role: "Senior Game Developer",
    avatar: "/placeholder.svg",
    skills: ["Unity", "C#", "Game Design", "3D Modeling", "Unreal Engine", "Animation"],
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    matchScore: 0,
  },
  {
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    avatar: "/placeholder.svg",
    skills: ["Figma", "UI Design", "User Research", "Prototyping", "Game UI", "Unity"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    matchScore: 0,
  },
  {
    name: "Mike Williams",
    role: "Technical Artist",
    avatar: "/placeholder.svg",
    skills: ["Unreal Engine", "Maya", "Substance Painter", "VFX", "Houdini", "ZBrush"],
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    matchScore: 0,
  },
  {
    name: "Emma Rodriguez",
    role: "Game Producer",
    avatar: "/placeholder.svg",
    skills: ["Project Management", "Agile", "Scrum", "Game Development", "Team Leadership"],
    social: {
      linkedin: "https://linkedin.com",
    },
    matchScore: 0,
  },
];

const SearchResults = ({ query }: { query: string }) => {
  const [results, setResults] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Parse query into skills
      const querySkills = query
        .toLowerCase()
        .split(',')
        .map(skill => skill.trim())
        .filter(skill => skill.length > 0);

      // Use AI matching engine to find best matches
      const matchedProfiles = aiMatchProfiles(
        {
          skills: querySkills,
          role: query, // Also consider the entire query as a potential role
        },
        profilesDatabase
      );

      setResults(matchedProfiles);
      setLoading(false);
    };

    if (query) {
      fetchResults();
    } else {
      setResults([]);
    }
  }, [query]);

  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 text-center text-muted-foreground">
        Loading results...
      </div>
    );
  }

  if (!query) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 text-center text-muted-foreground">
        Enter a search query to find gaming talent
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 gap-6 animate-fade-in">
        {results.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;