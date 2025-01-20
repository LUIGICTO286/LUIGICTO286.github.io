import React, { useState } from 'react';
import { ManifestoAnimation } from './ManifestoAnimation';
import { ManifestoWritten } from './ManifestoWritten';

export const Manifesto: React.FC = () => {
  const [showWritten, setShowWritten] = useState(false);

  const handleRevealClick = () => {
    setShowWritten(true);
  };

  return <div>{!showWritten ? <ManifestoAnimation onReveal={handleRevealClick} /> : <ManifestoWritten />}</div>;
};
