import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import {
  About,
  Contact,
  CreatePost,
  ErrorPage,
  HomePage,
  PostDetailPage,
  Settings,
  SignIn,
  SignUp,
  TermsAndConditions,
} from "../pages";
import { useAppContext } from "../contexts/AppContext.js";
const RoutesComp = () => {
  const PrivateRoute = ({ children }) => {
    const { user } = useAppContext();
    let location = useLocation();

    if (!user)
      return <Navigate to="/login" state={{ from: location }} replace />;
    return children;
  };

  return (
    <>
      <Header />
      <div style={{ minHeight: "70vh" }}>
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
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route
            path="/create-post"
            element={
              <PrivateRoute>
                <CreatePost />
              </PrivateRoute>
            }
          />
          <Route path="/post/:postId" element={<PostDetailPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default RoutesComp;
