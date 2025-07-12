// src/components/WelcomeModal.tsx
import { Dialog } from '@headlessui/react';
import { useEffect, useState } from 'react';

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Optional: Add fade-in effect or delay
  }, []);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <Dialog.Panel className="mx-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <Dialog.Title className="text-lg font-bold text-center mb-2">👋 Welcome to Secure File Encryption App</Dialog.Title>
        <Dialog.Description className="text-sm text-gray-600 text-center">
          Use the sections below to <strong>Encrypt</strong> or <strong>Decrypt</strong> files. Make sure to remember your password!
        </Dialog.Description>

        <ul className="text-left mt-4 list-disc list-inside text-gray-700 space-y-1">
          <li>🔐 <strong>Encrypt:</strong> Upload file + enter password</li>
          <li>🔓 <strong>Decrypt:</strong> Use correct password on .enc file</li>
          <li>✅ Saved files will auto-download securely</li>
        </ul>

        <button
          onClick={() => setIsOpen(false)}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
        >
          Got it!
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}
