import CardImg from "./components/CardImg";
import CardSubtitle from "./components/CardSubtitle";
import CardTitle from "./components/CardTitle";
import CardText from "./components/CardText";

function App() {
  return (
    <>
      <div className="card">
        <CardImg src="/srs/img/card-image.svg"/>
        <CardTitle title="Card Title" />
        <CardSubtitle subtitle="Card Subtitle"></CardSubtitle>
        <CardText text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, ipsa laudantium? Ullam quam nisi facere?" />
      </div>
    </>
  );
}

export default App;
