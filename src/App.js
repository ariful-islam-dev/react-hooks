import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./App.scss";
import MyHook from "./components/Hooks";
import { UserProvider } from "./components/userContext";

const App = () => {
  return (
    <UserProvider>
      <Container>
        <Row>
          <Col sm={{ size: 12}}>
            <h1 className="mt-3">React Hooks - Crash Course</h1>
            <MyHook />
          </Col>
        </Row>
      </Container>
    </UserProvider>
  );
};

export default App;
