
// src/JsonViewer.js
import React, { useEffect, useState } from 'react';

const JsonViewer = ({ match }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const filePath = match.params[0]; // Get the path from the URL parameter
    fetch(`/${filePath}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching the JSON file:', error));
  }, [match.params]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>JSON Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default JsonViewer;
