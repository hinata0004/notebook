
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Root from "./components/page/root"
import Bookdetail from "./components/page/bookdetail"

export default function App() {

  return (
    <Router>
    <Routes>
        <Route path="/" Component={Root}>
      </Route>
      <Route path="/:id" Component={Bookdetail}/>
    </Routes>
  </Router>
  )
}
