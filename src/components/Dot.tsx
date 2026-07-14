type DotProps = {
  label: string
  isActive: boolean
  onClick: () => void
}

export function Dot({ label, isActive, onClick }: DotProps) {
  return (
    <button
      type="button"
      className={[
        'w-[3px] cursor-pointer rounded-full border-none bg-white p-0 transition-all duration-200 ease-out',
        'shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_1px_2px_rgba(0,0,0,0.4)]',
        'hover:scale-y-[1.15] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.22),0_2px_4px_rgba(0,0,0,0.5)]',
        'focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[6px] focus-visible:outline-white/25',
        isActive
          ? 'h-[19px] shadow-[0_0_0_1px_rgba(255,255,255,0.3),0_2px_6px_rgba(0,0,0,0.6)]'
          : 'h-3.5',
      ].join(' ')}
      aria-label={label}
      aria-current={isActive ? 'true' : undefined}
      onClick={onClick}
    />
  )
}
