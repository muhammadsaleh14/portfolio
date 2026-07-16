/** Subtle navigation cues — mobile swipe vs desktop keys. */
export function NavHint() {
  return (
    <>
      <p
        className="mb-3 text-center text-[0.7rem] leading-relaxed tracking-[0.12em] text-neutral-600 uppercase md:hidden"
        role="note"
      >
        Swipe <span className="text-neutral-500">← →</span> between dots
        <span className="mx-2 text-neutral-700" aria-hidden>
          ·
        </span>
        <span className="text-neutral-500">↑ ↓</span> for subdots
      </p>

      <p
        className="mt-8 hidden max-w-[11rem] text-[0.7rem] leading-relaxed tracking-[0.12em] text-neutral-600 uppercase md:block"
        role="note"
      >
        <span className="block">
          <span className="text-neutral-500">↑ ↓</span> between dots
        </span>
        <span className="mt-1.5 block">
          <span className="text-neutral-500">→</span> open subdots
        </span>
        <span className="mt-1.5 block">
          <span className="text-neutral-500">←</span> go back
        </span>
      </p>
    </>
  )
}
