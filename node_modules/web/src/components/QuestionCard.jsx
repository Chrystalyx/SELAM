import { useMemo } from 'react';
import { motion } from 'framer-motion';

function QuestionCard({
    question,
    cardNumber,
    totalCards,
    isActive,
    isBeingSwiped
}) {
    // 1. Logika Adaptif: Tentukan ukuran font berdasarkan panjang karakter
    const fontSizeClass = useMemo(() => {
        const length = question.length;

        if (length < 50) return 'text-3xl md:text-4xl leading-tight'; // Pendek (Ice Breaker)
        if (length < 100) return 'text-2xl md:text-3xl leading-snug'; // Sedang
        if (length < 180) return 'text-xl md:text-2xl leading-normal'; // Panjang
        return 'text-lg md:text-xl leading-relaxed'; // Sangat Panjang (Paragraph)
    }, [question]);

    return (
        <div className={`
            relative w-full h-full rounded-[2rem] 
            flex flex-col overflow-hidden
            transition-all duration-300
            ${isActive
                ? 'glass-card shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border-white/20'
                : 'bg-deep-navy/40 border-white/5 saturate-0 brightness-75'
            }
        `}>
            {/* --- Bagian Atas: Metadata --- */}
            <div className="flex justify-between items-center p-6 md:p-8 opacity-60">
                <div className="flex items-center gap-2">
                    <span className="text-xs font-mono tracking-widest uppercase text-teal">
                        SELAM
                    </span>
                </div>
                <div className="text-xs font-mono text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {cardNumber} / {totalCards}
                </div>
            </div>

            {/* --- Bagian Tengah: Pertanyaan (Core Solution) --- */}
            <div className="flex-1 flex items-center justify-center px-6 md:px-10 pb-20 w-full">
                {/* 2. Safety Net: Container dengan max-height dan overflow-y-auto
                   Ini memastikan kalau teksnya SUPER panjang (seperti curhat), 
                   dia bisa di-scroll dan tidak keluar kartu.
                */}
                <div className="max-h-full w-full overflow-y-auto no-scrollbar flex flex-col justify-center text-center">
                    <p className={`
                        font-serif font-medium text-white/90 
                        drop-shadow-lg transition-all duration-300
                        ${fontSizeClass} /* 3. Implementasi Font Adaptif */
                        ${isBeingSwiped ? 'blur-[2px]' : 'blur-0'} /* Efek Motion Blur saat swipe */
                    `}>
                        {question}
                    </p>
                </div>
            </div>

            {/* --- Bagian Bawah: Decoration / Hint --- */}
            <div className="absolute bottom-0 left-0 w-full p-6 flex justify-center opacity-40">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] tracking-[0.3em] uppercase font-light text-white/50">
                        {isActive ? 'Ketuk untuk Lanjut' : 'Memuat...'}
                    </span>
                    {/* Decorative line */}
                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-teal to-transparent opacity-50"></div>
                </div>
            </div>

            {/* Background Texture/Gradient Overlay (Optional for Aesthetics) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deep-navy/80 pointer-events-none rounded-[2rem]" />
        </div>
    );
}

export default QuestionCard;