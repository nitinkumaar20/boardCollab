import React, { useState } from 'react';
// import './CreateBoard.css'; // External CSS file

const CreateBoard = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setMessage('Board name is required');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/boards/board', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });
      console.log(res, 'rs');

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || 'Failed to create board');
      } else {
        setMessage('Board created successfully!');
        setName('');
      }
    } catch (error) {
      setMessage('Server error');
    }
  };

  return (
    <div className="create-board-container">
      <h2>Create Board</h2>
      <form onSubmit={handleSubmit} className="create-board-form">
        <input
          type="text"
          placeholder="Enter board name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="submit-btn">Create</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default CreateBoard;
