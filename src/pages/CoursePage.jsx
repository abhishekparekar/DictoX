import React from 'react';
import CourseSection from '../sections/CourseSection';
import FAQSection from '../sections/FAQSection';
import FinalCTA from '../sections/FinalCTA';

export default function CoursePage({ onOpenConsultation }) {
  return (
    <div className="min-h-screen pt-14 sm:pt-16">
      <CourseSection onOpenConsultation={onOpenConsultation} />
      <FAQSection onOpenConsultation={onOpenConsultation} />
      <FinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
}
