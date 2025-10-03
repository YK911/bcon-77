import { useState } from "react";
import ClickCounter from "./ClickCounter";
import CountDisplay from "./CountDisplay";
import Toggler from "./Toggler";
import TagWidget from "./TagWidget";
import Dates from "./Dates";

export default function App() {
  const username = "Mango";
  let clicks = 0;
  console.log("Rerender");

  const [click, setClick] = useState(10);

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isOnline, setIsOnline] = useState(true);
  // const [books, setBooks] = useState(["Harry Potter 1", "Harry Potter 2"]);
  // const [profile, setProfile] = useState({
  //   name: "Mango",
  //   status: "online",
  // });

  const handleClicks = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.target);
  };

  const handleMouseOver = () => {
    console.log("Hover under element");
  };

  const handleUserGreting = (
    event: React.MouseEvent<HTMLButtonElement>,
    value: string
  ) => {
    console.log(event);

    console.log(`Hello, ${value}`);
  };

  const handleUserClicks = () => {
    // clicks += 1;

    setClick(click + 1);
    console.log(click);
  };

  return (
    <>
      <button onClick={handleUserClicks}>Clicks {click}</button>
      {/* <button
        onClick={(event) => {
          handleUserGreting(event, username);
        }}
      >
        Greet user
      </button> */}
      {/* <button
        onClick={handleClicks}
        onMouseOver={handleMouseOver}
        onMouseLeave={() => console.log("Hello")}
      >
        Click me
      </button> */}
    </>
  );
}

export function MainApp() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <CountDisplay value={count} />
      <ClickCounter value={count} onUpdate={handleClick} />
      <ClickCounter value={count} onUpdate={handleClick} />
      <ClickCounter value={count} onUpdate={handleClick} />
      {/* <ClickCounter /> */}
      <hr />
      <Toggler />
      <hr />
      <TagWidget />
      <hr />
      <Dates />
    </div>
  );
}
