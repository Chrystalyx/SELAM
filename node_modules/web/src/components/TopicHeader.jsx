function TopicHeader({ onHomeClick }) {
    return (
        <header className="flex items-center justify-between px-6 py-6 md:px-12 w-full max-w-7xl mx-auto">
            <button
                aria-label="Home"
                onClick={onHomeClick}
                className="flex items-center justify-center size-12 rounded-full glass-panel hover:bg-white/10 transition-colors group"
            >
                <span
                    className="material-symbols-outlined text-white/80 group-hover:text-white transition-colors"
                    style={{ fontSize: '24px' }}
                >
                    home
                </span>
            </button>
            {/* Settings button removed */}
        </header>
    )
}

export default TopicHeader
