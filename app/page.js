import LikeButton from "./components/likeButton";

function Header(props) {
  return <h1>{props.title ? props.title : "Default Title"}</h1>;
}

export default function HomePage() {
  const names = ["Peter Jhon", "Vanusa", "Mario Rossi", "Li Wei"];
  return (
    <div>
      <Header title="Hello World!" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
