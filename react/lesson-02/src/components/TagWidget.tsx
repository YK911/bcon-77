import { useState } from "react";

interface Tags {
  html: number;
  js: number;
  react: number;
}

type UnionTags = "html" | "js" | "react";

export default function TagWidget() {
  const [tags, setTags] = useState<Tags>({
    html: 0,
    js: 0,
    react: 0,
  });

  const handleTagClick = (tagName: keyof Tags) => {
    // console.log("work");
    setTags({ ...tags, [tagName]: tags[tagName] + 1 });
  };

  return (
    <div>
      <button onClick={() => handleTagClick("html")}>html {tags.html}</button>
      <button onClick={() => handleTagClick("js")}>js {tags.js}</button>
      <button onClick={() => handleTagClick("react")}>
        react {tags.react}
      </button>
    </div>
  );
}
