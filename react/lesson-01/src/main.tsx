import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PetsGallery from "./components/PetsGallery";

import "./index.css";

import path from "./assets/app-logo.png";
// console.log(path);

import cats from "./cats.json";
// console.log(cats);

const username = "Jackie";
const imgPath = "https://i.imgflip.com/5glqrg.jpg";
let counter = 1;

const posts = [
  // {
  //   id: 1,
  //   title: "Some title",
  //   desc: "",
  //   author: {
  //     name: "Mango",
  //     email: "mango@mail.com",
  //   },
  // },
];

const isVisible = false;

type PaymentStatus = "success" | "error";
const paymentStatus: PaymentStatus = Math.random() > 0.5 ? "success" : "error";

const articleMarkup = (
  <article>
    <h2>Blog Post</h2>
    <time dateTime="01-10-2025">October 01, 2025</time>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ratione
      dicta exercitationem sit perferendis error architecto nostrum temporibus?
    </p>

    <img src={imgPath} alt="Jackie" width={320} />

    {
      <p
        onClick={() => {
          counter += 1;
        }}
      >
        Lorem ipsum dolor sit amet consectetur {counter}.
      </p>
    }
  </article>
);

const jsxMarkup = (
  <>
    <section>
      <img className="" src={path} alt="Jackie" width={320} />
      <p>
        HTML in JS? What kind of black magic is this {username.toUpperCase()}?
        🧙‍♂️
      </p>
      <p>
        This is <strong>JSX (JavaScript XML)</strong> — and yes, you really get
        used to it.
      </p>
    </section>

    <section>
      <h2>Next section title</h2>
    </section>

    {isVisible && articleMarkup}

    {posts.length > 0 && <p>Post info</p>}

    {paymentStatus === "success" ? (
      <p>Payment successfull</p>
    ) : (
      <p>Payment failed</p>
    )}

    {/* <ul>
      {[1, 2, 3].map((number) => {
        return <li>item {number}</li>;
      })}
    </ul> */}
  </>
);

const jsxCatsmarkup = (
  <section>
    <h2>Cute Lapki</h2>
    <ul>
      {cats.map(
        (cat) =>
          cat.available && (
            <li key={cat.id}>
              <img src={cat.image} alt={cat.name} width={200} />
              <h3>{cat.name}</h3>
              <p>Age: {cat.age}</p>
              <p>Contacts: {cat.email}</p>
              <p>
                {cat.available ? (
                  <i>Available</i>
                ) : (
                  <strong>Not available</strong>
                )}
              </p>
            </li>
          )
      )}
    </ul>
  </section>
);

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <PetsGallery />
);
