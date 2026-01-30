function AuroraBackground() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-gradient-to-b from-deep-navy via-ocean-blue to-deep-navy">
            {/* Deep Ocean Layer */}
            <div className="absolute bottom-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-ocean-blue/40 blur-[150px] animate-ocean-wave mix-blend-screen"></div>

            {/* Teal Coral Reef Glow */}
            <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-teal/20 blur-[130px] animate-ocean-wave-reverse mix-blend-screen"></div>

            {/* Surface Light Rays */}
            <div className="absolute top-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-cyan/15 blur-[100px] animate-float mix-blend-screen"></div>

            {/* Bioluminescent Accent */}
            <div className="absolute bottom-[30%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-bioluminescent/10 blur-[80px] animate-bubble mix-blend-screen"></div>

            {/* Subtle Bubbles Overlay */}
            <div className="absolute top-[60%] left-[50%] w-[20vw] h-[20vw] rounded-full bg-cyan/10 blur-[60px] animate-bubble mix-blend-screen" style={{ animationDelay: '2s' }}></div>

            {/* Noise Overlay for texture */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 256 256\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"/%3E%3C/svg%3E')"
                }}
            ></div>
        </div>
    )
}

export default AuroraBackground

