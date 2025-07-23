import { React, useState } from 'react';
import './Poem.css';

function Poem() {
    const [poem, setPoem] = useState(null);
    const [loading, setLoading] = useState(false);
    const [revealPoem, setRevealPoem] = useState(false);

    const fetchPoem = async () => {
        setLoading(true);
        setRevealPoem(false);
        try {
        const response = await fetch('https://poetrydb.org/random');
        const data = await response.json();
        setPoem(data[0]);

        setTimeout(() => {
            setRevealPoem(true);
            setLoading(false);
          }, 2000);
        } catch(error) {
            console.error('Failed to fetch poem:', error);
            setLoading(false);
        }
    }

    return (
        <div className="poem-container">
             <button onClick={() => fetchPoem()}>Find out</button>

            {loading && <p>Loading your poetic essence...</p>}

            {!loading && poem && (
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