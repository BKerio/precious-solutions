import React, { useState } from 'react';
import { UploadCloud, CheckCircle2, CreditCard, Smartphone, Shield, Sparkles, FileText, ArrowLeft } from 'lucide-react';
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

const roles = [
  'General Manager',
  'Assistant Hotel Manager',
  'Executive Chef',
  'Sous Chef',
  'F&B Manager',
  'Restaurant Manager',
  'F&B Service Crew / Waitstaff',
  'Front Office Manager',
  'Receptionist / Front Desk Agent',
  'Executive Housekeeper',
  'Housekeeping Supervisor / Staff',
  'Bartender / Mixologist',
  'Guest Relations Officer',
  'Sales & Marketing Manager',
  'Human Resources Generalist',
];

function UploadCvPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: roles[0],
    experience: '',
    bio: '',
    linkedin: '',
  });

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card'>('mpesa');
  const [mpesaPhone, setMpesaPhone] = useState('');
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '' });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  // Drag and Drop handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type === 'application/pdf' || file.name.endsWith('.pdf') || file.name.endsWith('.docx') || file.name.endsWith('.doc')) {
        setCvFile(file);
      } else {
        alert('Please upload a PDF or Word document (.docx/.doc) file.');
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cvFile) {
      alert('Please select or upload your CV document.');
      return;
    }
    setMpesaPhone(formData.phone || '0700000000');
    setShowPaymentModal(true);
  };

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate API call/STK Push
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaid(true);
      setShowPaymentModal(false);

      // Save to localStorage
      const newCandidate: Candidate = {
        id: 'candidate_' + Math.random().toString(36).substr(2, 9),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        experience: parseInt(formData.experience) || 0,
        bio: formData.bio,
        linkedin: formData.linkedin,
        cvFileName: cvFile ? cvFile.name : 'resume.pdf',
        uploadedAt: new Date().toLocaleDateString('en-KE', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
      };

      const existingData = localStorage.getItem('precious_cv_database');
      const cvList: Candidate[] = existingData ? JSON.parse(existingData) : [];
      cvList.unshift(newCandidate);
      localStorage.setItem('precious_cv_database', JSON.stringify(cvList));

    }, 3000);
  };

  return (
    <div className="bg-[#F5F7F7] min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Back Link */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-slate-text/80 hover:text-[#184341] text-xs font-semibold uppercase tracking-wider mb-8 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Home
        </button>

        {isPaid ? (
          /* Thank You / Success State */
          <div className="bg-white p-10 md:p-16 rounded-[4px] shadow-sm border border-teal-50 text-center animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-8 animate-bounce">
              <CheckCircle2 size={42} />
            </div>
            <span className="section-label inline-block">Payment & Listing Complete</span>
            <h1 className="text-3xl md:text-5xl font-serif font-light text-primary mb-6">
              Your CV is <span className="font-semibold italic font-sans text-primary/95">Successfully Loaded</span>
            </h1>
            <p className="text-slate-text text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
              Thank you, {formData.name}! Your professional profile is now live in our talent pipeline. Premium hospitality employers and hotel groups across East Africa can now discover you for active positions.
            </p>
            <div className="bg-[#F5F7F7] p-6 rounded-[4px] max-w-md mx-auto border-t-2 border-[#184341] mb-10 text-left">
              <h3 className="text-xs uppercase tracking-wider font-bold text-primary mb-4">Listing Summary</h3>
              <div className="space-y-2 text-xs text-slate-text">
                <p><strong className="text-primary">Profile Name:</strong> {formData.name}</p>
                <p><strong className="text-primary">Target Specialty:</strong> {formData.role}</p>
                <p><strong className="text-primary">Experience:</strong> {formData.experience} Years</p>
                <p><strong className="text-primary">Paid Amount:</strong> $5.00 (KES 650.00)</p>
                <p><strong className="text-primary">Status:</strong> Active / Listed</p>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  // Reset State
                  setIsPaid(false);
                  setCvFile(null);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    role: roles[0],
                    experience: '',
                    bio: '',
                    linkedin: '',
                  });
                }}
                className="btn-outline px-6 py-3.5 text-xs font-semibold uppercase tracking-wider"
              >
                Submit Another CV
              </button>
              <button
                onClick={() => navigate('/')}
                className="btn-primary px-6 py-3.5 text-xs font-semibold uppercase tracking-wider"
              >
                Return to Home
              </button>
            </div>
          </div>
        ) : (
          /* Normal Input State */
          <div className="grid md:grid-cols-12 gap-8 items-start">
            
            {/* Left Content info */}
            <div className="md:col-span-4 space-y-6">
              <div className="bg-[#184341] text-white p-8 rounded-[4px] shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 w-24 h-24 bg-white/5 rounded-full -translate-x-6 -translate-y-6" />
                <Sparkles className="text-white/80 mb-6" size={24} />
                <h2 className="text-xl md:text-2xl font-serif font-light mb-4 leading-tight">
                  Hospitality <span className="font-semibold italic font-sans text-white/95">Talent Hub</span>
                </h2>
                <p className="text-white/70 text-xs leading-relaxed mb-6">
                  Precious Solutions works directly with corporate directors, project managers, and organizational leaders to staff active positions.
                </p>
                <div className="border-t border-white/10 pt-4 space-y-4">
                  <div className="flex gap-3 items-start">
                    <Shield size={14} className="text-white/60 shrink-0 mt-0.5" />
                    <p className="text-[10px] text-white/60 leading-normal">Your information is verified and visible only to registered, paying employer groups.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-[4px] border border-teal-50 shadow-sm space-y-4">
                <h3 className="text-xs uppercase tracking-wider font-bold text-primary">Process Steps</h3>
                <ol className="text-xs text-slate-text space-y-3 list-decimal list-inside">
                  <li>Fill details & upload CV document</li>
                  <li>Pay a one-time listing fee of $5</li>
                  <li>Profile reviews and verification by Precious team</li>
                  <li>Profile exposed to corporate employers for direct hires</li>
                </ol>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="md:col-span-8 bg-white p-8 md:p-10 rounded-[4px] shadow-sm border border-teal-50">
              <span className="section-label">For Candidates</span>
              <h2 className="text-2xl md:text-3xl font-medium text-primary mb-4">
                Submit Your CV
              </h2>
              <p className="text-slate-text text-xs mb-8">
                A processing fee of $5 (KES 650) is charged to host your CV on our premium matching database.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-text/75 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-teal-100 rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-[#184341] transition-colors"
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-text/75 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-teal-100 rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-[#184341] transition-colors"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-text/75 font-semibold mb-2">
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-teal-100 rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-[#184341] transition-colors"
                      placeholder="e.g. +254 700 000 000"
                    />
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-text/75 font-semibold mb-2">
                      Years of Experience *
                    </label>
                    <input
                      type="number"
                      required
                      min="0"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full border border-teal-100 rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-[#184341] transition-colors"
                      placeholder="e.g. 5"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Target Role */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-text/75 font-semibold mb-2">
                      Primary Hospitality Role *
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full border border-teal-100 rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-[#184341] bg-white transition-colors cursor-pointer"
                    >
                      {roles.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-text/75 font-semibold mb-2">
                      LinkedIn Profile (Optional)
                    </label>
                    <input
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      className="w-full border border-teal-100 rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-[#184341] transition-colors"
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>
                </div>

                {/* Professional Bio */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-slate-text/75 font-semibold mb-2">
                    Professional Statement / Short Bio *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    className="w-full border border-teal-100 rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-[#184341] transition-colors resize-none"
                    placeholder="Briefly summarize your key skills, properties you have worked at, and operational strengths..."
                  />
                </div>

                {/* File Upload Area */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-slate-text/75 font-semibold mb-2">
                    CV / Resume File (.pdf or .docx) *
                  </label>
                  <div
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-[4px] p-6 text-center transition-all ${
                      dragActive ? 'border-[#184341] bg-teal-50/10' : 'border-teal-100 hover:border-[#184341]/60'
                    }`}
                  >
                    <input
                      type="file"
                      id="cv-file-input"
                      onChange={handleFileChange}
                      accept=".pdf,.docx,.doc"
                      className="hidden"
                    />
                    {cvFile ? (
                      <div className="flex flex-col items-center gap-2">
                        <FileText size={32} className="text-[#184341]" />
                        <p className="text-xs font-semibold text-primary">{cvFile.name}</p>
                        <p className="text-[10px] text-slate-text/60">{(cvFile.size / 1024).toFixed(1)} KB</p>
                        <button
                          type="button"
                          onClick={() => setCvFile(null)}
                          className="text-[10px] text-red-500 underline font-semibold mt-2 hover:text-red-700"
                        >
                          Remove and upload other
                        </button>
                      </div>
                    ) : (
                      <label htmlFor="cv-file-input" className="cursor-pointer flex flex-col items-center gap-3">
                        <UploadCloud size={32} className="text-slate-text/50" />
                        <div>
                          <p className="text-xs text-primary font-bold">
                            Drag & drop your file here, or <span className="underline text-[#184341]">browse</span>
                          </p>
                          <p className="text-[10px] text-slate-text/60 mt-1">Supports PDF, DOC, DOCX up to 5MB</p>
                        </div>
                      </label>
                    )}
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn-primary w-full py-4 text-xs font-bold uppercase tracking-widest border-none mt-4"
                >
                  Proceed to Payment ($5)
                </button>

              </form>
            </div>

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
                Recruitment <span className="font-semibold italic font-sans text-white/95">Secure Payment</span>
              </h3>
              <p className="text-[10px] text-white/70 uppercase tracking-wider">Processing Fee: $5.00 (KES 650.00)</p>
              
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
                        onClick={handlePayment}
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
                        onClick={handlePayment}
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

export default UploadCvPage;
