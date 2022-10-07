import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import Contact from "./components/Contact";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import MyAccount from "./components/MyAccount";
import { AuthContextProvider } from "./contexts/AuthContext";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import Protected from "./components/Protected";
import TermsAndConditions from "./components/TermsAndConditions";
import PostDetailPage from "./components/PostDetailPage";
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
            path="/account"
            element={
              <Protected>
                <MyAccount />
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
          <Route
            path="/details/:id"
            element={
              <Protected>
                <PostDetailPage />
              </Protected>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
