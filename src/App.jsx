// src/App.jsx
import { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  return (
    <div className="dashboard">
      <header className="header">
        <div className="chatbot-icon">
  <img 
    src="/icon2.png" 
    alt="Tuora"
    class='chatbot-icon'
  />
  
</div>
        <div className="page-title">Dashboard</div>
        <div className="avatar">👤</div>
      </header>
    

      <main className="main-content">
        {/* Left column */}
        <div className="left-panel">
          <div className="hero">
            <h2>Your journey with</h2>
            <h1>Tuora is here!</h1>
          </div>

          <div className="card tour-plans">
            <h3>Your Tour Plans</h3>
            <div className="card-container">
            <div className="plan-item">
              <div className="plan-info">
                <div className="plan-title">Trip to Ella</div>
                <div className="plan-details">
                  <div>3 Days</div>
                  <div>Budget LKR 45,000</div>
                </div>
                
              </div>
              
            </div>
            <div className="plan-info2">
              <button class="add"><img src="/add-icon.jpeg" class="add-icon"/></button>
            </div>
            </div>
            </div>
            <button className="btn primary">Start Planning</button>
          

          <button className="btn sos">SOS - Emergency Assistance</button>
        </div>

        {/* Right column - chat preview */}
        <div className="right-panel">
          <div className="card chat-card">
            <div className="chat-header">
              <div className="chat-icon"><img 
    src="/icon.png" 
    alt="Chatbot"
    class='chat-icon'
  /></div>
              <div className="chat-title">Ask from Tuora</div>
            </div>

            <div className="chat-body">
              <div className="message bot">
                Hi! I'm Tuora.<br />
                Your AI tour guide. I can help you explore places, suggest activities, food spots, and keep you safe during your journey.
              </div>

              <div className="message user">
                now i am at Nine Arch Bridge. Can you explain about this place
              </div>
            </div>

            <div className="chat-footer">
              <div className="image2">
              <button type="button" class="image2-btn">
              <img src="/image2-icon.jpeg" 
            alt="Action description" 
              class="image-btn"
              />
              </button>
              </div>
              <div className="arrow">
              <input
                class="text-type" type="text"
                placeholder="Type message here..."
                
              />
              <button class="send-btn"><img src="/arrow-icon.jpeg" class="arrow-icon"/> </button>             
               </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;