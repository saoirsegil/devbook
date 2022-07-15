import "./App.css";

import Header from "./component/header/Header";
import SideBar from "./component/sidebar/SideBar";
import Feed from "./component/feeds/Feed";
import RightBar from "./component/widget/RightBar";
import SignIn from "./auth/SignIn";

function App() {
  const user = null;

  return (
    <div className="app">
      {!user ? (
        <SignIn />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <SideBar />
            <Feed />
            <RightBar />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
