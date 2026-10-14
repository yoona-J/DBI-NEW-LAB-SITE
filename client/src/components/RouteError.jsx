import { useEffect, useState } from 'react'
import { useRouteError } from 'react-router-dom'
import { Button } from 'antd'
import { isChunkLoadError, isChunkReloadPending, reloadForChunkError } from '../utils/chunkRecovery'

export default function RouteError() {
  const error = useRouteError()
  const chunkError = isChunkLoadError(error)
  const [failedError, setFailedError] = useState(null)

  useEffect(() => {
    console.error('Page loading failed:', error)
    if (!reloadForChunkError(error) && !isChunkReloadPending()) setFailedError({ error })
  }, [error])

  if (failedError?.error !== error) return null

  return (
    <div role="alert" style={{ padding: '24px', textAlign: 'center', color: '#666', fontSize: 14 }}>
      <p>{chunkError ? 'Unable to load this page. Please enter refresh button below.' : 'Unable to display this page. Please enter refresh button below.'}</p>
      <p>{chunkError ? '페이지를 불러오지 못했습니다. 하단의 새로 고침 버튼을 클릭해주세요.' : '페이지를 표시하지 못했습니다. 하단의 새로 고침 버튼을 클릭해주세요.'}</p>
      <Button size="small" onClick={() => window.location.reload()}>새로 고침 / Refresh</Button>
    </div>
  )
}
