import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Twitter, Linkedin } from "lucide-react";

interface ProfileCardProps {
  profile: {
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
  };
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <Card className="group p-6 transition-all duration-300 hover:animate-card-hover hover:shadow-lg">
      <div className="flex items-start gap-4">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="font-inter font-semibold text-lg">{profile.name}</h3>
          <p className="text-muted-foreground font-sfpro">{profile.role}</p>
        </div>
        <Badge variant="secondary" className="bg-accent/10 text-accent">
          {profile.matchScore}% Match
        </Badge>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {profile.skills.map((skill) => (
          <Badge key={skill} variant="outline" className="font-sfpro">
            {skill}
          </Badge>
        ))}
      </div>

      <div className="mt-4 flex gap-3">
        {profile.social.github && (
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
        )}
        {profile.social.twitter && (
          <a
            href={profile.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </a>
        )}
        {profile.social.linkedin && (
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        )}
      </div>
    </Card>
  );
};

export default ProfileCard;