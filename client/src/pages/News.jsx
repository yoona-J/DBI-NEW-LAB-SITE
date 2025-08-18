import React, { useState, useEffect, useRef } from 'react';
import '../styles/News.css';

export default function News() {
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);
  const timelineRef = useRef(null);

  const newsData = [
    {
      id: 'n-1',
      date: 'July 2025',
      title: 'Received and started a research project (HY-202500000002838)'
    },
    {
      id: 'n-2',
      date: 'June 2025',
      title: 'Lab member, Yoona Chung was awarded the AI SeoulTech scholarship.'
    },
    {
      id: 'n-3',
      date: 'May 2025',
      title: 'Finished a research project (HY-202500000000191)'
    },
    {
      id: 'n-4',
      date: 'April 2025',
      title: 'Received and started a research project (HY-202500000001616)'
    },
    {
      id: 'n-5',
      date: 'March 2025',
      title: 'Received and started a research project (HY-202500000001158)'
    },
    {
      id: 'n-6',
      date: 'March 2025',
      title: 'Visiting Researcher YongHyun Lee has joined DBI Lab'
    },
    {
      id: 'n-7',
      date: 'February 2025',
      title: 'Agreement on Academic Research Using Pseudonymized Credit and Financial Data (Agreement with KCB)'
    },
    {
      id: 'n-8',
      date: 'January 2025',
      title: 'Received and started a research project (HY-202500000000191)'
    },
    {
      id: 'n-9',
      date: 'December 2024',
      title: 'Received and started a research project (HY-202400000003726)'
    },
    {
      id: 'n-10',
      date: 'November 2024',
      title: 'Signed a memorandum of understanding with Toss Bank'
    },
    {
      id: 'n-11',
      date: 'October 2024',
      title: 'Professor Eunchan Kim received the best TPC award from IEEE/KICS'
    },
    {
      id: 'n-12',
      date: 'September 2024',
      title: 'Research Professor Jaehyuk Lee has joined DBI Lab'
    },
    {
      id: 'n-13',
      date: 'September 2024',
      title: 'Received and started a research project (HY-202400000003279)'
    },
    {
      id: 'n-14',
      date: 'September 2024',
      title: 'Data and business intelligence laboratory (DBI Lab.) has opened'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const timeline = timelineRef.current;
        const timelineRect = timeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight;
        
        // 스크롤이 맨 아래에 가까운지 확인
        const isNearBottom = windowHeight + scrollTop >= documentHeight - 100;
        
        if (isNearBottom) {
          // 맨 아래에 가까우면 마지막 뉴스 활성화
          setActiveNewsIndex(newsData.length - 1);
        } else {
          // 일반적인 경우: 화면 중앙에 가장 가까운 뉴스 찾기
          const newsItems = timeline.querySelectorAll('.news-item');
          let closestIndex = 0;
          let minDistance = Infinity;
          
          newsItems.forEach((item, index) => {
            const itemRect = item.getBoundingClientRect();
            const itemCenter = itemRect.top + itemRect.height / 2;
            const windowCenter = windowHeight / 2;
            const distance = Math.abs(itemCenter - windowCenter);
            
            if (distance < minDistance) {
              minDistance = distance;
              closestIndex = index;
            }
          });
          
          setActiveNewsIndex(closestIndex);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [newsData.length]);

  return (
    <div className="news-container">
      {/* Header Section */}
      <div className="news-header">
        <h1 className="news-title">News</h1>
      </div>

      {/* Timeline Section */}
      <div className="timeline-container" ref={timelineRef}>
        <div className="timeline-line"></div>
        
        {newsData.map((news, index) => (
          <div 
            key={news.id} 
            className={`news-item ${index === activeNewsIndex ? 'active' : ''}`}
          >
            <div className="timeline-dot"></div>
            <div className="news-content">
              <div className="news-date">{news.date}</div>
              <div className="news-title-text">{news.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}