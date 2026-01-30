import { useState, useCallback, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion' // Import Framer Motion
import CardRoomBackground from '../components/CardRoomBackground'
import CardRoomHeader from '../components/CardRoomHeader'
import CardStack from '../components/CardStack'
import rawQuestions from '../data/questions.json'

// Map JSON data
const allQuestions = rawQuestions.map(q => ({
    ...q,
    question: q.text
}))

const topicLabels = {
    'pasangan': 'Pasangan',
    'teman': 'Teman',
    'keluarga': 'Keluarga',
    'deep-talk': 'Deep Talk',
}

// 1. Algoritma Fisher-Yates Shuffle (Standar Industri untuk pengacakan sempurna)
const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

// 2. Komponen Animasi Loading/Shuffling
const ShufflingLoader = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-background-dark/80 backdrop-blur-md"
    >
        {/* Ikon Kartu Berputar/Pulsing */}
        <motion.div
            animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="w-16 h-24 bg-gradient-to-br from-teal to-cyan rounded-lg shadow-[0_0_30px_rgba(20,184,166,0.5)] mb-6 border border-white/20"
        />

        <h2 className="text-xl font-display font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-teal to-white animate-pulse">
            MENGACAK KARTU...
        </h2>
        <p className="text-white/40 text-xs mt-2 tracking-widest uppercase">
            Menyiapkan Topik
        </p>
    </motion.div>
);

function CardRoomPage({ topic = 'deep-talk', intensity = 'permukaan', onExit, onComplete }) {

    // State untuk data dan status loading
    const [questions, setQuestions] = useState([]);
    const [isShuffling, setIsShuffling] = useState(true);

    // State navigasi (page & direction)
    const [[page, direction], setPage] = useState([0, 0]);

    // Timer logic
    const startTimeRef = useRef(Date.now())

    // 3. Effect untuk Memfilter & Mengacak Data saat pertama kali load
    useEffect(() => {
        // Reset state & timer
        setIsShuffling(true);
        setPage([0, 0]);
        startTimeRef.current = Date.now()

        // Ambil data mentah
        const filteredRaw = allQuestions.filter(q => q.category === topic && q.level === intensity);

        // Simulasi delay untuk animasi (2 detik) agar UX terasa lebih "berat/serius"
        const timer = setTimeout(() => {
            const shuffled = shuffleArray(filteredRaw);
            setQuestions(shuffled);
            setIsShuffling(false);
            startTimeRef.current = Date.now() // Start counting after loading
        }, 1800);

        return () => clearTimeout(timer);
    }, [topic, intensity]);

    const currentIndex = page;
    const currentCard = questions[currentIndex]; // Ambil dari state questions yang sudah di-shuffle
    const nextCard = currentIndex < questions.length - 1 ? questions[currentIndex + 1] : null;
    const isLastCard = currentIndex >= questions.length - 1;

    const paginate = useCallback((newDirection) => {
        if (newDirection > 0 && isLastCard) {
            if (onComplete) {
                const endTime = Date.now()
                const durationFn = endTime - startTimeRef.current
                onComplete(durationFn)
            }
            return;
        }
        if (newDirection < 0 && currentIndex === 0) {
            return;
        }
        setPage([page + newDirection, newDirection]);
    }, [page, isLastCard, currentIndex, onComplete]);

    const handleShare = useCallback(async () => {
        if (!currentCard) return; // Guard clause

        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'SELAM',
                    text: `🤿 ${currentCard.question}`,
                    url: window.location.href,
                })
            } catch (err) {
                console.debug('Share cancelled/failed', err)
            }
        } else {
            navigator.clipboard.writeText(currentCard.question)
                .then(() => console.log('Copied to clipboard'))
                .catch(console.error)
        }
    }, [currentCard])

    return (
        <div className="bg-background-dark min-h-screen h-screen w-full flex flex-col font-display selection:bg-primary/30 text-white overflow-hidden relative">
            <CardRoomBackground />

            {/* 4. Tampilkan Loader jika sedang shuffling */}
            <AnimatePresence>
                {isShuffling && <ShufflingLoader key="loader" />}
            </AnimatePresence>

            {/* Main Content (Hanya render jika questions sudah ada agar tidak error undefined) */}
            {!isShuffling && questions.length > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 flex flex-col h-full w-full max-w-[1400px] mx-auto px-4"
                >
                    <CardRoomHeader
                        topic={topicLabels[topic] || 'Deep Talk'}
                        onExit={onExit}
                        onShare={handleShare}
                    />

                    <main className="flex-1 flex items-center justify-center w-full relative">

                        {/* Previous Button */}
                        <button
                            aria-label="Previous card"
                            onClick={() => paginate(-1)}
                            disabled={currentIndex <= 0}
                            className={`
                                hidden md:flex absolute left-4 lg:left-10 z-20 
                                glass-button size-14 lg:size-16 rounded-full items-center justify-center text-white 
                                transition-all duration-300 
                                ${currentIndex > 0 ? 'hover:bg-white/10 active:scale-95 cursor-pointer opacity-100 hover:-translate-x-1' : 'opacity-0 pointer-events-none'}
                            `}
                        >
                            <span className="material-symbols-outlined text-3xl">arrow_back</span>
                        </button>

                        {/* Card Stack Wrapper */}
                        <div
                            onClick={() => paginate(1)}
                            className="cursor-pointer w-full max-w-[340px] md:max-w-[400px] mx-4 relative z-10"
                        >
                            <CardStack
                                currentCard={currentCard}
                                nextCard={nextCard}
                                currentIndex={currentIndex}
                                totalCards={questions.length}
                                direction={direction}
                            />
                        </div>

                        {/* Next Button */}
                        <button
                            aria-label="Next card"
                            onClick={(e) => {
                                e.stopPropagation();
                                paginate(1);
                            }}
                            className="hidden md:flex absolute right-4 lg:right-10 z-20 glass-button size-14 lg:size-16 rounded-full items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all duration-300 hover:translate-x-1"
                        >
                            <span className="material-symbols-outlined text-3xl">arrow_forward</span>
                        </button>

                    </main>

                    <div className="h-8 md:h-12 w-full"></div>
                </motion.div>
            )}
        </div>
    )
}

export default CardRoomPage