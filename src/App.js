import React, { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [redditData, setRedditData] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/reactjs.json')
      .then(response => response.json())
      .then(data => setRedditData(data.data.children))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {redditData.map((child) => {
        const { title, selftext_html, url, score } = child.data;
        return (
          <div className='parent' key={child.data.id} style={{ width: '300px', margin: '20px', padding: '10px', backgroundColor: '#f5f5f5', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', borderRadius: '5px' }}>
            <div className='child' style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>{title}</div>
            <div className='child' style={{ fontSize: '16px', fontWeight: 'bold', color: '#ff4500', marginBottom: '10px' }}>Score: {score}</div>
            <div className='child' style={{ fontSize: '16px', marginBottom: '10px' }} dangerouslySetInnerHTML={{ __html: selftext_html }} />
            <div className='child' style={{ fontSize: '16px', fontStyle: 'italic' }}>{url}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
