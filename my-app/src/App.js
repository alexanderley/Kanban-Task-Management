import "./App.scss";
import SideMenu from "./components/SideMenu";
import TopNavigation from "./components/TopNavigation";
import Main from "./components/Main";
import Modal from "./components/UI/modals/Modal";
import AddNewTaskModalContent from "./components/UI/modals/AddNewTaskModalContent";

function App() {
  return (
    <div className="App">
      <TopNavigation />
      <Main />
    </div>
  );
}

export default App;
