import "./App.css";

import Header from "./component/header/Header";
import SideBar from "./component/sidebar/SideBar";
import Feed from "./component/feeds/Feed";
import Widgets from "./component/widget/Widgets";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <SideBar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
