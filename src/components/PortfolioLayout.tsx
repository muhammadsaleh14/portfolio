import type { ReactNode } from 'react'

type PortfolioLayoutProps = {
  navigation: ReactNode
  detail: ReactNode
}

export function PortfolioLayout({ navigation, detail }: PortfolioLayoutProps) {
  return (
    <main className="grid min-h-svh w-full place-items-center overflow-hidden bg-neutral-950 px-6">
      <div className="flex w-full max-w-[1400px] -translate-x-[8%] items-center gap-[min(8vw,6rem)] max-lg:-translate-x-[4%] max-sm:-translate-x-0 max-sm:flex-col max-sm:gap-10">
        {navigation}
        {detail}
      </div>
    </main>
  )
}
