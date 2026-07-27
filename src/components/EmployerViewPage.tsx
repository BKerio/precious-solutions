import { useState, useEffect } from 'react';
import { Search, Eye, Lock, Unlock, Phone, Mail, FileText, CreditCard, Smartphone, Shield, Sparkles, ArrowLeft } from 'lucide-react';
import { navigate } from '@/hooks/useRoute';

interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  experience: number;
  bio: string;
  linkedin?: string;
  cvFileName: string;
  uploadedAt: string;
}

// Pre-populated high-quality candidates
const defaultCandidates: Candidate[] = [
  {
    id: 'def_1',
    name: 'Harrison Kiprop',
    email: 'harrison.kiprop@hospitality.co.ke',
    phone: '+254 722 890 123',
    role: 'General Manager',
    experience: 12,
    bio: 'General Manager with 12+ years directing 4-star and 5-star operations in Nairobi and Mombasa. Expert in revenue management, brand standards, and pre-opening advisory. Certified in Cornell Hospitality management.',
    linkedin: 'https://linkedin.com/in/harrison-kiprop-hospitality',
    cvFileName: 'Harrison_Kiprop_CV.pdf',
    uploadedAt: 'May 12, 2026',
  },
  {
    id: 'def_2',
    name: 'Melissa Mutua',
    email: 'melissa.mutua@gmail.com',
    phone: '+254 733 456 789',
    role: 'Executive Chef',
    experience: 15,
    bio: 'French Culinary Arts graduate with deep expertise in continental cuisine, coastal resort fine dining, and volume catering. Former Executive Chef at a premier luxury safari camp. Strong background in food cost controls and menu design.',
    linkedin: 'https://linkedin.com/in/chef-melissa-mutua',
    cvFileName: 'Melissa_Mutua_ExecutiveChef.pdf',
    uploadedAt: 'May 18, 2026',
  },
  {
    id: 'def_3',
    name: 'Dennis Omondi',
    email: 'd.omondi@outlook.com',
    phone: '+254 712 345 678',
    role: 'F&B Manager',
    experience: 8,
    bio: 'Energetic Food & Beverage professional specializing in modern mixology, restaurant conceptualization, and service standards. Proven track record of raising guest satisfaction metrics by 30% through staff training.',
    cvFileName: 'Dennis_Omondi_F&B_Manager.pdf',
    uploadedAt: 'May 20, 2026',
  },
  {
    id: 'def_4',
    name: 'Fatima Yusuf',
    email: 'fatima.y@live.com',
    phone: '+254 705 987 654',
    role: 'Receptionist / Front Desk Agent',
    experience: 4,
    bio: 'Polished Front Office Agent with 4 years at busy boutique hotels. Fully certified in Opera PMS and Fidelio. Fluent in English, Swahili, and conversational German. Exceptionally rated for guest onboarding.',
    cvFileName: 'Fatima_Yusuf_FrontDesk.pdf',
    uploadedAt: 'May 22, 2026',
  },
  {
    id: 'def_5',
    name: 'Erick Mwangi',
    email: 'erick.mwangi@hospitality.net',
    phone: '+254 721 112 233',
    role: 'Executive Housekeeper',
    experience: 10,
    bio: 'Housekeeping leader specializing in luxury rooms inspection, SOP writing, and environmental sustainability standards. Successfully managed rooms operations for a 150-room business hotel.',
    cvFileName: 'Erick_Mwangi_Housekeeper.docx',
    uploadedAt: 'May 23, 2026',
  }
];

