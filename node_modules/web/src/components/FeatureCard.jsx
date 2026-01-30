function FeatureCard({ icon, iconBgColor, iconTextColor, title, description, className = '' }) {
    return (
        <div className={`glass-panel flex h-48 flex-col items-center justify-center text-center gap-4 rounded-xl p-6 transition-transform hover:-translate-y-2 hover:bg-white/5 ${className}`}>
            <div className={`size-12 rounded-full ${iconBgColor} flex items-center justify-center ${iconTextColor} shrink-0`}>
                <span className="material-symbols-outlined text-[24px]">{icon}</span>
            </div>
            <div>
                <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{description}</p>
            </div>
        </div>
    )
}

export default FeatureCard
