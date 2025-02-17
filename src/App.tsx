import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, SignInPage, SignUpPage } from "./routes";
import PublicLayout from "./layouts/public-layout";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes - everyone can access this */}
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />

        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/suja"
            element={
              <div>
                <h1>Hello Sujahath</h1>
              </div>
            }
          />
          <Route
            path="/contact-me"
            element={
              <div>
                <h1>Contact Me</h1>
                <p>Email: Sujahathmhmd@gmail.com</p>
              </div>
            }
          />
        </Route>
        {/* protected routes - such as taking an interview */}
      </Routes>
    </Router>
  );
};

export default App;
