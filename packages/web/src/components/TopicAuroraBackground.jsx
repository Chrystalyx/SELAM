function TopicAuroraBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-deep-navy to-background-dark">
            {/* Top Left Teal/Cyan Glow */}
            <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-teal/20 blur-[120px] mix-blend-screen opacity-60 animate-pulse-slow"></div>

            {/* Bottom Right Ocean Blue/Cyan Glow */}
            <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-ocean-blue/40 blur-[100px] mix-blend-screen opacity-50 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

            {/* Center subtle bioluminescent accent */}
            <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] rounded-full bg-bioluminescent/10 blur-[140px] mix-blend-screen opacity-40 animate-float"></div>

            {/* Noise texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 256 256\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"/%3E%3C/svg%3E')"
                }}
            ></div>
        </div>
    )
}

export default TopicAuroraBackground

