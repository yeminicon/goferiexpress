import React, { useState, ReactNode } from "react";
import { BlogContext, BlogContextType } from "@/store/blogContext";

interface BlogProviderProps {
  children: ReactNode; // Define children prop explicitly
}

export const StoreProvider: React.FC<BlogProviderProps> = ({ children }) => {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [body, setBody] = useState("");

  const value: BlogContextType = {
    file,
    setFile,
    title,
    setTitle,
    tag,
    setTag,
    body,
    setBody,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
