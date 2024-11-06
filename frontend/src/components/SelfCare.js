import React, { useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SelfCare() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5001/api/generate', { prompt: input });
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error fetching response:', error.message);
    }
  };

  const notes = [
    "Have you tried rose hydrosol? Smoky quartz in a steel bottle of glacial water? Tincture drawn from the stamens of daylilies grown on the western sides of two-story homes?",
    "Have you removed your metal fillings? Made peace with your mother? With all the mothers you can? Or tried car exhaust? Holding your face to the steaming kettle?",
    "Have you finally stopped shoulding all over yourself? Has your copay increased?"
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
      {/* Self-Care Excerpt at the Top */}
      <h2>Self-Care</h2>
      <p style={{ fontStyle: 'italic', fontSize: '1.1em', marginBottom: '20px' }}>
        Have you tried rose hydrosol? Smoky quartz in a steel bottle of glacial water? Tincture
        drawn from the stamens of daylilies grown on the western sides of two-story homes? Pancreas
        of toad? Deodorant paste? Have you removed your metal fillings? Made peace with your mother?
        With all the mothers you can? Or tried car exhaust? Holding your face to the steaming kettle?
        Primal screamed into a down-alternative pillow in a wood while tree-bathing? Have you finally
        stopped shoulding all over yourself? Has your copay increased?
      </p>

      {/* Carousel with Each Note */}
      <Slider {...settings}>
        {notes.map((note, index) => (
          <div key={index} style={{ padding: '20px', fontSize: '1.2em', color: '#4a4a4a' }}>

            {/* Textarea and Send Button under each note */}
            <textarea
              placeholder="Share your thoughts on self-care..."
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
           {response}
        </p>
      )}
    </div>
  );
}

export default SelfCare;
