import { useState } from 'react';
import { toast } from 'react-toastify';

function DecryptForm() {
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState('');

  const handleDecrypt = () => {
    if (!file || !password) {
      toast.error("❌ Choose file and enter password");
      return;
    }

    toast.info("🔄 Decrypting...");

    setTimeout(() => {
      const success = password === "correct123"; // fake logic for demo

      if (success) {
        const blob = new Blob(["decrypted-content"], { type: "application/pdf" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = file.name.replace(".enc", "_restored.pdf");
        a.click();

        toast.success("✅ Decryption Successful!\n📁 File Restored!");
      } else {
        toast.error("❌ Incorrect password or corrupted file!");
      }
    }, 2000);
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-green-700">🔓 Decrypt File</h2>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-2 w-full"
      />
      <input
        type="password"
        placeholder="Enter Password"
        className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleDecrypt}
        className="mt-4 w-full py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
      >
        Decrypt & Restore
      </button>
    </div>
  );
}

export default DecryptForm;

