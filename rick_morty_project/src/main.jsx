import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react' 
import {fetchData, fetchDetailsData} from './Components/using-use-effect';
import Layout from './Pages/Layout';
import Characters from './Pages/characters';
import Details from './Pages/details';
import axios from "axios";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/characters",
        element: <Characters />,
        loader: () => {
          return fetchData()
        }
      },
      {
        path: "/characters/:id",
        element: <Details />,
        loader: ({params}) => {
          const characterId = params.id;

          return fetchDetailsData(characterId)
        }
      }
    ]
  }
])


  
  
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
);
