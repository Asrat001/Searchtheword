import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Index from './Componet/Index'
import {QueryClientProvider,QueryClient} from 'react-query'

const queryClient= new QueryClient()

function App() {
  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>
    <Index/>
    </QueryClientProvider>

    
  )
}

export default App
