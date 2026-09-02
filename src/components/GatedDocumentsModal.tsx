import React, { useState, useEffect } from 'react';
import {
  X,
  Lock,
  Unlock,
  ShieldCheck,
  FileText,
  Download,
  CheckCircle2,
  Building2,
  User,
  Briefcase,
  Mail,
  Globe,
  Search,
  Check,
  Layers,
  ChevronLeft,
  ChevronRight,
  Share2,
  Eye,
  RotateCcw,
  ExternalLink,
  Github,
  FileArchive,
  Image as ImageIcon,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Loader2,
  FileDown
} from 'lucide-react';
import { GatedDocument, InvestorQualificationData } from '../types';
import { GATED_DOCUMENTS, PITCH_DECK_SLIDES, GITHUB_DOCS_REPO_URL } from '../data';

interface GatedDocumentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDocumentId?: string;
  initialViewMode?: 'list' | 'view-doc' | 'qualify-investor';
}

export const GatedDocumentsModal: React.FC<GatedDocumentsModalProps> = ({
  isOpen,
  onClose,
  initialDocumentId,
  initialViewMode
}) => {
  // Access state persistence in localStorage for Institutional Gated documents
  const [investorAuth, setInvestorAuth] = useState<InvestorQualificationData | null>(null);

  // Active view inside modal: 'list' | 'qualify-investor' | 'view-doc'
  const [currentView, setCurrentView] = useState<'list' | 'qualify-investor' | 'view-doc'>('list');
  const [selectedDocId, setSelectedDocId] = useState<string>(initialDocumentId || 'doc-005-primary-pitch-deck');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTierFilter, setSelectedTierFilter] = useState<'All' | 'open-access' | 'investor-gated'>('All');
  const [downloadSuccessId, setDownloadSuccessId] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  // Active tab within document reader: 'embedded' | 'slides' | 'transcript' | 'preview'
  const [docTab, setDocTab] = useState<'embedded' | 'slides' | 'transcript'>('embedded');

  // Active pitch slide if viewing the pitch deck
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [imageZoom, setImageZoom] = useState<'fit' | 'fill' | 'zoom' >('fit');

  // Investor Qualification Form State (for Gated Institutional Docs)
  const [investorForm, setInvestorForm] = useState({
    firmName: '',
    contactName: '',
    role: 'Managing Partner / General Partner',
    email: '',
    fundSize: '$50M - $250M',
    typicalCheckSize: '$100k - $250k',
    isAccredited: true,
    theses: ['FashionTech & Consumer Innovation', 'AI & Computer Vision', 'Circular Economy & Sustainability'],
    linkedinOrWebsite: '',
    notes: ''
  });

  // Initialize auth from localStorage on mount
  useEffect(() => {
    try {
      const savedInvestor = localStorage.getItem('gh_investor_auth');
      if (savedInvestor) {
        setInvestorAuth(JSON.parse(savedInvestor));
      }
    } catch {
      // ignore storage parsing error
    }
  }, []);

  // When initialDocumentId changes, open the corresponding view
  useEffect(() => {
    if (initialDocumentId && isOpen) {
      setSelectedDocId(initialDocumentId);
      const doc = GATED_DOCUMENTS.find(d => d.id === initialDocumentId);
      if (doc) {
        if (doc.tier === 'investor-gated' && !investorAuth) {
          setCurrentView('qualify-investor');
        } else {
          setCurrentView('view-doc');
          // Set default tab based on doc type
          if (doc.fileType === 'pdf') {
            setDocTab('embedded');
          } else {
            setDocTab('embedded');
          }
        }
      }
    } else if (isOpen && initialViewMode) {
      setCurrentView(initialViewMode);
    } else if (isOpen && currentView === 'view-doc') {
      // keep current view
    } else if (isOpen) {
      setCurrentView('list');
    }
  }, [isOpen, initialDocumentId, initialViewMode]);

  if (!isOpen) return null;

  const isInvestorUnlocked = !!investorAuth;
  const selectedDoc = GATED_DOCUMENTS.find(d => d.id === selectedDocId) || GATED_DOCUMENTS[0];

  // Handle Investor Qualification Submission (Unlocks institutional gated materials)
  const handleInvestorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAuth: InvestorQualificationData = {
      firmName: investorForm.firmName,
      contactName: investorForm.contactName,
      role: investorForm.role,
      email: investorForm.email,
      fundSize: investorForm.fundSize,
      typicalCheckSize: investorForm.typicalCheckSize,
      isAccredited: investorForm.isAccredited,
      investmentThesis: investorForm.theses,
      linkedinOrWebsite: investorForm.linkedinOrWebsite,
      notes: investorForm.notes,
      qualifiedAt: new Date().toISOString()
    };
    setInvestorAuth(newAuth);
    try {
      localStorage.setItem('gh_investor_auth', JSON.stringify(newAuth));
    } catch {
      // ignore
    }
    setCurrentView('view-doc');
  };

  // Reset Credentials
  const handleResetAuth = () => {
    setInvestorAuth(null);
    try {
      localStorage.removeItem('gh_investor_auth');
    } catch {
      // ignore
    }
    setCurrentView('list');
  };

  // Download Document (Fetches actual binary file blob from local server for 100% reliable download)
  const handleDownloadDoc = async (doc: GatedDocument, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }

    // Check if doc is gated and user is not verified
    if (doc.tier === 'investor-gated' && !isInvestorUnlocked) {
      setSelectedDocId(doc.id);
      setCurrentView('qualify-investor');
      return;
    }

    setIsDownloading(true);
    try {
      const targetUrl = encodeURI(doc.localUrl);
      const res = await fetch(targetUrl);
      if (!res.ok) {
        throw new Error(`Failed to fetch ${doc.localUrl}`);
      }
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = doc.downloadFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);

      setDownloadSuccessId(doc.id);
      setTimeout(() => setDownloadSuccessId(null), 3000);
    } catch (err) {
      console.warn('Local download fallback:', err);
      // Direct anchor click fallback
      const link = document.createElement('a');
      link.href = doc.githubUrl || encodeURI(doc.localUrl);
      link.download = doc.downloadFileName;
      link.target = '_blank';
      link.rel = 'noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadSuccessId(doc.id);
      setTimeout(() => setDownloadSuccessId(null), 3000);
    } finally {
      setIsDownloading(false);
    }
  };

  // Open Document in New Window / Fullscreen Tab
  const handleOpenInNewTab = (doc: GatedDocument, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const encodedPath = encodeURI(doc.localUrl);
    window.open(encodedPath, '_blank', 'noopener,noreferrer');
  };

  const handleDocumentClick = (doc: GatedDocument) => {
    setSelectedDocId(doc.id);
    if (doc.tier === 'investor-gated') {
      if (!isInvestorUnlocked) {
        setCurrentView('qualify-investor');
      } else {
        setCurrentView('view-doc');
        setDocTab('embedded');
      }
    } else {
      // Open access doc: ALWAYS open directly without any gating
      setCurrentView('view-doc');
      setDocTab('embedded');
    }
  };

  const filteredDocs = GATED_DOCUMENTS.filter(doc => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTier =
      selectedTierFilter === 'All' || doc.tier === selectedTierFilter;
    return matchesSearch && matchesTier;
  });

  const openDocsCount = GATED_DOCUMENTS.filter(d => d.tier === 'open-access').length;
  const gatedDocsCount = GATED_DOCUMENTS.filter(d => d.tier === 'investor-gated').length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-xs transition-opacity animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-300 flex flex-col h-[94vh] max-h-[94vh]">
        
        {/* ========================================================
            MODAL TOP HEADER
            ======================================================== */}
        <div className="bg-[#FBB040] px-4 sm:px-6 py-3.5 flex items-center justify-between border-b border-black/15 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center font-black text-sm shadow-xs">
              GH
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-neutral-900 text-base sm:text-lg tracking-tight">
                  Goodheart Document Room & Pitch Decks
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-black text-white tracking-wider">
                  <ShieldCheck className="w-3 h-3 text-[#FBB040]" /> 000. PUBLIC DOCS
                </span>
              </div>
              <p className="text-xs text-neutral-800 font-medium hidden xs:block">
                Direct In-App Viewer & 1-Click Downloads for All Repository Materials
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* GitHub Repo Button */}
            <a
              href={GITHUB_DOCS_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold text-neutral-900 bg-white/70 hover:bg-white px-2.5 py-1.5 rounded-lg transition flex items-center gap-1.5 shadow-xs"
              title="Open GitHub Repository in New Tab"
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GitHub Repo</span>
              <ExternalLink className="w-3 h-3 text-neutral-600" />
            </a>

            {/* Reset Auth Button (if investor authenticated) */}
            {investorAuth && (
              <button
                onClick={handleResetAuth}
                className="text-[11px] font-bold text-neutral-800 hover:text-black bg-white/60 hover:bg-white px-2.5 py-1.5 rounded-lg transition flex items-center gap-1 cursor-pointer"
                title="Reset Institutional Clearance"
              >
                <RotateCcw className="w-3 h-3" />
                <span className="hidden md:inline">Reset Pass</span>
              </button>
            )}

            <button
              onClick={onClose}
              aria-label="Close Data Room"
              className="p-1.5 rounded-full hover:bg-black/10 transition text-neutral-900 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ========================================================
            STATUS / SECURITY CREDENTIALS BAR
            ======================================================== */}
        <div className="bg-neutral-900 text-white px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between text-xs gap-2 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-neutral-400 font-medium">Status:</span>
            {isInvestorUnlocked ? (
              <span className="inline-flex items-center gap-1.5 font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-700/50 px-2.5 py-0.5 rounded-full text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Accredited Investor Clearance ({investorAuth?.firmName})
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 font-bold text-neutral-300 bg-neutral-800 px-2.5 py-0.5 rounded-full text-[11px]">
                <Unlock className="w-3 h-3 text-emerald-400" />
                Connected to GoodHeart Repository ({GATED_DOCUMENTS.length} Documents Ready)
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 text-[11px] text-neutral-400">
            {currentView !== 'list' && (
              <button
                onClick={() => setCurrentView('list')}
                className="text-amber-400 hover:underline font-bold flex items-center gap-1 cursor-pointer"
              >
                ← Back to All Documents ({GATED_DOCUMENTS.length})
              </button>
            )}
            <span className="hidden sm:inline">All PDFs, PNGs & ZIPs Hosted & Downloadable</span>
          </div>
        </div>

        {/* ========================================================
            MODAL BODY CONTENT BASED ON ACTIVE VIEW
            ======================================================== */}
        <div className="flex-1 overflow-y-auto bg-neutral-50/50 p-3 sm:p-5">
          
          {/* VIEW 1: DOCUMENTS LIST */}
          {currentView === 'list' && (
            <div className="space-y-5">
              
              {/* Top Banner highlighting Open Access vs Institutional */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {/* Open Access Overview */}
                <div className="bg-white border-2 border-emerald-600/60 p-4 rounded-xl shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-700 text-white px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Unlock className="w-3 h-3" /> Open Access ({openDocsCount} Docs)
                    </span>
                    <a
                      href={GITHUB_DOCS_REPO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-black text-emerald-700 hover:underline flex items-center gap-1"
                    >
                      <span>000. PUBLIC DOCS</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <h4 className="font-extrabold text-sm text-neutral-900 mb-1">
                    Goodheart Primary Pitch Deck, Brand Sheets & Reviews
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                    View slide decks, brand rate cards, year-in-review summaries, and business plans directly inside the app with 1-click downloads.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedDocId('doc-005-primary-pitch-deck');
                      setCurrentView('view-doc');
                    }}
                    className="text-xs font-black text-black hover:text-[#FA383E] flex items-center gap-1 cursor-pointer underline decoration-[#FBB040] decoration-2"
                  >
                    Open Primary Pitch Deck (22.3 MB) →
                  </button>
                </div>

                {/* Institutional Gated Overview */}
                <div className="bg-white border-2 border-black p-4 rounded-xl shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-[#FA383E] text-white px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Lock className="w-3 h-3" /> Institutional Gated
                    </span>
                    {isInvestorUnlocked ? (
                      <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Full Access
                      </span>
                    ) : (
                      <span className="text-xs font-black text-neutral-800">
                        {gatedDocsCount} Restricted
                      </span>
                    )}
                  </div>
                  <h4 className="font-extrabold text-sm text-neutral-900 mb-1">
                    008. Goodheart 2027 Projections & Cap Table
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                    Confidential forward unit economics, $12M valuation cap terms, and multi-year projection archives for accredited investors.
                  </p>
                  {!isInvestorUnlocked ? (
                    <button
                      onClick={() => setCurrentView('qualify-investor')}
                      className="text-xs font-black text-black hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      Verify as Accredited Investor →
                    </button>
                  ) : (
                    <span className="text-xs font-bold text-emerald-700">
                      All confidential files unlocked
                    </span>
                  )}
                </div>
              </div>

              {/* Filter Tabs & Search Row */}
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between pt-1">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search documents by number, keyword, title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-neutral-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-[#FBB040]"
                  />
                </div>

                {/* Tier Filter Buttons */}
                <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
                  <button
                    onClick={() => setSelectedTierFilter('All')}
                    className={`text-[11px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap transition cursor-pointer ${
                      selectedTierFilter === 'All'
                        ? 'bg-black text-white'
                        : 'bg-white text-neutral-600 hover:bg-neutral-200 border border-neutral-200'
                    }`}
                  >
                    All Docs ({GATED_DOCUMENTS.length})
                  </button>
                  <button
                    onClick={() => setSelectedTierFilter('open-access')}
                    className={`text-[11px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap transition cursor-pointer ${
                      selectedTierFilter === 'open-access'
                        ? 'bg-emerald-700 text-white'
                        : 'bg-white text-emerald-800 hover:bg-emerald-50 border border-emerald-200'
                    }`}
                  >
                    Open Docs ({openDocsCount})
                  </button>
                  <button
                    onClick={() => setSelectedTierFilter('investor-gated')}
                    className={`text-[11px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap transition cursor-pointer ${
                      selectedTierFilter === 'investor-gated'
                        ? 'bg-[#FA383E] text-white'
                        : 'bg-white text-neutral-800 hover:bg-neutral-100 border border-neutral-300'
                    }`}
                  >
                    Gated Institutional ({gatedDocsCount})
                  </button>
                </div>
              </div>

              {/* Documents Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {filteredDocs.map((doc) => {
                  const isOpenTier = doc.tier === 'open-access';
                  const isLocked = doc.tier === 'investor-gated' && !isInvestorUnlocked;

                  return (
                    <div
                      key={doc.id}
                      onClick={() => handleDocumentClick(doc)}
                      className={`bg-white border rounded-xl p-4 sm:p-5 flex flex-col justify-between transition-all cursor-pointer group hover:shadow-md ${
                        isOpenTier
                          ? 'border-emerald-600/40 hover:border-emerald-600'
                          : 'border-neutral-900 hover:border-black'
                      }`}
                    >
                      <div>
                        {/* Top Tag Row */}
                        <div className="flex items-center justify-between mb-2.5">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
                              {doc.category}
                            </span>
                            <span className="text-[11px] text-neutral-500 font-medium">
                              {doc.fileSize || `${doc.pages} pages`}
                            </span>
                          </div>

                          {isOpenTier ? (
                            <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                              <Unlock className="w-3 h-3 text-emerald-600" /> Free / Open Access
                            </span>
                          ) : isLocked ? (
                            <span className="flex items-center gap-1 text-[11px] font-bold text-[#FA383E] bg-red-50 border border-red-200 px-2 py-0.5 rounded-md">
                              <Lock className="w-3 h-3" /> Investor Gated
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                              <Check className="w-3 h-3 text-emerald-600" /> Unlocked
                            </span>
                          )}
                        </div>

                        <h4 className="font-black text-base text-neutral-900 tracking-tight group-hover:text-black mb-1">
                          {doc.title}
                        </h4>
                        <p className="text-xs font-semibold text-neutral-600 mb-2">
                          {doc.subtitle}
                        </p>
                        <p className="text-xs text-neutral-600 leading-relaxed line-clamp-2 mb-3">
                          {doc.description}
                        </p>

                        {/* Bullet Highlights */}
                        <div className="space-y-1 bg-neutral-50 p-2.5 rounded-lg border border-neutral-100 mb-3">
                          {doc.summaryPoints.slice(0, 2).map((pt, idx) => (
                            <div key={idx} className="text-[11px] text-neutral-700 flex items-start gap-1.5 leading-snug">
                              <span className="text-black font-black leading-none">•</span>
                              <span className="line-clamp-1">{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer Actions */}
                      <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                        <span className="text-[11px] font-medium text-neutral-500 flex items-center gap-1">
                          {doc.fileType === 'image' ? (
                            <ImageIcon className="w-3.5 h-3.5 text-blue-600" />
                          ) : doc.fileType === 'zip' ? (
                            <FileArchive className="w-3.5 h-3.5 text-amber-600" />
                          ) : (
                            <FileText className="w-3.5 h-3.5 text-red-600" />
                          )}
                          <span>{doc.fileFormat}</span>
                        </span>

                        <div className="flex items-center gap-2">
                          {/* Direct Download Button */}
                          <button
                            type="button"
                            onClick={(e) => handleDownloadDoc(doc, e)}
                            className="text-xs font-bold px-2.5 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 flex items-center gap-1 transition cursor-pointer border border-neutral-200"
                            title="Download original file"
                          >
                            {downloadSuccessId === doc.id ? (
                              <Check className="w-3 h-3 text-emerald-600" />
                            ) : (
                              <Download className="w-3 h-3 text-neutral-600" />
                            )}
                            <span>{downloadSuccessId === doc.id ? 'Saved' : 'Download'}</span>
                          </button>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDocumentClick(doc);
                            }}
                            className={`text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition cursor-pointer ${
                              isOpenTier
                                ? 'bg-[#FBB040] hover:bg-[#efa433] text-black font-black'
                                : isLocked
                                ? 'bg-black hover:bg-neutral-800 text-white'
                                : 'bg-[#FBB040] hover:bg-[#efa433] text-black font-black'
                            }`}
                          >
                            {isOpenTier ? (
                              <>
                                <Eye className="w-3.5 h-3.5" /> View & Open →
                              </>
                            ) : isLocked ? (
                              <>
                                <Lock className="w-3 h-3" /> Unlock & View
                              </>
                            ) : (
                              <>
                                <Eye className="w-3.5 h-3.5" /> View & Open →
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* VIEW 2: INVESTOR QUALIFICATION FORM (TIER 1 ONLY) */}
          {currentView === 'qualify-investor' && (
            <div className="max-w-2xl mx-auto bg-white p-5 sm:p-8 rounded-2xl border border-neutral-300 shadow-sm space-y-6">
              <div className="flex items-start justify-between border-b border-neutral-200 pb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider bg-[#FA383E] text-white px-2.5 py-0.5 rounded-full mb-2">
                    <ShieldCheck className="w-3 h-3" /> Institutional Investor Clearance
                  </div>
                  <h4 className="text-2xl font-black text-neutral-900 tracking-tight">
                    Investor Compatibility & Verification
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1">
                    Goodheart's financial models, patent disclosures, and cap table are restricted to accredited institutional investors and strategic angels. Please provide your fund details for instant clearance.
                  </p>
                </div>
              </div>

              <form onSubmit={handleInvestorSubmit} className="space-y-4">
                {/* Firm Name & Contact Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1 flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-neutral-500" /> Registered Fund / Entity Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Horizon Capital / Angel Syndicate"
                      value={investorForm.firmName}
                      onChange={(e) => setInvestorForm({ ...investorForm, firmName: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 bg-white focus:ring-2 focus:ring-[#FBB040] focus:outline-hidden font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-neutral-500" /> Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={investorForm.contactName}
                      onChange={(e) => setInvestorForm({ ...investorForm, contactName: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 bg-white focus:ring-2 focus:ring-[#FBB040] focus:outline-hidden font-medium"
                    />
                  </div>
                </div>

                {/* Role & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1 flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-neutral-500" /> Position / Role *
                    </label>
                    <select
                      value={investorForm.role}
                      onChange={(e) => setInvestorForm({ ...investorForm, role: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 bg-white focus:ring-2 focus:ring-[#FBB040] focus:outline-hidden font-medium"
                    >
                      <option value="Managing Partner / General Partner">Managing Partner / General Partner</option>
                      <option value="Principal / Investment Director">Principal / Investment Director</option>
                      <option value="Venture Associate / Analyst">Venture Associate / Analyst</option>
                      <option value="Active Angel Investor">Active Angel Investor</option>
                      <option value="Family Office Director">Family Office Director</option>
                      <option value="Corporate Development / Strategic">Corporate Development / Strategic</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1 flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-neutral-500" /> Institutional Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="alex@horizoncap.com"
                      value={investorForm.email}
                      onChange={(e) => setInvestorForm({ ...investorForm, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 bg-white focus:ring-2 focus:ring-[#FBB040] focus:outline-hidden font-medium"
                    />
                  </div>
                </div>

                {/* Fund Size & Check Size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">
                      Fund AUM / Target Allocation *
                    </label>
                    <select
                      value={investorForm.fundSize}
                      onChange={(e) => setInvestorForm({ ...investorForm, fundSize: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 bg-white focus:ring-2 focus:ring-[#FBB040] focus:outline-hidden font-medium"
                    >
                      <option value="Angel / Syndicate (<$5M)">Angel / Syndicate (&lt;$5M)</option>
                      <option value="$5M - $25M Seed Fund">$5M - $25M Seed Fund</option>
                      <option value="$25M - $100M Venture Fund">$25M - $100M Venture Fund</option>
                      <option value="$100M+ Multi-Stage Institutional">$100M+ Multi-Stage Institutional</option>
                      <option value="Family Office / High Net Worth">Family Office / High Net Worth</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">
                      Typical Seed Check Size *
                    </label>
                    <select
                      value={investorForm.typicalCheckSize}
                      onChange={(e) => setInvestorForm({ ...investorForm, typicalCheckSize: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 bg-white focus:ring-2 focus:ring-[#FBB040] focus:outline-hidden font-medium"
                    >
                      <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                      <option value="$50,000 - $150,000">$50,000 - $150,000</option>
                      <option value="$150,000 - $500,000 (Lead / Co-Lead)">$150,000 - $500,000 (Lead / Co-Lead)</option>
                      <option value="$500,000+ Institutional">$500,000+ Institutional</option>
                    </select>
                  </div>
                </div>

                {/* LinkedIn or Website */}
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1 flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-neutral-500" /> LinkedIn Profile or Fund Website
                  </label>
                  <input
                    type="text"
                    placeholder="https://linkedin.com/in/yourprofile or https://fund.com"
                    value={investorForm.linkedinOrWebsite}
                    onChange={(e) => setInvestorForm({ ...investorForm, linkedinOrWebsite: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 bg-white focus:ring-2 focus:ring-[#FBB040] focus:outline-hidden font-medium"
                  />
                </div>

                {/* Accredited Checkbox */}
                <div className="bg-neutral-50 p-3.5 rounded-xl border border-neutral-200">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={investorForm.isAccredited}
                      onChange={(e) => setInvestorForm({ ...investorForm, isAccredited: e.target.checked })}
                      required
                      className="mt-0.5 h-4 w-4 rounded-sm text-black focus:ring-[#FBB040]"
                    />
                    <span className="text-xs text-neutral-800 leading-snug">
                      <strong className="font-bold">Accreditation Confirmation:</strong> I certify that I or my represented entity meet the definition of an accredited investor under applicable securities laws, and I agree to treat non-public financial documents confidentially.
                    </span>
                  </label>
                </div>

                {/* Buttons */}
                <div className="pt-3 flex items-center justify-between border-t border-neutral-200">
                  <button
                    type="button"
                    onClick={() => setCurrentView('list')}
                    className="text-xs font-bold text-neutral-600 hover:text-black transition cursor-pointer"
                  >
                    ← Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-black hover:bg-neutral-800 text-white font-black text-xs flex items-center gap-2 shadow-xs transition cursor-pointer"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#FBB040]" />
                    <span>Verify & Grant Full Clearance</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* VIEW 3: IN-APP DOCUMENT READER & PREVIEW VIEWER */}
          {currentView === 'view-doc' && selectedDoc && (
            <div className="space-y-4">
              
              {/* Top Document Header Card */}
              <div className="bg-white border-2 border-black p-4 sm:p-5 rounded-2xl shadow-xs">
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-neutral-200 pb-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full ${
                        selectedDoc.tier === 'open-access' ? 'bg-emerald-700 text-white' : 'bg-black text-white'
                      }`}>
                        {selectedDoc.tier === 'open-access' ? 'Open Access' : 'Institutional Gated'}
                      </span>
                      <span className="text-xs text-neutral-500 font-semibold">
                        {selectedDoc.badge} • {selectedDoc.fileSize || `${selectedDoc.pages} pages`}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
                      {selectedDoc.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#FA383E]">
                      {selectedDoc.subtitle}
                    </p>
                  </div>

                  {/* Top Action Buttons: Open in New Tab, Direct Download, GitHub Link */}
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Open in New Window / Tab */}
                    <button
                      onClick={() => handleOpenInNewTab(selectedDoc)}
                      className="px-3 py-2 rounded-xl bg-white hover:bg-neutral-100 text-neutral-900 font-bold text-xs flex items-center gap-1.5 border border-neutral-300 shadow-xs transition cursor-pointer"
                      title="Open full document in a separate browser tab"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-neutral-700" />
                      <span className="hidden sm:inline">Open in Tab</span>
                      <ExternalLink className="w-3 h-3 text-neutral-500" />
                    </button>

                    {/* GitHub Blob Source */}
                    {selectedDoc.githubBlobUrl && (
                      <a
                        href={selectedDoc.githubBlobUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-xl bg-neutral-900 hover:bg-black text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition"
                        title="View file repository on GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">GitHub</span>
                        <ExternalLink className="w-3 h-3 text-neutral-400" />
                      </a>
                    )}

                    {/* Direct 1-Click Download Button */}
                    <button
                      disabled={isDownloading}
                      onClick={() => handleDownloadDoc(selectedDoc)}
                      className="px-4 py-2 rounded-xl bg-[#FA383E] hover:bg-[#e02d33] text-white font-black text-xs flex items-center gap-1.5 shadow-xs transition cursor-pointer disabled:opacity-50"
                    >
                      {isDownloading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>Downloading...</span>
                        </>
                      ) : downloadSuccessId === selectedDoc.id ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-white" />
                          <span>Saved to Device!</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          <span>Download File</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => setCurrentView('list')}
                      className="px-3 py-2 rounded-xl border border-neutral-300 hover:bg-neutral-100 text-neutral-800 font-bold text-xs transition cursor-pointer"
                    >
                      All Docs
                    </button>
                  </div>
                </div>

                {/* View Tabs Selector (Embedded Viewer vs Slide Deck vs Transcript) */}
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    {/* Embedded Viewer Tab */}
                    <button
                      onClick={() => setDocTab('embedded')}
                      className={`text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition cursor-pointer ${
                        docTab === 'embedded'
                          ? 'bg-black text-white'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                    >
                      {selectedDoc.fileType === 'image' ? (
                        <>
                          <ImageIcon className="w-3.5 h-3.5" /> Visual Image Viewer
                        </>
                      ) : selectedDoc.fileType === 'pdf' ? (
                        <>
                          <FileText className="w-3.5 h-3.5" /> Embedded PDF Viewer
                        </>
                      ) : (
                        <>
                          <FileArchive className="w-3.5 h-3.5" /> Package Archive Inspector
                        </>
                      )}
                    </button>

                    {/* Slide Stepper Tab (For Pitch Decks) */}
                    {(selectedDoc.id === 'doc-005-primary-pitch-deck' || selectedDoc.id === 'doc-007-archived-pitch-decks') && (
                      <button
                        onClick={() => setDocTab('slides')}
                        className={`text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition cursor-pointer ${
                          docTab === 'slides'
                            ? 'bg-[#FBB040] text-black font-black'
                            : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                        }`}
                      >
                        <Layers className="w-3.5 h-3.5" /> Interactive Slide Stepper
                      </button>
                    )}

                    {/* Data Transcript Tab */}
                    <button
                      onClick={() => setDocTab('transcript')}
                      className={`text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition cursor-pointer ${
                        docTab === 'transcript'
                          ? 'bg-neutral-800 text-white'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                    >
                      <FileText className="w-3.5 h-3.5" /> Data Ledger & Transcript
                    </button>
                  </div>

                  <span className="text-[11px] text-neutral-500 font-mono">
                    Local File: {selectedDoc.downloadFileName}
                  </span>
                </div>
              </div>

              {/* ========================================================
                  TAB 1: EMBEDDED VIEWER (IMAGE / PDF / ZIP)
                  ======================================================== */}
              {docTab === 'embedded' && (
                <div>
                  {/* --- CASE A: PDF DOCUMENTS --- */}
                  {selectedDoc.fileType === 'pdf' && (
                    <div className="bg-white border-2 border-black rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
                      <div className="flex items-center justify-between text-xs text-neutral-700 font-bold border-b border-neutral-100 pb-2">
                        <span className="flex items-center gap-1.5 text-neutral-900">
                          <FileText className="w-4 h-4 text-red-600" /> Interactive PDF Reader ({selectedDoc.downloadFileName})
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleOpenInNewTab(selectedDoc)}
                            className="text-xs text-blue-700 hover:underline flex items-center gap-1 font-bold cursor-pointer"
                          >
                            <span>Open Fullscreen</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => handleDownloadDoc(selectedDoc)}
                            className="text-xs text-red-600 hover:underline flex items-center gap-1 font-bold cursor-pointer"
                          >
                            <Download className="w-3 h-3" />
                            <span>Save PDF</span>
                          </button>
                        </div>
                      </div>

                      {/* Embedded Interactive PDF Frame */}
                      <div className="w-full rounded-xl overflow-hidden border border-neutral-300 bg-neutral-100 flex flex-col items-center">
                        <iframe
                          src={encodeURI(selectedDoc.localUrl)}
                          title={selectedDoc.title}
                          className="w-full h-[540px] sm:h-[620px] rounded-xl border-0"
                        />
                      </div>
                    </div>
                  )}

                  {/* --- CASE B: HIGH-RES PNG IMAGES --- */}
                  {selectedDoc.fileType === 'image' && (
                    <div className="bg-white border-2 border-black rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
                      <div className="flex items-center justify-between text-xs text-neutral-700 font-bold border-b border-neutral-100 pb-2">
                        <span className="flex items-center gap-1.5 text-neutral-900">
                          <ImageIcon className="w-4 h-4 text-blue-600" /> High-Resolution Visual Image ({selectedDoc.fileSize})
                        </span>
                        
                        <div className="flex items-center gap-2">
                          <div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden bg-neutral-50 text-[11px]">
                            <button
                              onClick={() => setImageZoom('fit')}
                              className={`px-2 py-1 font-semibold ${imageZoom === 'fit' ? 'bg-black text-white' : 'text-neutral-700 hover:bg-neutral-200'}`}
                            >
                              Fit
                            </button>
                            <button
                              onClick={() => setImageZoom('fill')}
                              className={`px-2 py-1 font-semibold ${imageZoom === 'fill' ? 'bg-black text-white' : 'text-neutral-700 hover:bg-neutral-200'}`}
                            >
                              Full Width
                            </button>
                          </div>

                          <button
                            onClick={() => handleOpenInNewTab(selectedDoc)}
                            className="text-xs text-blue-700 hover:underline flex items-center gap-1 font-bold cursor-pointer ml-2"
                          >
                            <span>Open Image in Tab</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {/* Image Stage */}
                      <div className="rounded-xl overflow-hidden border border-neutral-200 bg-neutral-900 flex items-center justify-center p-3 max-h-[640px] overflow-y-auto">
                        <img
                          src={encodeURI(selectedDoc.localUrl)}
                          alt={selectedDoc.title}
                          className={`rounded-lg shadow-md transition-all duration-200 ${
                            imageZoom === 'fit'
                              ? 'max-h-[580px] w-auto object-contain'
                              : 'w-full h-auto object-contain'
                          }`}
                        />
                      </div>
                    </div>
                  )}

                  {/* --- CASE C: ZIP ARCHIVES --- */}
                  {selectedDoc.fileType === 'zip' && (
                    <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-xs space-y-5">
                      <div className="flex items-start justify-between border-b border-neutral-200 pb-3">
                        <div>
                          <span className="text-[10px] font-black uppercase bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-md flex items-center gap-1 w-fit mb-2">
                            <FileArchive className="w-3 h-3 text-amber-700" /> Compressed Package Archive (.ZIP)
                          </span>
                          <h4 className="text-xl font-black text-neutral-900">
                            {selectedDoc.title}
                          </h4>
                          <p className="text-xs text-neutral-600 mt-1">
                            {selectedDoc.description}
                          </p>
                        </div>

                        <button
                          onClick={() => handleDownloadDoc(selectedDoc)}
                          className="px-5 py-2.5 rounded-xl bg-black hover:bg-neutral-800 text-white font-black text-xs flex items-center gap-2 shadow-xs transition cursor-pointer"
                        >
                          <Download className="w-4 h-4 text-[#FBB040]" />
                          <span>Download .ZIP ({selectedDoc.fileSize})</span>
                        </button>
                      </div>

                      {/* Archive Manifest */}
                      <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 space-y-3">
                        <div className="flex items-center justify-between text-xs font-bold text-neutral-800">
                          <span>Archive Contents & Package Breakdown</span>
                          <span className="text-neutral-500 font-mono text-[11px]">{selectedDoc.fileSize}</span>
                        </div>
                        
                        <div className="space-y-2">
                          {selectedDoc.summaryPoints.map((point, index) => (
                            <div key={index} className="flex items-center gap-2 text-xs text-neutral-700 bg-white p-2.5 rounded-lg border border-neutral-200">
                              <FileDown className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                              <span className="font-medium">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <a
                          href={selectedDoc.githubBlobUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-neutral-600 hover:text-black font-bold flex items-center gap-1.5"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>View raw archive commit on GitHub</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>

                        <button
                          onClick={() => handleDownloadDoc(selectedDoc)}
                          className="px-4 py-2 rounded-xl bg-[#FA383E] hover:bg-[#e02d33] text-white font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" /> Direct Unpack & Download
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ========================================================
                  TAB 2: SLIDE STEPPER PRESENTATION VIEWER
                  ======================================================== */}
              {docTab === 'slides' && (
                <div className="bg-white border-2 border-black rounded-2xl p-5 sm:p-7 shadow-xs space-y-6">
                  <div className="flex items-center justify-between text-xs text-neutral-500 font-semibold border-b border-neutral-100 pb-3">
                    <span className="uppercase tracking-wider text-black bg-[#FBB040] px-3 py-1 rounded-full font-black text-xs">
                      Slide {currentSlideIndex + 1} of {PITCH_DECK_SLIDES.length}
                    </span>
                    <span className="flex items-center gap-1 text-neutral-800 font-black">
                      <Layers className="w-3.5 h-3.5 text-[#FA383E]" /> Interactive Pitch Presentation
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                      {PITCH_DECK_SLIDES[currentSlideIndex].title}
                    </h4>
                    <p className="text-sm sm:text-base font-bold text-[#FA383E]">
                      {PITCH_DECK_SLIDES[currentSlideIndex].subtitle}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    {PITCH_DECK_SLIDES[currentSlideIndex].highlights.map((point, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                        <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                          {index + 1}
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-800 font-semibold leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Slide Stepper Controls */}
                  <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        disabled={currentSlideIndex === 0}
                        onClick={() => setCurrentSlideIndex((prev) => Math.max(0, prev - 1))}
                        className="px-3.5 py-2 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-100 disabled:opacity-40 disabled:cursor-not-allowed text-neutral-900 text-xs font-black flex items-center gap-1 transition cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" /> Previous
                      </button>
                      <button
                        disabled={currentSlideIndex === PITCH_DECK_SLIDES.length - 1}
                        onClick={() => setCurrentSlideIndex((prev) => Math.min(PITCH_DECK_SLIDES.length - 1, prev + 1))}
                        className="px-3.5 py-2 rounded-xl bg-black hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-black flex items-center gap-1 transition cursor-pointer"
                      >
                        Next Slide <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          if (typeof navigator !== 'undefined' && navigator.share) {
                            navigator.share({
                              title: `GOODHEART — ${selectedDoc.title}`,
                              text: selectedDoc.description,
                              url: window.location.href,
                            }).catch(() => {});
                          }
                          navigator.clipboard.writeText(window.location.href);
                          setCopiedLink(true);
                          setTimeout(() => setCopiedLink(false), 2000);
                        }}
                        className="px-3 py-1.5 rounded-lg border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800 text-xs font-semibold flex items-center gap-1 transition cursor-pointer"
                      >
                        {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                        <span>{copiedLink ? 'Link Copied' : 'Share'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================
                  TAB 3: DATA TRANSCRIPT & DOCUMENT TEXT LEDGER
                  ======================================================== */}
              {docTab === 'transcript' && (
                <div className="bg-white border border-neutral-300 rounded-2xl p-4 sm:p-6 shadow-xs space-y-3">
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-neutral-700">
                      Document Transcript & Data Ledger
                    </h4>
                    <span className="text-[11px] text-neutral-400 font-mono">
                      FORMAT: {selectedDoc.fileFormat}
                    </span>
                  </div>

                  <div className="bg-neutral-950 text-neutral-200 p-5 rounded-xl font-mono text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap border border-neutral-800 max-h-[440px] shadow-inner">
                    {selectedDoc.fullReportText}
                  </div>
                </div>
              )}

              {/* All Repository Documents Quick Strip */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-2.5">
                  <h4 className="text-xs font-black uppercase tracking-wider text-neutral-800">
                    All Files in 000. PUBLIC DOCS ({GATED_DOCUMENTS.length}):
                  </h4>
                  <a
                    href={GITHUB_DOCS_REPO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-600 hover:text-black font-bold flex items-center gap-1"
                  >
                    <span>View GitHub Folder</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {GATED_DOCUMENTS.filter(d => d.id !== selectedDoc.id).slice(0, 6).map((d) => (
                    <button
                      key={d.id}
                      onClick={() => handleDocumentClick(d)}
                      className="text-left bg-white p-3 rounded-xl border border-neutral-200 hover:border-black transition flex flex-col justify-between cursor-pointer"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-[9px] font-black uppercase ${
                            d.tier === 'open-access' ? 'text-emerald-700' : 'text-neutral-500'
                          }`}>
                            {d.tier === 'open-access' ? 'Open' : 'Gated'} • {d.category}
                          </span>
                          <span className="text-[10px] text-neutral-400 font-medium">{d.fileSize}</span>
                        </div>
                        <div className="font-bold text-xs text-neutral-900 line-clamp-1">{d.title}</div>
                      </div>
                      <span className="text-[10px] text-amber-700 font-bold mt-2 flex items-center gap-1">
                        <Eye className="w-3 h-3" /> Open File →
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ========================================================
            MODAL FOOTER
            ======================================================== */}
        <div className="px-4 sm:px-6 py-3 bg-white border-t border-neutral-200 flex items-center justify-between shrink-0">
          <div className="text-[11px] text-neutral-500 flex items-center gap-1.5">
            <Github className="w-3.5 h-3.5 text-neutral-700" />
            <span>GitHub Release: <strong className="font-semibold text-neutral-800">DianEddy/investors-GoodHeart/000. PUBLIC DOCS</strong></span>
          </div>

          <div className="flex items-center gap-2">
            {currentView !== 'list' && (
              <button
                onClick={() => setCurrentView('list')}
                className="px-4 py-1.5 rounded-xl text-xs font-bold text-neutral-700 hover:text-black transition cursor-pointer"
              >
                Browse All Documents
              </button>
            )}

            <button
              onClick={onClose}
              className="px-5 py-1.5 rounded-xl bg-black hover:bg-neutral-800 text-white font-bold text-xs transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