function EmployerViewPage() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [minExperience, setMinExperience] = useState('All');
  
  // Unlock Status
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card'>('mpesa');
  const [mpesaPhone, setMpesaPhone] = useState('0722000000');
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '' });
  const [isProcessing, setIsProcessing] = useState(false);

  // Load candidates on mount
  useEffect(() => {
    // Check if employer is already unlocked
    const unlockedLocal = localStorage.getItem('precious_employer_unlocked') === 'true';
    setIsUnlocked(unlockedLocal);

    // Merge uploaded candidates with defaults
    const customDb = localStorage.getItem('precious_cv_database');
    const uploadedList: Candidate[] = customDb ? JSON.parse(customDb) : [];
    
    // De-duplicate defaults if custom list has items with same id
    setCandidates([...uploadedList, ...defaultCandidates]);
  }, []);

  const handleUnlockPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsUnlocked(true);
      setShowPaymentModal(false);
      localStorage.setItem('precious_employer_unlocked', 'true');
    }, 3000);
  };

  const handleLockReset = () => {
    localStorage.removeItem('precious_employer_unlocked');
    setIsUnlocked(false);
  };

  // Unique list of roles in database
  const availableRoles = ['All', ...new Set(candidates.map(c => c.role))];

  // Filtering Logic
  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = 
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.bio.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRole = selectedRole === 'All' || candidate.role === selectedRole;
    
    let matchesExp = true;
    if (minExperience !== 'All') {
      const minVal = parseInt(minExperience);
      matchesExp = candidate.experience >= minVal;
    }

    return matchesSearch && matchesRole && matchesExp;
  });

  return (
    <div className="bg-[#F5F7F7] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-slate-text/80 hover:text-[#184341] text-xs font-semibold uppercase tracking-wider mb-4 transition-colors"
            >
              <ArrowLeft size={14} /> Back to Home
            </button>
            <span className="section-label block">For Recruiters</span>
            <h1 className="text-3xl md:text-5xl font-serif font-light text-primary">
              Hospitality <span className="font-semibold italic font-sans text-primary/95">CV Database</span>
            </h1>
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            {isUnlocked ? (
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-bold px-4 py-2.5 rounded-[4px] border border-emerald-100">
                  <Unlock size={14} /> Database Access Unlocked
                </span>
                <button
                  onClick={handleLockReset}
                  className="text-xs text-red-500 hover:text-red-700 underline font-semibold transition-colors"
                  title="Simulate re-locking for testing purposes"
                >
                  Reset Lock State
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowPaymentModal(true)}
                className="btn-primary flex items-center gap-2 text-xs uppercase font-bold tracking-wider px-6 py-3.5 border-none"
              >
                <Lock size={14} /> Unlock Database ($5)
              </button>
            )}
          </div>
        </div>

        {/* Lock alert banner */}
        {!isUnlocked && (
          <div className="bg-[#184341] text-white p-6 rounded-[4px] mb-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full -translate-x-12 -translate-y-12" />
            <div className="relative z-10">
              <h3 className="font-semibold text-base mb-1 flex items-center gap-2">
                <Sparkles size={16} /> Premium Access Required
              </h3>
              <p className="text-xs text-white/80 leading-relaxed max-w-2xl">
                A processing fee of $5 (approx. KES 650) is required to unlock full profiles, CV download files, phone numbers, and email listings of hospitality professionals.
              </p>
            </div>
            <button
              onClick={() => setShowPaymentModal(true)}
              className="relative z-10 bg-white hover:bg-white/90 text-primary text-xs uppercase tracking-wider font-bold px-6 py-3.5 rounded-[4px] transition-all duration-300"
            >
              Unlock All CVs
            </button>
          </div>
        )}

        {/* Filters and Search panel */}
        <div className="bg-white p-6 rounded-[4px] shadow-sm border border-teal-50 mb-8 grid md:grid-cols-12 gap-6 items-center">
          
          {/* Keyword Search */}
          <div className="md:col-span-5 relative">
            <label className="block text-[10px] uppercase tracking-wider text-slate-text/75 font-semibold mb-2">Search Candidates</label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-teal-50 bg-[#F5F7F7]/40 rounded-[4px] pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#184341] transition-colors"
                placeholder="Search name, skills, bio..."
              />
              <Search className="absolute left-3.5 top-3.5 text-slate-text/60" size={16} />
            </div>
          </div>

          {/* Specialty Filter */}
          <div className="md:col-span-4">
            <label className="block text-[10px] uppercase tracking-wider text-slate-text/75 font-semibold mb-2">Hospitality Role</label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full border border-teal-50 bg-[#F5F7F7]/40 rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-[#184341] transition-colors cursor-pointer"
            >
              {availableRoles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>

          {/* Experience Filter */}
          <div className="md:col-span-3">
            <label className="block text-[10px] uppercase tracking-wider text-slate-text/75 font-semibold mb-2">Minimum Experience</label>
            <select
              value={minExperience}
              onChange={(e) => setMinExperience(e.target.value)}
              className="w-full border border-teal-50 bg-[#F5F7F7]/40 rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-[#184341] transition-colors cursor-pointer"
            >
              <option value="All">All Levels</option>
              <option value="2">2+ Years</option>
              <option value="5">5+ Years</option>
              <option value="10">10+ Years</option>
            </select>
          </div>

        </div>

        {/* Candidate Count */}
        <div className="mb-6 flex justify-between items-center text-xs text-slate-text">
          <p>Showing <strong>{filteredCandidates.length}</strong> matching candidate profiles</p>
        </div>

        {/* Candidate List Grid */}
        {filteredCandidates.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-[4px] border border-teal-50 shadow-sm">
            <p className="text-sm text-slate-text/70 mb-2">No profiles match your active filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRole('All');
                setMinExperience('All');
              }}
              className="text-xs text-[#184341] font-semibold underline hover:text-[#0f2d2b]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredCandidates.map(candidate => (
              <div
                key={candidate.id}
                className="bg-white border border-teal-50 rounded-[4px] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge Info */}
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-primary leading-tight">
                        {isUnlocked ? candidate.name : candidate.name.split(' ')[0] + ' ' + (candidate.name.split(' ')[1] ? candidate.name.split(' ')[1][0] + '.' : '')}
                      </h3>
                      <p className="text-xs font-semibold text-[#184341] uppercase tracking-wide mt-1">{candidate.role}</p>
                    </div>
                    <span className="bg-[#F5F7F7] text-slate-text text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-[4px]">
                      {candidate.experience} Years Exp
                    </span>
                  </div>

                  {/* Professional Summary */}
                  <p className="text-slate-text text-xs leading-relaxed mb-6 italic">
                    "{candidate.bio}"
                  </p>
                </div>

                {/* Bottom lockable details panel */}
                <div className="border-t border-teal-50/70 pt-4 mt-4 space-y-3">
                  {isUnlocked ? (
                    /* Unlocked details */
                    <div className="space-y-3 text-xs text-slate-text animate-fade-in">
                      <div className="flex items-center gap-2.5">
                        <Mail size={13} className="text-[#184341] shrink-0" />
                        <a href={`mailto:${candidate.email}`} className="hover:underline font-semibold text-primary">{candidate.email}</a>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone size={13} className="text-[#184341] shrink-0" />
                        <a href={`tel:${candidate.phone}`} className="hover:underline font-semibold text-primary">{candidate.phone}</a>
                      </div>
                      {candidate.linkedin && (
                        <div className="flex items-center gap-2.5">
                          <Eye size={13} className="text-[#184341] shrink-0" />
                          <a href={candidate.linkedin} target="_blank" rel="noreferrer" className="text-teal-700 hover:underline">View LinkedIn Profile</a>
                        </div>
                      )}
                      <div className="pt-2">
                        <button
                          onClick={() => alert(`Simulating CV Download: ${candidate.cvFileName}`)}
                          className="w-full btn-outline flex items-center justify-center gap-2 text-xs py-2.5 rounded-[4px]"
                        >
                          <FileText size={14} /> Download CV ({candidate.cvFileName.split('.').pop()?.toUpperCase()})
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Locked details styling */
                    <div className="space-y-3 relative overflow-hidden">
                      <div className="blur-[3px] select-none space-y-2 pointer-events-none opacity-40">
                        <div className="flex items-center gap-2.5 text-xs">
                          <Mail size={13} />
                          <span>xxxxxxx.xxxx@xxxxx.com</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs">
                          <Phone size={13} />
                          <span>+254 7xx xxx xxx</span>
                        </div>
                        <div className="w-full border border-divider flex items-center justify-center gap-2 text-[10px] py-2">
                          <FileText size={12} /> Download CV File
                        </div>
                      </div>

                      {/* Cover Lock Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-white/20">
                        <button
                          onClick={() => setShowPaymentModal(true)}
                          className="inline-flex items-center gap-2 bg-slate-100 hover:bg-[#184341] hover:text-white text-primary text-[10px] font-bold uppercase tracking-wider px-4 py-2 border border-teal-50 shadow-sm transition-colors rounded-[4px]"
                        >
                          <Lock size={12} /> Unlock Contact details
                        </button>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* High Fidelity Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white w-full max-w-md rounded-[4px] overflow-hidden shadow-2xl relative border border-teal-50">
            {/* Modal Header */}
            <div className="bg-[#184341] text-white p-6 relative">
              <h3 className="text-lg font-serif font-light mb-1">
                Employer <span className="font-semibold italic font-sans text-white/95">Secure Access</span>
              </h3>
              <p className="text-[10px] text-white/70 uppercase tracking-wider">Database Unlock Fee: $5.00 (KES 650.00)</p>
              
              <button
                onClick={() => setShowPaymentModal(false)}
                className="absolute top-6 right-6 text-white/70 hover:text-white text-xs font-bold"
              >
                Cancel
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {/* Tabs */}
              <div className="grid grid-cols-2 gap-2 border-b border-teal-100 pb-4 mb-6">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('mpesa')}
                  className={`flex items-center justify-center gap-2 py-2 text-xs font-bold uppercase tracking-wider rounded-[4px] transition-all ${
                    paymentMethod === 'mpesa'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'text-slate-text hover:bg-slate-50'
                  }`}
                >
                  <Smartphone size={14} /> M-Pesa STK
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`flex items-center justify-center gap-2 py-2 text-xs font-bold uppercase tracking-wider rounded-[4px] transition-all ${
                    paymentMethod === 'card'
                      ? 'bg-teal-50 text-[#184341] border border-teal-100'
                      : 'text-slate-text hover:bg-slate-50'
                  }`}
                >
                  <CreditCard size={14} /> Credit Card
                </button>
              </div>

              {isProcessing ? (
                /* Processing State */
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 rounded-full border-4 border-teal-50 border-t-[#184341] animate-spin" />
                  </div>
                  {paymentMethod === 'mpesa' ? (
                    <div>
                      <p className="text-sm font-semibold text-primary mb-2">Sending STK Push Prompt...</p>
                      <p className="text-xs text-slate-text leading-relaxed">
                        Please check your phone (unlocked) for the M-Pesa prompt. Enter your PIN to approve KES 650.00 to PRECIOUS SOLUTIONS.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-sm font-semibold text-primary mb-2">Authorizing Card Transaction...</p>
                      <p className="text-xs text-slate-text leading-relaxed">
                        Verifying details with your credit card issuing bank. Do not close this browser window.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                /* Payment Inputs */
                <div className="space-y-4">
                  {paymentMethod === 'mpesa' ? (
                    <div className="space-y-4 animate-fade-in">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-slate-text/75 font-semibold mb-2">
                          M-Pesa Registered Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={mpesaPhone}
                          onChange={(e) => setMpesaPhone(e.target.value)}
                          className="w-full border border-teal-100 rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-[#184341]"
                          placeholder="e.g. 0722000000"
                        />
                        <p className="text-[10px] text-slate-text/60 mt-1">Enter your phone in the format 07xx xxx xxx or 2547xx xxx xxx.</p>
                      </div>
                      <button
                        type="button"
                        onClick={handleUnlockPayment}
                        className="w-full py-4 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 rounded-[4px] transition-colors border-none"
                      >
                        Send M-Pesa STK Push
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4 animate-fade-in">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-slate-text/75 font-semibold mb-2">
                          Card Number *
                        </label>
                        <input
                          type="text"
                          required
                          value={cardDetails.number}
                          onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                          className="w-full border border-teal-100 rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-[#184341]"
                          placeholder="4000 1234 5678 9010"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-slate-text/75 font-semibold mb-2">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            required
                            value={cardDetails.expiry}
                            onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                            className="w-full border border-teal-100 rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-[#184341]"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-slate-text/75 font-semibold mb-2">
                            CVV / Code *
                          </label>
                          <input
                            type="text"
                            required
                            value={cardDetails.cvv}
                            onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                            className="w-full border border-teal-100 rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-[#184341]"
                            placeholder="123"
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleUnlockPayment}
                        className="w-full py-4 text-xs font-bold uppercase tracking-wider text-white bg-[#184341] hover:bg-[#0f2d2b] rounded-[4px] transition-colors border-none"
                      >
                        Pay $5.00 Securely
                      </button>
                    </div>
                  )}

                  <div className="flex gap-2 items-center justify-center text-[10px] text-slate-text/60 mt-4 border-t border-teal-50 pt-4">
                    <Shield size={12} />
                    <span>SSL Encrypted and secured by Precious Solutions Kenya.</span>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default EmployerViewPage;
