import React, { useState } from 'react';
import '../styles/Courses.css';
import hanyangIcon from '../assets/hanyang_icon.png';
import snuIcon from '../assets/snu_icon.png';

export default function Courses() {
  const [activeTab, setActiveTab] = useState('hanyang');

  const hanyangCourses = [
    { src: '/src/assets/course_imgs/OT_25.png', alt: 'OT 25' },
    { src: '/src/assets/course_imgs/DS_25.png', alt: 'DS 25' },
    { src: '/src/assets/course_imgs/ISD_fa25.png', alt: 'ISD Fall 25' },
    { src: '/src/assets/course_imgs/CD2_25.png', alt: 'CD2 25' },
    { src: '/src/assets/course_imgs/ERP_25.png', alt: 'ERP 25' },
    { src: '/src/assets/course_imgs/BIAI_25.png', alt: 'BIAI 25' },
    { src: '/src/assets/course_imgs/CD1_25.png', alt: 'CD1 25' },
    { src: '/src/assets/course_imgs/ISD_sp25.png', alt: 'ISD Spring 25' },
    { src: '/src/assets/course_imgs/OT_24.png', alt: 'OT 24' },
    { src: '/src/assets/course_imgs/ISA_24.png', alt: 'ISA 24' }
  ];

  const snuCourses = [
    { src: '/src/assets/course_imgs/IS_24.png', alt: 'IS 24' },
    { src: '/src/assets/course_imgs/IS_23.png', alt: 'IS 23' }
  ];

  const currentCourses = activeTab === 'hanyang' ? hanyangCourses : snuCourses;

  return (
    <div className="courses-container">
      {/* Header Section */}
      <div className="courses-header">
        <h1 className="courses-title">Courses</h1>
      </div>

      {/* Tabs Section */}
      <div className="courses-tabs">
        <button
          className={`course-tab ${activeTab === 'hanyang' ? 'active' : ''}`}
          onClick={() => setActiveTab('hanyang')}
        >
          {activeTab === 'hanyang' ? (
            <span className="tab-text">HYU</span>
          ) : (
            <img src={hanyangIcon} alt="Hanyang University" className="tab-icon" />
          )}
        </button>
        <button
          className={`course-tab ${activeTab === 'snu' ? 'active' : ''}`}
          onClick={() => setActiveTab('snu')}
        >
          {activeTab === 'snu' ? (
            <span className="tab-text">SNU</span>
          ) : (
            <img src={snuIcon} alt="Seoul National University" className="tab-icon" />
          )}
        </button>
      </div>

      {/* Courses Grid Section */}
      <div className="courses-grid">
        {currentCourses.map((course, index) => (
          <div key={index} className="course-item">
            <img 
              src={course.src} 
              alt={course.alt} 
              className="course-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}