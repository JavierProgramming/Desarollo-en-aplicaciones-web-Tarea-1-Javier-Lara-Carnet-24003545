import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="mt-4">
        <Row>
          <Col md={5}>
            <TaskForm />
          </Col>
          <Col md={7}>
            <TaskList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
