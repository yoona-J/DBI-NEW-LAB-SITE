import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,       // 이 포트로 고정
    strictPort: true, // 점유 시 실패(다른 포트로 안 바꿈)
    host: true        // LAN 접속 허용(옵션)
  }
})