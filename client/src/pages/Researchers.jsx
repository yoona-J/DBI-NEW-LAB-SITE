import React from 'react';
import { LinkedinOutlined, IdcardOutlined } from '@ant-design/icons';
import res_img_1 from '../assets/res_img_1.png';
import res_img_2 from '../assets/res_img_2.png';
import '../styles/Members.css';

export default function Researchers() {
  return (
    <div className="member-container">
      {/* Header Section */}
      <div className="member-header">
        <h1 className="lab-members-title">Lab Members</h1>
        <h2 className="current-category">Researchers</h2>
      </div>

      {/* Main Content */}
      <div className="member-main-content">
        {/* Researchers Section */}
        <div className="researchers-section">
          {/* First Researcher */}
          <div className="researcher-profile">
            <div className="profile-image-container">
              <img src={res_img_1} alt="Researcher 1" className="profile-image" />
            </div>
            
            <div className="profile-info">
              <h1 className="member-name">Jaehyuk Lee, Ph.D.<br/>(이재혁)</h1>
              <p className="member-title">Research Professor</p>
              
              <div className="divider"></div>
              
              <div className="affiliation-info">
                <p className="affiliation-item">Hanyang University</p>
                <p className="affiliation-item">Data and Business Intelligence Lab</p>
                <p className="affiliation-item">Department of Information Systems</p>
              </div>

              <div className="detailed-divider"></div>

              <div className="affiliation-info">
                <p className="affiliation-item">Institute of IT Convergence Technology</p>
                <p className="affiliation-item">Seoul National University of Science and Technology</p>
              </div>

              <div className="contact-section">
                <h3 className="contact-title">Contact</h3>
                <div className="contact-icons">
                  {/* LinkedIn 링크가 있는 경우에만 표시 */}
                  {/* <a href="https://linkedin.com/in/researcher1" target="_blank" rel="noopener noreferrer" className="contact-icon linkedin">
                    <LinkedinOutlined />
                  </a> */}
                  
                  {/* ORCID 링크가 있는 경우에만 표시 */}
                  {/* <a href="https://orcid.org/0000-0000-0000-0000" target="_blank" rel="noopener noreferrer" className="contact-icon orcid">
                    <IdcardOutlined />
                  </a> */}
                </div>
                <p className="email">Email: researcher1@hanyang.ac.kr</p>
              </div>
            </div>
          </div>

          {/* Second Researcher */}
          <div className="researcher-profile">
            <div className="profile-image-container">
              <img src={res_img_2} alt="Researcher 2" className="profile-image" />
            </div>
            
            <div className="profile-info">
              <h1 className="member-name">YongHyun Lee, Ph.D.<br/>(이용현)</h1>
              <p className="member-title">Visiting Researcher</p>
              
              <div className="divider"></div>
              
              <div className="affiliation-info">
                <p className="affiliation-item">Hanyang University</p>
                <p className="affiliation-item">Data and Business Intelligence Lab</p>
                <p className="affiliation-item">Department of Information Systems</p>
              </div>

              <div className="detailed-divider"></div>

              <div className="affiliation-info">
                <p className="affiliation-item">Department of Radiology</p>
                <p className="affiliation-item">Seoul National University Hospital</p>
              </div>
              
              <div className="contact-section">
                <h3 className="contact-title">Contact</h3>
                <div className="contact-icons">
                  {/* LinkedIn 링크가 있는 경우에만 표시 */}
                  {/* <a href="https://linkedin.com/in/researcher2" target="_blank" rel="noopener noreferrer" className="contact-icon linkedin">
                    <LinkedinOutlined />
                  </a> */}
                  
                  {/* ORCID 링크가 있는 경우에만 표시 */}
                  {/* <a href="https://orcid.org/0000-0000-0000-0000" target="_blank" rel="noopener noreferrer" className="contact-icon orcid">
                    <IdcardOutlined />
                  </a> */}
                </div>
                <p className="email">Email: researcher2@hanyang.ac.kr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
