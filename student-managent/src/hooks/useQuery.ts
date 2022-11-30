import { useSearchParams } from 'react-router-dom'

export const useQueryString = () => {
  const [serchParams]: any = useSearchParams()
  const searchParamsObject = Object.fromEntries([...serchParams])

  return searchParamsObject
}   
