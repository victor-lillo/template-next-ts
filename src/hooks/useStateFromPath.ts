import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import myFunction from '@utils/myFunction'

const useStateFromPath = (initialValue: string) => {
  const [state, setState] = useState(initialValue)
  const router = useRouter()
  const { asPath, isReady } = router

  useEffect(() => {
    if (isReady) myFunction()
  }, [asPath])
  return [state, setState] as const
}

export default useStateFromPath
