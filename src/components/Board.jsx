import React, { useEffect, useState } from 'react';
// import './BoardList.css';

const BoardList = () => {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchBoards = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/boards');
      const data = await res.json();
      if (res.ok) {
        setBoards(data);
      } else {
        setError('Failed to load boards');
      }
    } catch (err) {
      setError('Server error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBoards();
  }, []);

  return (
    <div className="board-list-container">
      <h2>All Boards</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : boards.length === 0 ? (
        <p>No boards found.</p>
      ) : (
        <ul className="board-list">
          {boards.map((board) => (
            <li key={board._id} className="board-item">
              {board.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BoardList;
