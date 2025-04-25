import React from 'react';
import { Card } from 'react-bootstrap';

function TaskItem() {
  return (
    <Card className="mb-3 task-card">
      <Card.Body>
        <Card.Title>Name</Card.Title>
        <Card.Text>
          Description of the goal goes here. Be specific and concise.
        </Card.Text>
        <Card.Text>
          <strong>Due Date:</strong> 2025-05-01
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TaskItem;
