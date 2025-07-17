import express from 'express';
const router = express.Router();
import https from 'https';
const spaceController = {
    async getLatest(req, res, next) {
        const URL = `https://api.spacexdata.com/v5/launches/latest`;

        try {
            console.log('Fetching data from SpaceX API...');
            
            // Fetch data from the SpaceX API
            const response = await fetch(URL);

            // Check if the response is OK
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.statusText}`);
            }

            // Parse the JSON response
            const data = await response.json();

            // Send the parsed data as the response
            res.status(200).json(data);
        } catch (err) {
            console.error('Error in getLatest Controller:', err);

            // Pass the error to the global error handler
            return next({
                log: 'Error in getLatest Controller',
                status: 500,
                message: { err: 'An error occurred while fetching SpaceX data.' },
            });
        }
    },
};
export default spaceController;