import React from 'react';
import useFetch from '../hooks/useFetch';

const Showcase = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data: {error.message}</div>;

    return (
        <div className="showcase">
            <h2>Showcase Items</h2>
            <ul>
                {data.slice(0, 5).map(item => (
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Showcase;