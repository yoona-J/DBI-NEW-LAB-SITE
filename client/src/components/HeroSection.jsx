import { useState, useEffect, useRef } from 'react'
import { API_CONFIG, apiRequest } from '../config/api'

export default function HeroSection() {
  const [heroText, setHeroText] = useState("Welcome to Data and Business Intelligence Lab!")
  const particlesRef = useRef(null)

  // 외부에서 텍스트를 가져오는 함수
  const fetchHeroText = async () => {
    try {
      const data = await apiRequest(API_CONFIG.HERO.GET_TEXT)
      setHeroText(data.text)
    } catch (error) {
      console.log('Hero 텍스트를 가져오는데 실패했습니다:', error)
      // API 실패 시 기본 텍스트 유지
    }
  }

  // particles.js 초기화
  const initParticles = () => {
    if (typeof window !== 'undefined' && window.particlesJS && particlesRef.current) {
      window.particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 38,
            "density": {
              "enable": true,
              "value_area": 946.9790382244144
            }
          },
          "color": {
            "value": "#f2f2f2"
          },
          "shape": {
            "type": "edge",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 20,
              "height": 20
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      })
    }
  }

  // 컴포넌트 마운트 시 외부에서 텍스트 가져오기 및 particles 초기화
  useEffect(() => {
    fetchHeroText()
    
    // particles.js가 로드된 후 초기화
    const loadParticles = () => {
      if (window.particlesJS) {
        initParticles()
      } else {
        // particles.js가 아직 로드되지 않았다면 잠시 대기
        setTimeout(loadParticles, 100)
      }
    }
    
    loadParticles()
  }, [])

  return (
    <section className="hero">
      {/* Particles.js 배경 */}
      <div 
        className="particles-container"
        id="particles-js" 
        ref={particlesRef}
      >
        <canvas 
          className="particles-js-canvas-el" 
          width="2884" 
          height="906" 
          style={{width: "100%", height: "100%"}}
        >
        </canvas>
      </div>

      {/* Hero 콘텐츠 */}
      <div className="hero-content">
        <h1 className="hero-title">
          {heroText}
        </h1>
      </div>
    </section>
  )
}
