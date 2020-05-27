import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer 3B1eI5X7Ef3_xAyQ-uUXwmJ0wbWUNe9CGTyMCdwd56fnBvqXKuF-7C0rS1Et1eCQg6Fv63UjEWmJrqMBXr6hNrVJozXB9SMepgUVKcOZPNWwyrSv_fzFZwjAQlPBXnYx"
    }
});