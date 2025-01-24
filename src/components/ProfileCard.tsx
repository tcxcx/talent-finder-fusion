import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Twitter, Linkedin, ExternalLink, MapPin, Briefcase } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

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
    location?: string;
    experience?: string;
    portfolio?: string;
  };
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:animate-card-hover hover:shadow-lg glass-card animate-stream-in">
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-50" />
        
        <div className="relative p-6">
          <div className="flex items-start gap-4">
            <div className="relative">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-16 h-16 rounded-full object-cover ring-2 ring-border"
              />
              <Badge 
                variant="secondary" 
                className="absolute -bottom-2 -right-2 bg-accent/10 text-accent-foreground"
              >
                {profile.matchScore}%
              </Badge>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-inter font-semibold text-lg">{profile.name}</h3>
                {profile.portfolio && (
                  <a
                    href={profile.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              <p className="text-muted-foreground font-sfpro">{profile.role}</p>
              
              {(profile.location || profile.experience) && (
                <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                  {profile.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{profile.location}</span>
                    </div>
                  )}
                  {profile.experience && (
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-3 w-3" />
                      <span>{profile.experience}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <HoverCard key={skill}>
                <HoverCardTrigger>
                  <Badge 
                    variant="outline" 
                    className="font-sfpro cursor-help transition-colors hover:bg-accent/10"
                  >
                    {skill}
                  </Badge>
                </HoverCardTrigger>
                <HoverCardContent className="w-64">
                  <div className="space-y-2">
                    <h4 className="font-semibold">{skill}</h4>
                    <p className="text-sm text-muted-foreground">
                      Relevant skill for {profile.role} position
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>

          <div className="mt-4 flex gap-3">
            {profile.social.github && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {profile.social.twitter && (
              <a
                href={profile.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {profile.social.linkedin && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;