import { useState } from "react";
import SearchInterface from "@/components/SearchInterface";
import SearchResults from "@/components/SearchResults";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-8">
        <SearchInterface onSearch={setSearchQuery} />
        <SearchResults query={searchQuery} />
      </main>
    </div>
  );
};

export default Index;