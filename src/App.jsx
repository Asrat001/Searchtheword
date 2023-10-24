import { useState } from 'react'
import Index from './Componet/Index'
import {QueryClientProvider,QueryClient} from 'react-query'
import { Route  ,createRoutesFromElements ,RouterProvider ,createBrowserRouter } from 'react-router-dom'
import DisplayDetail from './Componet/DisplayDetail'

const queryClient= new QueryClient()

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route path='/Searchtheword'>
      
      <Route index  element={<Index/>}/>
      <Route path='/Searchtheword/:name' element={<DisplayDetail/>}/>
      </Route>
  
     
        )
      );
    

  return (
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    </QueryClientProvider>

    
  )
}

export default App
