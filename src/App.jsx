import Profile from "./components/Profile";
import Activities from "./components/Activities";

const App = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="grid grid-rows-2 grid-cols-4 gap-4">
        <Profile />
        <Activities />
      </div>
    </div>
  );
};

export default App;
