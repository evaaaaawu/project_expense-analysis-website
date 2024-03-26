import 'sass/main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, WelcomePage, SignUpPage, LoginPage, DashboardPage } from 'pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="welcome" element={<WelcomePage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
