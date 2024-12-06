const API_KEY = '14a4f995c56a094ae81e385f9feeb122';
const BASE_URL = 'https://gnews.io/api/v4';

// Fetch news articles based on a search query or top headlines by default
export const fetchNews = async (query: string = '', max: number = 10) => {
    try {
        const url = query
            ? `${BASE_URL}/search?q=${encodeURIComponent(query)}&lang=en&country=us&max=${max}&apikey=${API_KEY}`
            : `${BASE_URL}/top-headlines?category=general&lang=en&country=us&max=${max}&apikey=${API_KEY}`;

        console.log(`Fetching news with URL: ${url}`);
        const response = await fetch(url);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API Error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        console.log("Fetched articles:", data.articles);
        return data.articles || [];
    } catch (error) {
        console.error("Error fetching news:", error);
        return [];
    }
};
