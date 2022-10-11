import { StatusBar } from "react-native";

import { Providers } from "./src/Providers";
import { Routes } from "./src/routes";

function App() {
  return (
    <Providers>
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </>
    </Providers>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;
