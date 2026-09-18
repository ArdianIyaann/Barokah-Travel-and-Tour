'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight, Clock3, MapPin, Search, Users } from 'lucide-react'

type PackageOption = { title: string; href: string; keywords: string[] }

const months = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
]

function formatTanggal(d: Date): string {
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
}

function startOfDay(d: Date) {
  const c = new Date(d); c.setHours(0, 0, 0, 0); return c
}

function CalendarDropdown({ value, onChange, min }: { value: Date | null; onChange: (d: Date) => void; min: Date }) {
  const [open, setOpen] = useState(false)
  const [openUp, setOpenUp] = useState(false)
  const [view, setView] = useState(() => value ? new Date(value.getFullYear(), value.getMonth(), 1) : new Date(min.getFullYear(), min.getMonth(), 1))
  const ref = useRef<HTMLDivElement>(null)
  const minDay = startOfDay(min)

  const toggleOpen = () => {
    if (!open) {
      const rect = ref.current?.getBoundingClientRect()
      const spaceBelow = window.innerHeight - (rect ? rect.bottom : 0)
      setOpenUp(spaceBelow < 360)
    }
    setOpen(!open)
  }

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const year = view.getFullYear()
  const month = view.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const days: (number | null)[] = Array.from({ length: firstDay }, () => null)
  for (let d = 1; d <= daysInMonth; d++) days.push(d)

  const isDisabled = (d: number) => {
    const cell = new Date(year, month, d)
    cell.setHours(0, 0, 0, 0)
    return cell < minDay
  }

  const isSelected = (d: number) => {
    if (!value) return false
    return value.getFullYear() === year && value.getMonth() === month && value.getDate() === d
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={toggleOpen}
        className="flex w-full items-center justify-between gap-2 text-sm text-left"
        aria-label="Pilih tanggal"
      >
        {value ? (
          <span>{formatTanggal(value)}</span>
        ) : (
          <span className="text-[#657080]">Pilih tanggal</span>
        )}
        <ChevronDown size={14} className={`text-[#657080] transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          onMouseDown={(e) => e.preventDefault()}
          style={{ backgroundColor: '#ffffff' }}
          className={`absolute left-0 z-[120] w-[280px] max-w-[calc(100vw-2rem)] max-h-[70vh] overflow-y-auto rounded-xl border border-[#dfe4e8] bg-white p-3 shadow-2xl ring-1 ring-black/5 md:right-0 md:left-auto ${openUp ? 'bottom-full mb-2' : 'top-full mt-2'}`}
        >
          <div className="mb-3 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setView(new Date(year, month - 1, 1))}
              className="rounded-lg p-1 text-[#657080] hover:bg-[#f1f3f5]"
              aria-label="Bulan sebelumnya"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-sm font-bold text-[#1b3555]">{months[month]} {year}</span>
            <button
              type="button"
              onClick={() => setView(new Date(year, month + 1, 1))}
              className="rounded-lg p-1 text-[#657080] hover:bg-[#f1f3f5]"
              aria-label="Bulan berikutnya"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-0.5 text-center text-[11px] font-semibold text-[#657080]">
            {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((d) => (
              <div key={d} className="py-1">{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-0.5">
            {days.map((d, i) =>
              d === null ? (
                <div key={`empty-${i}`} />
              ) : (
                <button
                  key={d}
                  type="button"
                  disabled={isDisabled(d)}
                  onClick={() => {
                    onChange(new Date(year, month, d))
                    setOpen(false)
                  }}
                  className={`flex h-8 items-center justify-center rounded-lg text-xs font-medium transition
                    ${isSelected(d)
                      ? 'bg-[#1b4f9c] text-white'
                      : isDisabled(d)
                        ? 'cursor-not-allowed text-[#dfe4e8]'
                        : 'text-[#1b3555] hover:bg-[#edf5ef]'
                    }`}
                >
                  {d}
                </button>
              ),
            )}
          </div>

          {value && (
            <button
              type="button"
              onClick={() => { onChange(null as any); setOpen(false) }}
              className="mt-2 w-full rounded-lg bg-[#f1f3f5] py-1.5 text-xs font-semibold text-[#657080] hover:bg-[#dfe4e8]"
            >
              Hapus pilihan
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export function SearchWidget({ packages }: { packages: PackageOption[] }) {
  const router = useRouter()
  const [destination, setDestination] = useState('')
  const [tanggal, setTanggal] = useState<Date | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const minDate = new Date()
  minDate.setHours(0, 0, 0, 0)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const query = destination.trim().toLowerCase()

    if (!query) {
      setMessage(null)
      document.getElementById('paket')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    const match = packages.find((p) =>
      `${p.title} ${p.keywords.join(' ')}`.toLowerCase().includes(query),
    )

    if (match) {
      router.push(match.href)
      return
    }

    setMessage(query)
  }

  return (
    <form className="mt-8" onSubmit={handleSubmit} aria-label="Cari paket wisata">
      <div className="grid gap-2 rounded-xl bg-white p-2 text-[#1d2733] shadow-xl md:grid-cols-[1fr_1fr_1fr_auto]">
        <label className="flex items-center gap-2 rounded-lg border-b border-[#dfe4e8] px-3 py-2 md:rounded-none md:rounded-l-lg md:border-b-0 md:border-r">
          <MapPin className="text-[#2ca84a]" size={17} />
          <span className="w-full">
            <small className="block text-[10px] text-[#657080]">TUJUAN</small>
            <input
              className="w-full bg-transparent text-sm outline-none"
              placeholder="Mau ke mana?"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
                if (message) setMessage(null)
              }}
              aria-label="Tujuan perjalanan"
            />
          </span>
        </label>

        <label className="relative flex items-center gap-2 rounded-lg border-b border-[#dfe4e8] px-3 py-2 md:rounded-none md:border-b-0 md:border-r">
          <Clock3 className="text-[#2ca84a]" size={17} />
          <span className="w-full">
            <small className="block text-[10px] text-[#657080]">TANGGAL</small>
            <CalendarDropdown value={tanggal} onChange={setTanggal} min={minDate} />
          </span>
        </label>

        <label className="flex items-center gap-2 rounded-lg px-3 py-2 md:rounded-none">
          <Users className="text-[#2ca84a]" size={17} />
          <span className="w-full">
            <small className="block text-[10px] text-[#657080]">PESERTA</small>
            <input
              type="number"
              min={1}
              step={1}
              defaultValue={2}
              className="w-full bg-transparent text-sm outline-none"
              aria-label="Jumlah peserta"
            />
          </span>
        </label>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-lg bg-[#f5b915] px-5 py-3 text-sm font-bold"
        >
          <Search size={16} /> Cari Paket
        </button>
      </div>
      {message && (
        <p className="mt-3 rounded-lg bg-[#fffaf0] px-4 py-3 text-sm text-[#1b3555]" role="status" aria-live="polite">
          Belum ada paket cocok untuk &ldquo;{message}&rdquo;.{' '}
          <a href="https://wa.me/6285930005544" className="font-bold underline">
            Tanya via WhatsApp
          </a>{' '}
          atau{' '}
          <button
            type="button"
            onClick={() => document.getElementById('paket')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="font-bold text-[#1b4f9c] underline"
          >
            lihat semua paket
          </button>
          .
        </p>
      )}
    </form>
  )
}