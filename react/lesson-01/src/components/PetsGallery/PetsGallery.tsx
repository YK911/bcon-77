import PetsFilters from "../PetsFilters/PetsFilters";
import PetsList from "../PetsList/PetsList";

import css from "./PetsGallery.module.css";

export default function PetsGallery() {
  return (
    <section className={css.section}>
      <div>
        <h2>Наші хвостики</h2>
        <p>Вони дуже чекають на знайомство з вами</p>

        <PetsFilters />
        <PetsList />
      </div>
    </section>
  );
}
