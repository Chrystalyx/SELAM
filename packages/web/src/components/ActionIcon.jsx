function ActionIcon({ icon, label, onClick, hoverRotate = false }) {
    return (
        <button
            onClick={onClick}
            className="group flex flex-col items-center gap-3 bg-transparent text-center focus:outline-none"
        >
            <div className="relative rounded-full bg-white/5 p-5 border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:scale-110 group-hover:border-white/30 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <span
                    className={`material-symbols-outlined text-white transition-transform ${hoverRotate ? 'group-hover:rotate-12' : 'group-hover:scale-110'}`}
                    style={{ fontSize: '28px' }}
                >
                    {icon}
                </span>
            </div>
            <p className="text-white/80 text-sm font-medium leading-normal tracking-wide group-hover:text-white transition-colors">
                {label}
            </p>
        </button>
    )
}

export default ActionIcon
