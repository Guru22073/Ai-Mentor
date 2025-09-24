import ChatWindow from "./components/ChatWindow";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LockProvider } from "./contexts/LockContext";

function App() {
  return (
    <ThemeProvider>
      <LockProvider>
        <ChatWindow /> 
      </LockProvider>
    </ThemeProvider>
  );
}

export default App;
