import AuroraBackground from '../components/AuroraBackground'
import Header from '../components/Header'
import Footer from '../components/Footer'

function AboutPage({ onNavigate }) {
    return (
        <>
            <AuroraBackground />
            <div className="relative z-10 flex h-full grow flex-col">
                <Header onNavigate={onNavigate} />
                <main className="flex-1 flex flex-col items-center justify-center px-4 pt-32 pb-20">
                    <div className="max-w-3xl w-full glass-panel rounded-3xl p-8 md:p-12 animate-float">
                        <div className="flex flex-col gap-6 text-center">
                            <h1 className="font-serif text-4xl md:text-5xl text-white drop-shadow-lg">
                                Tentang <span className="bg-gradient-to-r from-teal via-cyan to-teal bg-clip-text text-transparent">SELAM</span>
                            </h1>
                            <div className="h-px w-20 bg-teal/30 mx-auto"></div>

                            <p className="text-lg text-white/80 leading-relaxed">
                                SELAM adalah ruang digital untuk menyelami kedalaman hubungan antar manusia.
                                Di tengah riuhnya permukaan dunia digital, SELAM menyediakan tempat tenang untuk
                                percakapan yang bermakna.
                            </p>

                            <p className="text-lg text-white/80 leading-relaxed">
                                Filosofi SELAM sederhana: Kebenaran seringkali tersembunyi di kedalaman.
                                Seperti lautan, manusia memiliki lapisan-lapisan yang jarang tersentuh
                                jika kita hanya bermain di permukaan.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <span className="material-symbols-outlined text-3xl text-cyan mb-2">waves</span>
                                    <h3 className="font-bold text-white mb-1">Mencairkan</h3>
                                    <p className="text-sm text-white/60">Suasana kaku</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <span className="material-symbols-outlined text-3xl text-teal mb-2">favorite</span>
                                    <h3 className="font-bold text-white mb-1">Mengeratkan</h3>
                                    <p className="text-sm text-white/60">Hubungan</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <span className="material-symbols-outlined text-3xl text-bioluminescent mb-2">self_improvement</span>
                                    <h3 className="font-bold text-white mb-1">Mengenal</h3>
                                    <p className="text-sm text-white/60">Diri sendiri</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default AboutPage
