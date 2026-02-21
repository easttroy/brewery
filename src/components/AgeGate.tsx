'use client';

import { useState } from 'react';

function getCookieVerified(): boolean {
    if (typeof document === 'undefined') return true;
    return document.cookie
        .split('; ')
        .some((row) => row.startsWith('age_verified='));
}

export default function AgeGate() {
    const [showModal, setShowModal] = useState(() => !getCookieVerified());
    const [remember, setRemember] = useState(true);

    function handleConfirm() {
        if (remember) {
            const expires = new Date();
            expires.setDate(expires.getDate() + 30);
            document.cookie = `age_verified=true; expires=${expires.toUTCString()}; path=/`;
        } else {
            // Session cookie (no expires)
            document.cookie = 'age_verified=true; path=/';
        }
        setShowModal(false);
    }

    function handleDeny() {
        window.location.href = '/our-food-menu';
    }

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-stone-900 text-white rounded-2xl shadow-2xl max-w-md w-full p-8 md:p-10 text-center">
                <h2 className="text-3xl font-serif font-bold uppercase tracking-wide mb-4">
                    Are You 21 or Older?
                </h2>
                <p className="text-stone-300 mb-8">
                    You must be at least 21 to enter this site.
                </p>

                <label className="flex items-center justify-center gap-3 mb-8 cursor-pointer select-none">
                    <input
                        type="checkbox"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                        className="w-5 h-5 accent-etbrew-gold rounded"
                    />
                    <span className="text-stone-300">Remember for 30 days</span>
                </label>

                <div className="flex gap-4">
                    <button
                        onClick={handleConfirm}
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold uppercase tracking-wider py-4 rounded-lg transition-colors text-lg"
                    >
                        Yes, let me in
                    </button>
                    <button
                        onClick={handleDeny}
                        className="flex-1 bg-rose-500 hover:bg-rose-600 text-white font-bold uppercase tracking-wider py-4 rounded-lg transition-colors text-lg"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}
