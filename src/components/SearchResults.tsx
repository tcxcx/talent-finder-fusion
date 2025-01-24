import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";

// Simulated AI matching function (replace with actual AI implementation)
const simulateAIMatching = (query: string) => {
  // Dummy data for demonstration
  return [
    {
      name: "Alex Chen",
      role: "Senior Game Developer",
      avatar: "/placeholder.svg",
      skills: ["Unity", "C#", "Game Design", "3D Modeling"],
      social: {
        github: "https://github.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
      matchScore: 95,
    },
    {
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      avatar: "/placeholder.svg",
      skills: ["Figma", "UI Design", "User Research", "Prototyping"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      matchScore: 88,
    },
    {
      name: "Mike Williams",
      role: "Technical Artist",
      avatar: "/placeholder.svg",
      skills: ["Unreal Engine", "Maya", "Substance Painter", "VFX"],
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
      matchScore: 82,
    },
  ];
};

const SearchResults = ({ query }: { query: string }) => {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const matchedProfiles = simulateAIMatching(query);
      setResults(matchedProfiles);
      setLoading(false);
    };

    if (query) {
      fetchResults();
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