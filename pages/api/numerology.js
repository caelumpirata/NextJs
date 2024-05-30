import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const {
        DOB,
        time,
        gender,
        driver_no,
        conductor_no,
        super_no,
        planes,
        element,
        driver_qualities
      } = req.body;

      // Validate form data
      if (!DOB || !time || !gender) {
        return res.status(400).json({ error: 'DOB, time, and gender are required fields' });
      }

      // Insert data into the database
      await sql`
        INSERT INTO numerology (DOB, time, gender, driver_no, conductor_no, super_no, planes, element, driver_qualities)
        VALUES (${DOB}, ${time}, ${gender}, ${driver_no}, ${conductor_no}, ${super_no}, ${planes}, ${element}, ${driver_qualities})
      `;

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
