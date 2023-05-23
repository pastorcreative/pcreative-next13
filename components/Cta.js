export default function Cta({children, ...props}) {
    return (
        <button className="pc-brutal-btn" {...props}>
            {children}
        </button>
    )
}