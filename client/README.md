# DBI LAB - Data and Business Intelligence Lab

한양대학교 정보시스템학과 DBI 연구실 공식 웹사이트입니다.

## 🚀 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 경험
- **동적 콘텐츠 관리**: Hero 섹션 텍스트를 외부 API를 통해 실시간 수정 가능
- **모던 UI/UX**: 피그마 디자인과 동일한 현대적인 인터페이스
- **컴포넌트 기반 구조**: 재사용 가능한 모듈화된 컴포넌트

## 🛠️ 기술 스택

- **Frontend**: React 19 + Vite
- **Styling**: CSS Variables + CSS Modules
- **Routing**: React Router DOM
- **State Management**: React Hooks
- **API**: Fetch API + RESTful endpoints

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── Header.jsx      # 헤더 컴포넌트
│   ├── Footer.jsx      # 푸터 컴포넌트
│   ├── Nav.jsx         # 네비게이션 컴포넌트
│   └── HeroSection.jsx # Hero 섹션 (외부 편집 가능)
├── pages/              # 페이지 컴포넌트
│   ├── Home.jsx        # 메인 홈페이지
│   ├── Research.jsx    # 연구 페이지
│   ├── Publications.jsx # 논문 페이지
│   ├── Members.jsx     # 멤버 페이지
│   ├── Projects.jsx    # 프로젝트 페이지
│   ├── Courses.jsx     # 강의 페이지
│   └── News.jsx        # 뉴스 페이지
├── config/             # 설정 파일
│   └── api.js          # API 설정 및 유틸리티
├── styles/             # 스타일 파일
│   └── global.css      # 전역 CSS 및 변수
└── data/               # 정적 데이터
    ├── courses.json    # 강의 정보
    ├── members.json    # 멤버 정보
    ├── news.json       # 뉴스 정보
    ├── projects.json   # 프로젝트 정보
    └── publications.json # 논문 정보
```

## 🚀 시작하기

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

### 3. 빌드
```bash
npm run build
```

### 4. 미리보기
```bash
npm run preview
```

## 🔧 환경 설정

### API 설정
`.env` 파일을 생성하고 다음 내용을 추가하세요:

```env
VITE_API_BASE_URL=http://localhost:3000
VITE_NODE_ENV=development
VITE_APP_TITLE=DBI LAB
```

### Hero 섹션 편집 기능
- Hero 섹션의 텍스트를 클릭하면 편집 모드로 전환됩니다
- Enter 키로 저장, Escape 키로 취소할 수 있습니다
- 외부 API를 통해 텍스트를 가져오고 업데이트할 수 있습니다

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: #0E4A84 (브랜드 컬러)
- **Secondary**: #1a1a2e (다크 테마)
- **Text**: #111 (주요 텍스트), #666 (보조 텍스트)
- **Background**: #ffffff (메인 배경), #f8f9fa (보조 배경)

### 타이포그래피
- **Font Family**: Pretendard (한국어 최적화 폰트)
- **Font Sizes**: 12px ~ 48px (8단계 시스템)
- **Line Heights**: 1.2 (tight), 1.5 (normal), 1.7 (relaxed)

### 간격 시스템
- **Spacing**: 4px ~ 80px (8단계 시스템)
- **Border Radius**: 4px ~ 24px
- **Shadows**: 4단계 그림자 시스템

## 📱 반응형 디자인

- **Desktop**: 1200px 이상
- **Tablet**: 768px ~ 1199px
- **Mobile**: 767px 이하

## 🔌 API 엔드포인트

### Hero 섹션
- `GET /api/hero-text`: Hero 텍스트 조회
- `PUT /api/hero-text`: Hero 텍스트 업데이트

### 뉴스
- `GET /api/news`: 뉴스 목록 조회
- `GET /api/news/:id`: 뉴스 상세 조회

### 다이어그램
- `GET /api/diagrams`: 다이어그램 목록 조회
- `GET /api/diagrams/:id`: 다이어그램 상세 조회

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 문의

- **연구실**: 한양대학교 정보시스템학과 DBI 연구실
- **위치**: 연구개발관 708-1호
- **주소**: 서울특별시 성동구 왕십리로 222
