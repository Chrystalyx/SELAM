function CardRoomHeader({ topic, onExit, onShare }) {
    return (
        <header className="relative flex items-center justify-center w-full py-6 md:py-8 px-4">
            {/* Exit Button - Absolute Left */}
            <button
                aria-label="Exit Room"
                onClick={onExit}
                className="absolute left-4 glass-button size-10 md:size-12 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors text-white group cursor-pointer z-10"
            >
                <span
                    className="material-symbols-outlined group-hover:rotate-90 transition-transform duration-300"
                    style={{ fontSize: '24px' }}
                >
                    close
                </span>
            </button>

            {/* Topic Badge - Centered */}
            <div className="glass-button px-6 py-2 rounded-full flex items-center justify-center gap-3 shadow-lg relative z-0">
                <div className="size-2 rounded-full bg-teal-400 animate-pulse"></div>
                <span className="text-white/90 text-sm font-bold tracking-wider uppercase pt-[1px]">
                    Topic: {topic}
                </span>
            </div>

            {/* Share Button - Absolute Right */}
            <button
                aria-label="Share"
                onClick={onShare}
                className="absolute right-4 glass-button size-10 md:size-12 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors text-white group cursor-pointer z-10"
            >
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                    ios_share
                </span>
            </button>
        </header>
    )
}

export default CardRoomHeader
