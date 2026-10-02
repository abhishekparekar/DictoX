import React from 'react';
import CourseSection from '../sections/CourseSection';

export default function CoursePage({ onOpenConsultation }) {
  return (
    <div className="min-h-screen pt-12 sm:pt-14">
      <CourseSection onOpenConsultation={onOpenConsultation} />
    </div>
  );
}
