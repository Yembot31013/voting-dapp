import React from 'react';
import '../App.css';
import VoteDetailSection from './section/voteDetailSection';
import VoteCandidateSection from './section/voteCandidateSection';
import VoteDescSection from './section/voteDescSection';

function SectionGroup() {

  return (
    <section className="section-container">
      <VoteDetailSection />
      <VoteCandidateSection />
      <VoteDescSection />
    </section>
  );
}

export default SectionGroup;