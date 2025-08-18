import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import '../styles/WorkInProgressPublications.css';

export default function WorkInProgressPublications() {
  // Work-in-Progress 논문 데이터
  const workInProgressData = [
    {
      title: "Discrete Ricci Flow for Robust Post-Hoc Out-of-Distribution Detection"
    },
    {
      title: "A Novel Binary Crossover Operator-Based Genetic Algorithm for Traveling Salesman Problem"
    },
    {
      title: "C-Swin: Integrating CNN and Hybrid Shifted Window in Transformer for Lung Cancer Classification"
    },
    {
      title: "Diagnosis-Aware Multitask Fine-Tuning of Whisper for Dysarthric Speech Recognition"
    },
    {
      title: "Strategic Default Detection Leveraging Card Spending: A Static Feature Ensemble Approach"
    },
    {
      title: "Interpretable Prediction of Private Brand Purchases by Pet Type in E-Commerce for Consumer Behavior Analysis Using Real-World Transaction Data"
    },
    {
      title: "Hybrid CNN-Transformer Architecture for Personal Credit Risk Prediction with Comparative Insights into Model Explainability"
    },
    {
      title: "Fostering educational innovation in resource-constrained environments: A design science approach using sLLM-based chatbots in HRD education"
    },
    {
      title: "Muscle synergy-driven ensemble learning framework for personalized stroke gait rehabilitation"
    },
    {
      title: "Neuro-deep fuzzy system for estimation of NO2 concentration in soil and groundwater on highways from remote sensing images"
    }
  ];

  return (
    <div className="work-in-progress-container">
      <div className="publications-header">
        <h1 style={{ 
          color: '#0E4A84', 
          fontSize: 28, 
          fontFamily: 'Roboto', 
          fontWeight: '700',
          margin: 0,
          marginBottom: '10px'
        }}>
          Publications
        </h1>
        <h2 style={{ 
          color: 'black', 
          fontSize: 20, 
          fontFamily: 'Roboto', 
          fontWeight: '500',
          margin: 0,
          marginBottom: '30px'
        }}>
          Work-in-Progress
        </h2>
      </div>

      <div className="publications-list">
        {workInProgressData.map((publication, index) => (
          <div key={index} className="publication-item">
            <div className="publication-content">
              <EditOutlined className="edit-icon" />
              <span className="publication-title">{publication.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
