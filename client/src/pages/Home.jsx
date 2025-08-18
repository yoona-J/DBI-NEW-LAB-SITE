import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import { Carousel } from 'antd'
import SAMPLE_1 from '../assets/SAMPLE_1.png'
import SAMPLE_2 from '../assets/SAMPLE_2.png'
import SAMPLE_3 from '../assets/SAMPLE_3.png'
import SAMPLE_4 from '../assets/SAMPLE_4.png'
import '../styles/Home.css'

export default function Home() {
  const navigate = useNavigate();
  const autoplaySpeed = 4000
  const [newsData, setNewsData] = useState([]);

  const imageStyle = {
    height: '280px', // 고정 높이로 설정
    width: '100%',
    objectFit: 'cover',
    borderRadius: '8px', // 이미지 자체에만 테두리 둥글기 적용
  };

  // 페이지 이동 시 스크롤을 최상단으로 올리는 함수 (Header와 동일)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    // news.json에서 데이터를 가져와서 최신순으로 정렬하고 최근 6개만 선택
    const fetchNewsData = async () => {
      try {
        const response = await import('../data/news.json');
        const sortedNews = response.default
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 6);
        setNewsData(sortedNews);
      } catch (error) {
        console.error('Failed to load news data:', error);
      }
    };

    fetchNewsData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  const handleNewsClick = () => {
    navigate('/news');
    // Header의 News 네비게이션과 동일하게 맨 위로 스크롤
    scrollToTop();
  };

  return (
    <>
      {/* Hero Section - 첫 페이지 크기 */}
      <HeroSection />

      {/* Main Content - carousel과 news를 직접 배치 */}
      <div className="content-sections">
        {/* Carousel - 좌측 */}
        <Carousel 
          autoplay={{ dotDuration: true }} 
          autoplaySpeed={autoplaySpeed}
          dots={{ position: 'bottom' }}
          effect="fade"
          className="carousel-component"
        >
          <div>
            <img src={SAMPLE_1} alt="Sample 1" style={imageStyle} />
          </div>
          <div>
            <img src={SAMPLE_2} alt="Sample 2" style={imageStyle} />
          </div>
          <div>
            <img src={SAMPLE_3} alt="Sample 3" style={imageStyle} />
          </div>
          <div>
            <img src={SAMPLE_4} alt="Sample 4" style={imageStyle} />
          </div>
        </Carousel>

        {/* News Section - 우측 */}
        <div className="home-news-container">
          <div className="home-news-title">NEWS</div>
          <div className="home-news-header">
            <span className="home-news-header-title">제목</span>
            <span className="home-news-header-date">작성일</span>
          </div>
          <div className="home-news-divider"></div>
          <div className="home-news-list">
            {newsData.map((news, index) => (
              <div 
                key={news.id} 
                className="home-news-item"
                onClick={handleNewsClick}
                style={{ cursor: 'pointer' }}
              >
                <span className="home-news-title-text">{news.title}</span>
                <span className="home-news-date">{formatDate(news.date)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}  