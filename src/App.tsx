
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  return (
    <div>
      <h1>Student Portal</h1>
      <p>Welcome to the student management application.</p>

      <label>Enter student name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Hello, {name || 'Student'}!</h3>
    </div>
  );
}

export default App;
