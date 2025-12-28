import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import '../styles/WorkInProgressPublications.css';

export default function WorkInProgressPublications() {
  // Work-in-Progress 논문 데이터
  const workInProgressData = [
    {
      title: "Strategic default detection leveraging card spending: Static-feature ensemble and cluster-augmented signals for non time-series modeling"
    },
    {
      title: "C-Swin: Integrating CNN and hybrid shifted window in transformer for lung cancer classification"
    },
    {
      title: "Interpretable prediction of private brand purchases by pet type in e-commerce for consumer behavior analysis using real-world transaction data"
    },
    {
      title: "Neuro-deep fuzzy system for estimation of NO₂ concentration in soil and groundwater on highways from remote sensing imagesn"
    },
    {
      title: "Hybrid CNN–Transformer architecture for personal credit risk prediction: Comparative insights into model explainability"
    },
    {
      title: "Diagnosis-aware multitask fine-tuning of Whisper for dysarthric speech recognition"
    },
    {
      title: "Fostering educational innovation in resource-constrained environments: A design science approach using sLLM-based chatbots in HRD education"
    },
    {
      title: "Month-conditioned boosting framework with SHAP-in-the-loop for short-term electricity load forecasting"
    },
    {
      title: "ENSGA-II: An Efficient NSGA-II Framework with Finite-Difference Diversity for Router Placement Optimization"
    },
    {
      title: "An interpretable stacking ensemble with TabNet-enhanced features for breast cancer diagnosis"
    },
    {
      title: "Fair credit risk assessment through two-stage false negative recovery: Balancing financial inclusion and stability"
    },
    {
      title: "Resource-Constrained Edge AI Solution for Smart Farming: Real-Time Pest and Disease Detection in Chili Pepper Fields"
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
