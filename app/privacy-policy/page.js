'use client';

import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-black text-white py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-[#d97706] text-xs uppercase tracking-widest mb-2">Home - Privacy Policy</p>
                    <h1 className="text-4xl font-bold uppercase tracking-wide">Privacy Policy</h1>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-20">
                <div className="prose prose-sm max-w-none text-gray-600">
                    <p className="mb-4">Last updated: October 2023</p>
                    <p className="mb-6">
                        At The Coffee Co, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                    </p>

                    <h2 className="text-xl font-bold text-black mb-4 uppercase">1. Information We Collect</h2>
                    <p className="mb-6">
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows: Identity Data, Contact Data, Financial Data, Transaction Data, Technical Data, Profile Data, Usage Data, Marketing and Communications Data.
                    </p>

                    <h2 className="text-xl font-bold text-black mb-4 uppercase">2. How We Use Your Information</h2>
                    <p className="mb-6">
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        <br />- Where we need to perform the contract we are about to enter into or have entered into with you.
                        <br />- Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.
                        <br />- Where we need to comply with a legal or regulatory obligation.
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
}
