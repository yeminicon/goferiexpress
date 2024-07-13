import { createContext, useContext } from "react";

export interface BlogContextType {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  tag: string;
  setTag: React.Dispatch<React.SetStateAction<string>>;
  body: string;
  setBody: React.Dispatch<React.SetStateAction<string>>;
}

export const BlogContext = createContext<BlogContextType | undefined>(
  undefined
);

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlogContext must be used within a BlogProvider");
  }
  return context;
};
