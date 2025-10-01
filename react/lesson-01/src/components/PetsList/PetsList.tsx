import data from "../../db/petsData.json";
import PetCard from "../PetCard/PetCard";

const cardStyles = {
  background: "#eee9e3ff",
  padding: 12,
  borderRadius: 16,
  border: "1px solid black",
};

export default function PetsList() {
  return (
    <ul>
      {data.animals.map((animal) => (
        <li key={animal._id} style={cardStyles}>
          <PetCard {...animal} _id={Number(animal._id)} />
        </li>
      ))}
    </ul>
  );
}
