import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/theme';
import { Home } from './pages/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
