import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchInterface = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6 animate-fade-in">
      <h1 className="text-4xl font-inter font-bold text-center text-primary">
        Discover Gaming Talent
      </h1>
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            className="pl-10 h-12 text-lg font-sfpro"
            placeholder="Search by skills, role, or expertise..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>
        <Button
          className="h-12 px-6 bg-accent hover:bg-accent/90 text-accent-foreground"
          onClick={handleSearch}
        >
          Search
        </Button>
        <Button
          variant="outline"
          className="h-12 px-4"
          onClick={() => console.log("Open filters")}
        >
          <Filter className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default SearchInterface;