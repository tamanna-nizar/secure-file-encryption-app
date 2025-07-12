// src/pages/MainApp.tsx

import React from 'react';
import EncryptForm from '../components/EncryptForm';
import DecryptForm from '../components/DecryptForm';
import WelcomeModal from '../components/WelcomeModal';
import { ToastContainer } from 'react-toastify';

const MainApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-start p-6 font-sans">
      <WelcomeModal />

      <h1 className="text-3xl md:text-4xl font-extrabold text-white flex items-center gap-3 mb-8 shadow-md bg-gray-700 px-6 py-3 rounded-full font-poppins">
  🔐 Secure File Encryption App
</h1>


      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-6">
        <EncryptForm />
        <DecryptForm />
      </div>

      <ToastContainer position="top-center" autoClose={3000} theme="dark" />
    </div>
  );
};

export default MainApp; // ✅ this must be present
