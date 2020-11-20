import React from "react";
import Header from "./Header";
import KegControl from "./KegControl";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <Container>
        <KegControl />
      </Container>  
    </>
  );
}

export default App;
