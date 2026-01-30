import FeatureCard from './FeatureCard'

function HeroSection({ onStartConversation }) {
    return (
        <main className="flex flex-1 flex-col items-center justify-center px-4 pt-32 pb-20">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1 items-center justify-center w-full">
                <div className="w-full">
                    <div className="flex flex-col items-center justify-center gap-8 text-center p-4">
                        {/* Hero Text Section */}
                        <div className="flex flex-col gap-6 max-w-3xl items-center animate-float" style={{ animationDuration: '8s' }}>
                            <h1 className="font-serif text-5xl font-normal leading-tight tracking-tight text-white md:text-7xl lg:text-8xl text-glow drop-shadow-2xl">
                                <span className="bg-gradient-to-r from-teal via-cyan to-teal bg-clip-text text-transparent">SELAM</span>
                            </h1>

                            <p className="max-w-[600px] text-xl font-medium leading-relaxed text-white/80 md:text-2xl italic">
                                "Seberapa dalam kamu mengenal mereka?"
                            </p>

                            <p className="max-w-[500px] text-base font-light leading-relaxed text-white/60 md:text-lg">
                                Kartu digital untuk menyelami pikiran teman, pasangan, atau diri sendiri. Temukan makna di kedalaman.
                            </p>
                        </div>

                        {/* CTA Section */}
                        <div className="mt-8 flex flex-col items-center gap-4 w-full sm:flex-row sm:justify-center">
                            <button
                                onClick={onStartConversation}
                                className="btn-glow group relative flex h-14 min-w-[200px] items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-teal via-primary to-teal bg-[length:200%_auto] px-8 text-base font-bold text-white transition-all duration-500 hover:bg-[position:right_center]"
                            >
                                <span className="material-symbols-outlined text-[20px]">scuba_diving</span>
                                <span>Mulai Menyelam</span>
                                <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                            </button>
                        </div>

                        {/* Feature Cards - Depth Levels */}
                        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3 w-full max-w-4xl opacity-90">
                            <FeatureCard
                                icon="waves"
                                iconBgColor="bg-cyan/20"
                                iconTextColor="text-cyan"
                                title="Permukaan"
                                description="Pertanyaan ringan untuk menghangatkan percakapan."
                            />
                            <FeatureCard
                                icon="diversity_3"
                                iconBgColor="bg-teal/20"
                                iconTextColor="text-teal"
                                title="Terumbu Karang"
                                description="Percakapan bermakna yang memperdalam hubungan."
                                className="sm:-mt-8"
                            />
                            <FeatureCard
                                icon="scuba_diving"
                                iconBgColor="bg-bioluminescent/20"
                                iconTextColor="text-bioluminescent"
                                title="Palung Dalam"
                                description="Pertanyaan mendalam yang menyentuh jiwa."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HeroSection

