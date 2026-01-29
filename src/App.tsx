import './App.css'
import { useRoutes } from 'react-router'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import AddCreator from './pages/AddCreator'

function App() {

  let element = useRoutes([
    { path: "/", element: <ShowCreators />, },
    { path: "/creator/:slug", element: <ViewCreator /> },
    { path: '/edit', element: <EditCreator /> },
    { path: '/add', element: <AddCreator /> },
  ])

  return element
}

export default App
