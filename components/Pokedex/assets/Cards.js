import { StyleCard } from "./StyleCard";

export default function PokemonCard({name, image}) {
  return (
    <StyleCard>
      <div className="Container">
        <div className="Image">
          <img src={image} alt={name} />
        </div>
        <div className="Title">
            {name}
        </div>
      </div>
    </StyleCard>
  );
}