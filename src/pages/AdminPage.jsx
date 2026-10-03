import React, { useState, useEffect } from 'react';
import {
  Lock, Mail, Eye, EyeOff, ShieldCheck, RefreshCw, Download,
  Search, Trash2, Phone, MessageSquare, LogOut, CheckCircle2,
  Building2, Sparkles, ExternalLink, ChevronRight, Plus,
  Trophy, Award, Settings, Check, AlertCircle, Upload,
  Menu, X, Pencil, BarChart2, ImageIcon, Home
} from 'lucide-react';
import {
  fetchTenantInquiries, updateInquiryStatus, deleteTenantInquiry, saveTenantInquiry,
  fetchTenantResults, saveTenantResult, updateTenantResult, deleteTenantResult,
  fetchTenantBrands, saveTenantBrand, updateTenantBrand, deleteTenantBrand,
  fetchTenantSettings, saveTenantSettings, DEFAULT_SETTINGS, TENANT_ID
} from '../firebase';

// ─── Shared Input Styles ───────────────────────────────────────────────────────
const inp = "w-full px-3 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors";
const btn = "px-4 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50";

// ─── Status badge colour helper ────────────────────────────────────────────────
function statusClass(status) {
  if (status === 'Converted')    return 'bg-purple-900/50 text-purple-300 border-purple-700';
  if (status === 'Contacted')    return 'bg-blue-900/50 text-blue-300 border-blue-700';
  if (status === 'In-Discussion')return 'bg-amber-900/50 text-amber-300 border-amber-700';
  if (status === 'Closed')       return 'bg-slate-800 text-slate-400 border-slate-700';
  return 'bg-emerald-900/50 text-emerald-300 border-emerald-700';
}

