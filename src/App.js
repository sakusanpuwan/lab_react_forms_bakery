import NavBar from "./NavBar";
import Title from "./Title";
import RecipeList from "./RecipeList";
import Search from "./Search";
import CakeForm from "./CakeForm";
import CakeContainer from "./CakeContainer"

function App() {
  return (
    <>
      <header>
        <NavBar />
        <Title />
      </header>
      <main>
        {/* <RecipeList />
        <Search />
        <CakeForm /> */}
        <CakeContainer/>
      </main>
    </>
  );
}

export default App;
