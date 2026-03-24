/* 
========================================================================
🚨 终极防报错复制粘贴指南 (Foolproof Tailwind UI Guide) 🚨

1. 从 Tailwind UI 复制任何 TSX/JSX 代码块。
2. 将代码全部粘贴到这个文件里（覆盖这个开头的注释也没关系）。
3. 【关键步骤】：如果你复制过来的代码开头是 `export default function Example()`：
   👉 请将其改成普通函数：`function Example()` （把 export default 删掉）
4. 确保文件最底部保留下面的 `export default function Page()` 包装器！
5. 在 `Page()` 里调用你的 UI 组件（比如 `<Example />`），传死它需要的数据！

为什么这么做？因为 Next.js 的 URL 路由入口文件 (page.tsx) 必须没有任何强求的外部数据加载参数！
========================================================================
*/

/** 
 * 👇 这里放你从 Tailwind UI 复制过来的长篇大论的原代码 👇 
 */
function DemoHeaderSection({
  content,
}: {
  content: any // 这里用了 any 就不怕外部数据类型错误了！
}) {
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
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 dark:bg-white/15 dark:text-white dark:hover:bg-white/20"
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
      {/* Background SVG Grid omitted for brevity in demo, keep your original components intact! */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
    </div>
  )
}

/** 
 * 👇 这是永远雷打不动的容器大门 👇 
 * Next.js 只认这个 export default。你永远只要在这个大门里调用上面的炒锅即可。
 */
export default function Page() {
  return (
    <DemoHeaderSection
      content={{
        heading: 'The Ultimate Web Automation',
        description: 'Your pure React UI blocks are natively deployed to Edge, bypassing complex dependencies and strict typing bugs.',
        primaryCta: { label: 'Explore Gallery', href: '#' },
        secondaryCta: { label: 'View Source', href: '#', arrowLabel: '→' },
        backgroundGradient: { firstColor: '#4f46e5', secondColor: '#ec4899' },
      }}
    />
  )
}
