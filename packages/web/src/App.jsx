import { useState } from 'react'
import HomePage from './pages/HomePage'
import TopicSelectionPage from './pages/TopicSelectionPage'
import CardRoomPage from './pages/CardRoomPage'
import OutroPage from './pages/OutroPage'
import AboutPage from './pages/AboutPage'
import HowToPlayPage from './pages/HowToPlayPage'
import DepthsPage from './pages/DepthsPage'

function App() {
    // Pages: 'home', 'topic-selection', 'card-room', 'outro', 'about', 'how-to-play', 'depths'
    const [currentPage, setCurrentPage] = useState('home')
    const [selectedTopic, setSelectedTopic] = useState(null)
    const [selectedIntensity, setSelectedIntensity] = useState('permukaan')
    const [sessionDuration, setSessionDuration] = useState(0)

    const handleNavigate = (page) => {
        setCurrentPage(page)
        window.scrollTo(0, 0)
    }

    const handleStartConversation = () => {
        handleNavigate('topic-selection')
    }

    const handleGoHome = () => {
        handleNavigate('home')
        setSelectedTopic(null)
        setSessionDuration(0)
    }

    const handleTopicSelect = (topicId, intensity) => {
        console.log(`Selected topic: ${topicId}, intensity: ${intensity}`)
        setSelectedTopic(topicId)
        setSelectedIntensity(intensity)
        handleNavigate('card-room')
    }

    const handleExitRoom = () => {
        handleNavigate('topic-selection')
    }

    const handleCompleteConversation = (duration) => {
        setSessionDuration(duration)
        handleNavigate('outro')
    }

    if (currentPage === 'outro') return <OutroPage sessionDuration={sessionDuration} onGoHome={handleGoHome} />

    if (currentPage === 'about') return <AboutPage onNavigate={handleNavigate} />

    if (currentPage === 'how-to-play') return <HowToPlayPage onNavigate={handleNavigate} />

    if (currentPage === 'depths') return <DepthsPage onNavigate={handleNavigate} />

    if (currentPage === 'card-room' && selectedTopic) {
        return (
            <CardRoomPage
                topic={selectedTopic}
                intensity={selectedIntensity}
                onExit={handleExitRoom}
                onComplete={handleCompleteConversation}
            />
        )
    }

    if (currentPage === 'topic-selection') {
        return (
            <TopicSelectionPage
                onBack={handleGoHome}
                onTopicSelect={handleTopicSelect}
            />
        )
    }

    return <HomePage onStartConversation={handleStartConversation} onNavigate={handleNavigate} />
}

export default App


