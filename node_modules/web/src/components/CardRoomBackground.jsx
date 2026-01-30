function CardRoomBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-deep-navy">
            {/* Dark Ocean Gradient Base */}
            <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-[#0c1f38] to-black opacity-80"></div>

            {/* Primary teal aurora with pulsing animation */}
            <div
                className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-teal/20 blur-[120px] animate-pulse mix-blend-screen"
                style={{ animationDuration: '8s' }}
            ></div>

            {/* Deep blue aurora */}
            <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-ocean-blue/30 blur-[100px] opacity-60 mix-blend-screen"></div>

            {/* Center bioluminescent glow */}
            <div className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-bioluminescent/5 blur-[100px] opacity-40 mix-blend-screen animate-float"></div>

            {/* Particle effects simulating marine snow/bubbles */}
            <div className="absolute inset-0 opacity-[0.1]" style={{
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}></div>
        </div>
    )
}

export default CardRoomBackground

