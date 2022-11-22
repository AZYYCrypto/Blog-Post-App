import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import Settings from "./pages/Settings";
import { AuthContextProvider } from "./contexts/AuthContext";
import Footer from "./components/Footer";
import CreatePost from "./pages/CreatePost";
import Protected from "./components/Protected";
import TermsAndConditions from "./pages/TermsAndConditions";
import PostDetailPage from "./pages/PostDetailPage";
function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route
            path="/profile-settings"
            element={
              <Protected>
                <Settings />
              </Protected>
            }
          />
          <Route
            path="/create-post"
            element={
              <Protected>
                <CreatePost />
              </Protected>
            }
          />
          <Route path="/post/:postId" element={<PostDetailPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
