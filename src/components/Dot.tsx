type DotSize = 'main' | 'sub'

type DotProps = {
  label: string
  isActive: boolean
  size?: DotSize
  onClick: () => void
}

const sizeClasses: Record<DotSize, { idle: string; active: string }> = {
  main: {
    idle: 'size-11 md:size-16',
    active: 'size-12 md:size-[4.5rem]',
  },
  sub: {
    idle: 'size-8 md:size-10',
    active: 'size-9 md:size-12',
  },
}

export function Dot({ label, isActive, size = 'main', onClick }: DotProps) {
  const sizes = sizeClasses[size]

  return (
    <button
      type="button"
      className={[
        'relative z-10 shrink-0 cursor-pointer rounded-full border-none bg-white p-0 transition-all duration-200 ease-out',
        'shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_1px_2px_rgba(0,0,0,0.4)]',
        'hover:scale-110 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.22),0_2px_4px_rgba(0,0,0,0.5)]',
        'focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[6px] focus-visible:outline-white/25',
        isActive
          ? `${sizes.active} shadow-[0_0_0_1px_rgba(255,255,255,0.3),0_2px_6px_rgba(0,0,0,0.6)]`
          : sizes.idle,
      ].join(' ')}
      aria-label={label}
      aria-current={isActive ? 'true' : undefined}
      onClick={onClick}
    />
  )
}
