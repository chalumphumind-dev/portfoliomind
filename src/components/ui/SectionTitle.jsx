export default function SectionTitle({ eyebrow, title}) {
    return (
        <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                {eyebrow}
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h3>
        </div>
    );
}