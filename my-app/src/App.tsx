import UserProfile from "./UserProfile";

import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { Home } from "./Home";

function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/users">Users</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
