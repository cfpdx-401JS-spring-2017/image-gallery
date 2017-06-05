import React from 'react';
import {
  Link
} from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <button>
        <Link to="/albums">Go to Albums</Link>
      </button>
    </div>
  );
}