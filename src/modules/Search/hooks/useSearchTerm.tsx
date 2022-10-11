import React, { useContext, useState } from "react";

interface ContextProps {
  term: string;
  setTerm: (term: string) => void;
  focused: boolean;
  setFocusStatus: (status: boolean) => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

const SearchTermContext = React.createContext<undefined | ContextProps>(
  undefined
);

export const SearchTermProvider = ({ children }: ProviderProps) => {
  const [term, setTerm] = useState("");
  const [focused, setFocusStatus] = useState(false);

  return (
    <SearchTermContext.Provider
      value={{ term, setTerm, focused, setFocusStatus }}
    >
      {children}
    </SearchTermContext.Provider>
  );
};

export function useSearchTerm() {
  const context = useContext(SearchTermContext);
  if (context === undefined) {
    throw new Error("useSearchTerm must be used within a SearchTermProvider");
  }

  return context;
}
