import { useState } from 'react'
import TopicAuroraBackground from '../components/TopicAuroraBackground'
import TopicHeader from '../components/TopicHeader'
import TopicCard from '../components/TopicCard'
import IntensitySlider from '../components/IntensitySlider'

const topics = [
    {
        id: 'pasangan',
        icon: 'favorite',
        iconColor: 'text-pink-300',
        hoverIconColor: 'text-pink-200',
        gradientColor: 'from-pink-500/10',
        title: 'Pasangan',
        subtitle: 'Romance'
    },
    {
        id: 'teman',
        icon: 'group',
        iconColor: 'text-cyan',
        hoverIconColor: 'text-cyan',
        gradientColor: 'from-cyan/10',
        title: 'Teman',
        subtitle: 'Social'
    },
    {
        id: 'keluarga',
        icon: 'home',
        iconColor: 'text-amber-200',
        hoverIconColor: 'text-amber-100',
        gradientColor: 'from-amber-500/10',
        title: 'Keluarga',
        subtitle: 'Bonding'
    },
    {
        id: 'deep-talk',
        icon: 'scuba_diving',
        iconColor: 'text-teal',
        hoverIconColor: 'text-teal',
        gradientColor: 'from-teal/10',
        title: 'Deep Talk',
        subtitle: 'Soul'
    }
]

function TopicSelectionPage({ onBack, onTopicSelect }) {
    const [intensity, setIntensity] = useState('terumbu')
    const [selectedTopic, setSelectedTopic] = useState(null)

    const handleTopicClick = (topicId) => {
        setSelectedTopic(topicId)
        if (onTopicSelect) {
            onTopicSelect(topicId, intensity)
        }
    }

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-hidden">
            {/* Ambient Background Effects */}
            <TopicAuroraBackground />

            <div className="layout-container flex h-full grow flex-col z-10 relative">
                {/* Top Navigation */}
                <TopicHeader
                    onHomeClick={onBack}
                />

                {/* Main Content Area */}
                <main className="flex-1 flex flex-col justify-center items-center px-4 md:px-10 py-4 w-full max-w-7xl mx-auto">
                    {/* Heading */}
                    <div className="text-center mb-12 md:mb-16 max-w-2xl">
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 mb-4 drop-shadow-sm">
                            Siapa yang ingin kamu selami?
                        </h1>
                        <p className="text-white/60 text-lg font-light tracking-wide">
                            Pilih topik untuk memulai penyelaman mendalam.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl mb-16">
                        {topics.map((topic) => (
                            <TopicCard
                                key={topic.id}
                                icon={topic.icon}
                                iconColor={topic.iconColor}
                                hoverIconColor={topic.hoverIconColor}
                                gradientColor={topic.gradientColor}
                                title={topic.title}
                                subtitle={topic.subtitle}
                                onClick={() => handleTopicClick(topic.id)}
                            />
                        ))}
                    </div>

                    {/* Intensity Slider */}
                    <IntensitySlider value={intensity} onChange={setIntensity} />
                </main>
            </div>
        </div>
    )
}

export default TopicSelectionPage

