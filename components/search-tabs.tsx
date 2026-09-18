'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { Plane, Ticket } from 'lucide-react'
import { SearchWidget } from './search'
import { TicketSearch } from './ticket-search'

type PackageOption = { title: string; href: string; keywords: string[] }

export function SearchTabs({ packages }: { packages: PackageOption[] }) {
  const [tab, setTab] = useState<'paket' | 'nama'>('nama')
  const containerRef = useRef<HTMLDivElement>(null)
  const paketRef = useRef<HTMLDivElement>(null)
  const namaRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    const measure = () => {
      const paket = paketRef.current?.offsetHeight ?? 0
      const nama = namaRef.current?.offsetHeight ?? 0
      setHeight(Math.max(paket, nama))
    }

    measure()

    const ro = new ResizeObserver(measure)
    if (paketRef.current) ro.observe(paketRef.current)
    if (namaRef.current) ro.observe(namaRef.current)

    return () => ro.disconnect()
  }, [])

  return (
    <div>
      <div className="mb-3 inline-flex rounded-full bg-white/15 p-1 shadow-inner backdrop-blur-md">
        <button
          type="button"
          onClick={() => setTab('nama')}
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 ${tab === 'nama' ? 'bg-white text-[#1b4f9c] shadow-md' : 'text-white hover:text-[#f5b915]'}`}
          aria-pressed={tab === 'nama'}
        >
          <Ticket size={15} /> Cari Nama
        </button>
        <button
          type="button"
          onClick={() => setTab('paket')}
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 ${tab === 'paket' ? 'bg-white text-[#1b4f9c] shadow-md' : 'text-white hover:text-[#f5b915]'}`}
          aria-pressed={tab === 'paket'}
        >
          <Plane size={15} /> Cari Paket
        </button>
      </div>

      <div
        ref={containerRef}
        style={{ height }}
        className="relative"
      >
        <div
          ref={namaRef}
          inert={tab !== 'nama'}
          aria-hidden={tab !== 'nama'}
          className={`absolute inset-x-0 top-0 transition-opacity duration-300 ease-out ${tab === 'nama' ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        >
          <div className="w-full pt-3">
            <TicketSearch />
          </div>
        </div>
        <div
          ref={paketRef}
          inert={tab !== 'paket'}
          aria-hidden={tab !== 'paket'}
          className={`absolute inset-x-0 top-0 transition-opacity duration-300 ease-out ${tab === 'paket' ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        >
          <div className="w-full pt-3">
            <SearchWidget packages={packages} />
          </div>
        </div>
      </div>
    </div>
  )
}