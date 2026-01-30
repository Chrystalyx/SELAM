function OutroBackground() {
    return (
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-deep-navy via-ocean-blue to-teal/30">
            {/* Surface Light / Sunrise Glow */}
            <div
                className="absolute top-[-20%] left-[-10%] w-[100vw] h-[70vw] bg-cyan/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"
            ></div>

            {/* Deep Ocean Base */}
            <div
                className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-deep-navy/90 rounded-full blur-[100px] animate-pulse-slow"
                style={{ animationDelay: '2s' }}
            ></div>

            {/* Teal Reflection */}
            <div
                className="absolute top-[40%] left-[20%] w-[40vw] h-[40vw] bg-teal/20 rounded-full blur-[90px] mix-blend-screen animate-float"
                style={{ animationDelay: '4s' }}
            ></div>

            {/* Water Caustics Simulation via Noise */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 256 256\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"/%3E%3C/svg%3E')"
                }}
            ></div>

            {/* Rising Bubbles Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] opacity-[0.15] animate-bubble"></div>
        </div>
    )
}

export default OutroBackground

