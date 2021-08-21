import CardImg from "./components/CardImg";
import CardSubtitle from "./components/CardSubtitle";
import CardTitle from "./components/CardTitle";
import CardText from "./components/CardText";
import CardBtn from "./components/CardBtn";


function App() {
  return (
    <>
      <div className="card">
        <CardTitle title="Card Title" />
        <CardSubtitle subtitle="Card Subtitle"></CardSubtitle>
        <CardText text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Repudiandae, ipsa laudantium? Ullam quam nisi facere?" />
        <CardBtn  btn="Button"/>
      </div>
    </>
  );
}

export default App;
