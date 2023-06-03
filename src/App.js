import DefaultLayout from './Components/Layout/Components/DefaultLayout/DefaultLayout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import publicRoutes from './Components/Routes/Routes'
import BtnGototop from './Components/Layout/Components/BtnGototop/BtnGototop'
import BtnChat from './Components/Layout/Components/BtnChat/BtnChat'
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
        <BtnGototop />
        <BtnChat />
      </div>
    </Router>
  )
}

export default App
