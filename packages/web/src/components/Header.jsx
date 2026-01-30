import { useState } from 'react'

function Header({ onNavigate = () => { } }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // Handle initial home click
    const handleLogoClick = () => onNavigate('home')

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <header className="glass-nav flex items-center justify-between gap-6 rounded-full px-6 py-3 min-w-[320px] max-w-[960px] w-full shadow-lg shadow-black/20">
                {/* Logo */}
                <div className="flex items-center gap-3 cursor-pointer" onClick={handleLogoClick}>
                    <div className="flex items-center justify-center size-8 rounded-full bg-gradient-to-br from-teal to-cyan text-white shadow-lg shadow-teal/30">
                        <span className="material-symbols-outlined text-[20px]">scuba_diving</span>
                    </div>
                    <span className="font-bold tracking-tight hidden sm:block bg-gradient-to-r from-teal to-cyan bg-clip-text text-transparent">SELAM</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <button onClick={() => onNavigate('about')} className="text-sm font-medium text-white/70 hover:text-teal transition-colors">
                        Tentang
                    </button>
                    <button onClick={() => onNavigate('how-to-play')} className="text-sm font-medium text-white/70 hover:text-teal transition-colors">
                        Cara Main
                    </button>
                    <button onClick={() => onNavigate('depths')} className="text-sm font-medium text-white/70 hover:text-teal transition-colors">
                        Kedalaman
                    </button>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <button
                        className="md:hidden text-white/80 hover:text-teal"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-expanded={mobileMenuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    {/* Login removed as requested */}
                </div>
            </header>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-20 left-4 right-4 glass-nav rounded-2xl p-4 md:hidden border border-teal/20">
                    <nav className="flex flex-col gap-4">
                        <button onClick={() => { onNavigate('about'); setMobileMenuOpen(false) }} className="text-sm font-medium text-white/70 hover:text-teal transition-colors py-2 text-left">
                            Tentang
                        </button>
                        <button onClick={() => { onNavigate('how-to-play'); setMobileMenuOpen(false) }} className="text-sm font-medium text-white/70 hover:text-teal transition-colors py-2 text-left">
                            Cara Main
                        </button>
                        <button onClick={() => { onNavigate('depths'); setMobileMenuOpen(false) }} className="text-sm font-medium text-white/70 hover:text-teal transition-colors py-2 text-left">
                            Kedalaman
                        </button>
                    </nav>
                </div>
            )}
        </div>
    )
}

export default Header

