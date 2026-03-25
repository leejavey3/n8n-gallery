type Content = {
  heading: string
  description: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta: {
    label: string
    href: string
    arrowLabel: string
  }
  gradient: {
    circleFill: string
    gradientId: string
    stops: Array<{
      offset: number
      color: string
    }>
  }
}

export default function Example({
  content,
}: {
  content: Content
}) {
  const gradient = content.gradient

  return (
    <div className="relative isolate overflow-hidden bg-white dark:bg-gray-900">
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">
            {content.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600 dark:text-gray-300">
            {content.description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={content.primaryCta.href}
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:bg-white/15 dark:text-white dark:shadow-none dark:inset-ring dark:inset-ring-white/5 dark:hover:bg-white/20 dark:focus-visible:outline-white"
            >
              {content.primaryCta.label}
            </a>
            <a
              href={content.secondaryCta.href}
              className="text-sm/6 font-semibold text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
            >
              {content.secondaryCta.label} <span aria-hidden="true">{content.secondaryCta.arrowLabel}</span>
            </a>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
      >
        <circle r={512} cx={512} cy={512} fill={gradient.circleFill} fillOpacity="0.7" />
        <defs>
          <radialGradient id={gradient.gradientId}>
            {gradient.stops.map((stop) => (
              <stop key={stop.offset} offset={stop.offset} stopColor={stop.color} />
            ))}
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}
