import React from 'react';
import { GithubOutlined, IdcardOutlined } from '@ant-design/icons';
import phd_img_1 from '../assets/phd_img_1.jpg';
import phd_img_2 from '../assets/phd_img_2.jpg';
import phd_img_3 from '../assets/phd_img_3.jpg';
import ms_img_1 from '../assets/ms_img_1.jpg';
import ms_img_2 from '../assets/ms_img_2.jpg';
import under_img_1 from '../assets/under_img_1.jpg';
import under_img_2 from '../assets/under_img_2.jpg';
import under_img_3 from '../assets/under_img_3.jpg';
import under_img_4 from '../assets/under_img_4.jpg';
import under_img_5 from '../assets/under_img_5.png';
import '../styles/Members.css';

export default function Students() {
  return (
    <div className="member-container">
      {/* Header Section */}
      <div className="member-header">
        <h1 className="lab-members-title">Lab Members</h1>
        <h2 className="current-category">Students</h2>
      </div>

      {/* Main Content */}
      <div className="member-main-content">
        {/* Students Section */}
        <div className="students-section">
          {/* Ph.D. / Integrated Ph.D. Program */}
          <div className="student-category">
            <h3 className="category-title">Ph.D. / Integrated Ph.D. Program</h3>
            <div className="students-grid">

              <div className="student-profile">
                <div className="profile-image-container">
                  <img src={phd_img_2} alt="Yoona Chung" className="profile-image" />
                </div>
                
                <div className="profile-info">
                  <h1 className="member-name">Yoona Chung (정윤아)</h1>
                  <p className="student-role">Lab Manager</p>
                  <div className="info-switch-container">
                    <p className="email">chungyn@hanyang.ac.kr</p>
                    <p className="student-research-keyword">Solutions for Digital Divide</p>
                    <p className="student-research-focus">Intelligent Systems, AI Applications</p>
                  </div>
                </div>
                <div className="contact-icons">
                  <a href="https://github.com/yoona-J" target="_blank" rel="noopener noreferrer" className="contact-icon github">
                    <GithubOutlined />
                  </a>
                  <a href="https://orcid.org/0009-0003-8487-5743" target="_blank" rel="noopener noreferrer" className="contact-icon orcid">
                    <IdcardOutlined />
                  </a>
                </div>
              </div>

              <div className="student-profile">
                <div className="profile-image-container">
                  <img src={phd_img_1} alt="JinSung Park" className="profile-image" />
                </div>
                
                <div className="profile-info">
                  <h1 className="member-name">JinSung Park (박진성)</h1>
                  <div className="info-switch-container">
                    <p className="email">jinpark0923@hanyang.ac.kr</p>
                    <p className="student-research-keyword">Solutions for Smart City</p>
                    <p className="student-research-focus">Urban Intelligence, AI Applications</p>
                  </div>
                </div>
              </div>

              <div className="student-profile">
                <div className="profile-image-container">
                  <img src={phd_img_3} alt="Hosoo Shin" className="profile-image" />
                </div>
                
                <div className="profile-info">
                  <h1 className="member-name">Hosoo Shin (신호수)</h1>
                  <div className="info-switch-container">
                    <p className="email">enphilo@hanyang.ac.kr</p>
                    <p className="student-research-keyword"></p>
                    <p className="student-research-focus"></p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Master's Program */}
          <div className="student-category">
            <h3 className="category-title">Master's Program</h3>
            <div className="students-grid">
              <div className="student-profile">
                <div className="profile-image-container">
                  <img src={ms_img_1} alt="Jeongmin Hong" className="profile-image" />
                </div>
                
                <div className="profile-info">
                  <h1 className="member-name">Jeongmin Hong (홍정민)</h1>
                  <div className="info-switch-container">
                    <p className="email">maxhong99@hanyang.ac.kr</p>
                    <p className="student-research-keyword">Solutions for Holistic Wellness</p>
                    <p className="student-research-focus">Intelligent Physiology, AI Applications</p>
                  </div>
                </div>
                <div className="contact-icons">
                  <a href="https://orcid.org/0009-0002-0278-8818" target="_blank" rel="noopener noreferrer" className="contact-icon orcid">
                    <IdcardOutlined />
                  </a>
                </div>
              </div>

              <div className="student-profile">
                <div className="profile-image-container">
                  <img src={ms_img_2} alt="Daehan Kim" className="profile-image" />
                </div>
                
                <div className="profile-info">
                  <h1 className="member-name">Daehan Kim (김대한)</h1>
                  <div className="info-switch-container">
                    <p className="email">kimdae@hanyang.ac.kr</p>
                    <p className="student-research-keyword">Solutions for Healthcare Innovation</p>
                    <p className="student-research-focus">Medical Intelligence, AI Applications</p>
                  </div>
                </div>

                <div className="contact-icons">
                  <a href="https://orcid.org/0009-0006-7228-0322" target="_blank" rel="noopener noreferrer" className="contact-icon orcid">
                    <IdcardOutlined />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Undergraduate Intern */}
          <div className="student-category">
            <h3 className="category-title">Undergraduate Intern</h3>
            <div className="students-grid">
              <div className="student-profile">
                <div className="profile-image-container">
                  <img src={under_img_1} alt="Gibyung Kang" className="profile-image" />
                </div>
                
                <div className="profile-info">
                  <h1 className="member-name">Gibyung Kang (강기병)</h1>
                  <div className="info-switch-container">
                    <p className="email">gibyung2000@hanyang.ac.kr</p>
                    <p className="student-research-keyword">Solutions for AI-Driven Experience</p>
                    <p className="student-research-focus">Intelligent UX, AI Applications</p>
                  </div>
                </div>

                <div className="contact-icons">
                  <a href="https://github.com/gibyungkang" target="_blank" rel="noopener noreferrer" className="contact-icon github">
                    <GithubOutlined />
                  </a>
                </div>
              </div>

              <div className="student-profile">
                <div className="profile-image-container">
                  <img src={under_img_2} alt="Seungo Kwon" className="profile-image" />
                </div>
                
                <div className="profile-info">
                  <h1 className="member-name">Seungo Kwon (권승오)</h1>
                  <div className="info-switch-container">
                    <p className="email">seungolego1257@gmail.com</p>
                    <p className="student-research-keyword">Solutions for Societal Impact</p>
                    <p className="student-research-focus">Intelligent Vision & Learning, AI Applications</p>
                  </div>
                </div>

                <div className="contact-icons">
                  <a href="https://github.com/stickman1257" target="_blank" rel="noopener noreferrer" className="contact-icon github">
                    <GithubOutlined />
                  </a>
                </div>
              </div>

              <div className="student-profile">
                <div className="profile-image-container">
                  <img src={under_img_3} alt="Hosoo Shin" className="profile-image" />
                </div>
                
                <div className="profile-info">
                  <h1 className="member-name">Seongyeon Son (손성연)</h1>
                  <div className="info-switch-container">
                    <p className="email">annssy@hanyang.ac.kr</p>
                    <p className="student-research-keyword"></p>
                    <p className="student-research-focus"></p>
                  </div>
                </div>
              </div>

              <div className="student-profile">
                <div className="profile-image-container">
                  <img src={under_img_4} alt="Hosoo Shin" className="profile-image" />
                </div>
                
                <div className="profile-info">
                  <h1 className="member-name">Byeongchan Go (고병찬)</h1>
                  <div className="info-switch-container">
                    <p className="email">@hanyang.ac.kr</p>
                    <p className="student-research-keyword"></p>
                    <p className="student-research-focus"></p>
                  </div>
                </div>
              </div>

              <div className="student-profile">
                <div className="profile-image-container">
                  <img src={under_img_5} alt="Hosoo Shin" className="profile-image" />
                </div>
                
                <div className="profile-info">
                  <h1 className="member-name">Minhee Park (박민희)</h1>
                  <div className="info-switch-container">
                    <p className="email">bagminhui927@gmail.com</p>
                    <p className="student-research-keyword"></p>
                    <p className="student-research-focus"></p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
