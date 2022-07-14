import "./App.css";

import Header from "./component/header/Header";
import SideBar from "./component/sidebar/SideBar";
import Feed from "./component/feeds/Feed";
import RightBar from "./component/widget/RightBar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </div>
  );
}

export default App;
