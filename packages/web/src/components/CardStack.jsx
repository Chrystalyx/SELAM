import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import QuestionCard from './QuestionCard'

function CardStack({ currentCard, nextCard, direction, currentIndex, totalCards }) {

    // Konfigurasi animasi (Physics-based)
    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 100 : -100, // Masuk dari kanan jika next, kiri jika prev
            opacity: 0,
            scale: 0.9,
            rotate: direction > 0 ? 5 : -5,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 }
            }
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 150 : -150, // Keluar ke kanan jika prev, ke kiri jika next
            opacity: 0,
            scale: 0.85,
            rotate: direction < 0 ? 10 : -10,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }
        })
    };

    return (
        <div className="relative w-full max-w-[400px] h-[60vh] min-h-[460px] max-h-[600px] group perspective-1000">
            {/* Background Card (Kartu Berikutnya - Statis untuk ilusi tumpukan) */}
            {nextCard && (
                <div className="absolute inset-0 z-0 transform scale-[0.92] translate-y-3 opacity-60">
                    <QuestionCard
                        question={nextCard.question}
                        cardNumber={currentIndex + 2}
                        totalCards={totalCards}
                        isActive={false}
                    />
                </div>
            )}

            {/* Foreground Card (Kartu Aktif - Dianimasikan) */}
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                    key={currentIndex} // Key ini PENTING agar Framer tahu kartunya beda
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 z-10 origin-bottom"
                    drag="x" // Fitur swipe manual (bonus)
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.7}
                    onDragEnd={(e, { offset, velocity }) => {
                        // Logika swipe manual
                        const swipeConfidenceThreshold = 10000;
                        const swipePower = Math.abs(offset.x) * velocity.x;

                        if (swipePower < -swipeConfidenceThreshold) {
                            // Swipe Left (Next)
                            // Panggil fungsi handleNext dari parent via props (perlu ditambah di props)
                        } else if (swipePower > swipeConfidenceThreshold) {
                            // Swipe Right (Prev)
                            // Panggil fungsi handlePrev dari parent via props
                        }
                    }}
                >
                    <QuestionCard
                        question={currentCard.question}
                        cardNumber={currentIndex + 1}
                        totalCards={totalCards}
                        isActive={true}
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default CardStack