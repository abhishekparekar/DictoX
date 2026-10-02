import React from 'react';
import CourseSection from '../sections/CourseSection';
import FAQSection from '../sections/FAQSection';
import FinalCTA from '../sections/FinalCTA';

export default function CoursePage({ onOpenConsultation }) {
  return (
    <div className="min-h-screen pt-12 sm:pt-14">
      <CourseSection onOpenConsultation={onOpenConsultation} />
      <FAQSection onOpenConsultation={onOpenConsultation} />
      <FinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
}
