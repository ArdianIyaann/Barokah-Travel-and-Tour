'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { ArrowRight, Check, Clock3 } from 'lucide-react'

type PackageItem = {
  title: string
  href: string
  duration: string
  price: string
  badge: string
  image: string
  keywords: string[]
  highlights: string[]
}

export function PackageCard({ item }: { item: PackageItem }) {
  const imgRef = useRef<HTMLImageElement>(null)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = imgRef.current
    if (!el) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `translate3d(${x * -12}px, ${y * -12}px, 0) scale(1.06)`
  }

  const handleLeave = () => {
    const el = imgRef.current
    if (el) el.style.transform = 'translate3d(0, 0, 0) scale(1)'
  }

  return (
    <article className="group overflow-hidden border border-[#dfe4e8] bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#c9d4e6] hover:shadow-xl">
      <div className="relative h-52 overflow-hidden sm:h-64" onMouseMove={handleMove} onMouseLeave={handleLeave}>
        <Image
          ref={imgRef}
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 ease-out will-change-transform"
        />
        <span className="absolute left-4 top-4 bg-[#f5b915] px-3 py-1 text-xs font-bold">{item.badge}</span>
      </div>
      <div className="p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <h3 className="text-xl font-bold text-[#1b3555] transition-colors duration-300 group-hover:text-[#1b4f9c] sm:text-2xl">{item.title}</h3>
            <p className="mt-1 flex items-center gap-1 text-sm text-[#657080]">
              <Clock3 size={14} /> {item.duration}
            </p>
          </div>
          <strong className="shrink-0 whitespace-nowrap text-lg text-[#1b3555] transition-colors duration-300 group-hover:text-[#1b4f9c]">{item.price}</strong>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.highlights.map((x) => (
            <span key={x} className="flex items-center gap-1 bg-[#f1f3f5] px-2 py-1 text-xs text-[#657080]">
              <Check size={12} className="text-[#2ca84a]" /> {x}
            </span>
          ))}
        </div>
        <Link
          href={item.href}
          className="mt-6 flex items-center gap-2 text-sm font-bold text-[#1b4f9c]"
        >
          Lihat Detail <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  )
}