import AuroraBackground from '../components/AuroraBackground'
import Header from '../components/Header'
import Footer from '../components/Footer'

function HowToPlayPage({ onNavigate }) {
    return (
        <>
            <AuroraBackground />
            <div className="relative z-10 flex h-full grow flex-col">
                <Header onNavigate={onNavigate} />
                <main className="flex-1 flex flex-col items-center justify-center px-4 pt-32 pb-20">
                    <div className="max-w-4xl w-full">
                        <div className="text-center mb-12">
                            <h1 className="font-serif text-4xl md:text-5xl text-white drop-shadow-lg mb-4">
                                Cara <span className="text-teal">Bermain</span>
                            </h1>
                            <p className="text-xl text-white/80 max-w-2xl mx-auto">
                                Panduan singkat untuk memulai perjalanan menyelam ke dalam pikiran.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Step 1 */}
                            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                                <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-serif font-bold text-white group-hover:opacity-20 transition-opacity">1</div>
                                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                                    <div className="size-16 rounded-full bg-cyan/20 flex items-center justify-center text-cyan mb-2">
                                        <span className="material-symbols-outlined text-3xl">touch_app</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Pilih Topik</h3>
                                    <p className="text-white/70">
                                        Mulai dengan menekan tombol "Mulai Menyelam". Pilih topik yang sesuai dengan lawan bicaramu (Pasangan, Teman, Keluarga, atau Deep Talk).
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                                <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-serif font-bold text-white group-hover:opacity-20 transition-opacity">2</div>
                                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                                    <div className="size-16 rounded-full bg-teal/20 flex items-center justify-center text-teal mb-2">
                                        <span className="material-symbols-outlined text-3xl">style</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Jawab Pertanyaan</h3>
                                    <p className="text-white/70">
                                        Bacakan pertanyaan pada kartu. Tidak ada jawaban benar atau salah, hanya kejujuran yang diperlukan.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                                <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-serif font-bold text-white group-hover:opacity-20 transition-opacity">3</div>
                                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                                    <div className="size-16 rounded-full bg-bioluminescent/20 flex items-center justify-center text-bioluminescent mb-2">
                                        <span className="material-symbols-outlined text-3xl">swipe_right</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Lanjut Menyelam</h3>
                                    <p className="text-white/70">
                                        Tekan tombol "Lanjut" atau geser kartu untuk melihat pertanyaan berikutnya. Nikmati setiap momen kebersamaan.
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

export default HowToPlayPage
