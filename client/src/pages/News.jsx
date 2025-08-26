import React, { useState, useEffect, useRef } from 'react';
import '../styles/News.css';

export default function News() {
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);
  const [timelineHeight, setTimelineHeight] = useState({ top: 8, bottom: 8 });
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
      title: 'Received and started a research project (HY-500000000001616)'
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

  // 타임라인 높이 계산 함수
  const calculateTimelineHeight = () => {
    if (timelineRef.current && window.innerWidth <= 1100) {
      const timeline = timelineRef.current;
      const newsItems = timeline.querySelectorAll('.news-item');
      
      if (newsItems.length > 0) {
        const firstItem = newsItems[0];
        const lastItem = newsItems[newsItems.length - 1];
        
        const firstItemRect = firstItem.getBoundingClientRect();
        const lastItemRect = lastItem.getBoundingClientRect();
        const timelineRect = timeline.getBoundingClientRect();
        
        // 첫 번째 원의 중앙 위치 (원의 반지름 8px 고려)
        const firstDotCenter = firstItemRect.top - timelineRect.top + 8;
        // 마지막 원의 중앙 위치 (원의 반지름 8px 고려)
        const lastDotCenter = lastItemRect.top - timelineRect.top + 8;
        
        setTimelineHeight({
          top: firstDotCenter,
          bottom: timelineRect.height - lastDotCenter
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const timeline = timelineRef.current;
        const timelineRect = timeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight;
        
        // 1100px 이하에서는 타임라인이 없어지므로 다른 로직 사용
        if (window.innerWidth <= 1100) {
          // 1100px 이하: 스크롤 위치와 뉴스 아이템의 실제 화면 위치를 기준으로 포커싱
          const newsItems = timeline.querySelectorAll('.news-item');
          let closestIndex = 0;
          let minDistance = Infinity;
          
          // 스크롤이 정말 맨 위에 있는지 확인 (5px 이내)
          const isAtTop = scrollTop <= 5;
          
          // 스크롤이 정말 맨 아래에 있는지 확인 (5px 이내)
          const isAtBottom = windowHeight + scrollTop >= documentHeight - 5;
          
          if (isAtTop) {
            // 정말 맨 위에 있을 때만 첫 번째 뉴스 활성화
            closestIndex = 0;
          } else if (isAtBottom) {
            // 정말 맨 아래에 있을 때만 마지막 뉴스 활성화
            closestIndex = newsData.length - 1;
          } else {
            // 일반적인 경우: 화면에 보이는 뉴스 아이템 중에서 화면 중앙에 가장 가까운 것 찾기
            newsItems.forEach((item, index) => {
              const itemRect = item.getBoundingClientRect();
              const itemTop = itemRect.top;
              const itemBottom = itemRect.bottom;
              
              // 뉴스 아이템이 화면에 보이는지 확인
              const isVisible = itemTop < windowHeight && itemBottom > 0;
              
              if (isVisible) {
                // 화면에 보이는 뉴스 아이템 중에서 화면 중앙에 가장 가까운 것 찾기
                const itemCenter = itemTop + itemRect.height / 2;
                const windowCenter = windowHeight / 2;
                const distance = Math.abs(itemCenter - windowCenter);
                
                if (distance < minDistance) {
                  minDistance = distance;
                  closestIndex = index;
                }
              }
            });
          }
          
          setActiveNewsIndex(closestIndex);
        } else {
          // 1100px 이상: 기존 타임라인 기반 로직
          // 스크롤이 정말 맨 위에 있는지 확인 (5px 이내)
          const isAtTop = scrollTop <= 5;
          
          // 스크롤이 정말 맨 아래에 있는지 확인 (5px 이내)
          const isAtBottom = windowHeight + scrollTop >= documentHeight - 5;
          
          if (isAtTop) {
            // 정말 맨 위에 있을 때만 첫 번째 뉴스 활성화
            setActiveNewsIndex(0);
          } else if (isAtBottom) {
            // 정말 맨 아래에 있을 때만 마지막 뉴스 활성화
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
      }
    };

    // 타임라인 높이 계산 (1100px 이하에서만)
    calculateTimelineHeight();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', calculateTimelineHeight);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateTimelineHeight);
    };
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
        
        {/* 1100px 이하에서만 표시되는 동적 타임라인 선 */}
        {window.innerWidth <= 1100 && (
          <div 
            className="timeline-line-mobile"
            style={{
              top: `${timelineHeight.top}px`,
              bottom: `${timelineHeight.bottom}px`
            }}
          ></div>
        )}
        
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