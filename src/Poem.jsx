import { React, useState } from 'react';
import './Poem.css';

function Poem() {
    const [poem, setPoem] = useState(null);
    const [loading, setLoading] = useState(false);
    const [revealPoem, setRevealPoem] = useState(false);

    const fetchPoem = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://poetrydb.org/author,poemcount/Dickinson;30');
            const data = await response.json();
          
            const randomPoem = data[Math.floor(Math.random() * data.length)];
              
            setTimeout(() => {
                setPoem(randomPoem);
                setRevealPoem(true);
                setLoading(false);
            }, 2000);
        } catch (error) {
              console.error('Failed to fetch poem:', error);
              setLoading(false);
        }
    };

    return (
        <div className="poem-container">
        <button onClick={fetchPoem} disabled={loading}>
          {loading ? "Loading your poetic essence..." : "Find out"}
        </button>
      
        {revealPoem && poem && (
          <div className="contents">
            <h2>{poem.title}</h2>
            <h3>{poem.author}</h3>
            <pre>{poem.lines.join('\n')}</pre>
          </div>
        )}
      </div>
    )
}

export default Poem;