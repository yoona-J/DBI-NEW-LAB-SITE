import React, {useState} from 'react';
import { LinkedinOutlined, IdcardOutlined } from '@ant-design/icons';
import prof_img from '../assets/prof_img.png';
import { Button, Drawer } from 'antd';
import '../styles/Members.css';

export default function Professor() {

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
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
                <Button color='default' variant='outlined' onClick={showDrawer}>
                  Show Details
                </Button>
                <Drawer
                  title=""
                  closable={{ 'aria-label': 'Close Button' }}
                  onClose={onClose}
                  open={open}
                  placement='bottom'
                  size='large'
                >
                  <pre>
                    {`
                    · Professional Experience
                    - Assistant Professor, College of Engineering, Hanyang University (2024–present)
                      Affiliations
                      - Department of Information Systems (Primary)
                      - Department of Artificial Intelligence (Adjunct)
                      - Department of Data Science (Joint)
                    - Lecturer, Seoul National University (2023–2024)
                    - Visiting Scholar, Seoul National University Hospital (2021–2024)
                    - Visiting Scholar, Jeonbuk National University Hospital (2021–2024)
                    - Senior Researcher & Manager, Hanwha Group (2018–2024)
                    - Researcher, Korea Credit Bureau (2016–2018)
                    *For a more detailed career history, visit my LinkedIn profile.

                    · Evaluation & Advisory Roles
                    - Expert Committee Member, AI Advisory Committee, Seoul Facilities Corporation (Aug. 2025 – present)
                    - Expert Committee Member, Task Review Committee, Kangwon National University (Aug. 2025 – present)
                    - Evaluation Committee Member, Korea Health Industry Development Institute (Nov. 2024 – present)
                    - Panel Committee Member, Seoul National University, Kangwon National University, and etc. (Sep. 2024 – present)

                    · Academic & Professional Service
                    - Board Member, Data Intelligence Committee, Korean Academic Society of Business Administration (Mar. 2025 – present)
                    - Editorial Board Member, Korean Innovation Industry Society (Jan. 2025 – present)

                    · Editorial & Journal Review Service
                    - Ad-hoc Reviewer for journals published by:
                      - SAGE, Springer, Wiley, Elsevier (2025 – present)
                      - Nature Publishing Group, Taylor & Francis (2024 – present)
                      - AIMS Press, Tech Science Press, IEEE (2022 – present)
                    *A complete list of journals and reviewer activities can be found on my ORCID profile.

                    · Awards & Honors
                    - Best TPC Award, International Conference on ICT Convergence (ICTC 2024) by IEEE/KICS (Oct. 2024)
                    - Best Paper Award, Asia Pacific International Conference on Information Science and Technology (APIC-IST 2022) by KIIS (Jun. 2022)
                    - Outstanding Paper Award, International Conference on Internet (ICONI 2021) by KIIS (Dec. 2021)
                    - Best Paper Award, Korean Big Data Society (Oct. 2021)
                    - Commissioner’s Award, Korea Big Data Awards, Statistics Korea (Dec. 2020)
                    `}
                  </pre>
                  <div style={{height: '100px'}}/>
                </Drawer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
