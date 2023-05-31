import DefaultLayout from './Components/Layout/Components/DefaultLayout/DefaultLayout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import publicRoutes from './Components/Routes/Routes'

function App() {
  return (
    <Router>
      <div className="App" style={{position:"relative"}} >
        <Routes>
          {publicRoutes.map((item, index) => {
            let Layout = DefaultLayout
            const Page = item.component
            return (
              <Route
                key={index}
                path={item.path}
                element={
                  <Layout>
                    <Page data={item.path}></Page>
                  </Layout>
                }
              ></Route>
            )
          })}
          
        </Routes>
        
      </div>
    </Router>
  )
}

export default App
