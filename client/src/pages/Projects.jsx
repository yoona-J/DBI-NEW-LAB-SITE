import React, { useState } from 'react';
import '../styles/Projects.css';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('current');

  const projectsData = {
    current: [
      {
        project: 'Vision AI-based track recognition and hazardous zone classification',
        support: 'Hyundai Rotem - D&D Corp.',
        date: '2025 - 2026'
      },
      {
        project: 'AI-based speech recognition system to assist communication in neurological disorders',
        support: 'Hanyang University',
        date: '2025 - 2026'
      },
      {
        project: 'Research on innovative energy-fusion technology for future mobility transition',
        support: 'Hanyang University',
        date: '2025'
      },
      {
        project: 'Academic research on pseudonymized credit and financial data',
        support: 'KCB',
        date: '2025 - 2028'
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
      }
    ],
    workInProgress: [
      {
        project: 'Advancing and integrating AI-driven vision recognition systems',
        support: '-',
        date: 'Contract in Progress'
      },
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
        project: 'Preliminary research on driver advisory systems and related technologies',
        support: 'KORAIL - D&D Corp.',
        date: '2025'
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

    return (
      <div className="projects-table">
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