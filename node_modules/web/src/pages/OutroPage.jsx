import OutroBackground from '../components/OutroBackground'
import ActionIcon from '../components/ActionIcon'

function OutroPage({ onGoHome, sessionDuration = 0 }) {
    // Format duration to HH:MM:SS
    const formatDuration = (ms) => {
        const totalSeconds = Math.floor(ms / 1000)
        const hours = Math.floor(totalSeconds / 3600)
        const minutes = Math.floor((totalSeconds % 3600) / 60)
        const seconds = totalSeconds % 60
        const pad = (num) => num.toString().padStart(2, '0')

        if (hours > 0) return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
        return `${pad(minutes)}:${pad(seconds)}`
    }

    const timeString = formatDuration(sessionDuration)

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'SELAM',
                text: `🤿 Saya baru saja menyelam selama ${timeString}.`,
                url: window.location.origin,
            }).catch(() => { })
        } else {
            navigator.clipboard.writeText(window.location.origin)
            // Bisa ganti alert dengan toast notification custom kalau ada
            alert('Link telah disalin!')
        }
    }

    return (
        <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-dark text-white font-display">
            {/* Aurora Background */}
            <div className="absolute inset-0 z-0">
                <OutroBackground />
            </div>

            {/* Main Content Wrapper */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 md:p-8">

                {/* Glass Card */}
                <div className="
                    w-full max-w-lg md:max-w-2xl 
                    bg-deep-navy/30 backdrop-blur-2xl 
                    border border-teal/10 rounded-[2rem] 
                    shadow-[0_0_50px_rgba(0,0,0,0.3)]
                    p-8 md:p-12
                    flex flex-col items-center text-center
                    animate-float
                ">

                    {/* 1. Header Quote */}
                    <div className="mb-10 space-y-4">
                        <h1 className="font-serif text-3xl md:text-5xl leading-tight text-white/90">
                            "Kamu sudah muncul ke <br />
                            <span className="bg-gradient-to-r from-teal via-cyan to-teal bg-clip-text text-transparent font-medium italic">
                                permukaan
                            </span>."
                        </h1>
                        <p className="text-sm md:text-base text-teal/60 font-light tracking-wide max-w-sm mx-auto">
                            Setiap percakapan mendekatkan jiwa. <br className="hidden md:block" /> Terima kasih telah berbagi cerita.
                        </p>
                    </div>

                    {/* 2. Stats (Duration) */}
                    <div className="mb-12 flex flex-col items-center">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-teal/40 mb-2">
                            Durasi Penyelaman
                        </span>
                        <div className="font-mono text-4xl md:text-5xl text-white drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                            {timeString}
                        </div>
                    </div>

                    {/* 3. Action Buttons (Share & Support) */}
                    <div className="flex gap-8 md:gap-12 mb-10 w-full justify-center">
                        <ActionIcon
                            icon="share"
                            label="Bagikan"
                            onClick={handleShare}
                            hoverRotate={true}
                            className="bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/5 transition-all"
                        />
                    </div>

                    {/* 4. Main CTA Button */}
                    <button
                        onClick={onGoHome}
                        className="
                            group relative overflow-hidden rounded-full 
                            bg-gradient-to-r from-teal to-cyan 
                            px-10 py-4 w-full md:w-auto min-w-[240px]
                            transition-all duration-300 
                            hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]
                        "
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative font-bold text-deep-navy tracking-wide flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-xl">home</span>
                            Kembali ke Beranda
                        </span>
                    </button>

                </div>

                {/* Footer Logo/Branding Small */}
                <div className="absolute bottom-8 opacity-30 hover:opacity-60 transition-opacity cursor-default">
                    <span className="text-xs font-mono tracking-[0.5em] text-teal uppercase">
                        SELAM
                    </span>
                </div>

            </div>
        </div>
    )
}

export default OutroPage