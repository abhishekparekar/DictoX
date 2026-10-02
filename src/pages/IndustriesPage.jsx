import React from 'react';
import IndustriesSection from '../sections/IndustriesSection';
import LogoWall from '../sections/LogoWall';
import FinalCTA from '../sections/FinalCTA';

export default function IndustriesPage({ onOpenConsultation }) {
  return (
    <div className="min-h-screen pt-12 sm:pt-14">
      <IndustriesSection onOpenConsultation={onOpenConsultation} />
      <LogoWall />
      <FinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
}
