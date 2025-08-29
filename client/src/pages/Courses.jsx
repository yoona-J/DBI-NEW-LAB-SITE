import React, { useState } from 'react';
import '../styles/Courses.css';
import hanyangIcon from '../assets/hanyang_icon.png';
import snuIcon from '../assets/snu_icon.png';

// 한양대 코스 이미지들 import
import OT_25 from '../assets/course_imgs/OT_25.png';
import DS_25 from '../assets/course_imgs/DS_25.png';
import ISD_fa25 from '../assets/course_imgs/ISD_fa25.png';
import CD2_25 from '../assets/course_imgs/CD2_25.png';
import ERP_25 from '../assets/course_imgs/ERP_25.png';
import BIAI_25 from '../assets/course_imgs/BIAI_25.png';
import CD1_25 from '../assets/course_imgs/CD1_25.png';
import ISD_sp25 from '../assets/course_imgs/ISD_sp25.png';
import OT_24 from '../assets/course_imgs/OT_24.png';
import ISA_24 from '../assets/course_imgs/ISA_24.png';

// 서울대 코스 이미지들 import
import IS_24 from '../assets/course_imgs/IS_24.png';
import IS_23 from '../assets/course_imgs/IS_23.png';

export default function Courses() {
  const [activeTab, setActiveTab] = useState('hanyang');

  const hanyangCourses = [
    { src: OT_25, alt: 'OT 25' },
    { src: DS_25, alt: 'DS 25' },
    { src: ISD_fa25, alt: 'ISD Fall 25' },
    { src: CD2_25, alt: 'CD2 25' },
    { src: ERP_25, alt: 'ERP 25' },
    { src: BIAI_25, alt: 'BIAI 25' },
    { src: CD1_25, alt: 'CD1 25' },
    { src: ISD_sp25, alt: 'ISD Spring 25' },
    { src: OT_24, alt: 'OT 24' },
    { src: ISA_24, alt: 'ISA 24' }
  ];

  const snuCourses = [
    { src: IS_24, alt: 'IS 24' },
    { src: IS_23, alt: 'IS 23' }
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