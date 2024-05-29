import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { date, time, gender } = req.body;
      
      // Validate form data
      if (!date || !time || !gender) {
        return res.status(400).json({ error: 'Date, time, and gender are required fields' });
      }

      // Insert data into the database
      await sql`INSERT INTO FormData (date, time, gender) VALUES (${date}, ${time}, ${gender})`;

      // Send success response
      return res.status(201).json({ message: 'Data added successfully' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    // Return method not allowed for non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
