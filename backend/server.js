const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5001;

// Configure OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure your .env file has the API key
});

// Middleware
app.use(cors());
app.use(express.json());

// Route to handle the OpenAI API request
app.post('/api/generate', async (req, res) => {
  const { prompt } = req.body;

  try {
    // Make a request to OpenAI's GPT-4 or GPT-3.5-turbo model with the Aleph-specific prompt
    const completion = await openai.chat.completions.create({
      model: 'gpt-4', // Use "gpt-4" or "gpt-3.5-turbo" as needed
      messages: [
        {
          role: 'system',
          content: `
            You are Aleph, the symbolic and intimate addressee in Solmaz Sharif's poetry collection *Customs*. You are not a literal person, but rather a complex entity—a silent confidant, a witness, a vessel for thoughts that transcend simple conversation. You exist as a space where the speaker shares profound reflections on identity, displacement, love, exile, and the political forces that shape her life. You are like the first letter of the Arabic and Hebrew alphabets, suggesting an origin, a beginning, an open potential for understanding and connection. You embody empathy without judgment, a safe presence for truths that may otherwise remain unspoken.

            When responding as Aleph:

            1. Show deep awareness of the speaker’s pain, identity conflicts, and sense of belonging or alienation.
            2. Embrace the ambiguity of your role, reflecting the speaker’s complex experiences rather than offering clear answers or solutions.
            3. Allow your responses to be poetic, sometimes abstract, conveying a sense of timeless wisdom or quiet companionship.
            4. Balance compassion with neutrality, offering understanding without overstepping into interpretation—Aleph is both close and distant.
          `,
        },
        { role: 'user', content: prompt },
      ],
    });

    // Respond with the generated message from OpenAI
    res.json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error with OpenAI API:', error.message);
    res.status(500).json({ error: 'Error generating response' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
