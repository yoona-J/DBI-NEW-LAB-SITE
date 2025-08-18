import React from 'react';
import { LinkedinOutlined, IdcardOutlined } from '@ant-design/icons';
import prof_img from '../assets/prof_img.png';
import '../styles/Members.css';

export default function Professor() {
  return (
    <div className="member-container">
      {/* Header Section */}
      <div className="member-header">
        <h1 className="lab-members-title">Lab Members</h1>
        <h2 className="current-category">Professor</h2>
      </div>

      {/* Main Content */}
      <div className="member-main-content">
        {/* Profile Section */}
        <div className="profile-section">
          {/* Profile Image */}
          <div className="profile-image-container">
            <img src={prof_img} alt="Professor Eunchan Kim" className="profile-image" />
          </div>
          
          {/* Profile Information */}
          <div className="profile-info">
            <h1 className="member-name">Eunchan Kim, Ph.D.<br/>(김은찬)</h1>
            <p className="member-title">Assistant Professor (Tenure Track)</p>
            
            <div className="divider"></div>
            
            <div className="affiliation-info">
              <p className="affiliation-item">Hanyang University</p>
              <p className="affiliation-item">Data and Business Intelligence Lab</p>
              <p className="affiliation-item">Department of Information Systems</p>
              <p className="affiliation-item">Department of Data Science (J.A.)</p>
            </div>
            
            <div className="contact-section">
              <h3 className="contact-title">Contact</h3>
              <div className="contact-icons">
                <a href="https://www.linkedin.com/in/daniel0117/" target="_blank" rel="noopener noreferrer" className="contact-icon linkedin">
                  <LinkedinOutlined />
                </a>
                <a href="https://orcid.org/0000-0002-3743-3550" target="_blank" rel="noopener noreferrer" className="contact-icon orcid">
                  <IdcardOutlined />
                </a>
              </div>
              <p className="email">Email: eckim@hanyang.ac.kr</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
