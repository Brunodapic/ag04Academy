import * as React from "react";
import { useState } from "react";
import MainWrapp from "../../components/MainWrapp/MainWrapp";
import AdvancedSearch from "../../components/Search/AdvancedSearch";
import SimpleSearch from "../../components/Search/SimpleSearch";

export default function Locations() {
  //ovdje sam stavio ostala dva Search forma za lakši pregled
  const SearchResult = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <div>
      <h2>All Locations</h2>
      <SimpleSearch SearchResult={SearchResult} />
      <AdvancedSearch />
    </div>
  );
}
