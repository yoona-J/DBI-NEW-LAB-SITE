import React, {useState} from 'react';
import { LinkedinOutlined, IdcardOutlined } from '@ant-design/icons';
import prof_img from '../assets/prof_img.png';
import { Button } from 'antd';
import '../styles/Members.css';

export default function Professor() {

  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

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
              <br />

              <div>
                <Button color='default' variant='outlined' onClick={toggleDetails}>
                  {showDetails ? 'Hide Details' : 'Show Details'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      {showDetails && (
        <div className="details-section">
          <div className="details-content">
            <div className="details-text">
              <p><strong>Professional Experience</strong></p>
              <div style={{ marginLeft: '20px' }}>
                <p>• Assistant Professor, College of Engineering, Hanyang University (2024–present)</p>
                <div style={{ marginLeft: '20px' }}>
                  <p>Affiliations</p>
                  <div style={{ marginLeft: '20px' }}>
                    <p>• Department of Information Systems (Primary), URL: <a href='http://is.hanyang.ac.kr/' style={{color: 'blue'}}>http://is.hanyang.ac.kr/</a></p>
                    <p>• Department of Artificial Intelligence (Adjunct), URL: <a href='https://nextai.hanyang.ac.kr/' style={{color: 'blue'}}>https://nextai.hanyang.ac.kr/</a></p>
                    <p>• Department of Data Science (Joint), URL: <a href='https://hyds.hanyang.ac.kr/' style={{color: 'blue'}}>https://hyds.hanyang.ac.kr/</a></p>
                    <p>• Artificial Intelligence institute of Hanyang University, URL: <a href='https://hyair.hanyang.ac.kr/' style={{color: 'blue'}}>https://hyair.hanyang.ac.kr/</a></p>
                    <p>• Hanyang Institute of Advanced Artificial Intelligence</p>
                  </div>
                </div>
                <p>• Lecturer, Seoul National University (2023–2024)</p>
                <p>• Visiting Scholar, Seoul National University Hospital (2021–2024)</p>
                <p>• Visiting Scholar, Jeonbuk National University Hospital (2021–2024)</p>
                <p>• Senior Researcher & Manager, Hanwha Group (2018–2024)</p>
                <p>• Researcher, Korea Credit Bureau (2016–2018)</p>
                <p><em>*For a more detailed career history, visit my LinkedIn profile.</em></p>
              </div>

              <p><strong>Evaluation & Advisory Roles</strong></p>
              <div style={{ marginLeft: '20px' }}>
                <p>• Evaluation Committee Member, Korea Technology and Information Promotion Agency for SMEs (TIPA) (Nov. 2025 – present)</p>
                <p>• Expert Committee Member, Public Officials Training Review Committee, Seoul Facilities Corporation (Sep. 2025 – present)</p>
                <p>• Expert Committee Member, AI Advisory Committee, Seoul Facilities Corporation (Aug. 2025 – present)</p>
                <p>• Expert Committee Member, Task Review Committee, Kangwon National University (Aug. 2025 – present)</p>
                <p>• Evaluation Committee Member, Korea Health Industry Development Institute (Nov. 2024 – present)</p>
                <p>• Panel Committee Member, Seoul National University, Kangwon National University, and etc. (Sep. 2024 – present)</p>
              </div>

              <p><strong>Academic & Professional Service</strong></p>
              <div style={{ marginLeft: '20px' }}>
                <p>• Board Member, Data Intelligence Committee, Korean Academic Society of Business Administration (Mar. 2025 – present)</p>
                <p>• Editorial Board Member, Korean Innovation Industry Society (Jan. 2025 – present)</p>
              </div>

              <p><strong>Editorial & Journal Review Service</strong></p>
              <div style={{ marginLeft: '20px' }}>
                <p>• Ad-hoc Reviewer for journals published by:</p>
                <div style={{ marginLeft: '20px' }}>
                  <p>• SAGE, Springer, Wiley, Elsevier (2025 – present)</p>
                  <p>• Nature Publishing Group, Taylor & Francis (2024 – present)</p>
                  <p>• AIMS Press, Tech Science Press, IEEE (2022 – present)</p>
                </div>
                <p><em>*A complete list of journals and reviewer activities can be found on my ORCID profile.</em></p>
              </div>

              <p><strong>Awards & Honors</strong></p>
              <div style={{ marginLeft: '20px' }}>
                <p>• Best TPC Award, International Conference on ICT Convergence by IEEE/KICS (Oct. 2024)</p>
                <p>• Best Paper Award, Asia Pacific International Conference on Information Science and Technology by KSII (Jun. 2022)</p>
                <p>• Outstanding Paper Award, International Conference on Internet by KSII (Dec. 2021)</p>
                <p>• Best Paper Award, Korean Big Data Society (Oct. 2021)</p>
                <p>• Commissioner's Award, Korea Big Data Awards, Statistics Korea (Dec. 2020)</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
