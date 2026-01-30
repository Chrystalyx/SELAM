function TopicCard({ icon, iconColor, hoverIconColor, gradientColor, title, subtitle, onClick }) {
    return (
        <button
            onClick={onClick}
            className="group glass-panel glass-card-hover rounded-lg p-6 md:p-8 aspect-[4/3] md:aspect-square flex flex-col items-center justify-center gap-6 transition-all duration-300 cursor-pointer relative overflow-hidden"
        >
            {/* Hover gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

            {/* Icon container */}
            <div className="size-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-inner ring-1 ring-white/10">
                <span
                    className={`material-symbols-outlined ${iconColor} group-hover:${hoverIconColor}`}
                    style={{ fontSize: '32px', fontVariationSettings: "'FILL' 1" }}
                >
                    {icon}
                </span>
            </div>

            {/* Text content */}
            <div className="flex flex-col items-center gap-1 z-10">
                <span className="text-xl font-bold text-white tracking-wide">{title}</span>
                <span className="text-xs font-medium text-white/40 uppercase tracking-widest">{subtitle}</span>
            </div>
        </button>
    )
}

export default TopicCard
