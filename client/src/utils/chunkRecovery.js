const RETRY_STORAGE_KEY = 'dbilab:chunk-retry'
const RETRY_QUERY_KEY = '__chunk_retry'
const BUILD_ID = new URL(import.meta.url).pathname
const MAX_RETRIES = 3
let reloadPending = false

function getRetryCount(marker) {
  if (marker === BUILD_ID) return 1
  const prefix = `${BUILD_ID}:`
  if (!marker?.startsWith(prefix)) return 0
  const count = Number(marker.slice(prefix.length))
  return Number.isInteger(count) && count >= 0 ? count : 0
}

export function isChunkReloadPending() {
  return reloadPending
}

export function isChunkLoadError(error) {
  const message = typeof error === 'string' ? error : error?.message
  return typeof message === 'string' && (
    /Failed to fetch dynamically imported module/i.test(message) ||
    /error loading dynamically imported module/i.test(message) ||
    /Importing a module script failed/i.test(message) ||
    /Unable to preload CSS/i.test(message) ||
    /Loading chunk .+ failed/i.test(message)
  )
}

export function reloadForChunkError(error, browser = window) {
  if (reloadPending || !isChunkLoadError(error) || browser.navigator.onLine === false) return false

  const url = new URL(browser.location.href)
  let retryCount = getRetryCount(url.searchParams.get(RETRY_QUERY_KEY))
  if (retryCount >= MAX_RETRIES) return false

  try {
    retryCount = Math.max(retryCount, getRetryCount(browser.sessionStorage.getItem(RETRY_STORAGE_KEY)))
    if (retryCount >= MAX_RETRIES) return false
    browser.sessionStorage.setItem(RETRY_STORAGE_KEY, `${BUILD_ID}:${retryCount + 1}`)
  } catch (storageError) {
    console.error('Unable to store chunk recovery state:', storageError)
    // The URL marker also prevents a reload loop when storage is unavailable.
  }

  url.searchParams.set(RETRY_QUERY_KEY, `${BUILD_ID}:${retryCount + 1}`)
  console.error('Chunk loading failed; reloading the latest application:', error)
  browser.location.replace(url.href)
  reloadPending = true
  return true
}

export function installChunkRecovery(browser = window) {
  browser.addEventListener('vite:preloadError', (event) => {
    reloadForChunkError(event.payload, browser)
  })
}
