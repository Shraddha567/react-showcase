export const fetchShowcaseItems = async () => {
    try {
        const response = await fetch('https://api.example.com/showcase-items');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching showcase items:', error);
        throw error;
    }
};