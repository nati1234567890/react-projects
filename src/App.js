import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/accoridian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMore from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QrCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabText from "./components/custom-tabs/tab-parent";
import Modelarent from "./components/model-topup/model-parent";
import ModelParent from "./components/model-topup/model-parent";
import GithubProfile from "./components/github-profile-finder";
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
      {/* <TreeView menus={menus}/> */}
      {/* <QrCodeGenerator/> */}
      {/* <LightDarkMode/> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <TabText /> */}
     <GithubProfile/>
    </div>
  );
}

export default App;
