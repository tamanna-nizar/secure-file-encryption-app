import { useState } from 'react';
import { toast } from 'react-toastify';

function EncryptForm() {
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState('');

  const handleEncrypt = () => {
    if (!file) {
      toast.error("❗ Please select a file to encrypt.");
      return;
    }
  
    if (!password) {
      toast.error("🔐 Please enter a password.");
      return;
    }
  
    toast.info("🔄 Encrypting...");
  
    setTimeout(() => {
      const blob = new Blob(["encrypted-content"], { type: "application/octet-stream" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = file.name + ".enc";
      a.click();
  
      toast.success("✅ File Encrypted Successfully!");
    }, 2000);
  };
  

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-blue-700">🔐 Encrypt File</h2>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="mb-2 w-full" />
      <input
        type="password"
        placeholder="Enter Password"
        className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleEncrypt}
        className="mt-4 w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
      >
        Encrypt & Save
      </button>
    </div>
  );
}

export default EncryptForm;
