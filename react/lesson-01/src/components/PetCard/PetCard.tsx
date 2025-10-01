import type { CardProps, Category } from "../../types/CardType";

import css from "./PetCard.module.css";
// console.log("🚀 ~ css:", css);

export default function PetCard({
  image,
  name,
  species,
  age,
  gender,
  shortDescription,
  categories,
}: CardProps) {
  // console.log(props);

  return (
    <>
      <img
        className="card-ill"
        src={image}
        alt={name}
        width={200}
        height={200}
      />
      <div>
        <p>{species}</p>
        <h3 className={css.subtitle}>{name}</h3>
        <ul>
          {categories.map((category: Category, idx) => (
            <li key={idx}>{String(category)}</li>
          ))}
        </ul>
        <ul>
          <li>{age}</li>
          <li>{gender}</li>
        </ul>

        <p>{shortDescription}</p>

        <button type="button">Дізнатись більше</button>
      </div>
    </>
  );
}
