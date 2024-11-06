import React, { useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function DearAleph() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    try {
      // Replace the localhost URL with your deployed Vercel backend URL
      const res = await axios.post('https://your-backend.vercel.app/api/generate', { prompt: input });
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error fetching response:', error.message);
    }
  };

  // Full excerpt with each section as a separate slide in the carousel
  const notes = [
    `Like Ovid: I’ll have no last words.
    This is what it means to die
    among barbarians. Bar bar bar
    was how the Greeks heard
    our speech—sheep, beasts—and so we became
    barbarians. We make them reveal
    the brutes they are by the things
    we make them name.`,
    
    `David,
    they tell me, is the one
    one should aspire to, but ever since
    I first heard them say Philistine
    I’ve known I am Goliath
    if I am anything.`,

    `You’re correct. Every nation hates
    its children. This is a requirement of statehood.
    This and empathy.
    Empathy means
    laying yourself down
    in someone else’s chalklines
    and snapping a photo. A Chrysler
    with four bullet holes
    in the rear passenger door
    just drove by calmly, signaling
    before it turned. Oh, Mrs. Evans,
    you’re such a wonderful woman,
    said, supposedly, Ethel Rosenberg
    to the woman who walked her
    to the chair.
    It was empathy on Evans’s part.
    Love on Ethel’s.
    I am a wonderful woman
    more often than I care to admit.
    We are going to have
    our first woman president.`,

    `I’ve arrived
    frilled. Laced.
    Softly etched.
    Tomato juice on Carrara marble,
    the ruin of it.
    The training of the eye
    only wealth can—
    only wealth can
    ruin one’s sight like this.
    Only gout, plucked
    pheasant, &c.
    I tried to quell or quiet
    my bile, but it grew
    horns instead.`,

    `In the basement, it fed
    from the steel bowl,
    the congealed and cold
    cartilage left,
    and now I can confess,
    there is nothing to them:
    the Americans.
    Not élan, quiddity.
    A hateful people,
    as all, and easy
    to offend.`,

    `Send word, you said.
    The line frays.
    It is of love
    I say this. It is of love,
    I must say,
    but not of thee.`
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      {/* Dear Aleph Excerpt at the Top */}
      <h2>Dear Aleph</h2>

      {/* Carousel with Each Note */}
      <Slider {...settings}>
        {notes.map((note, index) => (
          <div key={index} style={{ padding: '20px', fontSize: '1.2em', color: '#4a4a4a', whiteSpace: 'pre-line' }}>
            <p>{note}</p>

            {/* Textarea and Send Button under each note */}
            <textarea
              placeholder="Write a message to Aleph..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ width: '100%', marginTop: '10px' }}
            ></textarea>
            <button onClick={handleSubmit} style={{ marginTop: '10px' }}>Send</button>
          </div>
        ))}
      </Slider>

      {/* Display GPT Response */}
      {response && (
        <p className="response" style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e8f5fe', borderRadius: '5px' }}>
          Aleph: {response}
        </p>
      )}
    </div>
  );
}

export default DearAleph;
