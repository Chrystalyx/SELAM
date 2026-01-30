import AuroraBackground from '../components/AuroraBackground'
import Header from '../components/Header'
import Footer from '../components/Footer'

function DepthsPage({ onNavigate }) {
    return (
        <>
            <AuroraBackground />
            <div className="relative z-10 flex h-full grow flex-col">
                <Header onNavigate={onNavigate} />
                <main className="flex-1 flex flex-col items-center justify-center px-4 pt-32 pb-20">
                    <div className="max-w-4xl w-full">
                        <div className="text-center mb-12">
                            <h1 className="font-serif text-4xl md:text-5xl text-white drop-shadow-lg mb-4">
                                Tingkatan <span className="text-teal">Kedalaman</span>
                            </h1>
                            <p className="text-xl text-white/80 max-w-2xl mx-auto">
                                SELAM mengategorikan pertanyaan berdasarkan tingkat kedalaman emosional.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            {/* Level 1: Permukaan */}
                            <div className="glass-panel rounded-3xl overflow-hidden flex flex-col md:flex-row">
                                <div className="bg-gradient-to-br from-cyan/30 to-blue-500/10 p-8 md:w-1/3 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-white/10">
                                    <span className="material-symbols-outlined text-6xl text-cyan mb-4 drop-shadow-lg">waves</span>
                                    <h2 className="text-2xl font-bold text-white">Permukaan</h2>
                                </div>
                                <div className="p-8 md:w-2/3 flex flex-col justify-center">
                                    <p className="text-lg text-white/90 mb-4">
                                        "Seperti ombak yang menyapa pantai."
                                    </p>
                                    <p className="text-white/70 leading-relaxed">
                                        Pertanyaan di level ini bersifat ringan, santai, dan aman untuk siapa saja. Cocok untuk mencairkan suasana (ice breaking), saat baru kenal, atau sekadar ingin bercanda tawa tanpa beban emosional yang berat.
                                    </p>
                                </div>
                            </div>

                            {/* Level 2: Terumbu Karang */}
                            <div className="glass-panel rounded-3xl overflow-hidden flex flex-col md:flex-row">
                                <div className="bg-gradient-to-br from-teal/30 to-emerald-500/10 p-8 md:w-1/3 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-white/10">
                                    <span className="material-symbols-outlined text-6xl text-teal mb-4 drop-shadow-lg">diversity_3</span>
                                    <h2 className="text-2xl font-bold text-white">Terumbu Karang</h2>
                                </div>
                                <div className="p-8 md:w-2/3 flex flex-col justify-center">
                                    <p className="text-lg text-white/90 mb-4">
                                        "Ada kehidupan indah di balik permukaan."
                                    </p>
                                    <p className="text-white/70 leading-relaxed">
                                        Di sini kita mulai membicarakan hal-hal yang lebih personal: opini, kenangan masa lalu, dan nilai-nilai hidup. Pertanyaan ini dirancang untuk mempererat hubungan yang sudah ada dan memahami lawan bicara lebih baik.
                                    </p>
                                </div>
                            </div>

                            {/* Level 3: Palung Dalam */}
                            <div className="glass-panel rounded-3xl overflow-hidden flex flex-col md:flex-row">
                                <div className="bg-gradient-to-br from-indigo-900/40 to-black/20 p-8 md:w-1/3 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-white/10">
                                    <span className="material-symbols-outlined text-6xl text-bioluminescent mb-4 drop-shadow-lg animate-pulse-slow">scuba_diving</span>
                                    <h2 className="text-2xl font-bold text-white">Palung Dalam</h2>
                                </div>
                                <div className="p-8 md:w-2/3 flex flex-col justify-center">
                                    <p className="text-lg text-white/90 mb-4">
                                        "Hanya pemberani yang sampai di sini."
                                    </p>
                                    <p className="text-white/70 leading-relaxed">
                                        Level terdalam. Pertanyaan tentang kerentanan, ketakutan terbesar, mimpi liar, dan rahasia jiwa. Membutuhkan kepercayaan tinggi dan keterbukaan hati. Di sinilah "Deep Talk" yang sesungguhnya terjadi.
                                    </p>
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

export default DepthsPage
