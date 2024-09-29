import './App.css';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';
function App() {
  return (
    <div className="App">
     <Route path="/" component={HomePage} exact></Route>
     <Route path="/chat" component={ChatPage} exact></Route>
    </div>
  );
}

export default App;
