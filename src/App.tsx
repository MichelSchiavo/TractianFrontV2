import { Grid } from "@chakra-ui/react";
import { Home } from './components/Home';
import { SideMenu } from './components/SideMenu';
import { useTractianContext } from "./context/TractianContext";

import { useMediaQuery } from "@chakra-ui/react"

function App() {
  const { page } = useTractianContext();
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  const pages: {[index: string]: any} = {
    'Home': {src: <Home /> },
  };

  return (
    <>
      <SideMenu />
      <Grid
        width={isLargerThan1280 ? 1380 : 700}
        my={5}
        mx='auto'
        alignItems='space-around'
        gap={4}
        gridTemplateColumns={isLargerThan1280 ? '1fr 1fr 1fr 1fr' : '1fr 1fr'}
      >
        {pages[page].src}
      </Grid>
    </>
  );
}

export default App;
