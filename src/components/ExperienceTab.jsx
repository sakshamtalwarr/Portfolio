import React from 'react';
import Experience from './Experience';
import Skills from './Skills';
import Hobbies from './Hobbies';

export default function ExperienceTab() {
  return (
    <div className="space-y-4 pt-12 pb-16">
      <Experience />
      <Skills />
      <Hobbies />
    </div>
  );
}
