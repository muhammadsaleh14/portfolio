import type { ReactNode } from 'react'

type PortfolioLayoutProps = {
  navigation: ReactNode
  detail: ReactNode
}

export function PortfolioLayout({ navigation, detail }: PortfolioLayoutProps) {
  return (
    <main className="min-h-svh w-full overflow-x-hidden bg-neutral-950 px-4 py-6 md:grid md:place-items-center md:overflow-hidden md:px-8 md:py-0">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16">
        {navigation}
        {detail}
      </div>
    </main>
  )
}
