import React from 'react'

export default function SelectedPublications() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1 style={{ color: 'red', fontSize: '48px' }}>SELECTED PUBLICATIONS PAGE</h1>
      <p style={{ fontSize: '24px' }}>이 페이지가 보이면 라우팅이 정상 작동합니다!</p>
      <p>현재 경로: {window.location.pathname}</p>
    </div>
  )
}