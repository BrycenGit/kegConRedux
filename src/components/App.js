import React from "react";
import Header from "./Header";
import KegControl from "./KegControl";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import "./../App.css"
import BackgroundImagePage from "./BackgroundImagePage";

function App() {
  return (
    <>
      <Header />
      <BackgroundImagePage />
      <Container>
        <KegControl />
      </Container>  
    </>
  );
}

export default App;
