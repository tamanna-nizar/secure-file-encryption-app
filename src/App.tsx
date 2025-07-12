import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainApp from './pages/MainApp';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/app" element={<MainApp />} />
    </Routes>
  );
};

export default App;


