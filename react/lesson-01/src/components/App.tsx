import PetsGallery from "./PetsGallery/PetsGallery";
import Section from "./Section";

export default function App() {
  return (
    <main>
      <Section text="Наші хвостики">
        <ul>
          <li>
            Все почалося у 2015 році з кількох небайдужих людей та одного
            врятованого собаки. Сьогодні ми — один з найбільших притулків у
            регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили.
          </li>
        </ul>
      </Section>
      <Section text="Чому Хатинка Лапок">
        <PetsGallery />
      </Section>
    </main>
  );
}
