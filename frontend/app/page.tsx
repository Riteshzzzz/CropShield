"use client";

import React, { useState, useEffect } from "react";

/**
 * Custom Inline SVG Icons
 */
const Upload = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
);
const ShieldCheck = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
);
const Zap = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const AlertCircle = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
);
const ImageIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
);
const CheckCircle2 = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
);
const Info = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
);
const X = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);
const Sprout = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 20h10"/><path d="M10 20c5.5-2.5 8-6.4 8-10"/><path d="M14 20c-5.5-2.5-8-6.4-8-10"/><path d="M12 20V9"/><path d="M12 9a4 4 0 0 1 8-4h-8a4 4 0 0 0-8 4h8Z"/></svg>
);
const Loader2 = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
);
const Sun = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
);
const Moon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
);
const Monitor = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
);
const MenuIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
);
const ShieldIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);

const App = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [theme, setTheme] = useState('system');
  const [resolvedTheme, setResolvedTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  // Initial mount logic
  useEffect(() => {
    const saved = localStorage.getItem('cropshield_theme');
    if (saved && ['light', 'dark', 'system'].includes(saved)) {
      setTheme(saved);
    }
    setMounted(true);
  }, []);

  // Update theme classes on document root and compute resolved preference
  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateTheme = () => {
      let current = theme;
      if (theme === 'system') {
        current = mediaQuery.matches ? 'dark' : 'light';
      }

      setResolvedTheme(current);

      if (current === 'dark') {
        root.classList.add('dark');
        root.style.setProperty('color-scheme', 'dark');
      } else {
        root.classList.remove('dark');
        root.style.setProperty('color-scheme', 'light');
      }
    };

    updateTheme();
    localStorage.setItem('cropshield_theme', theme);

    // Listen for system theme changes
    const handleChange = () => {
      if (theme === 'system') updateTheme();
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, mounted]);

  useEffect(() => {
    return () => { if (previewUrl) URL.revokeObjectURL(previewUrl); };
  }, [previewUrl]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0] || (e.dataTransfer && e.dataTransfer.files[0]);
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      setResult(null);
      setError(null);
    }
  };

  const submitAnalysis = async () => {
    if (!file) {
      setError("Please select or drop a leaf image first.");
      return;
    }
    setLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("https://cropshield-api.onrender.com/predict", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Server communication failed.");
      const data = await res.json();
      setResult(data);
      setTimeout(() => document.getElementById('results-view')?.scrollIntoView({ behavior: 'smooth' }), 100);
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const getSeverityBadgeClass = (severity) => {
    const s = severity?.toLowerCase();
    switch (s) {
      case 'high': return 'bg-red-500 text-white';
      case 'medium': return 'bg-orange-500 text-white';
      case 'low': return 'bg-yellow-400 text-black';
      case 'none': return 'bg-green-500 text-white';
      default: return 'bg-gray-400 text-white';
    }
  };

  /**
   * Helper to determine if an item is a real deficiency
   */
  const isActualIssue = (d) => d.type?.toLowerCase() !== 'healthy' && d.type?.toLowerCase() !== 'none';

  /**
   * Prevention Measures mapping the backend solutions provided in app.py
   */
  const getPreventionMeasure = (type) => {
    const t = type?.toLowerCase() || "";
    
    // Paragraph 1: Mapped directly to the solutions in the backend code
    let main = "Conduct annual soil tests to monitor health trends and adjust fertilization schedules before planting cycles begin.";
    if (t.includes("nitrogen")) main = "Apply urea in small quantity";
    else if (t.includes("phosphorus")) main = "Use phosphorus-rich fertilizer";
    else if (t.includes("potassium")) main = "Apply potash fertilizer";
    else if (t === "healthy" || t === "none") main = "Maintain your current nutrition and irrigation schedule.";
    
    // Paragraph 2: Long-term prevention extra paragraph
    const extra = "To build lasting crop resilience, focus on enhancing soil organic matter through sustainable composting and mulch application. This provides a natural nutrient buffer and improves water retention, shielding your plants against sudden environmental fluctuations and future depletion.";

    return { main, extra };
  };

  // Theme-aware conditional classes
  const isDark = mounted && resolvedTheme === 'dark';
  const bgColor = isDark ? 'bg-slate-950' : 'bg-[#F8FAFC]';
  const textColor = isDark ? 'text-slate-100' : 'text-slate-900';
  const cardBg = isDark ? 'bg-slate-900' : 'bg-white';
  const borderColor = isDark ? 'border-slate-800' : 'border-green-100';
  const secondaryTextColor = isDark ? 'text-slate-400' : 'text-slate-600';
  const navBg = isDark ? 'bg-slate-900/80' : 'bg-white/80';

  const Navbar = () => (
    <nav className={`fixed top-0 w-full ${navBg} backdrop-blur-md border-b ${borderColor} z-50 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-green-600 p-1.5 rounded-lg text-white">
              <ShieldCheck size={24} />
            </div>
            <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              CropShield
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button className={`text-sm font-medium transition-colors ${isDark ? 'text-slate-400 hover:text-green-400' : 'text-slate-500 hover:text-green-600'}`}>Analyze</button>
            <button className={`text-sm font-medium transition-colors ${isDark ? 'text-slate-400 hover:text-green-400' : 'text-slate-500 hover:text-green-600'}`}>Education</button>
            <button className={`text-sm font-medium transition-colors ${isDark ? 'text-slate-400 hover:text-green-400' : 'text-slate-500 hover:text-green-600'}`}>Contact</button>
            <button className="bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-green-700 transition-all shadow-sm active:scale-95">
              Get Started
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 rounded-xl transition-colors ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className={`md:hidden ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} border-b p-4 space-y-4 animate-in slide-in-from-top-2 transition-all`}>
          <button className={`block w-full text-left py-2 px-4 rounded-lg font-medium transition-colors ${isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'}`}>Analyze</button>
          <button className={`block w-full text-left py-2 px-4 rounded-lg font-medium transition-colors ${isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'}`}>Education</button>
          <button className={`block w-full text-left py-2 px-4 rounded-lg font-medium transition-colors ${isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'}`}>Contact</button>
          <button className="w-full bg-green-600 text-white py-3 rounded-xl font-bold active:scale-[0.98]">Get Started</button>
        </div>
      )}
    </nav>
  );

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-300 relative font-sans`}>
        <Navbar />

        <main className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="max-w-3xl mb-12">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-wide uppercase border transition-colors ${isDark ? 'bg-green-900/30 text-green-400 border-green-800' : 'bg-green-100 text-green-700 border-green-200'}`}>
                <Zap size={14} /> AI Powered Diagnostic
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                Protect your yields with <span className="text-green-600">Precision Analysis.</span>
              </h1>
              <p className={`text-lg leading-relaxed max-w-2xl transition-colors ${secondaryTextColor}`}>
                Diagnostic reporting for crop nutrient management.
              </p>
            </header>

            <div className="grid lg:grid-cols-12 gap-12">
              {/* Uploader Section */}
              <div className="lg:col-span-5 space-y-6">
                <div 
                  className={`relative group border-2 border-dashed rounded-3xl transition-all duration-300 flex flex-col items-center justify-center p-8 min-h-[400px] text-center
                    ${dragActive ? 'border-green-500 bg-green-50/50' : `${isDark ? 'border-slate-800 bg-slate-900/40' : 'border-slate-200 bg-white'} hover:border-green-300`}`}
                  onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                  onDragLeave={() => setDragActive(false)}
                  onDrop={(e) => { e.preventDefault(); setDragActive(false); handleFileChange(e); }}
                >
                  {!previewUrl ? (
                    <div className="animate-in fade-in zoom-in duration-300">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors ${isDark ? 'bg-green-900/20 text-green-600' : 'bg-green-100 text-green-600'}`}>
                        <Upload size={28} />
                      </div>
                      <h3 className="text-lg font-bold mb-2">Upload Leaf Image</h3>
                      <p className={`text-sm mb-6 px-4 transition-colors ${secondaryTextColor}`}>Drag and drop or click to analyze a sample leaf.</p>
                      <label className="inline-block">
                        <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                        <span className={`px-6 py-3 rounded-2xl font-semibold cursor-pointer active:scale-95 shadow-lg transition-all ${isDark ? 'bg-slate-100 text-slate-900 hover:bg-slate-200' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                          Select Image
                        </span>
                      </label>
                    </div>
                  ) : (
                    <div className="w-full h-full flex flex-col p-2 animate-in fade-in duration-300">
                      <div className={`relative rounded-2xl overflow-hidden shadow-2xl mb-6 aspect-[4/3] transition-colors ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                        <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                        <button onClick={() => {setFile(null); setPreviewUrl(null); setResult(null);}} className={`absolute top-4 right-4 p-2 rounded-full transition-colors hover:text-red-500 shadow-md ${isDark ? 'bg-slate-900/90 text-slate-200' : 'bg-white/90 text-slate-800'}`}>
                          <X size={20} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between px-1">
                        <span className={`text-sm font-medium truncate max-w-[150px] transition-colors ${secondaryTextColor}`}>{file.name}</span>
                        <label className="text-sm font-bold text-green-600 dark:text-green-500 cursor-pointer hover:underline">
                          Change
                          <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                        </label>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  disabled={!file || loading}
                  onClick={submitAnalysis}
                  className={`w-full py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3
                    ${!file || loading ? `${isDark ? 'bg-slate-800' : 'bg-slate-200'} text-slate-400 cursor-not-allowed` : 'bg-green-600 text-white hover:bg-green-700 shadow-xl active:scale-[0.98]'}`}
                >
                  {loading ? <Loader2 size={24} className="animate-spin" /> : <Sprout size={24} />}
                  {loading ? "Analyzing Crop Health..." : "Run Diagnosis"}
                </button>
                {error && <div className={`p-4 rounded-2xl flex items-start gap-3 border animate-in slide-in-from-top-2 ${isDark ? 'bg-red-900/20 text-red-400 border-red-900/30' : 'bg-red-50 text-red-700 border-red-100'}`}><AlertCircle size={18} className="shrink-0" /> <p className="text-sm">{error}</p></div>}
              </div>

              {/* Results Dashboard */}
              <div className="lg:col-span-7">
                {!result && !loading && (
                  <div className={`h-full border rounded-3xl p-12 flex flex-col items-center justify-center text-center transition-colors ${cardBg} ${borderColor}`}>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${isDark ? 'bg-slate-800 text-slate-700' : 'bg-slate-50 text-slate-300'}`}><ShieldCheck size={32} /></div>
                    <h3 className="text-xl font-bold mb-2">Analysis Dashboard</h3>
                    <p className={`max-w-sm ${secondaryTextColor}`}>Upload a photo to see detailed health metrics and prevention strategies.</p>
                  </div>
                )}

                {loading && (
                  <div className={`h-full border rounded-3xl p-8 space-y-6 transition-colors ${cardBg} ${borderColor}`}>
                    <div className={`h-8 w-1/3 rounded-full animate-pulse ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`} />
                    <div className="space-y-4">
                      {[1, 2, 3].map(i => <div key={i} className={`h-24 w-full rounded-2xl animate-pulse ${isDark ? 'bg-slate-800/60' : 'bg-slate-50'}`} />)}
                    </div>
                  </div>
                )}

                {result && (
                  <div id="results-view" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className={`border rounded-3xl p-6 shadow-sm transition-all hover:shadow-md ${cardBg} ${borderColor}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${secondaryTextColor}`}>Summary</span>
                        <div className={`p-2 rounded-xl transition-colors ${result.deficiencies?.some(isActualIssue) ? (isDark ? 'bg-orange-900/20 text-orange-400' : 'bg-orange-100 text-orange-600') : (isDark ? 'bg-green-900/20 text-green-400' : 'bg-green-50 text-green-600')}`}>
                          {result.deficiencies?.some(isActualIssue) ? <AlertCircle size={20} /> : <CheckCircle2 size={20} />}
                        </div>
                      </div>
                      <h3 className="text-2xl font-black">{result.deficiencies?.some(isActualIssue) ? "Issues Detected" : "Optimal Health"}</h3>
                    </div>

                    {result.deficiencies?.some(d => isActualIssue(d) && d.severity?.toLowerCase() === 'high') && (
                      <div className={`p-5 rounded-3xl flex items-start gap-4 border-2 animate-in slide-in-from-top-4 duration-500 ${isDark ? 'bg-red-950/20 text-red-400 border-red-900/30' : 'bg-red-50 text-red-800 border-red-100'}`}>
                        <Info size={24} className="shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold mb-1">Critical Severity</p>
                          <p className="text-sm opacity-90 leading-relaxed">
                            Detected issues are severe. Consult a local agronomist immediately to safeguard your current crop cycle.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="space-y-4">
                      {/* Detailed Diagnosis Results */}
                      {result.deficiencies?.length > 0 && result.deficiencies.some(isActualIssue) ? (
                        result.deficiencies.filter(isActualIssue).map((d, i) => {
                          const measures = getPreventionMeasure(d.type);
                          return (
                            <div key={i} className={`border rounded-3xl p-6 shadow-sm transition-all hover:border-green-300 ${cardBg} ${borderColor}`}>
                              <div className="flex justify-between items-start mb-4">
                                <div className="flex-1">
                                  <div className="flex flex-wrap items-center gap-3 mb-1">
                                    <h3 className="text-xl font-black">Deficiency Found - {d.type}</h3>
                                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-tight ${getSeverityBadgeClass(d.severity)}`}>
                                      Severity - {d.severity}
                                    </span>
                                  </div>
                                  <p className={`text-sm ${secondaryTextColor}`}>Specific Nutrient Deficiency</p>
                                </div>
                                <span className="text-xl font-black text-green-600">{d.confidence}%</span>
                              </div>
                              
                              <div className={`h-2 w-full rounded-full overflow-hidden mb-6 ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                                <div className="h-full bg-green-500 transition-all duration-1000 ease-out" style={{ width: `${d.confidence}%` }} />
                              </div>

                              <div className="space-y-3">
                                <div className={`p-4 rounded-2xl italic text-sm leading-relaxed transition-colors border ${isDark ? 'bg-slate-950/50 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-100 text-slate-600'}`}>
                                  "{d.symptom}"
                                </div>
                                
                                <div className={`p-4 rounded-2xl text-sm leading-relaxed transition-colors flex items-start gap-3 border ${isDark ? 'bg-green-900/10 border-green-900/30' : 'bg-green-50/50 border-green-100'}`}>
                                  <ShieldIcon size={18} className="text-green-600 shrink-0 mt-0.5" />
                                  <div>
                                    <p className="font-bold text-green-700 dark:text-green-400 mb-1">Prevention Measure</p>
                                    <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>{measures.main}</p>
                                    <p className={`mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{measures.extra}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        /* Healthy State Placeholder */
                        <div className={`border rounded-3xl p-8 shadow-sm transition-all border-dashed ${cardBg} ${borderColor} flex flex-col items-center text-center`}>
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors ${isDark ? 'bg-green-900/20 text-green-500' : 'bg-green-50 text-green-600'}`}>
                             <CheckCircle2 size={32} />
                          </div>
                          <h3 className="text-xl font-bold mb-2">Deficiency Found - None</h3>
                          <p className={`${secondaryTextColor} mb-6 px-4`}>
                            The crop is healthy. No visible nutrient deficiency patterns detected. Continue regular care and maintain your current schedule.
                          </p>
                          <div className={`p-4 rounded-2xl text-sm leading-relaxed transition-colors flex items-start gap-3 border w-full text-left ${isDark ? 'bg-green-900/10 border-green-900/30' : 'bg-green-50/50 border-green-100'}`}>
                            <ShieldIcon size={18} className="text-green-600 shrink-0 mt-0.5" />
                            <div>
                              <p className="font-bold text-green-700 dark:text-green-400 mb-1">Prevention Measure</p>
                              <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>{getPreventionMeasure("healthy").main}</p>
                              <p className={`mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{getPreventionMeasure("healthy").extra}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className={`border rounded-3xl p-6 shadow-sm transition-all flex items-center justify-between ${cardBg} ${borderColor}`}>
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-2xl ${isDark ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                          <ImageIcon size={24} />
                        </div>
                        <div>
                          <p className={`text-[10px] font-bold uppercase tracking-widest ${secondaryTextColor}`}>Image Quality</p>
                          <h4 className="text-lg font-black capitalize">{result.image_quality?.brightness_level || "Normal"} Clarity</h4>
                        </div>
                      </div>
                      <div className={`px-4 py-1.5 rounded-full text-xs font-bold ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                        Verified Data
                      </div>
                    </div>

                    {/* AI Disclosure Statement */}
                    <div className={`p-3 rounded-xl text-[11px] border transition-all flex items-center justify-center gap-2 ${isDark ? 'bg-slate-950/50 border-slate-800 text-slate-500' : 'bg-slate-50 border-slate-100 text-slate-500'}`}>
                      <Info size={14} className="shrink-0" />
                      <p className="leading-tight">
                        Results generated by CropShield AI model. For critical farm management, consult a local agronomist.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        <footer className={`border-t py-16 transition-colors duration-300 mt-20 ${cardBg} ${borderColor}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
              <div className="space-y-4 max-w-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-green-600" size={24} />
                  <span className="font-bold text-lg">CropShield</span>
                </div>
                <p className={`text-sm leading-relaxed transition-colors ${secondaryTextColor}`}>
                  Advancing sustainable agriculture through AI-driven preventive nutrient management.
                </p>
              </div>

              <div className="space-y-3">
                <span className={`text-[10px] font-bold uppercase tracking-widest block text-center md:text-left transition-colors ${secondaryTextColor}`}>Display</span>
                <div className={`inline-flex p-1.5 rounded-2xl border transition-all shadow-inner ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'}`}>
                  <button onClick={() => setTheme('light')} className={`p-2 px-6 rounded-xl transition-all duration-300 ${mounted && theme === 'light' ? 'bg-white shadow-md text-slate-900' : 'text-slate-500'}`}><Sun size={18} /></button>
                  <button onClick={() => setTheme('dark')} className={`p-2 px-6 rounded-xl transition-all duration-300 ${mounted && theme === 'dark' ? 'bg-slate-900 shadow-md text-white' : 'text-slate-500'}`}><Moon size={18} /></button>
                  <button onClick={() => setTheme('system')} className={`p-2 px-6 rounded-xl transition-all duration-300 ${mounted && theme === 'system' ? 'bg-white dark:bg-slate-900 shadow-md text-slate-900 dark:text-white' : 'text-slate-500'}`}><Monitor size={18} /></button>
                </div>
              </div>

              <div className={`flex flex-col items-start md:items-end gap-2 text-sm font-medium transition-colors ${secondaryTextColor}`}>
                <p>© 2026 CropShield AI</p>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-green-600 transition-colors underline decoration-slate-200 dark:decoration-slate-800 underline-offset-4">Privacy</a>
                  <a href="#" className="hover:text-green-600 transition-colors underline decoration-slate-200 dark:decoration-slate-800 underline-offset-4">Terms</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;