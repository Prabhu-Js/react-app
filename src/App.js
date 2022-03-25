
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SignupPage from "./pages/SignupPage";
import PostListItem from "./components/PostListItem";
import PostDetail from "./components/PostDetail";



function App() {
  return (
    <div>
    <Router>
    <Header />
                
                
                    <Routes>
                          <Route path = "/" element = {<LoginPage />}></Route>
                          <Route path = "/signup" element = {<SignupPage />}></Route>
                          <Route path = "/postList" element = {<PostListItem />}></Route>
                          <Route path = "/postDetail/:id" element = {<PostDetail />}></Route>
                    </Routes> 
              
              <Footer />
        </Router>
    </div>    
  );
}

export default App;
