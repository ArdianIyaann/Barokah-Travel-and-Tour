'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { ArrowRight, Check, Clock3, MapPin, Star } from 'lucide-react'

type PackageItem = {
  title: string
  href: string
  duration: string
  price: string
  badge: string
  location: string
  rating: string
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
    el.style.transform = `translate3d(${x * -12}px, ${y * -12}px, 0) scale(1.12)`
  }

  const handleLeave = () => {
    const el = imgRef.current
    if (el) el.style.transform = 'translate3d(0, 0, 0) scale(1.08)'
  }

  return (
    <Link
      href={item.href}
      className="group block overflow-hidden rounded-2xl border border-[#dfe4e8] bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#bcd0e8] hover:shadow-2xl"
    >
      <div className="relative h-52 overflow-hidden sm:h-56 xl:h-48" onMouseMove={handleMove} onMouseLeave={handleLeave}>
        <Image
          ref={imgRef}
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out will-change-transform"
          style={{ transform: 'scale(1.08)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09204a]/80 via-[#09204a]/10 to-transparent" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="bg-[#f5b915] px-3 py-1 text-xs font-bold text-[#1d2733] shadow-sm">{item.badge}</span>
        </div>

        <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-[#1b4f9c] shadow-sm backdrop-blur">
          <Star size={12} className="fill-[#f5b915] text-[#f5b915]" /> {item.rating}
        </span>

        <div className="absolute inset-x-4 bottom-4 text-white">
          <p className="flex items-center gap-1.5 text-xs text-white/80">
            <MapPin size={13} /> {item.location}
            <span className="opacity-50">•</span>
            <Clock3 size={13} /> {item.duration}
          </p>
          <h3 className="mt-1 text-xl font-bold leading-snug drop-shadow-sm sm:text-2xl">{item.title}</h3>
        </div>
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {item.highlights.map((x) => (
            <span
              key={x}
              className="flex items-center gap-1 rounded-full border border-[#d8e6e0] bg-[#f0f9f3] px-2.5 py-1 text-xs font-semibold text-[#3c6b54]"
            >
              <Check size={12} className="text-[#2ca84a]" /> {x}
            </span>
          ))}
        </div>

        <div className="mt-5 border-t border-[#f1f3f5] pt-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#9aa3af]">Mulai dari</p>
            <p className="text-2xl font-bold leading-none text-[#1b4f9c]">{item.price}</p>
          </div>
          <span className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#1b4f9c] px-4 py-2.5 text-sm font-bold text-white transition-colors duration-300 group-hover:bg-[#143d79]">
            Lihat Detail <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}