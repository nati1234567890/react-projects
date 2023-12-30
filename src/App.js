import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/accoridian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMore from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* <LoadMore /> */}
      <TreeView menus={menus}/>
    </div>
  );
}

export default App;
