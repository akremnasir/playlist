import { useState } from "react";
import Card from "./components/Card.jsx";
import Header from "./components/Header";
import SideView from "./components/SideView";
import { AppContainer } from "./styled/styled";

function App() {
  const [key, setKey] = useState(0);

  const rerender = () => {
    setKey((prevKey) => prevKey + 1);
  };
  return (
    <AppContainer>
      <Header reload={rerender} key={key - 1} />
      <SideView reload={rerender} key={key} />
      <Card reload={rerender} key={key + 1} />
    </AppContainer>
  );
}

export default App;
