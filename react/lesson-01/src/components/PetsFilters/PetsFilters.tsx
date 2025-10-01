import categories from "../../db/categories.json";
import css from "./PetsFilters.module.css";
// console.log("🚀 ~ categories:", categories);

export default function PetsFilters() {
  return (
    <fieldset>
      {categories.map((value) => (
        <label key={value._id}>
          <input type="radio" value="all" name="filter" />
          <span className={css.subtitle}>{value.name}</span>
        </label>
      ))}
    </fieldset>
  );
}
