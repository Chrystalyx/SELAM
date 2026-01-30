function Footer() {
    return (
        <footer className="relative z-10 w-full border-t border-teal/10 bg-deep-navy/40 backdrop-blur-lg">
            <div className="mx-auto flex max-w-[960px] flex-col gap-6 px-5 py-8 items-center justify-center text-center">
                {/* Brand */}
                <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-teal/60">scuba_diving</span>
                    <span className="text-sm font-medium bg-gradient-to-r from-teal/60 to-cyan/60 bg-clip-text text-transparent">SELAM</span>
                </div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-xs text-white/30">© 2026 SELAM. Menyelami kedalaman bersama.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

