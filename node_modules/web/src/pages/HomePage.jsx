import AuroraBackground from '../components/AuroraBackground'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

function HomePage({ onStartConversation, onNavigate }) {
    return (
        <>
            {/* Ambient Aurora Background */}
            <AuroraBackground />

            {/* Layout Container */}
            <div className="relative z-10 flex h-full grow flex-col">
                {/* Floating Header */}
                <Header onNavigate={onNavigate} />

                {/* Main Content */}
                <HeroSection onStartConversation={onStartConversation} />

                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}

export default HomePage

