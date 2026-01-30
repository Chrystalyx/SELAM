function IntensitySlider({ value, onChange }) {
    const options = [
        { id: 'permukaan', label: 'Permukaan', icon: 'waves', color: 'text-cyan' },
        { id: 'terumbu', label: 'Terumbu Karang', icon: 'diversity_3', color: 'text-teal' },
        { id: 'palung', label: 'Palung Dalam', icon: 'scuba_diving', color: 'text-bioluminescent' }
    ]

    const getTrackWidth = () => {
        switch (value) {
            case 'permukaan': return 'w-0'
            case 'terumbu': return 'w-[calc(50%-1rem)]'
            case 'palung': return 'w-[calc(100%-2rem)]'
            default: return 'w-[calc(50%-1rem)]'
        }
    }

    const getTrackGradient = () => {
        switch (value) {
            case 'permukaan': return 'from-cyan/50 to-cyan'
            case 'terumbu': return 'from-cyan/50 via-teal to-teal'
            case 'palung': return 'from-cyan/50 via-teal to-bioluminescent'
            default: return 'from-cyan/50 to-teal'
        }
    }

    return (
        <div className="w-full max-w-lg mx-auto">
            {/* 1. Ubah h-14 menjadi h-28 agar kapsul lebih tinggi */}
            <div className="glass-panel rounded-full p-2 relative border border-teal/20 h-28 flex items-center">

                {/* Visual slider structure */}
                <div className="relative w-full h-full flex items-center justify-between px-1">

                    {/* Track line behind */}
                    <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-white/10 -translate-y-1/2 rounded-full z-0"></div>
                    <div className={`absolute top-1/2 left-4 ${getTrackWidth()} h-0.5 bg-gradient-to-r ${getTrackGradient()} -translate-y-1/2 rounded-full z-0 transition-all duration-300`}></div>

                    {options.map((option) => (
                        <label
                            key={option.id}
                            className="relative z-10 cursor-pointer group flex flex-col items-center justify-center w-1/3 h-full"
                        >
                            <input
                                className="peer sr-only"
                                name="intensity"
                                type="radio"
                                checked={value === option.id}
                                onChange={() => onChange(option.id)}
                            />
                            <div className={`
                                rounded-full transition-all duration-300 flex items-center justify-center
                                ${value === option.id
                                    ? `w-8 h-8 bg-gradient-to-br from-teal to-cyan border-2 border-deep-navy ring-2 ring-teal/50 shadow-[0_0_15px_rgba(20,184,166,0.6)] scale-110`
                                    : 'w-6 h-6 bg-deep-navy border-2 border-white/30 group-hover:border-teal/60 mb-2'
                                }
                            `}>
                                {value === option.id && (
                                    <span className="material-symbols-outlined text-white text-[16px]">{option.icon}</span>
                                )}
                            </div>

                            {/* 2. Ubah top-10 menjadi top-20 agar teks turun ke bawah */}
                            <span className={`
                                text-xs transition-colors absolute top-20 whitespace-nowrap
                                ${value === option.id
                                    ? `font-bold ${option.color} tracking-wide`
                                    : 'font-medium text-white/50'
                                }
                            `}>
                                {option.label}
                            </span>
                        </label>
                    ))}
                </div>
            </div>
            <div className="text-center mt-4 opacity-40 text-[10px] tracking-[0.2em] uppercase font-light text-teal">
                Pilih Kedalaman Percakapan
            </div>
        </div>
    )
}

export default IntensitySlider