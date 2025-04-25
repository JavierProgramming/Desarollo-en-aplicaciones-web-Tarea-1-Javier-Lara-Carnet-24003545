import React from 'react';
import { Form, Button } from 'react-bootstrap';

function TaskForm() {
  return (
    <div className="task-form p-3">
      <h5 className="mb-3">New Goal</h5>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter goal name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={2} placeholder="Enter description" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Button variant="primary" className="w-100">Add Goal</Button>
      </Form>
    </div>
  );
}

export default TaskForm;
