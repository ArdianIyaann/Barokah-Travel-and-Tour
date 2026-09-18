'use client'

import { useState } from 'react'
import { Plane, Ticket } from 'lucide-react'
import { SearchWidget } from './search'
import { TicketSearch } from './ticket-search'

type PackageOption = { title: string; href: string; keywords: string[] }

export function SearchTabs({ packages }: { packages: PackageOption[] }) {
  const [tab, setTab] = useState<'paket' | 'nama'>('nama')

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
      <div key={tab} className="animate-fade-up">
        {tab === 'paket' ? (
          <SearchWidget packages={packages} />
        ) : (
          <TicketSearch />
        )}
      </div>
    </div>
  )
}