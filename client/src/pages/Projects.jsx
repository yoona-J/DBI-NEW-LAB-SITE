import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('current');
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projectsData = {
    current: [
      {
        project: 'Deep learning-based traffic congestion prediction model for intelligent transportation system optimization',
        support: 'Hanyang University',
        date: '2025 - 2026'
      },
      {
        project: 'Product data construction',
        support: 'CRK',
        date: '2025 - 2026'
      },
      {
        project: 'LLM data validation',
        support: 'TTA - WesleyQuest',
        date: '2025 - 2026'
      },
      {
        project: 'Advancing and integrating AI-driven vision recognition systems',
        support: 'CRK',
        date: '2025 - 2026'
      },
      {
        project: 'Vision AI-based track recognition and hazardous zone classification',
        support: 'Hyundai Rotem - D&D',
        date: '2025 - 2026'
      },
      {
        project: 'AI-based speech recognition system to assist communication in neurological disorders',
        support: 'Hanyang University',
        date: '2025 - 2026'
      },
      {
        project: 'Academic research on pseudonymized credit and financial data',
        support: 'KCB',
        date: '2025 - 2028'
      },
    ],
    workInProgress: [
      {
        project: 'Technology transfer for method and system for secure money transfer authentication based on question answering',
        support: '-',
        date: 'Contract in Progress'
      },
      {
        project: 'Development of a novel deep learning algorithm leveraging inspiratory system and validation using heterogeneous data',
        support: '-',
        date: 'Submitted'
      }
    ],
    past: [
      {
        project: 'Research on innovative energy-fusion technology for future mobility transition',
        support: 'Hanyang University',
        date: '2025'
      },
      {
        project: 'Preliminary research on driver advisory systems and related technologies',
        support: 'KORAIL - D&D',
        date: '2025'
      },
      {
        project: 'AI-based exercise prescription framework to optimize healthcare services',
        support: 'Hanyang University',
        date: '2024 - 2025'
      },
      {
        project: 'Intelligent systems and information technology-based convergence research for solving detailed business problems within heterogeneous industries',
        support: 'Hanyang University',
        date: '2024 - 2025'
      },
      {
        project: 'Assessment of regional lung function and particle inhalation characteristics during inhaler use in patients with COPD and asthma using quantitative CT and computational fluid dynamics',
        support: 'MSIT',
        date: '2021 - 2024'
      },
      {
        project: 'Development of personal information protection technology using anonymization techniques in a big data environment',
        support: 'MSIT',
        date: '2017 - 2018'
      },
      {
        project: 'Public big data-based standard analysis model - local tax sector',
        support: 'MOIS',
        date: '2017 - 2018'
      }
    ]
  };

  const renderProjectsTable = (projects) => {
    if (projects.length === 0) {
      return (
        <div className="no-projects">
          <p>No projects available for this category.</p>
        </div>
      );
    }

    // 480px 이하: project만 표시
    if (screenWidth <= 480) {
      return (
        <div className="projects-table projects-table-mobile">
          <div className="table-header">
            <div className="header-cell project-header">Project</div>
          </div>
          <div className="table-body">
            {projects.map((project, index) => (
              <div key={index} className="table-row">
                <div className="table-cell project-cell">{project.project}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // 768px 이하: project와 support만 표시
    if (screenWidth <= 768) {
      return (
        <div className="projects-table projects-table-tablet">
          <div className="table-header">
            <div className="header-cell project-header">Project</div>
            <div className="header-cell support-header">Support</div>
          </div>
          <div className="table-body">
            {projects.map((project, index) => (
              <div key={index} className="table-row">
                <div className="table-cell project-cell">{project.project}</div>
                <div className="table-cell support-cell">{project.support}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // 768px 이상: 모든 컬럼 표시
    return (
      <div className="projects-table projects-table-desktop">
        <div className="table-header">
          <div className="header-cell project-header">Project</div>
          <div className="header-cell support-header">Support</div>
          <div className="header-cell date-header">Date</div>
        </div>
        <div className="table-body">
          {projects.map((project, index) => (
            <div key={index} className="table-row">
              <div className="table-cell project-cell">{project.project}</div>
              <div className="table-cell support-cell">{project.support}</div>
              <div className="table-cell date-cell">{project.date}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="projects-container">
      {/* Header Section */}
      <div className="projects-header">
        <h1 className="projects-title">Projects</h1>
      </div>

      {/* Tabs Section */}
      <div className="tabs-container">
        <button
          className={`tab-button ${activeTab === 'current' ? 'active' : ''}`}
          onClick={() => setActiveTab('current')}
        >
          Current
        </button>
        <button
          className={`tab-button ${activeTab === 'workInProgress' ? 'active' : ''}`}
          onClick={() => setActiveTab('workInProgress')}
        >
          Work-In-Progress
        </button>
        <button
          className={`tab-button ${activeTab === 'past' ? 'active' : ''}`}
          onClick={() => setActiveTab('past')}
        >
          Past (Selected)
        </button>
      </div>

      {/* Content Section */}
      <div className="projects-content">
        {renderProjectsTable(projectsData[activeTab])}
      </div>
    </div>
  );
}