export default function AdminPage() {
  // ── Auth ──────────────────────────────────────────────────────────────────
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    localStorage.getItem('dictox_admin_auth') === 'true'
  );
  const [loginEmail, setLoginEmail]     = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError]     = useState('');
  const [isLoggingIn, setIsLoggingIn]   = useState(false);

  const ADMIN_EMAIL    = 'Sureshmore.co@gmail.com';
  const ADMIN_PASSWORD = '148643@123';

  // ── Navigation ────────────────────────────────────────────────────────────
  const [activeTab, setActiveTab]           = useState('inquiries');
  const [mobileSidebarOpen, setMobileOpen]  = useState(false);

  // ── Inquiries ─────────────────────────────────────────────────────────────
  const [inquiries, setInquiries]             = useState([]);
  const [isLoadingInq, setIsLoadingInq]       = useState(false);
  const [searchQuery, setSearchQuery]         = useState('');
  const [statusFilter, setStatusFilter]       = useState('All');
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  // ── Results ───────────────────────────────────────────────────────────────
  const [resultsList, setResultsList]         = useState([]);
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [showAddResult, setShowAddResult]     = useState(false);
  const [showEditResult, setShowEditResult]   = useState(false);
  const [newResult, setNewResult] = useState({
    title: '', industry: 'Real Estate Developer',
    objective: 'High-Value Site Visits & Inquiries',
    spend: '₹50,000', leads: '412', cpl: '₹121',
    duration: '30 Days', keyOutcome: '38 Confirmed Bookings',
    image: '/images/real_estate.jpg',
  });
  const [editResultForm, setEditResultForm] = useState({
    id: '', title: '', industry: '', objective: '',
    spend: '', leads: '', cpl: '', duration: '', keyOutcome: '', image: '',
  });

  // ── Brands ────────────────────────────────────────────────────────────────
  const [brandsList, setBrandsList]       = useState([]);
  const [isLoadingBrands, setIsLoadingBrands] = useState(false);
  const [newBrandName, setNewBrandName]   = useState('');
  const [newBrandColor, setNewBrandColor] = useState('text-slate-900');
  const [brandLogoPreview, setBrandLogoPreview] = useState('');
  const [brandLogoUrl, setBrandLogoUrl]   = useState('');
  const [showEditBrand, setShowEditBrand] = useState(false);
  const [editingBrand, setEditingBrand]   = useState(null);
  const [editBrandForm, setEditBrandForm] = useState({ name: '', logoUrl: '', color: 'text-slate-800' });
  const [editBrandPreview, setEditBrandPreview] = useState('');

  // ── Settings ──────────────────────────────────────────────────────────────
  const [settings, setSettings]           = useState(DEFAULT_SETTINGS);
  const [isSavingSettings, setIsSavingSettings] = useState(false);

  // ── Toast ─────────────────────────────────────────────────────────────────
  const [toast, setToast] = useState('');
  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(''), 3500); };

  // ══════════════════════════════════════════════════════════════════════════
  // File upload helpers
  // ══════════════════════════════════════════════════════════════════════════
  const readFile = (file, maxMB, cb) => {
    if (file.size > maxMB * 1024 * 1024) { alert(`Max ${maxMB}MB allowed.`); return; }
    const r = new FileReader();
    r.onloadend = () => cb(r.result);
    r.readAsDataURL(file);
  };

  // ══════════════════════════════════════════════════════════════════════════
  // Auth
  // ══════════════════════════════════════════════════════════════════════════
  const handleLogin = (e) => {
    e.preventDefault(); setLoginError(''); setIsLoggingIn(true);
    setTimeout(() => {
      if (loginEmail.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase() && loginPassword === ADMIN_PASSWORD) {
        setIsAuthenticated(true);
        localStorage.setItem('dictox_admin_auth', 'true');
        showToast('Welcome back, Suresh!');
      } else {
        setLoginError('Invalid email or password.');
      }
      setIsLoggingIn(false);
    }, 350);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('dictox_admin_auth');
    setLoginEmail(''); setLoginPassword('');
  };

  // ══════════════════════════════════════════════════════════════════════════
  // Data loaders
  // ══════════════════════════════════════════════════════════════════════════
  const loadInquiries = async () => {
    setIsLoadingInq(true);
    try { setInquiries(await fetchTenantInquiries()); }
    catch (e) { console.error(e); }
    finally { setIsLoadingInq(false); }
  };

  const loadResults = async () => {
    setIsLoadingResults(true);
    try { setResultsList(await fetchTenantResults()); }
    catch (e) { console.error(e); }
    finally { setIsLoadingResults(false); }
  };

  const loadBrands = async () => {
    setIsLoadingBrands(true);
    try { setBrandsList(await fetchTenantBrands()); }
    catch (e) { console.error(e); }
    finally { setIsLoadingBrands(false); }
  };

  const loadSettings = async () => {
    try { setSettings(await fetchTenantSettings()); } catch (e) { console.error(e); }
  };

  useEffect(() => {
    if (isAuthenticated) { loadInquiries(); loadResults(); loadBrands(); loadSettings(); }
  }, [isAuthenticated]);

  // ══════════════════════════════════════════════════════════════════════════
  // Inquiry handlers
  // ══════════════════════════════════════════════════════════════════════════
  const handleStatusChange = async (item, val) => {
    const ok = await updateInquiryStatus(item.id, val, item.collectionPath);
    if (ok) { setInquiries(p => p.map(i => i.id === item.id ? { ...i, status: val } : i)); showToast(`Status → "${val}"`); }
  };

  const handleDeleteInquiry = async (item) => {
    if (!window.confirm(`Delete inquiry from ${item.name || 'this lead'}?`)) return;
    const ok = await deleteTenantInquiry(item.id, item.collectionPath);
    if (ok) { setInquiries(p => p.filter(i => i.id !== item.id)); if (selectedInquiry?.id === item.id) setSelectedInquiry(null); showToast('Inquiry deleted.'); }
  };

  const handleCreateTestLead = async () => {
    await saveTenantInquiry({ name: 'Demo Lead (Pune Real Estate)', phone: '9834036821', email: 'demo@dictoxclient.com', businessName: 'Skyline Luxury Homes', industry: 'Real Estate', service: 'Meta Ads (Facebook & Instagram)', budget: '₹1,00,000 - ₹3,00,000', message: 'Need 50+ qualified site visit inquiries every month.', source: 'admin_test' });
    await loadInquiries();
    showToast('Test lead added!');
  };

  const exportToCSV = () => {
    if (!inquiries.length) { alert('No inquiries to export.'); return; }
    const h = ['Name','Phone','Email','Business','Industry','Service','Budget','Status','Date','Message'];
    const rows = inquiries.map(i => [`"${i.name||''}"`,`"${i.phone||''}"`,`"${i.email||''}"`,`"${i.businessName||''}"`,`"${i.industry||''}"`,`"${i.service||''}"`,`"${i.budget||''}"`,`"${i.status||'New'}"`,`"${i.submittedAt||''}"`,`"${(i.message||'').replace(/"/g,'""')}"`]);
    const csv = 'data:text/csv;charset=utf-8,' + [h.join(','), ...rows.map(r => r.join(','))].join('\n');
    const a = document.createElement('a'); a.href = encodeURI(csv); a.download = `inquiries_${new Date().toISOString().slice(0,10)}.csv`; document.body.appendChild(a); a.click(); a.remove();
    showToast('CSV exported.');
  };

  const filteredInquiries = inquiries.filter(i => {
    const q = searchQuery.toLowerCase();
    const m = (i.name||'').toLowerCase().includes(q) || (i.phone||'').includes(q) || (i.email||'').toLowerCase().includes(q) || (i.businessName||'').toLowerCase().includes(q);
    return m && (statusFilter === 'All' || i.status === statusFilter);
  });

  const totalCount     = inquiries.length;
  const newCount       = inquiries.filter(i => !i.status || i.status === 'New').length;
  const contactedCount = inquiries.filter(i => i.status === 'Contacted').length;
  const convertedCount = inquiries.filter(i => i.status === 'Converted').length;

  // ══════════════════════════════════════════════════════════════════════════
  // Result handlers
  // ══════════════════════════════════════════════════════════════════════════
  const resetNewResult = () => setNewResult({ title:'', industry:'Real Estate Developer', objective:'High-Value Site Visits & Inquiries', spend:'₹50,000', leads:'412', cpl:'₹121', duration:'30 Days', keyOutcome:'38 Confirmed Bookings', image:'/images/real_estate.jpg' });

  const handleAddResult = async (e) => {
    e.preventDefault();
    if (!newResult.title.trim()) { alert('Enter a title.'); return; }
    const r = await saveTenantResult(newResult);
    if (r.success) { showToast('Result published!'); setShowAddResult(false); resetNewResult(); loadResults(); }
  };

  const handleDeleteResult = async (id) => {
    if (!window.confirm('Delete this result?')) return;
    const ok = await deleteTenantResult(id);
    if (ok) { setResultsList(p => p.filter(r => r.id !== id)); showToast('Result deleted.'); }
  };

  const handleEditResult = (item) => {
    setEditResultForm({ id: item.id, title: item.title||'', industry: item.industry||'', objective: item.objective||'', spend: item.spend||'', leads: item.leads||'', cpl: item.cpl||'', duration: item.duration||'', keyOutcome: item.keyOutcome||'', image: item.image||'' });
    setShowEditResult(true);
  };

  const handleUpdateResult = async (e) => {
    e.preventDefault();
    const { id, ...data } = editResultForm;
    const ok = await updateTenantResult(id, data);
    if (ok) { showToast('Result updated!'); setShowEditResult(false); loadResults(); }
    else alert('Update failed.');
  };

  const imgPresets = [
    { label: 'Real Estate', url: '/images/real_estate.jpg' },
    { label: 'Education',   url: '/images/education.jpg' },
    { label: 'Restaurant',  url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80' },
    { label: 'Healthcare',  url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80' },
  ];

  // ══════════════════════════════════════════════════════════════════════════
  // Brand handlers
  // ══════════════════════════════════════════════════════════════════════════
  const handleAddBrand = async (e) => {
    e.preventDefault();
    const logo = brandLogoPreview || brandLogoUrl.trim() || null;
    if (!logo && !newBrandName.trim()) { showToast('Add a logo or brand name.'); return; }
    const r = await saveTenantBrand({ name: newBrandName.trim() || 'Client Logo', logoUrl: logo, color: newBrandColor, font: 'font-black tracking-wider text-xs sm:text-sm uppercase' });
    if (r.success) { showToast('Brand published!'); setNewBrandName(''); setBrandLogoPreview(''); setBrandLogoUrl(''); loadBrands(); }
  };

  const handleDeleteBrand = async (id) => {
    if (!window.confirm('Remove this brand?')) return;
    const ok = await deleteTenantBrand(id);
    if (ok) { setBrandsList(p => p.filter(b => b.id !== id)); showToast('Brand removed.'); }
  };

  const handleEditBrand = (b) => {
    setEditingBrand(b);
    setEditBrandForm({ name: b.name||'', logoUrl: b.logoUrl||'', color: b.color||'text-slate-800' });
    setEditBrandPreview(b.logoUrl||'');
    setShowEditBrand(true);
  };

  const handleUpdateBrand = async (e) => {
    e.preventDefault();
    const logo = editBrandPreview || editBrandForm.logoUrl.trim() || null;
    const ok = await updateTenantBrand(editingBrand.id, { name: editBrandForm.name.trim()||'Client Logo', logoUrl: logo, color: editBrandForm.color, font: 'font-black tracking-wider text-xs sm:text-sm uppercase' });
    if (ok) { showToast('Brand updated!'); setShowEditBrand(false); setEditingBrand(null); loadBrands(); }
    else alert('Update failed.');
  };

  // ══════════════════════════════════════════════════════════════════════════
  // Settings
  // ══════════════════════════════════════════════════════════════════════════
  const handleSaveSettings = async (e) => {
    e.preventDefault(); setIsSavingSettings(true);
    try { await saveTenantSettings(settings); showToast('Settings saved!'); }
    catch (err) { alert('Save failed: ' + err.message); }
    finally { setIsSavingSettings(false); }
  };

  const navItems = [
    { key: 'inquiries', label: 'Inquiries CRM',       Icon: MessageSquare, badge: newCount > 0 ? newCount : null },
    { key: 'results',   label: 'Results / Case Studies', Icon: Trophy },
    { key: 'brands',    label: 'Brand Logo Upload',   Icon: Award },
    { key: 'footer',    label: 'Footer & Agency Info',Icon: Settings },
  ];

  const goTo = (key) => { setActiveTab(key); setMobileOpen(false); };

  // ══════════════════════════════════════════════════════════════════════════
  // LOGIN SCREEN
  // ══════════════════════════════════════════════════════════════════════════
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#070b14] flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-sm bg-[#0f172a] border border-slate-800 rounded-3xl p-6 shadow-2xl relative z-10">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow mb-3">
              <img src="/images/logo2.png" alt="DictoX" className="h-8 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-emerald-400 uppercase tracking-widest mt-1">
              <ShieldCheck className="w-3.5 h-3.5" /><span>Admin Portal</span>
            </div>
            <h1 className="text-xl font-black text-white mt-1">Sign in to DictoX CRM</h1>
          </div>

          {loginError && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />{loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input type="email" required value={loginEmail} onChange={e => setLoginEmail(e.target.value)} placeholder="admin@example.com" className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input type={showPassword ? 'text' : 'password'} required value={loginPassword} onChange={e => setLoginPassword(e.target.value)} placeholder="Enter password" className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <button type="submit" disabled={isLoggingIn} className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] text-white font-bold text-sm shadow-lg transition-all cursor-pointer mt-2 disabled:opacity-60 flex items-center justify-center gap-2">
              {isLoggingIn ? 'Authenticating...' : <><Lock className="w-4 h-4" /><span>Access Admin Panel</span></>}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // MAIN ADMIN PANEL
  // ══════════════════════════════════════════════════════════════════════════
  return (
    <div className="h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans overflow-hidden">

      {/* ── Toast ─────────────────────────────────────────────────────────── */}
      {toast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-5 z-[100] bg-emerald-600 text-white px-4 py-2.5 rounded-2xl shadow-xl text-xs font-bold flex items-center gap-2 animate-in slide-in-from-top-3 duration-200 max-w-[90vw]">
          <CheckCircle2 className="w-4 h-4 shrink-0" /><span>{toast}</span>
        </div>
      )}

      {/* ── Mobile Top Bar ─────────────────────────────────────────────────── */}
      <div className="md:hidden sticky top-0 z-40 bg-[#0d1527] border-b border-slate-800 px-4 py-3 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2.5">
          <button onClick={() => setMobileOpen(!mobileSidebarOpen)} className="p-2 rounded-xl bg-slate-800 text-slate-200 hover:text-white border border-slate-700 cursor-pointer" aria-label="Menu">
            {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div className="bg-white p-1.5 rounded-lg">
            <img src="/images/logo2.png" alt="DictoX" className="h-5 w-auto object-contain" />
          </div>
          <span className="text-xs font-black uppercase tracking-wider text-white hidden xs:block">Admin</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/80 border border-emerald-700/80 px-2 py-0.5 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />Live
          </span>
          <button onClick={handleLogout} className="p-1.5 rounded-lg text-red-400 hover:bg-red-950/60 cursor-pointer" title="Logout">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Row: Sidebar + Main Content */}
      <div className="flex flex-1 min-h-0 relative">

        {/* Mobile Backdrop */}
        {mobileSidebarOpen && (
          <div onClick={() => setMobileOpen(false)} className="md:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm" />
        )}

      {/* ── Sidebar ────────────────────────────────────────────────────────── */}
      <aside className={`fixed md:sticky top-0 left-0 z-50 md:z-auto w-64 h-screen bg-[#0d1527] border-r border-slate-800 flex flex-col shrink-0 transition-transform duration-300 ease-in-out ${mobileSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:translate-x-0'}`}>

        {/* Logo Header — fixed top */}
        <div className="p-4 border-b border-slate-800/80 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1.5 rounded-xl shadow shrink-0">
              <img src="/images/logo2.png" alt="DictoX" className="h-7 w-auto object-contain" />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-white">Admin Control</div>
              <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded-full flex items-center gap-1 w-fit mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />Portal Active
              </span>
            </div>
          </div>
          <button onClick={() => setMobileOpen(false)} className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav — scrollable middle area */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {navItems.map(({ key, label, Icon, badge }) => (
            <button key={key} onClick={() => goTo(key)}
              className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === key ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white hover:bg-slate-800/60'}`}>
              <div className="flex items-center gap-2.5"><Icon className="w-4 h-4 shrink-0" /><span>{label}</span></div>
              {badge ? <span className="px-1.5 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-mono shrink-0">{badge}</span>
                : <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />}
            </button>
          ))}
        </nav>

        {/* Sidebar Footer — pinned bottom */}
        <div className="p-3.5 border-t border-slate-800 bg-[#0a0f1d] space-y-2 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs shrink-0">SM</div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-white truncate">Suresh More</div>
              <div className="text-[10px] text-slate-400 truncate">{ADMIN_EMAIL}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 pt-1">
            <a href="/" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-1.5 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors">
              <span>View Site</span><ExternalLink className="w-3 h-3" />
            </a>
            <button onClick={handleLogout} className="py-1.5 px-3 rounded-lg bg-red-900/30 hover:bg-red-600 text-red-300 hover:text-white text-[11px] font-bold transition-colors cursor-pointer flex items-center gap-1">
              <LogOut className="w-3 h-3" /><span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* ── Main Content ──────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto overflow-x-hidden">

        {/* Top Header */}
        <header className="bg-[#0f172a] border-b border-slate-800 px-4 sm:px-6 py-3.5 sticky top-0 z-30 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-sm sm:text-base font-black text-white truncate">
              {activeTab === 'inquiries' && 'Inquiries & Leads'}
              {activeTab === 'results'   && 'Campaign Results'}
              {activeTab === 'brands'    && 'Brand Logos'}
              {activeTab === 'footer'    && 'Footer & Agency Settings'}
            </h2>
            <p className="text-[11px] text-slate-500 hidden sm:block">
              Syncing to Firestore — tenant: <code className="text-blue-400 font-bold">{TENANT_ID}</code>
            </p>
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {activeTab === 'inquiries' && (<>
              <button onClick={loadInquiries} disabled={isLoadingInq} className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 flex items-center gap-1.5 cursor-pointer text-xs font-semibold transition-colors">
                <RefreshCw className={`w-3.5 h-3.5 ${isLoadingInq ? 'animate-spin' : ''}`} /><span className="hidden sm:inline">Refresh</span>
              </button>
              <button onClick={exportToCSV} className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 flex items-center gap-1.5 cursor-pointer text-xs font-semibold transition-colors">
                <Download className="w-3.5 h-3.5 text-emerald-400" /><span className="hidden sm:inline">Export CSV</span>
              </button>
              <button onClick={handleCreateTestLead} className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/40 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" /><span className="hidden sm:inline">Test Lead</span>
              </button>
            </>)}
            {activeTab === 'results' && (
              <button onClick={() => setShowAddResult(true)} className="px-3 py-2 sm:px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow transition-colors">
                <Plus className="w-4 h-4" /><span>Add Result</span>
              </button>
            )}
          </div>
        </header>

        {/* ── Tab Content ────────────────────────────────────────────────── */}
        <div className="p-4 sm:p-6 space-y-5 pb-10">

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* TAB 1: INQUIRIES */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          {activeTab === 'inquiries' && (
            <div className="space-y-4">

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Total', val: totalCount, color: 'text-white' },
                  { label: 'New', val: newCount, color: 'text-emerald-400' },
                  { label: 'In-Discussion', val: contactedCount, color: 'text-blue-400' },
                  { label: 'Converted', val: convertedCount, color: 'text-purple-400' },
                ].map(({ label, val, color }) => (
                  <div key={label} className="bg-[#0f172a] border border-slate-800 rounded-2xl p-4">
                    <div className="text-[11px] text-slate-400 font-semibold mb-1">{label}</div>
                    <div className={`text-2xl sm:text-3xl font-black font-display ${color}`}>{val}</div>
                  </div>
                ))}
              </div>

              {/* Search & Filter */}
              <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-3 flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search name, phone, email..." className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['All','New','Contacted','In-Discussion','Converted','Closed'].map(s => (
                    <button key={s} onClick={() => setStatusFilter(s)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${statusFilter === s ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'}`}>{s}</button>
                  ))}
                </div>
              </div>

              {/* Inquiries — Cards on mobile, Table on desktop */}
              {isLoadingInq ? (
                <div className="py-16 text-center"><RefreshCw className="w-6 h-6 animate-spin mx-auto text-blue-400 mb-2" /><p className="text-xs text-slate-400">Loading...</p></div>
              ) : filteredInquiries.length === 0 ? (
                <div className="py-16 text-center bg-[#0f172a] border border-slate-800 rounded-2xl">
                  <p className="text-sm font-bold text-slate-300">No Inquiries Found</p>
                  <p className="text-xs text-slate-500 mt-1">Submitted inquiries will appear here.</p>
                </div>
              ) : (<>
                {/* Mobile Cards */}
                <div className="md:hidden space-y-3">
                  {filteredInquiries.map(item => (
                    <div key={item.id} className="bg-[#0f172a] border border-slate-800 rounded-2xl p-4 space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="font-bold text-white text-sm">{item.name || 'Anonymous'}</div>
                          <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                            <Building2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />{item.businessName || '—'}
                          </div>
                        </div>
                        <select value={item.status || 'New'} onChange={e => handleStatusChange(item, e.target.value)} className={`text-xs font-bold px-2 py-1 rounded-lg border focus:outline-none cursor-pointer ${statusClass(item.status)}`}>
                          {['New','Contacted','In-Discussion','Converted','Closed'].map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div><span className="text-slate-500">Industry:</span><div className="text-slate-200 font-semibold">{item.industry || '—'}</div></div>
                        <div><span className="text-slate-500">Budget:</span><div className="text-emerald-400 font-bold">{item.budget || '—'}</div></div>
                      </div>
                      {item.phone && (
                        <div className="grid grid-cols-2 gap-2">
                          <a href={`https://wa.me/91${item.phone.replace(/\D/g,'')}?text=Hi%20${encodeURIComponent(item.name||'')}%2C%20this%20is%20Suresh%20from%20DictoX.`} target="_blank" rel="noopener noreferrer" className="py-2 px-3 rounded-xl bg-[#00a63e] hover:bg-[#008f35] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors">
                            <MessageSquare className="w-3.5 h-3.5" />WhatsApp
                          </a>
                          <a href={`tel:${item.phone}`} className="py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors">
                            <Phone className="w-3.5 h-3.5" />Call
                          </a>
                        </div>
                      )}
                      <div className="flex items-center justify-between pt-1 border-t border-slate-800/80 text-[11px]">
                        <span className="text-slate-500">{item.submittedAt ? new Date(item.submittedAt).toLocaleDateString('en-IN',{day:'2-digit',month:'short'}) : 'Recent'}</span>
                        <div className="flex items-center gap-2">
                          {item.message && <button onClick={() => setSelectedInquiry(item)} className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"><ExternalLink className="w-3 h-3" />Note</button>}
                          <button onClick={() => handleDeleteInquiry(item)} className="text-red-400 hover:text-red-300 font-bold flex items-center gap-1"><Trash2 className="w-3 h-3" />Delete</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop Table */}
                <div className="hidden md:block bg-[#0f172a] border border-slate-800 rounded-2xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[860px]">
                      <thead>
                        <tr className="border-b border-slate-800 bg-slate-800/40 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          {['Lead / Business','Contact','Industry & Service','Budget','Date','Status','Actions'].map(h => (
                            <th key={h} className="py-3 px-4">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-xs">
                        {filteredInquiries.map(item => (
                          <tr key={item.id} className="hover:bg-slate-800/30 transition-colors">
                            <td className="py-3.5 px-4">
                              <div className="font-bold text-white text-sm">{item.name || 'Anonymous'}</div>
                              <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5"><Building2 className="w-3 h-3 text-slate-500" />{item.businessName || '—'}</div>
                            </td>
                            <td className="py-3.5 px-4 space-y-1">
                              <div className="flex items-center gap-1.5">
                                <a href={`tel:${item.phone}`} className="font-bold text-slate-200 hover:text-blue-400 flex items-center gap-1"><Phone className="w-3 h-3 text-slate-400" />{item.phone}</a>
                                {item.phone && <a href={`https://wa.me/91${item.phone.replace(/\D/g,'')}?text=Hi%20${encodeURIComponent(item.name||'')}%2C%20this%20is%20Suresh%20from%20DictoX.`} target="_blank" rel="noopener noreferrer" className="p-1 rounded-md bg-[#00a63e]/20 text-[#00a63e] hover:bg-[#00a63e] hover:text-white transition-colors" title="WhatsApp"><MessageSquare className="w-3 h-3" /></a>}
                              </div>
                              {item.email && <div className="text-[11px] text-slate-400 truncate max-w-[180px]"><Mail className="w-3 h-3 text-slate-500 inline mr-1" />{item.email}</div>}
                            </td>
                            <td className="py-3.5 px-4"><div className="text-slate-200 font-semibold">{item.industry || '—'}</div><div className="text-[11px] text-slate-400">{item.service || '—'}</div></td>
                            <td className="py-3.5 px-4"><span className="inline-block px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 font-semibold text-[11px] border border-slate-700">{item.budget || '—'}</span></td>
                            <td className="py-3.5 px-4 text-slate-400 text-[11px] whitespace-nowrap">{item.submittedAt ? new Date(item.submittedAt).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'}) : 'Recent'}</td>
                            <td className="py-3.5 px-4">
                              <select value={item.status || 'New'} onChange={e => handleStatusChange(item, e.target.value)} className={`text-xs font-bold px-2 py-1 rounded-lg border focus:outline-none cursor-pointer ${statusClass(item.status)}`}>
                                {['New','Contacted','In-Discussion','Converted','Closed'].map(s => <option key={s} value={s}>{s}</option>)}
                              </select>
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="flex items-center gap-1.5 justify-end">
                                {item.message && <button onClick={() => setSelectedInquiry(item)} className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors" title="View Note"><ExternalLink className="w-3.5 h-3.5" /></button>}
                                <button onClick={() => handleDeleteInquiry(item)} className="p-1.5 rounded-lg bg-red-900/20 hover:bg-red-600 text-red-400 hover:text-white transition-colors" title="Delete"><Trash2 className="w-3.5 h-3.5" /></button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>)}
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* TAB 2: RESULTS */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          {activeTab === 'results' && (
            <div className="space-y-4">
              <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-white">Live Campaign Results</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Published results display on the homepage & /results page.</p>
                </div>
                <button onClick={() => setShowAddResult(true)} className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-colors">
                  <Plus className="w-4 h-4" />Add Campaign Result
                </button>
              </div>

              {isLoadingResults ? (
                <div className="py-16 text-center"><RefreshCw className="w-5 h-5 animate-spin mx-auto text-blue-400 mb-2" /><p className="text-xs text-slate-400">Loading...</p></div>
              ) : resultsList.length === 0 ? (
                <div className="py-16 text-center bg-[#0f172a] border border-slate-800 rounded-2xl">
                  <Trophy className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                  <p className="text-sm font-bold text-slate-300">No results added yet</p>
                  <p className="text-xs text-slate-500 mt-1">Click "Add Campaign Result" to publish your first case study.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {resultsList.map(item => (
                    <div key={item.id} className="bg-[#0f172a] border border-slate-800 rounded-2xl p-4 flex flex-col justify-between group hover:border-slate-700 transition-all">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded-full">{item.duration || '30 Days'}</span>
                          <div className="flex items-center gap-1">
                            <button onClick={() => handleEditResult(item)} className="p-1.5 rounded-lg bg-blue-900/30 hover:bg-blue-600 text-blue-400 hover:text-white transition-colors cursor-pointer" title="Edit"><Pencil className="w-3 h-3" /></button>
                            <button onClick={() => handleDeleteResult(item.id)} className="p-1.5 rounded-lg bg-red-900/20 hover:bg-red-600 text-red-400 hover:text-white transition-colors cursor-pointer" title="Delete"><Trash2 className="w-3 h-3" /></button>
                          </div>
                        </div>
                        {item.image && <div className="h-28 rounded-xl overflow-hidden mb-2 bg-slate-800"><img src={item.image} alt={item.title} className="w-full h-full object-cover" onError={e => e.target.style.display='none'} /></div>}
                        <h4 className="text-sm font-bold text-white leading-tight">{item.title}</h4>
                        <div className="text-xs text-blue-400 font-semibold mt-0.5">{item.industry}</div>
                        <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{item.objective}</p>
                        <div className="grid grid-cols-3 gap-1 py-2 px-2 bg-slate-800/80 rounded-xl mt-3 text-center border border-slate-700">
                          <div><div className="text-[9px] text-slate-400 uppercase">Spend</div><div className="text-xs font-bold text-white">{item.spend}</div></div>
                          <div className="border-x border-slate-700"><div className="text-[9px] text-slate-400 uppercase">Leads</div><div className="text-xs font-black text-blue-400">{item.leads}</div></div>
                          <div><div className="text-[9px] text-slate-400 uppercase">CPL</div><div className="text-xs font-black text-emerald-400">{item.cpl}</div></div>
                        </div>
                      </div>
                      <div className="mt-3 pt-2 border-t border-slate-800 text-[11px] text-slate-400">Outcome: <span className="text-slate-200">{item.keyOutcome}</span></div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* TAB 3: BRANDS */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          {activeTab === 'brands' && (
            <div className="space-y-5">
              {/* Add Brand Form */}
              <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Upload Brand Logo</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Appears instantly in the public client marquee.</p>
                  </div>
                </div>

                <form onSubmit={handleAddBrand} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Brand Name (Optional)</label>
                      <input type="text" value={newBrandName} onChange={e => setNewBrandName(e.target.value)} placeholder="e.g. Tata, Godrej…" className={inp} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Text Color (Fallback)</label>
                      <select value={newBrandColor} onChange={e => setNewBrandColor(e.target.value)} className={inp}>
                        {[['text-slate-800','Slate'],['text-blue-900','Royal Blue'],['text-red-700','Red'],['text-amber-800','Gold'],['text-teal-700','Teal'],['text-purple-700','Purple']].map(([v,l]) => <option key={v} value={v}>{l}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-200">Logo Image</label>
                      <span className="text-[11px] text-emerald-400 font-semibold">PNG · SVG · JPG · WebP</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label className="flex flex-col items-center justify-center p-5 rounded-2xl border-2 border-dashed border-blue-500/50 hover:border-blue-400 bg-blue-950/20 cursor-pointer transition-all group text-center">
                        <Upload className="w-6 h-6 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-bold text-white group-hover:text-blue-300">Click to Upload</span>
                        <span className="text-[11px] text-slate-400 mt-0.5">Max 2MB</span>
                        <input type="file" accept="image/*" onChange={e => e.target.files?.[0] && readFile(e.target.files[0], 2, setBrandLogoPreview)} className="hidden" />
                      </label>
                      <div className="space-y-2">
                        <span className="text-xs text-slate-400">Or paste Image URL:</span>
                        <input type="url" value={brandLogoUrl} onChange={e => setBrandLogoUrl(e.target.value)} placeholder="https://example.com/logo.png" className={inp} />
                      </div>
                    </div>
                    {(brandLogoPreview || brandLogoUrl) && (
                      <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-slate-400">Preview:</span>
                          <div className="bg-white px-4 py-2 rounded-xl border border-slate-200">
                            <img src={brandLogoPreview || brandLogoUrl} alt="Preview" className="h-7 w-auto max-w-[100px] object-contain" onError={e => e.target.style.display='none'} />
                          </div>
                        </div>
                        <button type="button" onClick={() => { setBrandLogoPreview(''); setBrandLogoUrl(''); }} className="text-xs text-red-400 hover:text-red-300 font-bold px-3 py-1.5 rounded-lg bg-red-950/40 border border-red-800/60 cursor-pointer">Remove</button>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <button type="submit" className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow transition-colors cursor-pointer flex items-center justify-center gap-2">
                      <Plus className="w-4 h-4" />Publish Brand Logo
                    </button>
                  </div>
                </form>
              </div>

              {/* Brand List */}
              <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Active Brands ({brandsList.length})</h4>
                  <button onClick={loadBrands} className="text-xs text-blue-400 hover:underline cursor-pointer">Refresh</button>
                </div>

                {isLoadingBrands ? (
                  <div className="py-8 text-center"><RefreshCw className="w-5 h-5 animate-spin mx-auto text-blue-400" /></div>
                ) : brandsList.length === 0 ? (
                  <p className="text-xs text-slate-500 py-8 text-center">No brands uploaded yet.</p>
                ) : (
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {brandsList.map(brand => (
                      <div key={brand.id} className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between gap-3 hover:border-slate-600 transition-colors">
                        <div className="flex items-center gap-2.5 min-w-0">
                          {brand.logoUrl ? (
                            <div className="bg-white p-1 rounded-md shrink-0 border border-slate-200">
                              <img src={brand.logoUrl} alt={brand.name} className="h-6 w-auto max-w-[70px] object-contain" />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-md bg-blue-900/50 text-blue-300 font-bold text-xs flex items-center justify-center shrink-0">Aa</div>
                          )}
                          <div className="min-w-0">
                            <span className="text-xs font-bold text-white block truncate">{brand.name}</span>
                            <span className="text-[10px] text-slate-400">{brand.logoUrl ? 'Logo Image' : 'Typography'}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          <button onClick={() => handleEditBrand(brand)} className="p-1.5 rounded-lg bg-blue-900/30 hover:bg-blue-600 text-blue-400 hover:text-white transition-colors cursor-pointer" title="Edit"><Pencil className="w-3 h-3" /></button>
                          <button onClick={() => handleDeleteBrand(brand.id)} className="p-1.5 rounded-lg bg-red-900/20 hover:bg-red-600 text-red-400 hover:text-white transition-colors cursor-pointer" title="Delete"><Trash2 className="w-3 h-3" /></button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* TAB 4: FOOTER SETTINGS */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          {activeTab === 'footer' && (
            <div className="max-w-2xl space-y-5">
              <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-4 sm:p-6">
                <div className="pb-3 mb-4 border-b border-slate-800">
                  <h3 className="text-sm font-bold text-white">Live Footer & Contact Details</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Changes reflect live across the entire website.</p>
                </div>

                <form onSubmit={handleSaveSettings} className="space-y-4">
                  {/* Logo */}
                  <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-white uppercase tracking-wider">Agency Logo (Navbar & Footer)</label>
                      <span className="text-[10px] text-blue-400 font-semibold">Updates Live</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <input type="text" value={settings.logoUrl || ''} onChange={e => setSettings({...settings, logoUrl: e.target.value})} placeholder="/images/logo2.png" className={inp} />
                        <label className="block cursor-pointer bg-slate-700/60 hover:bg-slate-700 text-slate-300 text-xs py-1.5 px-3 rounded-lg border border-slate-600 text-center transition-colors">
                          Upload from PC
                          <input type="file" accept="image/*" className="hidden" onChange={e => { const f = e.target.files?.[0]; if(f){const r=new FileReader();r.onload=()=>setSettings({...settings,logoUrl:r.result});r.readAsDataURL(f);}}} />
                        </label>
                      </div>
                      <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-700/60 flex items-center gap-3">
                        <div className="bg-white p-2 rounded-lg shrink-0">
                          <img src={settings.logoUrl || '/images/logo2.png'} alt="Preview" className="h-8 max-w-[100px] object-contain" onError={e => e.target.src='/images/logo2.png'} />
                        </div>
                        <div className="text-[11px] text-slate-400"><span className="text-white font-semibold block">Live Preview</span>Shown in Navbar & Footer.</div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      ['Primary Phone', 'phone1', 'text'],
                      ['Secondary Phone', 'phone2', 'text'],
                      ['Email Address', 'email', 'email'],
                      ['WhatsApp Number', 'whatsapp', 'text'],
                    ].map(([label, key, type]) => (
                      <div key={key}>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">{label}</label>
                        <input type={type} value={settings[key] || ''} onChange={e => setSettings({...settings, [key]: e.target.value})} className={inp} />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Headquarters Address</label>
                    <input type="text" value={settings.address || ''} onChange={e => setSettings({...settings, address: e.target.value})} className={inp} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Working Hours</label>
                    <input type="text" value={settings.hours || ''} onChange={e => setSettings({...settings, hours: e.target.value})} className={inp} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Instagram Link</label>
                      <input type="url" value={settings.instagram || ''} onChange={e => setSettings({...settings, instagram: e.target.value})} className={inp} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Facebook Link</label>
                      <input type="url" value={settings.facebook || ''} onChange={e => setSettings({...settings, facebook: e.target.value})} className={inp} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Agency Tagline / Bio</label>
                    <textarea rows={3} value={settings.tagline || ''} onChange={e => setSettings({...settings, tagline: e.target.value})} className={`${inp} resize-none`} />
                  </div>

                  <button type="submit" disabled={isSavingSettings} className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow transition-colors cursor-pointer flex items-center gap-2 disabled:opacity-60">
                    <Check className="w-4 h-4" />{isSavingSettings ? 'Saving…' : 'Save & Publish Live'}
                  </button>
                </form>
              </div>
            </div>
          )}

        </div>
      </div>
      </div>{/* end row: sidebar + main */}

      {/* MODAL: INQUIRY NOTE */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-slate-800 rounded-t-3xl sm:rounded-3xl p-5 sm:p-6 w-full sm:max-w-lg shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-white">Lead Message & Notes</h3>
              <button onClick={() => setSelectedInquiry(null)} className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white cursor-pointer"><X className="w-4 h-4" /></button>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800 text-slate-200 text-xs leading-relaxed whitespace-pre-wrap">{selectedInquiry.message || 'No message.'}</div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">Source: <span className="text-slate-200">{selectedInquiry.source || 'Website'}</span></span>
              <button onClick={() => setSelectedInquiry(null)} className="px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold cursor-pointer">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* MODAL: ADD RESULT */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      {showAddResult && (
        <ResultModal
          title="Add Campaign Result"
          form={newResult} setForm={setNewResult}
          onSubmit={handleAddResult}
          onClose={() => setShowAddResult(false)}
          imgPresets={imgPresets}
          readFile={readFile}
          isEdit={false}
        />
      )}

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* MODAL: EDIT RESULT */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      {showEditResult && (
        <ResultModal
          title="Edit Campaign Result"
          form={editResultForm} setForm={setEditResultForm}
          onSubmit={handleUpdateResult}
          onClose={() => setShowEditResult(false)}
          imgPresets={imgPresets}
          readFile={readFile}
          isEdit={true}
        />
      )}

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* MODAL: EDIT BRAND */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      {showEditBrand && editingBrand && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-slate-700 rounded-t-3xl sm:rounded-3xl p-5 sm:p-6 w-full sm:max-w-md shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div><h3 className="text-sm font-bold text-white flex items-center gap-2"><Pencil className="w-4 h-4 text-blue-400" />Edit Brand</h3><p className="text-xs text-slate-400 mt-0.5">Update brand on live marquee</p></div>
              <button onClick={() => { setShowEditBrand(false); setEditingBrand(null); }} className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white cursor-pointer"><X className="w-4 h-4" /></button>
            </div>
            <form onSubmit={handleUpdateBrand} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Brand Name</label>
                <input type="text" value={editBrandForm.name} onChange={e => setEditBrandForm({...editBrandForm, name: e.target.value})} className={inp} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Text Color</label>
                <select value={editBrandForm.color} onChange={e => setEditBrandForm({...editBrandForm, color: e.target.value})} className={inp}>
                  {[['text-slate-800','Slate'],['text-blue-900','Royal Blue'],['text-red-700','Red'],['text-amber-800','Gold'],['text-teal-700','Teal'],['text-purple-700','Purple']].map(([v,l]) => <option key={v} value={v}>{l}</option>)}
                </select>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-200">Logo Image</label>
                  <span className="text-[11px] text-emerald-400 font-semibold">PNG · SVG · WebP</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex flex-col items-center justify-center p-4 rounded-2xl border-2 border-dashed border-blue-500/50 hover:border-blue-400 bg-blue-950/20 cursor-pointer transition-all group text-center">
                    <Upload className="w-5 h-5 text-blue-400 mb-1.5 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-white">Upload New</span>
                    <span className="text-[10px] text-slate-400 mt-0.5">Max 2MB</span>
                    <input type="file" accept="image/*" onChange={e => e.target.files?.[0] && readFile(e.target.files[0], 2, r => { setEditBrandPreview(r); setEditBrandForm(p => ({...p, logoUrl: r})); })} className="hidden" />
                  </label>
                  <div className="space-y-2">
                    <span className="text-xs text-slate-400">Or paste URL:</span>
                    <input type="url" value={editBrandForm.logoUrl} onChange={e => { setEditBrandForm({...editBrandForm, logoUrl: e.target.value}); setEditBrandPreview(e.target.value); }} className={inp} />
                  </div>
                </div>
                {(editBrandPreview || editBrandForm.logoUrl) && (
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 flex flex-wrap items-center gap-3">
                    <span className="text-xs text-slate-400">Preview:</span>
                    <div className="bg-white px-4 py-2 rounded-xl border border-slate-200"><img src={editBrandPreview || editBrandForm.logoUrl} alt="Preview" className="h-7 w-auto max-w-[100px] object-contain" onError={e => e.target.style.display='none'} /></div>
                    <button type="button" onClick={() => { setEditBrandPreview(''); setEditBrandForm({...editBrandForm, logoUrl: ''}); }} className="ml-auto text-xs text-red-400 font-bold px-2 py-1 rounded-lg bg-red-950/40 border border-red-800/60 cursor-pointer">Remove</button>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-end gap-2 pt-1">
                <button type="button" onClick={() => { setShowEditBrand(false); setEditingBrand(null); }} className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 cursor-pointer">Cancel</button>
                <button type="submit" className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow cursor-pointer flex items-center gap-1.5"><Check className="w-3.5 h-3.5" />Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

// ─── ResultModal: shared for Add and Edit ─────────────────────────────────────
function ResultModal({ title, form, setForm, onSubmit, onClose, imgPresets, readFile, isEdit }) {
  const inp = "w-full px-3 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors";
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-[#0f172a] border border-slate-700 rounded-t-3xl sm:rounded-3xl p-5 sm:p-6 w-full sm:max-w-lg shadow-2xl max-h-[92vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              {isEdit ? <Pencil className="w-4 h-4 text-blue-400" /> : <Plus className="w-4 h-4 text-emerald-400" />}{title}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">Saved to Firestore and published instantly.</p>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white cursor-pointer"><X className="w-4 h-4" /></button>
        </div>

        <form onSubmit={onSubmit} className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Title / Client Name *</label>
            <input type="text" required value={form.title} onChange={e => setForm({...form, title: e.target.value})} placeholder="e.g. Pune Luxury Real Estate Launch" className={inp} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Industry</label>
              <input type="text" value={form.industry} onChange={e => setForm({...form, industry: e.target.value})} className={inp} />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Duration</label>
              <input type="text" value={form.duration} onChange={e => setForm({...form, duration: e.target.value})} placeholder="30 Days" className={inp} />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Campaign Objective</label>
            <input type="text" value={form.objective} onChange={e => setForm({...form, objective: e.target.value})} placeholder="High-Value Site Visits & Inquiries" className={inp} />
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[['Ad Spend','spend','₹50,000'],['Leads','leads','412'],['CPL','cpl','₹121']].map(([label, key, ph]) => (
              <div key={key}>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{label}</label>
                <input type="text" value={form[key]} onChange={e => setForm({...form, [key]: e.target.value})} placeholder={ph} className={inp} />
              </div>
            ))}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Key Outcome</label>
            <input type="text" value={form.keyOutcome} onChange={e => setForm({...form, keyOutcome: e.target.value})} placeholder="38 Confirmed Site Visits…" className={inp} />
          </div>

          {/* Image */}
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
            <label className="block text-xs font-semibold text-slate-200">Campaign Image</label>
            <div className="flex flex-wrap gap-1.5">
              {imgPresets.map(p => (
                <button type="button" key={p.label} onClick={() => setForm({...form, image: p.url})} className={`text-[11px] px-2.5 py-1 rounded-lg border cursor-pointer transition-colors ${form.image === p.url ? 'bg-blue-600 border-blue-500 text-white font-bold' : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'}`}>{p.label}</button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <label className="flex items-center justify-center gap-2 p-3 rounded-xl border-2 border-dashed border-blue-500/40 hover:border-blue-400 bg-blue-950/20 cursor-pointer text-xs font-bold text-white transition-all">
                <Upload className="w-4 h-4 text-blue-400" />Upload Image
                <input type="file" accept="image/*" onChange={e => e.target.files?.[0] && readFile(e.target.files[0], 3, r => setForm(p => ({...p, image: r})))} className="hidden" />
              </label>
              <input type="text" value={form.image} onChange={e => setForm({...form, image: e.target.value})} placeholder="Or enter Image URL" className={inp} />
            </div>
            {form.image && (
              <div className="relative h-24 rounded-lg overflow-hidden border border-slate-700 bg-slate-950">
                <img src={form.image} alt="Preview" className="w-full h-full object-cover" onError={e => e.target.src='/images/real_estate.jpg'} />
                <div className="absolute bottom-1 right-2 text-[10px] bg-slate-900/80 px-2 py-0.5 rounded text-slate-300 font-mono">Preview</div>
              </div>
            )}
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer">Cancel</button>
            <button type="submit" className={`px-5 py-2 rounded-xl text-white text-xs font-bold shadow cursor-pointer flex items-center gap-1.5 ${isEdit ? 'bg-blue-600 hover:bg-blue-500' : 'bg-emerald-600 hover:bg-emerald-500'}`}>
              {isEdit ? <><Check className="w-3.5 h-3.5" />Save Changes</> : <><Plus className="w-3.5 h-3.5" />Publish Result</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
