import ChatWindow from "./components/ChatWindow";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <ChatWindow /> 
    </ThemeProvider>
  );
}

export default App;