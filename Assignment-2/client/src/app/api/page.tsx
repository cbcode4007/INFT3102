import fetch from 'node-fetch';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method Not Allowed. Use GET.' });
    }

    const query = req.query || {};
    console.log('Query parameters:', query);

    const city = query.city;
    if (!city || typeof city !== 'string') {
      return res.status(400).json({ error: 'City is required and must be a string' });
    }

    const apiKey = '6c287a0a60da34f0725f72b519b8d94e';

    if (!apiKey) {
      return res.status(500).json({ error: 'API key is not set' });
    }

    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric'
    );

    if (!response || !response.ok) {
      const errorData = (await response.json()) as { message?: string } | null;
      const message = errorData?.message || 'Unknown error occurred with the weather API';
      console.error('Error from OpenWeatherMap API:', message);
      return res.status(response ? response.status : 500).json({ error: message });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error('Error fetching weather data:', error);
    return res.status(500).json({ error: 'Failed to fetch weather data' });
  }
}
