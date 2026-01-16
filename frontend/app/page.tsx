"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!file) return alert("Please select a leaf image");

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("https://cropshield-api.onrender.com/predict", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-8">
      <h1 className="text-4xl font-bold mb-6 text-green-700">🌱 CropShield</h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4"
      />

      <button
        onClick={submit}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        {loading ? "Detecting..." : "Detect Disease"}
      </button>

      {result && (
        <div className="mt-6 bg-white p-4 rounded shadow w-full max-w-md">
          <p><b>Disease:</b> {result.prediction?.disease}</p>
          <p><b>Confidence:</b> {result.prediction?.confidence}</p>
          <p className="mt-2"><b>Advice:</b> {result.recommendation}</p>

          {result.warnings && result.warnings.length > 0 && (
            <div className="mt-2 text-red-600">
              {result.warnings.map((w: string, i: number) => (
                <p key={i}>⚠ {w}</p>
              ))}
            </div>
          )}
        </div>
      )}
    </main>
  );
}
