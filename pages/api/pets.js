// import { sql } from '@vercel/postgres';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const { petName, ownerName } = req.body;
//       if (!petName || !ownerName) {
//         return res.status(400).json({ error: 'Pet and owner names are required' });
//       }
//       await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;
//       return res.status(201).json({ message: 'Pet added successfully' });
//     } catch (error) {
//       return res.status(500).json({ error: error.message });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { petName, ownerName, fullName, sum } = req.body; // Receive full name from request body
      if (!petName || !ownerName) {
        return res.status(400).json({ error: 'Pet and owner names are required' });
      }
      await sql`INSERT INTO Pets (Name, Owner, FullName) VALUES (${petName}, ${ownerName}, ${fullName + sum});`; // Insert full name into database
      return res.status(201).json({ message: 'Pet added successfully' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
