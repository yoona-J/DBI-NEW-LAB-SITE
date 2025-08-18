import React, { useState, useEffect } from 'react';
import { Button, Flex, Collapse, Tag } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import publicationsData from '../data/publications.json';
import '../styles/SelectedPublications.css';

const { Panel } = Collapse;

export default function SelectedPublications() {
  const [selectedYear, setSelectedYear] = useState(2025);
  const [filteredPublications, setFilteredPublications] = useState([]);

  useEffect(() => {
    filterPublicationsByYear(selectedYear);
  }, [selectedYear]);

  const filterPublicationsByYear = (year) => {
    if (year === '~2022') {
      const filtered = publicationsData.filter(pub => pub.year <= 2022);
      setFilteredPublications(filtered);
    } else {
      const filtered = publicationsData.filter(pub => pub.year === year);
      setFilteredPublications(filtered);
    }
  };

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  const getCategoryColor = (category) => {
    if (category.includes('SCI')) return 'blue';
    if (category.includes('SSCI')) return 'green';
    if (category.includes('KCI')) return 'orange';
    if (category.includes('Scopus')) return 'purple';
    if (category.includes('Patent')) return 'red';
    return 'default';
  };

  const createCollapseItems = () => {
    return filteredPublications.map((publication, index) => ({
      key: index.toString(),
      label: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <span style={{ 
              color: 'black', 
              fontSize: 15, 
              fontFamily: 'Roboto', 
              fontWeight: '500' 
            }}>
              {publication.title}
            </span>
          </div>
          <a href={publication.link} target="_blank" rel="noopener noreferrer">
            <LinkOutlined style={{ color: '#0E4A84', fontSize: '16px' }} />
          </a>
        </div>
      ),
      children: (
        <div style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
          <div style={{ marginBottom: '15px' }}>
            <p style={{ margin: '5px 0' }}>
              <strong>with </strong> {publication.authors.join(', ')}
            </p>
            <p style={{ margin: '5px 0' }}>
              <strong>in </strong> {publication.journal}, {publication.volume}
            </p>
            <div style={{ marginTop: '10px' }}>
              <Tag color={getCategoryColor(publication.category)} style={{ fontSize: '12px' }}>
                {publication.category}
              </Tag>
            </div>
          </div>
        </div>
      ),
    }));
  };

  return (
    <div className="selected-publications-container">
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
          Selected Publications
        </h2>
      </div>

      <div className="year-filter-container">
        <Flex gap="small" wrap>
          <Button 
            type={selectedYear === 2025 ? "primary" : "default"}
            onClick={() => handleYearClick(2025)}
            style={{
              backgroundColor: selectedYear === 2025 ? '#0E4A84' : 'white',
              color: selectedYear === 2025 ? 'white' : '#0E4A84',
              borderColor: '#0E4A84',
              fontSize: 15,
              fontFamily: 'Roboto',
              fontWeight: '500',
              height: '40px',
              padding: '0 20px'
            }}
          >
            2025
          </Button>
          <Button 
            type={selectedYear === 2024 ? "primary" : "default"}
            onClick={() => handleYearClick(2024)}
            style={{
              backgroundColor: selectedYear === 2024 ? '#0E4A84' : 'white',
              color: selectedYear === 2024 ? 'white' : '#0E4A84',
              borderColor: '#0E4A84',
              fontSize: 15,
              fontFamily: 'Roboto',
              fontWeight: '500',
              height: '40px',
              padding: '0 20px'
            }}
          >
            2024
          </Button>
          <Button 
            type={selectedYear === 2023 ? "primary" : "default"}
            onClick={() => handleYearClick(2023)}
            style={{
              backgroundColor: selectedYear === 2023 ? '#0E4A84' : 'white',
              color: selectedYear === 2023 ? 'white' : '#0E4A84',
              borderColor: '#0E4A84',
              fontSize: 15,
              fontFamily: 'Roboto',
              fontWeight: '500',
              height: '40px',
              padding: '0 20px'
            }}
          >
            2023
          </Button>
          <Button 
            type={selectedYear === '~2022' ? "primary" : "default"}
            onClick={() => handleYearClick('~2022')}
            style={{
              backgroundColor: selectedYear === '~2022' ? '#0E4A84' : 'white',
              color: selectedYear === '~2022' ? 'white' : '#0E4A84',
              borderColor: '#0E4A84',
              fontSize: 15,
              fontFamily: 'Roboto',
              fontWeight: '500',
              height: '40px',
              padding: '0 20px'
            }}
          >
            ~2022
          </Button>
        </Flex>
      </div>

      <div className="publications-list">
        <Collapse 
          items={createCollapseItems()} 
          defaultActiveKey={['0']}
          style={{ 
            backgroundColor: 'white',
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        />
      </div>
    </div>
  );
}