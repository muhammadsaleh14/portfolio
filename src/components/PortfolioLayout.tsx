import type { ReactNode } from 'react'

type PortfolioLayoutProps = {
  navigation: ReactNode
  detail: ReactNode
}

export function PortfolioLayout({ navigation, detail }: PortfolioLayoutProps) {
  return (
    <main className="grid min-h-svh w-full place-items-center overflow-hidden bg-neutral-950">
      <div className="flex -translate-x-[12%] items-center gap-20 max-sm:-translate-x-[6%] max-sm:gap-12">
        {navigation}
        {detail}
      </div>
    </main>
  )
}
