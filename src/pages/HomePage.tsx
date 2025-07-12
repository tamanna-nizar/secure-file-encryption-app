import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-6">🔐 Secure File Encryption App</h1>
      <p className="mb-8 text-lg text-gray-300">Your privacy, your control. Encrypt and decrypt your files securely.</p>
      <button
        onClick={() => navigate('/app')}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg transition"
      >
        Continue
      </button>
    </div>
  );
};

export default HomePage;

