import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  RefreshCw, 
  Download, 
  Search, 
  Filter, 
  Trash2, 
  Phone, 
  MessageSquare, 
  LogOut, 
  CheckCircle2, 
  Clock, 
  Building2, 
  User, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  Plus,
  Trophy,
  Award,
  Layers,
  Settings,
  Image as ImageIcon,
  Check,
  AlertCircle,
  Upload,
  Menu,
  X
} from 'lucide-react';
import { 
  fetchTenantInquiries, 
  updateInquiryStatus, 
  deleteTenantInquiry, 
  saveTenantInquiry,
  fetchTenantResults,
  saveTenantResult,
  deleteTenantResult,
  fetchTenantBrands,
  saveTenantBrand,
  deleteTenantBrand,
  fetchTenantSettings,
  saveTenantSettings,
  DEFAULT_SETTINGS,
  TENANT_ID 
} from '../firebase';

export default function AdminPage() {
  // Authentication states
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('dictox_admin_auth') === 'true';
  });
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Active Sidebar Tab: 'inquiries' | 'results' | 'brands' | 'footer'
  const [activeTab, setActiveTab] = useState('inquiries');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Inquiries states
  const [inquiries, setInquiries] = useState([]);
  const [isLoadingInquiries, setIsLoadingInquiries] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  // Results / Case Studies states
  const [resultsList, setResultsList] = useState([]);
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [showAddResultModal, setShowAddResultModal] = useState(false);
  const [newResult, setNewResult] = useState({
    title: '',
    industry: 'Real Estate Developer',
    objective: 'High-Value Site Visits & Inquiries',
    spend: '₹50,000',
    leads: '412',
    cpl: '₹121',
    duration: '30 Days',
    keyOutcome: '38 Confirmed Bookings',
    image: '/images/real_estate.jpg',
  });

  // Brand Logos states
  const [brandsList, setBrandsList] = useState([]);
  const [isLoadingBrands, setIsLoadingBrands] = useState(false);
  const [newBrandName, setNewBrandName] = useState('');
  const [newBrandColor, setNewBrandColor] = useState('text-slate-900');
  const [brandLogoPreview, setBrandLogoPreview] = useState('');
  const [brandLogoUrl, setBrandLogoUrl] = useState('');

  // Footer & Agency Settings states
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [isSavingSettings, setIsSavingSettings] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Expected Admin Credentials
  const ADMIN_EMAIL = 'dictoxmarketing@gmail.com';
  const ADMIN_PASSWORD = 'suresh@1234';

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  // Handle Brand Logo File Upload
  const handleBrandLogoFile = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('File size exceeds 2MB limit. Please upload a smaller image.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setBrandLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Result Image File Upload
  const handleResultImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        alert('File size exceeds 3MB limit. Please upload a smaller image.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewResult((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);

    setTimeout(() => {
      if (
        loginEmail.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase() &&
        loginPassword === ADMIN_PASSWORD
      ) {
        setIsAuthenticated(true);
        localStorage.setItem('dictox_admin_auth', 'true');
        showToast('Login successful. Welcome Suresh!');
      } else {
        setLoginError('Invalid Login ID or Password. Please check credentials.');
      }
      setIsLoggingIn(false);
    }, 350);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('dictox_admin_auth');
    setLoginEmail('');
    setLoginPassword('');
  };

  // Load Inquiries
  const loadInquiries = async () => {
    setIsLoadingInquiries(true);
    try {
      const data = await fetchTenantInquiries();
      setInquiries(data);
    } catch (err) {
      console.error('Failed to load inquiries:', err);
    } finally {
      setIsLoadingInquiries(false);
    }
  };

  // Load Results
  const loadResults = async () => {
    setIsLoadingResults(true);
    try {
      const data = await fetchTenantResults();
      setResultsList(data);
    } catch (err) {
      console.error('Failed to load results:', err);
    } finally {
      setIsLoadingResults(false);
    }
  };

  // Load Brands
  const loadBrands = async () => {
    setIsLoadingBrands(true);
    try {
      const data = await fetchTenantBrands();
      setBrandsList(data);
    } catch (err) {
      console.error('Failed to load brands:', err);
    } finally {
      setIsLoadingBrands(false);
    }
  };

  // Load Settings
  const loadSettings = async () => {
    try {
      const data = await fetchTenantSettings();
      setSettings(data);
    } catch (err) {
      console.error('Failed to load settings:', err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadInquiries();
      loadResults();
      loadBrands();
      loadSettings();
    }
  }, [isAuthenticated]);

  // Handle Inquiry Status
  const handleStatusChange = async (item, newStatus) => {
    const success = await updateInquiryStatus(item.id, newStatus, item.collectionPath);
    if (success) {
      setInquiries((prev) =>
        prev.map((inq) => (inq.id === item.id ? { ...inq, status: newStatus } : inq))
      );
      showToast(`Status updated to "${newStatus}"`);
    }
  };

  // Delete Inquiry
  const handleDeleteInquiry = async (item) => {
    if (!window.confirm(`Delete inquiry from ${item.name || 'this lead'}?`)) return;
    const success = await deleteTenantInquiry(item.id, item.collectionPath);
    if (success) {
      setInquiries((prev) => prev.filter((inq) => inq.id !== item.id));
      if (selectedInquiry?.id === item.id) setSelectedInquiry(null);
      showToast('Inquiry deleted from database.');
    }
  };

  // Handle Add Result
  const handleAddResult = async (e) => {
    e.preventDefault();
    if (!newResult.title.trim()) {
      alert('Please enter a case study title or client name');
      return;
    }
    const res = await saveTenantResult(newResult);
    if (res.success) {
      showToast('New Result added! It will now display on the website.');
      setShowAddResultModal(false);
      setNewResult({
        title: '',
        industry: 'Real Estate Developer',
        objective: 'High-Value Site Visits & Inquiries',
        spend: '₹50,000',
        leads: '412',
        cpl: '₹121',
        duration: '30 Days',
        keyOutcome: '38 Confirmed Bookings',
        image: '/images/real_estate.jpg',
      });
      loadResults();
    }
  };

  // Delete Result
  const handleDeleteResult = async (id) => {
    if (!window.confirm('Delete this case study from the website?')) return;
    const success = await deleteTenantResult(id);
    if (success) {
      setResultsList((prev) => prev.filter((r) => r.id !== id));
      showToast('Result removed from website.');
    }
  };

  // Handle Add Brand
  const handleAddBrand = async (e) => {
    e.preventDefault();
    if (!newBrandName.trim()) return;
    const finalLogo = brandLogoPreview || brandLogoUrl.trim() || null;
    const res = await saveTenantBrand({
      name: newBrandName.trim(),
      logoUrl: finalLogo,
      color: newBrandColor,
      font: 'font-black tracking-wider text-xs sm:text-sm uppercase'
    });
    if (res.success) {
      showToast(`Brand "${newBrandName}" added to public logo marquee!`);
      setNewBrandName('');
      setBrandLogoPreview('');
      setBrandLogoUrl('');
      loadBrands();
    }
  };

  // Delete Brand
  const handleDeleteBrand = async (id) => {
    if (!window.confirm('Remove this brand from the public marquee?')) return;
    const success = await deleteTenantBrand(id);
    if (success) {
      setBrandsList((prev) => prev.filter((b) => b.id !== id));
      showToast('Brand removed.');
    }
  };

  // Save Footer Settings
  const handleSaveSettings = async (e) => {
    e.preventDefault();
    setIsSavingSettings(true);
    try {
      await saveTenantSettings(settings);
      showToast('Footer & Agency details updated on live website!');
    } catch (err) {
      alert('Failed to save settings: ' + err.message);
    } finally {
      setIsSavingSettings(false);
    }
  };

  // Quick test lead generator
  const handleCreateTestLead = async () => {
    await saveTenantInquiry({
      name: 'Demo Lead (Pune Real Estate)',
      phone: '9834036821',
      email: 'demo@dictoxclient.com',
      businessName: 'Skyline Luxury Homes',
      industry: 'Real Estate',
      service: 'Meta Ads (Facebook & Instagram)',
      budget: '₹1,00,000 - ₹3,00,000',
      message: 'Need 50+ qualified site visit inquiries every month for 3 BHK project.',
      source: 'admin_test_generator'
    });
    await loadInquiries();
    showToast('Test inquiry added under tenant "dictox-web"!');
  };

  // Export to CSV
  const exportToCSV = () => {
    if (!inquiries.length) {
      alert('No inquiries to export.');
      return;
    }
    const headers = ['Name', 'Phone', 'Email', 'Business Name', 'Industry', 'Service', 'Budget', 'Status', 'Date', 'Message'];
    const rows = inquiries.map((item) => [
      `"${item.name || ''}"`,
      `"${item.phone || ''}"`,
      `"${item.email || ''}"`,
      `"${item.businessName || ''}"`,
      `"${item.industry || ''}"`,
      `"${item.service || ''}"`,
      `"${item.budget || ''}"`,
      `"${item.status || 'New'}"`,
      `"${item.submittedAt || ''}"`,
      `"${(item.message || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `dictox_inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Inquiries exported to CSV.');
  };

  // Filtered inquiries
  const filteredInquiries = inquiries.filter((item) => {
    const matchesSearch =
      (item.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.phone || '').includes(searchQuery) ||
      (item.email || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.businessName || '').toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Stats
  const totalCount = inquiries.length;
  const newCount = inquiries.filter((i) => !i.status || i.status === 'New').length;
  const contactedCount = inquiries.filter((i) => i.status === 'Contacted').length;
  const convertedCount = inquiries.filter((i) => i.status === 'Converted').length;

  // -------------------------------------------------------------
  // VIEW 1: ADMIN LOGIN SCREEN
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#070b14] text-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-md bg-[#0f172a] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.6)] relative z-10 animate-in fade-in zoom-in-95 duration-200">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm mb-3">
              <img src="/images/logo1.png" alt="DictoX Marketing" className="h-8 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-widest mt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Admin Management Portal</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white mt-1">
              Sign In to DictoX CRM
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Active Tenant: <code className="text-blue-400 font-bold bg-slate-800 px-1.5 py-0.5 rounded">tenants/{TENANT_ID}</code>
            </p>
          </div>

          {loginError && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Admin Login ID / Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="dictoxmarketing@gmail.com"
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0081FB] focus:bg-slate-800 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Admin Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0081FB] focus:bg-slate-800 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] hover:opacity-95 active:scale-[0.98] text-white font-bold text-sm shadow-lg transition-all cursor-pointer mt-2 disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {isLoggingIn ? <span>Authenticating...</span> : <><Lock className="w-4 h-4" /><span>Access Admin Panel</span></>}
            </button>
          </form>

          <div className="mt-5 p-3 rounded-xl bg-slate-800/50 border border-slate-800 text-[11px] text-slate-400 text-center">
            <span className="font-semibold text-slate-300">Tenant-Isolated CRM</span>
            <div className="text-slate-500 mt-0.5">tenants/{TENANT_ID}</div>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: AUTHENTICATED ADMIN PANEL WITH SIDEBAR
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col md:flex-row font-sans">
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-[#00a63e] text-white px-4 py-2.5 rounded-xl shadow-xl text-xs font-bold flex items-center gap-2 animate-in slide-in-from-top-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ========================================================= */}
      {/* MOBILE TOP BAR (visible only on < md screens) */}
      {/* ========================================================= */}
      <div className="md:hidden bg-[#0d1527] border-b border-slate-800 px-4 py-3 flex items-center justify-between sticky top-0 z-40 shadow-md">
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="p-2 rounded-xl bg-slate-800 text-slate-200 hover:text-white border border-slate-700 cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div className="flex items-center gap-2">
            <div className="bg-white p-1 rounded-lg">
              <img src="/images/logo1.png" alt="DictoX" className="h-6 w-auto object-contain" />
            </div>
            <span className="text-xs font-black uppercase tracking-wider text-white">Admin Control</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-700 px-2 py-0.5 rounded-md font-bold">
            {TENANT_ID}
          </span>
          <button
            onClick={handleLogout}
            className="p-1.5 rounded-lg text-red-400 hover:bg-red-950/60 cursor-pointer"
            title="Logout"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileSidebarOpen && (
        <div
          onClick={() => setMobileSidebarOpen(false)}
          className="md:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
        />
      )}

      {/* ========================================================= */}
      {/* RESPONSIVE SIDEBAR NAVIGATION */}
      {/* ========================================================= */}
      <aside
        className={`
          fixed md:sticky top-0 bottom-0 left-0 z-50 md:z-auto
          w-72 md:w-64 h-full md:h-screen
          bg-[#0d1527] border-r border-slate-800 flex flex-col justify-between shrink-0
          transition-transform duration-300 ease-in-out
          ${mobileSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div>
          {/* Brand Logo Header */}
          <div className="p-4 sm:p-5 border-b border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-xl shadow-xs shrink-0">
                <img src="/images/logo1.png" alt="DictoX" className="h-7 w-auto object-contain" />
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-white">
                  Admin Control
                </div>
                <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-800 px-1.5 py-0.2 rounded">
                  tenant: {TENANT_ID}
                </span>
              </div>
            </div>

            {/* Mobile close button inside drawer */}
            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Menu */}
          <nav className="p-3 space-y-1.5">
            <button
              onClick={() => {
                setActiveTab('inquiries');
                setMobileSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'inquiries'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4" />
                <span>Inquiries CRM</span>
              </div>
              {newCount > 0 && (
                <span className="px-1.5 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-mono">
                  {newCount}
                </span>
              )}
            </button>

            <button
              onClick={() => {
                setActiveTab('results');
                setMobileSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'results'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Trophy className="w-4 h-4" />
                <span>Results / Case Studies</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </button>

            <button
              onClick={() => {
                setActiveTab('brands');
                setMobileSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'brands'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4" />
                <span>Brand Logo Upload</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </button>

            <button
              onClick={() => {
                setActiveTab('footer');
                setMobileSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'footer'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Settings className="w-4 h-4" />
                <span>Footer & Agency Info</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </button>
          </nav>
        </div>

        {/* Sidebar Footer User Info */}
        <div className="p-3.5 border-t border-slate-800 bg-[#0a0f1d] space-y-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
              SM
            </div>
            <div className="text-left leading-tight truncate">
              <div className="text-xs font-bold text-white truncate">Suresh More</div>
              <div className="text-[10px] text-slate-400 truncate">{ADMIN_EMAIL}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-1.5 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-semibold flex items-center justify-center gap-1"
            >
              <span>View Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={handleLogout}
              className="py-1.5 px-3 rounded-lg bg-red-900/30 hover:bg-red-600 text-red-300 hover:text-white text-[11px] font-bold transition-colors cursor-pointer flex items-center gap-1"
            >
              <LogOut className="w-3 h-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>

      </aside>

      {/* ========================================================= */}
      {/* MAIN CONTENT AREA */}
      {/* ========================================================= */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* Top Header Bar */}
        <header className="bg-[#0f172a] border-b border-slate-800 px-4 sm:px-6 py-3.5 sticky top-0 z-30 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-base sm:text-lg font-black text-white font-display flex items-center gap-2">
              {activeTab === 'inquiries' && 'Inquiries & Leads Management'}
              {activeTab === 'results' && 'Manage Live Campaign Results'}
              {activeTab === 'brands' && 'Manage Trusted Brand Wall'}
              {activeTab === 'footer' && 'Dynamic Footer & Agency Settings'}
            </h2>
            <p className="text-[11px] text-slate-400">
              Changes sync directly to Firestore under tenant: <code className="text-blue-400 font-bold">{TENANT_ID}</code>
            </p>
          </div>

          {activeTab === 'inquiries' && (
            <div className="flex items-center gap-2">
              <button
                onClick={loadInquiries}
                disabled={isLoadingInquiries}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 flex items-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isLoadingInquiries ? 'animate-spin' : ''}`} />
                <span className="hidden sm:inline">Refresh</span>
              </button>

              <button
                onClick={exportToCSV}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline">Export CSV</span>
              </button>

              <button
                onClick={handleCreateTestLead}
                className="px-3 py-1.5 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/40 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>+ Test Lead</span>
              </button>
            </div>
          )}

          {activeTab === 'results' && (
            <button
              onClick={() => setShowAddResultModal(true)}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Result</span>
            </button>
          )}
        </header>

        {/* Tab Content Body */}
        <div className="p-4 sm:p-6 space-y-6">
          
          {/* ===================================================== */}
          {/* TAB 1: INQUIRIES MANAGEMENT */}
          {/* ===================================================== */}
          {activeTab === 'inquiries' && (
            <div className="space-y-5">
              
              {/* Stats Counters */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-4 shadow-sm">
                  <div className="text-xs text-slate-400 font-semibold mb-1">Total Inquiries</div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-display">{totalCount}</div>
                  <div className="text-[11px] text-slate-500 mt-1">tenant: {TENANT_ID}</div>
                </div>

                <div className="bg-[#0f172a] border border-emerald-900/40 rounded-2xl p-4 shadow-sm">
                  <div className="text-xs text-emerald-400 font-semibold mb-1">New / Uncontacted</div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-display">{newCount}</div>
                  <div className="text-[11px] text-slate-500 mt-1">Requires follow-up</div>
                </div>

                <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-4 shadow-sm">
                  <div className="text-xs text-blue-400 font-semibold mb-1">In-Discussion</div>
                  <div className="text-2xl sm:text-3xl font-black text-blue-400 font-display">{contactedCount}</div>
                  <div className="text-[11px] text-slate-500 mt-1">Active communication</div>
                </div>

                <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-4 shadow-sm">
                  <div className="text-xs text-purple-400 font-semibold mb-1">Converted Clients</div>
                  <div className="text-2xl sm:text-3xl font-black text-purple-400 font-display">{convertedCount}</div>
                  <div className="text-[11px] text-slate-500 mt-1">Active ad accounts</div>
                </div>
              </div>

              {/* Search & Filter Toolbar */}
              <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-3 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-3">
                <div className="relative w-full md:w-80">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, phone, email, business..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
                  {['All', 'New', 'Contacted', 'In-Discussion', 'Converted', 'Closed'].map((st) => (
                    <button
                      key={st}
                      onClick={() => setStatusFilter(st)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        statusFilter === st
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Inquiries Card View (for mobile phones and small screens) */}
              <div className="md:hidden space-y-3">
                {isLoadingInquiries ? (
                  <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-8 text-center text-slate-400">
                    <RefreshCw className="w-5 h-5 animate-spin mx-auto text-blue-400 mb-2" />
                    <span className="text-xs">Fetching inquiries from Firestore...</span>
                  </div>
                ) : filteredInquiries.length === 0 ? (
                  <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 text-center text-slate-400">
                    <p className="text-sm font-semibold text-slate-300">No Inquiries Found</p>
                    <p className="text-xs text-slate-500 mt-1">Inquiries submitted will appear here.</p>
                  </div>
                ) : (
                  filteredInquiries.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#0f172a] border border-slate-800 rounded-2xl p-4 space-y-3 shadow-md"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="font-bold text-white text-sm">{item.name || 'Anonymous Lead'}</div>
                          <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                            <Building2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                            <span>{item.businessName || 'Business not specified'}</span>
                          </div>
                        </div>

                        <select
                          value={item.status || 'New'}
                          onChange={(e) => handleStatusChange(item, e.target.value)}
                          className={`text-xs font-bold px-2 py-1 rounded-lg border focus:outline-none transition-colors cursor-pointer ${
                            item.status === 'Converted'
                              ? 'bg-purple-900/40 text-purple-300 border-purple-700'
                              : item.status === 'Contacted'
                              ? 'bg-blue-900/40 text-blue-300 border-blue-700'
                              : item.status === 'In-Discussion'
                              ? 'bg-amber-900/40 text-amber-300 border-amber-700'
                              : item.status === 'Closed'
                              ? 'bg-slate-800 text-slate-400 border-slate-700'
                              : 'bg-emerald-900/40 text-emerald-300 border-emerald-700'
                          }`}
                        >
                          <option value="New">🟢 New</option>
                          <option value="Contacted">🔵 Contacted</option>
                          <option value="In-Discussion">🟡 In-Discussion</option>
                          <option value="Converted">🟣 Converted</option>
                          <option value="Closed">⚪ Closed</option>
                        </select>
                      </div>

                      {/* 1-Tap Fast Contact Actions */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        {item.phone ? (
                          <a
                            href={`https://wa.me/91${item.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(item.name || '')}%2C%20this%20is%20Suresh%20More%20from%20DictoX%20Marketing.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2 px-3 rounded-xl bg-[#00a63e] hover:bg-[#008f35] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>WhatsApp</span>
                          </a>
                        ) : null}
                        {item.phone ? (
                          <a
                            href={`tel:${item.phone}`}
                            className="py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>Call Lead</span>
                          </a>
                        ) : null}
                      </div>

                      {/* Key details */}
                      <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 border-t border-slate-800/80">
                        <div>
                          <span className="text-slate-500 block">Industry:</span>
                          <span className="text-slate-200 font-semibold">{item.industry || 'General'}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Target Budget:</span>
                          <span className="text-emerald-400 font-bold">{item.budget || '₹50k - ₹1L'}</span>
                        </div>
                      </div>

                      {item.email && (
                        <div className="text-[11px] text-slate-400 truncate">
                          <span className="text-slate-500">Email: </span>
                          <a href={`mailto:${item.email}`} className="text-slate-300 hover:text-white underline">
                            {item.email}
                          </a>
                        </div>
                      )}

                      {/* Footer info & delete */}
                      <div className="flex items-center justify-between pt-1 border-t border-slate-800/80 text-[11px]">
                        <span className="text-slate-500">
                          {item.submittedAt ? new Date(item.submittedAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' }) : 'Recent'}
                        </span>

                        <div className="flex items-center gap-2">
                          {item.message && (
                            <button
                              onClick={() => setSelectedInquiry(item)}
                              className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
                            >
                              <ExternalLink className="w-3 h-3" />
                              <span>View Note</span>
                            </button>
                          )}
                          <button
                            onClick={() => handleDeleteInquiry(item)}
                            className="text-red-400 hover:text-red-300 font-bold flex items-center gap-1"
                          >
                            <Trash2 className="w-3 h-3" />
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Desktop Table View (visible on md screens and up) */}
              <div className="hidden md:block bg-[#0f172a] border border-slate-800 rounded-2xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[900px]">
                    <thead>
                      <tr className="border-b border-slate-800 bg-slate-800/40 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        <th className="py-3 px-4">Lead / Business</th>
                        <th className="py-3 px-4">Contact Info</th>
                        <th className="py-3 px-4">Industry & Service</th>
                        <th className="py-3 px-4">Budget Range</th>
                        <th className="py-3 px-4">Date Received</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-xs">
                      {isLoadingInquiries ? (
                        <tr>
                          <td colSpan={7} className="py-12 text-center text-slate-400">
                            <RefreshCw className="w-5 h-5 animate-spin mx-auto text-blue-400 mb-2" />
                            <span>Fetching inquiries from Firestore (tenants/{TENANT_ID})...</span>
                          </td>
                        </tr>
                      ) : filteredInquiries.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="py-12 text-center text-slate-400">
                            <p className="text-sm font-semibold text-slate-300">No Inquiries Found</p>
                            <p className="text-xs text-slate-500 mt-0.5">
                              Inquiries submitted through the website or modal will appear here.
                            </p>
                          </td>
                        </tr>
                      ) : (
                        filteredInquiries.map((item) => (
                          <tr key={item.id} className="hover:bg-slate-800/40 transition-colors">
                            <td className="py-3.5 px-4">
                              <div className="font-bold text-white text-sm">{item.name || 'Anonymous Lead'}</div>
                              <div className="text-[11px] text-slate-400 font-medium flex items-center gap-1 mt-0.5">
                                <Building2 className="w-3 h-3 text-slate-500 shrink-0" />
                                <span>{item.businessName || 'Not specified'}</span>
                              </div>
                            </td>

                            <td className="py-3.5 px-4 space-y-1">
                              <div className="flex items-center gap-2">
                                <a href={`tel:${item.phone}`} className="font-bold text-slate-200 hover:text-blue-400 flex items-center gap-1">
                                  <Phone className="w-3 h-3 text-slate-400" />
                                  <span>{item.phone}</span>
                                </a>
                                {item.phone && (
                                  <a
                                    href={`https://wa.me/91${item.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(item.name || '')}%2C%20this%20is%20Suresh%20More%20from%20DictoX%20Marketing.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1 rounded-md bg-[#00a63e]/20 text-[#00a63e] hover:bg-[#00a63e] hover:text-white transition-colors"
                                    title="WhatsApp Lead Directly"
                                  >
                                    <MessageSquare className="w-3 h-3" />
                                  </a>
                                )}
                              </div>
                              {item.email && (
                                <a href={`mailto:${item.email}`} className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1">
                                  <Mail className="w-3 h-3 text-slate-500" />
                                  <span className="truncate max-w-[180px]">{item.email}</span>
                                </a>
                              )}
                            </td>

                            <td className="py-3.5 px-4">
                              <div className="text-slate-200 font-semibold">{item.industry || 'General'}</div>
                              <div className="text-[11px] text-slate-400">{item.service || 'Performance Marketing'}</div>
                            </td>

                            <td className="py-3.5 px-4">
                              <span className="inline-block px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 font-semibold text-[11px] border border-slate-700/80">
                                {item.budget || '₹50k - ₹1L'}
                              </span>
                            </td>

                            <td className="py-3.5 px-4 text-slate-400 text-[11px] whitespace-nowrap">
                              {item.submittedAt ? new Date(item.submittedAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'Recent'}
                            </td>

                            <td className="py-3.5 px-4">
                              <select
                                value={item.status || 'New'}
                                onChange={(e) => handleStatusChange(item, e.target.value)}
                                className={`text-xs font-bold px-2 py-1 rounded-lg border focus:outline-none transition-colors cursor-pointer ${
                                  item.status === 'Converted'
                                    ? 'bg-purple-900/40 text-purple-300 border-purple-700'
                                    : item.status === 'Contacted'
                                    ? 'bg-blue-900/40 text-blue-300 border-blue-700'
                                    : item.status === 'In-Discussion'
                                    ? 'bg-amber-900/40 text-amber-300 border-amber-700'
                                    : item.status === 'Closed'
                                    ? 'bg-slate-800 text-slate-400 border-slate-700'
                                    : 'bg-emerald-900/40 text-emerald-300 border-emerald-700'
                                }`}
                              >
                                <option value="New">🟢 New</option>
                                <option value="Contacted">🔵 Contacted</option>
                                <option value="In-Discussion">🟡 In-Discussion</option>
                                <option value="Converted">🟣 Converted</option>
                                <option value="Closed">⚪ Closed</option>
                              </select>
                            </td>

                            <td className="py-3.5 px-4 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                {item.message && (
                                  <button
                                    onClick={() => setSelectedInquiry(item)}
                                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                                    title="View Notes"
                                  >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                  </button>
                                )}
                                <button
                                  onClick={() => handleDeleteInquiry(item)}
                                  className="p-1.5 rounded-lg bg-red-900/20 hover:bg-red-600 text-red-400 hover:text-white transition-colors"
                                  title="Delete Inquiry"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* ===================================================== */}
          {/* TAB 2: DYNAMIC RESULTS / CASE STUDIES */}
          {/* ===================================================== */}
          {activeTab === 'results' && (
            <div className="space-y-5">
              
              <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-white">Live Campaign Results</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Any result added here is saved under <code className="text-emerald-400">tenants/{TENANT_ID}/results</code> and immediately displays on the homepage & /results page!
                  </p>
                </div>
                <button
                  onClick={() => setShowAddResultModal(true)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Campaign Result</span>
                </button>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {resultsList.length === 0 ? (
                  <div className="col-span-full py-12 text-center bg-[#0f172a] border border-slate-800 rounded-2xl p-6">
                    <Trophy className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                    <p className="text-sm font-bold text-slate-300">No custom results added yet</p>
                    <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                      Click "+ Add Campaign Result" to publish verified campaign results directly to the website.
                    </p>
                  </div>
                ) : (
                  resultsList.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#0f172a] border border-slate-800 rounded-2xl p-4 shadow-sm flex flex-col justify-between group hover:border-slate-700 transition-all"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded-full">
                            {item.duration || '30 Days'}
                          </span>
                          <button
                            onClick={() => handleDeleteResult(item.id)}
                            className="p-1 rounded-lg bg-red-900/20 hover:bg-red-600 text-red-400 hover:text-white transition-colors"
                            title="Delete this result"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <h4 className="text-sm font-bold text-white leading-tight">
                          {item.title}
                        </h4>
                        <div className="text-xs text-blue-400 font-semibold mt-0.5">
                          {item.industry}
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                          {item.objective}
                        </p>

                        {/* Metrics Bar */}
                        <div className="grid grid-cols-3 gap-1 py-2 px-2 bg-slate-800/80 rounded-xl mt-3 text-center border border-slate-700">
                          <div>
                            <div className="text-[9px] text-slate-400 uppercase">Spend</div>
                            <div className="text-xs font-bold text-white">{item.spend}</div>
                          </div>
                          <div className="border-x border-slate-700">
                            <div className="text-[9px] text-slate-400 uppercase">Leads</div>
                            <div className="text-xs font-black text-blue-400">{item.leads}</div>
                          </div>
                          <div>
                            <div className="text-[9px] text-slate-400 uppercase">CPL</div>
                            <div className="text-xs font-black text-emerald-400">{item.cpl}</div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 pt-2 border-t border-slate-800 text-[11px] text-slate-400 font-medium">
                        Outcome: <span className="text-slate-200">{item.keyOutcome}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>

            </div>
          )}

          {/* ===================================================== */}
          {/* TAB 3: DYNAMIC BRAND LOGOS */}
          {/* ===================================================== */}
          {activeTab === 'brands' && (
            <div className="space-y-5">
              
              {/* Add Brand Form */}
              <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                      <Award className="w-4 h-4 text-emerald-400" />
                      <span>Upload & Add Brand to Live Marquee</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Upload client brand logos or typography. Changes instantly reflect on the public homepage marquee under tenant <code className="text-blue-400">{TENANT_ID}</code>.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleAddBrand} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Brand Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Brand / Client Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={newBrandName}
                        onChange={(e) => setNewBrandName(e.target.value)}
                        placeholder="e.g. Tata Motors, Godrej, Kalyan Jewellers..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    {/* Typography color (fallback if no logo image) */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Text Brand Color Style (Fallback)
                      </label>
                      <select
                        value={newBrandColor}
                        onChange={(e) => setNewBrandColor(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="text-slate-800">Slate / Charcoal</option>
                        <option value="text-blue-900">Royal Blue</option>
                        <option value="text-red-700">Red Brand</option>
                        <option value="text-amber-800">Gold / Amber</option>
                        <option value="text-teal-700">Teal / Emerald</option>
                        <option value="text-purple-700">Purple</option>
                      </select>
                    </div>
                  </div>

                  {/* Brand Logo Upload Box */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-200">
                        Brand Logo Image (Upload File or Enter URL)
                      </label>
                      <span className="text-[11px] text-emerald-400 font-semibold">
                        Supported: PNG, SVG, JPG, WebP
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
                      {/* Big Drag & Click Upload Box */}
                      <label className="flex flex-col items-center justify-center p-5 rounded-2xl border-2 border-dashed border-blue-500/50 hover:border-blue-400 bg-blue-950/20 hover:bg-blue-950/40 cursor-pointer transition-all group text-center active:scale-[0.98]">
                        <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                          <Upload className="w-6 h-6 text-blue-400" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-300">
                          Click to Upload Brand Logo Image
                        </span>
                        <span className="text-[11px] text-slate-400 mt-0.5">
                          Select image from laptop, mobile or PC (Max 2MB)
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleBrandLogoFile}
                          className="hidden"
                        />
                      </label>

                      {/* URL Fallback Input */}
                      <div className="space-y-2">
                        <span className="text-xs text-slate-400 block font-medium">
                          Or paste direct Image Link / URL:
                        </span>
                        <input
                          type="url"
                          value={brandLogoUrl}
                          onChange={(e) => setBrandLogoUrl(e.target.value)}
                          placeholder="https://example.com/brand-logo.png"
                          className="w-full px-3.5 py-3 rounded-xl bg-slate-800 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                        />
                        <p className="text-[11px] text-slate-500">
                          Transparent background logos (.png, .svg) blend smoothly in the marquee.
                        </p>
                      </div>
                    </div>

                    {/* Live Preview of Uploaded / Entered Logo */}
                    {(brandLogoPreview || brandLogoUrl) && (
                      <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3 animate-in fade-in">
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                          <span className="text-xs text-slate-400 shrink-0">Marquee Preview:</span>
                          <div className="bg-white px-3 py-1.5 rounded-xl shadow-md border border-slate-200 shrink-0">
                            <img
                              src={brandLogoPreview || brandLogoUrl}
                              alt="Brand Preview"
                              className="h-7 w-auto max-w-[130px] object-contain"
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                          </div>
                          <span className="text-xs font-bold text-white truncate">
                            {newBrandName || 'Your Brand Name'}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setBrandLogoPreview('');
                            setBrandLogoUrl('');
                          }}
                          className="text-xs text-red-400 hover:text-red-300 font-bold px-3 py-1.5 rounded-lg bg-red-950/40 border border-red-800/60 cursor-pointer self-end sm:self-auto"
                        >
                          Remove Logo
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-7 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Publish Brand Logo to Website</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Brands List */}
              <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Active Dynamic Brands ({brandsList.length})
                  </h4>
                  <button onClick={loadBrands} className="text-xs text-blue-400 hover:underline cursor-pointer">
                    Refresh List
                  </button>
                </div>

                {brandsList.length === 0 ? (
                  <p className="text-xs text-slate-500 py-6 text-center">
                    No custom brands added yet. Default certified brands are displayed in the marquee. Add a brand logo above to see it live!
                  </p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {brandsList.map((brand) => (
                      <div
                        key={brand.id}
                        className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between gap-3 group hover:border-slate-600 transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          {brand.logoUrl ? (
                            <div className="bg-white p-1 rounded-md shrink-0 border border-slate-200">
                              <img
                                src={brand.logoUrl}
                                alt={brand.name}
                                className="h-6 w-auto max-w-[80px] object-contain"
                              />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-md bg-blue-900/50 text-blue-300 font-bold text-xs flex items-center justify-center shrink-0">
                              Aa
                            </div>
                          )}
                          <div className="min-w-0">
                            <span className="text-xs font-bold text-white block truncate">
                              {brand.name}
                            </span>
                            <span className="text-[10px] text-slate-400">
                              {brand.logoUrl ? 'Logo Image' : 'Typography'}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDeleteBrand(brand.id)}
                          className="text-slate-400 hover:text-red-400 transition-colors p-1 cursor-pointer"
                          title="Delete brand"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          )}

          {/* ===================================================== */}
          {/* TAB 4: DYNAMIC FOOTER & AGENCY SETTINGS */}
          {/* ===================================================== */}
          {activeTab === 'footer' && (
            <div className="max-w-3xl space-y-5">
              
              <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-4 sm:p-6">
                <div className="border-b border-slate-800 pb-3 mb-4">
                  <h3 className="text-base font-bold text-white">Live Footer & Contact Details</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Update phone, address, and social links. Saved directly to <code className="text-emerald-400">tenants/{TENANT_ID}/settings/global</code>.
                  </p>
                </div>

                <form onSubmit={handleSaveSettings} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Primary Phone Number
                      </label>
                      <input
                        type="text"
                        value={settings.phone1}
                        onChange={(e) => setSettings({ ...settings, phone1: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Secondary Phone Number
                      </label>
                      <input
                        type="text"
                        value={settings.phone2}
                        onChange={(e) => setSettings({ ...settings, phone2: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Official Email Address
                      </label>
                      <input
                        type="email"
                        value={settings.email}
                        onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        WhatsApp Number (without +)
                      </label>
                      <input
                        type="text"
                        value={settings.whatsapp}
                        onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Headquarters Address
                    </label>
                    <input
                      type="text"
                      value={settings.address}
                      onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Working Hours
                    </label>
                    <input
                      type="text"
                      value={settings.hours}
                      onChange={(e) => setSettings({ ...settings, hours: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Instagram Profile Link
                      </label>
                      <input
                        type="url"
                        value={settings.instagram}
                        onChange={(e) => setSettings({ ...settings, instagram: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Facebook Page Link
                      </label>
                      <input
                        type="url"
                        value={settings.facebook}
                        onChange={(e) => setSettings({ ...settings, facebook: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Agency Tagline / Bio in Footer
                    </label>
                    <textarea
                      rows={2}
                      value={settings.tagline}
                      onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSavingSettings}
                      className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
                    >
                      {isSavingSettings ? <span>Saving...</span> : <><Check className="w-4 h-4" /><span>Save & Publish Live</span></>}
                    </button>
                  </div>
                </form>
              </div>

            </div>
          )}

        </div>
      </div>

      {/* ========================================================= */}
      {/* MODAL: ADD CAMPAIGN RESULT */}
      {/* ========================================================= */}
      {showAddResultModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
          <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 max-w-lg w-full shadow-2xl relative animate-in zoom-in-95 duration-150">
            <h3 className="text-base font-bold text-white mb-1">
              Add Verified Campaign Result
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Saved under tenant <code className="text-blue-400">{TENANT_ID}</code> and published to website.
            </p>

            <form onSubmit={handleAddResult} className="space-y-3 text-left">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Title / Client Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pune Luxury Real Estate Launch"
                  value={newResult.title}
                  onChange={(e) => setNewResult({ ...newResult, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Industry</label>
                  <input
                    type="text"
                    value={newResult.industry}
                    onChange={(e) => setNewResult({ ...newResult, industry: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Duration</label>
                  <input
                    type="text"
                    placeholder="e.g. 30 Days"
                    value={newResult.duration}
                    onChange={(e) => setNewResult({ ...newResult, duration: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Ad Spend</label>
                  <input
                    type="text"
                    placeholder="₹50,000"
                    value={newResult.spend}
                    onChange={(e) => setNewResult({ ...newResult, spend: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Leads</label>
                  <input
                    type="text"
                    placeholder="412"
                    value={newResult.leads}
                    onChange={(e) => setNewResult({ ...newResult, leads: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Cost/Lead</label>
                  <input
                    type="text"
                    placeholder="₹121"
                    value={newResult.cpl}
                    onChange={(e) => setNewResult({ ...newResult, cpl: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Key Outcome</label>
                <input
                  type="text"
                  placeholder="e.g. 38 Confirmed Site Visits and 14 Token Bookings"
                  value={newResult.keyOutcome}
                  onChange={(e) => setNewResult({ ...newResult, keyOutcome: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white"
                />
              </div>

              {/* Image upload & presets */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
                <label className="block text-xs font-semibold text-slate-200">
                  Case Study / Campaign Graphic Image
                </label>
                
                {/* Presets */}
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { label: 'Real Estate', url: '/images/real_estate.jpg' },
                    { label: 'Education', url: '/images/education.jpg' },
                    { label: 'Restaurant', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80' },
                    { label: 'Healthcare', url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80' },
                  ].map((preset) => (
                    <button
                      type="button"
                      key={preset.label}
                      onClick={() => setNewResult({ ...newResult, image: preset.url })}
                      className={`text-[11px] px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
                        newResult.image === preset.url
                          ? 'bg-blue-600 border-blue-500 text-white font-bold'
                          : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {/* Upload file */}
                  <label className="flex items-center justify-center gap-2 p-3 rounded-xl border-2 border-dashed border-blue-500/40 hover:border-blue-400 bg-blue-950/20 hover:bg-blue-950/30 cursor-pointer text-xs font-bold text-white transition-all active:scale-[0.98]">
                    <Upload className="w-4 h-4 text-blue-400" />
                    <span>Upload Image File</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleResultImageUpload}
                      className="hidden"
                    />
                  </label>

                  {/* Custom URL */}
                  <input
                    type="text"
                    placeholder="Or enter Image URL"
                    value={newResult.image}
                    onChange={(e) => setNewResult({ ...newResult, image: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Live Preview */}
                {newResult.image && (
                  <div className="relative h-24 rounded-lg overflow-hidden border border-slate-700 bg-slate-950">
                    <img
                      src={newResult.image}
                      alt="Result preview"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/images/real_estate.jpg';
                      }}
                    />
                    <div className="absolute bottom-1 right-2 text-[10px] bg-slate-900/80 px-2 py-0.5 rounded text-slate-300 font-mono">
                      Image Preview
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddResultModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md cursor-pointer"
                >
                  Publish Result
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Inquiry Detail Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
          <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 max-w-lg w-full shadow-2xl relative animate-in zoom-in-95 duration-150">
            <h3 className="text-base font-bold text-white mb-2">
              Lead Requirements & Message
            </h3>
            <div className="p-3.5 rounded-xl bg-slate-800 text-slate-200 text-xs leading-relaxed whitespace-pre-wrap">
              {selectedInquiry.message || 'No additional message provided.'}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-[11px] text-slate-400">
                Source: <span className="text-slate-200">{selectedInquiry.source || 'Website'}</span>
              </div>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
