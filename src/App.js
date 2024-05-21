import "./App.css";
import { LayoutProvider } from "./LayoutContext";
import Forms from "./pages/Forms";

function App() {
  return (
    <LayoutProvider>
      <Forms />
    </LayoutProvider>
  );
}

export default App;
