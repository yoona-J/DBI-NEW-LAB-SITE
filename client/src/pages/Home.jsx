import HeroSection from '../components/HeroSection'
import { Carousel } from 'antd'
import SAMPLE_1 from '../assets/SAMPLE_1.png'
import SAMPLE_2 from '../assets/SAMPLE_2.png'
import SAMPLE_3 from '../assets/SAMPLE_3.png'
import SAMPLE_4 from '../assets/SAMPLE_4.png'

export default function Home() {
  const autoplaySpeed = 4000

  const imageStyle = {
    height: '219px',
    width: '100%',
    objectFit: 'cover',
    borderRadius: '8px', // 이미지 자체에만 테두리 둥글기 적용
  };

  const newsData = [
    {
      title: "[단독] 홍정민, 7층 화장실에 폭탄 테러 선언... 청소부 아주머니들 '비상'",
      date: "AUG 2025"
    },
    {
      title: "[속보] 강기병, 바르셀로나 내한에 FC서울 바로 배신... 추가 입장문 발표",
      date: "AUG 2025"
    },
    {
      title: "DBI랩 홈페이지 신규 개편 중, 역대급 디자인에 프론트엔드 시장 술렁여",
      date: "JUL 2025"
    },
    {
      title: "교수님의 최애 식당 '가조쿠우동', 본관 리모델링 소식",
      date: "JUL 2025"
    },
    {
      title: "[오피셜] 정윤아, 울산현대 레트로 유니폼 결제 아직도 안해.. 대체 언제하나",
      date: "JUN 2025"
    },
    {
      title: "[납량특집] 김대한의 심야괴담회, 삼청동 수제비집 아들의 비극...",
      date: "MAY 2025"
    }
  ];

  return (
    <>
      {/* Hero Section - 첫 페이지 크기 */}
      <HeroSection />

      {/* Main Content - 하나의 뭉탱이로 묶기 */}
      <div className="main-content">
        <div className="content-wrapper">
          {/* Diagram Section - 좌측 */}
          <section className="diagram-section-left">
            <div className="diagram-content">
              <Carousel 
                autoplay={{ dotDuration: true }} 
                autoplaySpeed={autoplaySpeed}
                dots={{ position: 'bottom' }}
                effect="fade"
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
            </div>
          </section>

          {/* News Section - 우측 */}
          <section className="news-section-right">
            <div className="news-content">
              <h2 className="news-title">NEWS</h2>
              <div className="news-header">
                <span className="news-header-title">제목</span>
                <span className="news-header-date">작성일</span>
              </div>
              <div className="news-divider"></div>
              <div className="news-list">
                {newsData.map((news, index) => (
                  <div key={index} className="news-item">
                    <span className="news-title-text">{news.title}</span>
                    <span className="news-date">{news.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}  