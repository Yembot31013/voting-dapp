import React from 'react';
import '../../App.css';

function VoteCandidateSection() {

  return (
    <section className="vote-candidate">
      <h2 className="election-title">Presidential Candidate(s)</h2>
      <div className="canditate-contain">
        <div className="vote-loader">
          <div className="face face1">
            <div className="circle"></div>
          </div>
          <div className="face face2">
            <div className="circle"></div>
          </div>
          <div className="profile-pic">
            <img src="../tinubu.jpeg" alt="" className="profile"/>
          </div>
          <div className="vote-content">
            <h3 className="voter-name">Bola Tinubu</h3>
            <div className="vote-addition">
              <div className="party-flag">
                <img src="../apc-flag.jpeg" alt="" className="flag"/>
              </div>
              <p className="details">APC</p>
            </div>
            <a href="#" className="vote-btn showBtn">Show</a>
          </div>
          <div className="candidate-detail hide">
            <div className="candidate-info">
              <div className="candidate-profile-pic">
                <img src="../tinubu.jpeg" alt="" className="canidate-img"/>
              </div>
              <div className="candidate-contain">
                <h3 className="candidate-name">Bola Tinubu</h3>
                <p className="candidate-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti unde a architecto!</p>
                <a href="#" className="vote-btn">Vote</a>
              </div>
            </div>
            <div className="candidate-info-addition">
              <h2 className="addition-title">Candidate Team</h2>
              <div className="candidate-team-group">
                <div className="candidate-team-single">
                  <div className="single-img-contain">
                    <img src="../obi.jpeg" alt=""/>
                  </div>
                  <div className="single-text-group">
                    <h3 className="single-name">Lorem, ipsum.</h3>
                    <p className="single-details">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="candidate-team-single">
                  <div className="single-img-contain">
                    <img src="../obi.jpeg" alt=""/>
                  </div>
                  <div className="single-text-group">
                    <h3 className="single-name">Lorem, ipsum.</h3>
                    <p className="single-details">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="candidate-team-single">
                  <div className="single-img-contain">
                    <img src="../obi.jpeg" alt=""/>
                  </div>
                  <div className="single-text-group">
                    <h3 className="single-name">Lorem, ipsum.</h3>
                    <p className="single-details">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="candidate-team-single">
                  <div className="single-img-contain">
                    <img src="../obi.jpeg" alt=""/>
                  </div>
                  <div className="single-text-group">
                    <h3 className="single-name">Lorem, ipsum.</h3>
                    <p className="single-details">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="candidate-team-single">
                  <div className="single-img-contain">
                    <img src="../obi.jpeg" alt=""/>
                  </div>
                  <div className="single-text-group">
                    <h3 className="single-name">Lorem, ipsum.</h3>
                    <p className="single-details">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cancel-btn">
              <img src="../cancel.svg" alt=""/>
            </div>
          </div>
        </div>
        <div className="vote-loader">
          <div className="face face1">
            <div className="circle"></div>
          </div>
          <div className="face face2">
            <div className="circle"></div>
          </div>
          <div className="profile-pic">
            <img src="../obi.jpeg" alt="" className="profile"/>
          </div>
          <div className="vote-content">
            <h3 className="voter-name">Peter Obi</h3>
            <div className="vote-addition">
              <div className="party-flag">
                <img src="../labour-flag.png" alt="" className="flag"/>
              </div>
              <p className="details">LP</p>
            </div>
            <a href="#" className="vote-btn showBtn">Show</a>
          </div>
          <div className="candidate-detail hide">
            <div className="candidate-info">
              <div className="candidate-profile-pic">
                <img src="../obi.jpeg" alt="" className="canidate-img"/>
              </div>
              <div className="candidate-contain">
                <h3 className="candidate-name">Peter Obi</h3>
                <p className="candidate-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti unde a architecto!</p>
                <a href="#" className="vote-btn">Vote</a>
              </div>
            </div>
            <div className="candidate-info-addition">
              <h2 className="addition-title">Candidate Team</h2>
              <div className="candidate-team-group">
                <div className="candidate-team-single">
                  <div className="single-img-contain">
                    <img src="../obi.jpeg" alt=""/>
                  </div>
                  <div className="single-text-group">
                    <h3 className="single-name">Lorem, ipsum.</h3>
                    <p className="single-details">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="candidate-team-single">
                  <div className="single-img-contain">
                    <img src="../obi.jpeg" alt=""/>
                  </div>
                  <div className="single-text-group">
                    <h3 className="single-name">Lorem, ipsum.</h3>
                    <p className="single-details">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="candidate-team-single">
                  <div className="single-img-contain">
                    <img src="../obi.jpeg" alt=""/>
                  </div>
                  <div className="single-text-group">
                    <h3 className="single-name">Lorem, ipsum.</h3>
                    <p className="single-details">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="candidate-team-single">
                  <div className="single-img-contain">
                    <img src="../obi.jpeg" alt=""/>
                  </div>
                  <div className="single-text-group">
                    <h3 className="single-name">Lorem, ipsum.</h3>
                    <p className="single-details">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="candidate-team-single">
                  <div className="single-img-contain">
                    <img src="../obi.jpeg" alt=""/>
                  </div>
                  <div className="single-text-group">
                    <h3 className="single-name">Lorem, ipsum.</h3>
                    <p className="single-details">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cancel-btn">
              <img src="../cancel.svg" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VoteCandidateSection;