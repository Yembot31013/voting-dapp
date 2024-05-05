import React from 'react';
import '../../App.css';

function VoteDetailSection() {
  
  return (
    <section className="vote-details">
      <div className="vote-info">
        <h3 className="vote-time-text">Vote Ends In:</h3>
        <div className="vote-time-group">
          <div className="vote-time">
            <div className="vote-face day green"></div>
            <div className="vote-text-group">
              <h3 className="vote-text">13</h3>
              <span className="text-desc">Day</span>
            </div>
          </div>
          <div className="vote-time">
            <div className="vote-face hour white"></div>
            <div className="vote-text-group">
              <h3 className="vote-text">13</h3>
              <span className="text-desc">Hour(s)</span>
            </div>
          </div>
          <div className="vote-time">
            <div className="vote-face minute green"></div>
            <div className="vote-text-group">
              <h3 className="vote-text">13</h3>
              <span className="text-desc">Minute(s)</span>
            </div>
            <span className="vote-seconds-time" title="Seconds">56</span>
          </div>
        </div>
      </div>
      <a href="#" className="vote-result-reveal-btn">Reveal in 2 minute 3 seconds</a>
    </section>
  );
}

export default VoteDetailSection;