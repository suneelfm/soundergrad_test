import "./App.css";
import Slides from "./Slides";

function App() {
  const slides = [
    { title: "Slide Title 1", text: "Slide Text 1" },
    { title: "Slide Title 2", text: "Slide Text 2" },
    { title: "Slide Title 3", text: "Slide Text 3" },
    { title: "Slide Title 4", text: "Slide Text 4" },
  ];
  return <Slides slides={slides} />;
}

export default App;
