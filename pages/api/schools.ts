import type { NextApiRequest, NextApiResponse } from 'next';

// Route API pour récupérer les écoles du back-end
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const backendUrl = 'http://localhost:5000/api/schools'; // URL du back-end

  if (req.method === 'GET') {
    try {
      const response = await fetch(backendUrl);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch schools' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
