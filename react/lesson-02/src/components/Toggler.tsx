import { useState } from "react";

export default function Toggler() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleClick}>{isOpen ? "Hide" : "Open"}</button>
      {isOpen && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corporis
          porro asperiores labore aperiam perspiciatis saepe a repellat minima
          tempore voluptate deleniti natus aliquam ea aspernatur dicta, ducimus
          explicabo! Eaque.
        </p>
      )}
    </div>
  );
}
