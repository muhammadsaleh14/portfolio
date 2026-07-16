import type { ReactNode } from 'react'
import { NavHint } from './NavHint'

type PortfolioLayoutProps = {
  navigation: ReactNode
  detail: ReactNode
}

export function PortfolioLayout({ navigation, detail }: PortfolioLayoutProps) {
  return (
    <main className="flex min-h-svh w-full flex-col overflow-x-hidden bg-neutral-950 px-4 pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] md:grid md:place-items-center md:overflow-hidden md:px-8 md:py-0">
      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col md:flex-none md:flex-row md:items-center md:gap-12 lg:gap-16">
        <div className="order-2 mt-auto flex w-full shrink-0 flex-col pt-6 md:order-1 md:mt-0 md:w-auto md:pt-0">
          <div className="order-2 md:order-1">{navigation}</div>
          <div className="order-1 md:order-2">
            <NavHint />
          </div>
        </div>
        <div className="order-1 flex min-h-0 w-full flex-1 flex-col justify-center md:order-2 md:w-auto md:flex-none">
          {detail}
        </div>
      </div>
    </main>
  )
}
