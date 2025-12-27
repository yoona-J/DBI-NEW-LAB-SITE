import React, { useState, useEffect, useRef } from 'react';
import '../styles/News.css';
import { LinkOutlined } from '@ant-design/icons';

export default function News() {
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);
  const [timelineHeight, setTimelineHeight] = useState({ top: 8, bottom: 8 });
  const timelineRef = useRef(null);

  const newsData = [
    {
      id: 'n-1',
      date: 'December 2025',
      title: 'Signed a memorandum of understanding with Mondrian AI',
      link: 'https://www.etnews.com/20251219000330'
    },
    {
      id: 'n-2',
      date: 'December 2025',
      title: 'DBI Lab. won the grand prize at the healthy research lab competition',
      link: 'https://www.newshyu.com/news/articleView.html?idxno=1021910'
    },
    {
      id: 'n-3',
      date: 'December 2025',
      title: 'Received and started a research project (HY-202500000003761)',
      link: ''
    },
    {
      id: 'n-4',
      date: 'November 2025',
      title: 'Received and started a research project (HY-202500000003952)',
      link: ''
    },
    {
      id: 'n-5',
      date: 'November 2025',
      title: 'Received and started a research project (HY-202500000003701)',
      link: ''
    },
    {
      id: 'n-6',
      date: 'November 2025',
      title: 'Lab member, Hosoo Shin was awarded the AI SeoulTech Scholarship)',
      link: 'http://etnews.com/20251116000023'
    },
    {
      id: 'n-7',
      date: 'October 2025',
      title: 'Finished a research project (HY-202500000003726)',
      link: ''
    },
    {
      id: 'n-8',
      date: 'October 2025',
      title: 'Finished a research project (HY-202500000003279)',
      link: ''
    },
    {
      id: 'n-9',
      date: 'September 2025',
      title: 'Signed a memorandum of understanding with CRK',
      link: 'http://www.hynews.ac.kr/news/articleView.html?idxno=13383'
    },
    {
      id: 'n-10',
      date: 'September 2025',
      title: 'Received and started a research project (HY-202500000003108)',
      link: ''
    },
    {
      id: 'n-11',
      date: 'September 2025',
      title: 'Professor Eunchan Kim was appointed as a Public Officials Training Review Committee Member by the Seoul Facilities Corporation',
      link: ''
    },
    {
      id: 'n-12',
      date: 'August 2025',
      title: 'Professor Eunchan Kim was appointed as a Task Evaluation Committee Member by Kangwon National University',
      link: ''
    },
    {
      id: 'n-13',
      date: 'August 2025',
      title: 'Professor Eunchan Kim was appointed as an AI Advisory Committee Member by the Seoul Facilities Corporation',
      link: ''
    },

    {
      id: 'n-14',
      date: 'July 2025',
      title: 'Received and started a research project (HY-202500000002838)',
      link: ''
    },
    {
      id: 'n-15',
      date: 'June 2025',
      title: 'Lab member, Yoona Chung was awarded the AI SeoulTech scholarship.',
      link: "https://www.etnews.com/20250618000224"
    },
    {
      id: 'n-16',
      date: 'May 2025',
      title: 'Finished a research project (HY-202500000000191)',
      link: ''
    },
    {
      id: 'n-17',
      date: 'April 2025',
      title: 'Received and started a research project (HY-500000000001616)',
      link: ''
    },
    {
      id: 'n-18',
      date: 'March 2025',
      title: 'Received and started a research project (HY-202500000001158)',
      link: ''
    },
    {
      id: 'n-19',
      date: 'March 2025',
      title: 'Visiting Researcher YongHyun Lee has joined DBI Lab',
      link: ''
    },
    {
      id: 'n-20',
      date: 'February 2025',
      title: 'Agreement on Academic Research Using Pseudonymized Credit and Financial Data (Agreement with KCB)',
      link: ''
    },
    {
      id: 'n-21',
      date: 'January 2025',
      title: 'Received and started a research project (HY-202500000000191)',
      link: ''
    },
    {
      id: 'n-22',
      date: 'December 2024',
      title: 'Received and started a research project (HY-202400000003726)',
      link: ''
    },
    {
      id: 'n-23',
      date: 'November 2024',
      title: 'Signed a memorandum of understanding with Toss Bank',
      link: "https://www.etnews.com/20241107000242"
    },
    {
      id: 'n-24',
      date: 'October 2024',
      title: 'Professor Eunchan Kim received the best TPC award from IEEE/KICS',
      link: ''
    },
    {
      id: 'n-25',
      date: 'September 2024',
      title: 'Research Professor Jaehyuk Lee has joined DBI Lab',
      link: ''
    },
    {
      id: 'n-26',
      date: 'September 2024',
      title: 'Received and started a research project (HY-202400000003279)',
      link: ''
    },
    {
      id: 'n-27',
      date: 'September 2024',
      title: 'Data and business intelligence laboratory (DBI Lab.) has opened',
      link: ''
    }
  ];

  const safeLink = (url) => /^https?:\/\//i.test(url) ? url : `https://${url}`;

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
              <div className="news-card-header">
                <div className="news-date">{news.date}</div>
                {news?.link?.trim() ? (
                  <a
                    href={safeLink(news.link)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="원문 링크 열기"
                    className="news-link"
                  >
                    <LinkOutlined style={{ color: '#0E4A84', fontSize: 16 }} />
                  </a>
                  ) : null}
              </ div>
              <div className="news-title-text">{news.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}