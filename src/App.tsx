import { Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'

function App() {
  return (
    <main className="app-shell min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center gap-6 px-6 py-16 text-center">
        <span className="app-shell__badge inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground shadow-sm">
          <Sparkles className="size-4 text-primary" />
          Bun + Vite + React + TailwindCSS + shadcn/ui
        </span>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            FPTU Xperience UI
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            A ready-to-build frontend starter powered by Bun, Vite, React, SCSS,
            TailwindCSS, and shadcn/ui.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <a href="https://bun.sh/docs" target="_blank" rel="noreferrer">
              Start with Bun
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://ui.shadcn.com/docs" target="_blank" rel="noreferrer">
              Explore shadcn/ui
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}

export default App
