import Banner from "./layouts/Banner";
import Header from "./layouts/Header";
import Story from "./layouts/Story";
import TopCollection from "./layouts/TopCollection";

function App() {
  return (
    <div className="pb-[100px]">
      <Header></Header>
      <Banner />
      <Story />
      <TopCollection />
    </div>
  );
}

export default App;
