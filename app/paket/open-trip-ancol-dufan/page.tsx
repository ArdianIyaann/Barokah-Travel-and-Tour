import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, Check, Clock3, MapPin, Phone } from 'lucide-react'
import { BookingBar, Footer, Logo } from '@/components/site'

export const metadata: Metadata = {
  title: 'Open Trip Ancol–Dufan 1 Hari | Barokah Tour and Travel',
  description:
    'Paket open trip Ancol–Dufan 1 hari dari Sukabumi: tiket masuk Dufan, transportasi AC, makan siang, dan crew berpengalaman.',
  openGraph: {
    title: 'Open Trip Ancol–Dufan 1 Hari | Barokah Tour and Travel',
    description:
      'Paket open trip Ancol–Dufan 1 hari dari Sukabumi: tiket masuk Dufan, transportasi AC, makan siang, dan crew berpengalaman.',
    type: 'website',
  },
}

const itinerary = [
  ['05.00', 'Kumpul di Graha Barokah', 'Registrasi dan persiapan keberangkatan'],
  ['05.30', 'Berangkat menuju Jakarta', 'Perjalanan menggunakan bus wisata'],
  ['09.00', 'Tiba di Ancol – Dufan', 'Pembagian tiket dan waktu bebas'],
  ['12.00', 'Makan siang', 'Makan siang bersama'],
  ['17.00', 'Persiapan pulang', 'Kumpul di meeting point'],
  ['22.00', 'Tiba di Sukabumi', 'Perjalanan selesai'],
]

const armada = ['AC', 'TV LCD', 'Karaoke', 'Reclining Seat', 'Charger HP']

const rules = [
  'Hadir tepat waktu sesuai titik kumpul yang telah ditentukan.',
  'Menjaga kebersihan dan kenyamanan selama perjalanan.',
  'Mengikuti arahan crew dan tidak meninggalkan rombongan.',
  'Menjaga barang pribadi masing-masing.',
]

export default function Detail() {
  return (
    <main>
      <header className="border-b bg-white">
        <div className="container-wide flex h-[76px] items-center justify-between">
          <Logo />
          <Link href="/" className="flex items-center gap-2 text-sm font-bold text-[#1b4f9c]">
            <ArrowLeft size={16} /> Kembali
          </Link>
        </div>
      </header>

      <section className="relative h-[310px]">
        <Image
          src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1800&q=85"
          alt="Open Trip Ancol–Dufan"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0b2d5e]/50" />
        <div className="container-wide relative flex h-full items-end pb-8 text-white">
          <div>
            <p className="eyebrow !text-[#f5b915]">Paket wisata</p>
            <h1 className="mt-2 text-4xl font-bold md:text-5xl">Open Trip Ancol–Dufan</h1>
            <p className="mt-2 flex items-center gap-2 text-sm">
              <Clock3 size={15} /> 1 Hari <span>•</span>
              <MapPin size={15} /> Jakarta
            </p>
          </div>
        </div>
      </section>

      <div className="container-wide grid gap-10 py-10 md:grid-cols-[1fr_300px]">
        <div className="space-y-10">
          <section>
            <p className="eyebrow">Rangkaian perjalanan</p>
            <h2 className="mt-2 text-3xl font-bold text-[#1b3555]">Itinerary</h2>
            <ol className="relative mt-5 border-l-2 border-[#2ca84a] pl-5">
              {itinerary.map((row, i) => (
                <li key={row[0]} className="relative pb-6 pl-1 last:pb-0">
                  <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full bg-[#2ca84a]" aria-hidden />
                  <div className="flex gap-4">
                    <strong className="w-14 shrink-0 text-sm font-bold text-[#1b4f9c]">{row[0]}</strong>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#1b3555]">{row[1]}</p>
                      <p className="mt-0.5 text-sm text-[#657080]">{row[2]}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <p className="eyebrow">Yang Anda dapatkan</p>
            <h2 className="mt-2 text-3xl font-bold text-[#1b3555]">Fasilitas Armada</h2>
            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
              {armada.map((x) => (
                <div key={x} className="flex items-center gap-2 border bg-white p-4 text-sm font-semibold">
                  <Check size={16} className="text-[#2ca84a]" /> {x}
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="eyebrow">Mohon diperhatikan</p>
            <h2 className="mt-2 text-3xl font-bold text-[#1b3555]">Tata Tertib Peserta</h2>
            <ol className="mt-5 space-y-3 text-sm leading-relaxed text-[#657080]">
              {rules.map((rule, i) => (
                <li key={rule}>
                  {i + 1}. {rule}
                </li>
              ))}
            </ol>
          </section>
        </div>

        <aside className="hidden md:block">
          <div className="mt-[82px] border border-[#dfe4e8] bg-white p-6 shadow-sm">
            <p className="text-sm text-[#657080]">Harga per peserta</p>
            <p className="mt-1 text-3xl font-bold text-[#1b4f9c]">Rp 425.000</p>
            <p className="mt-2 text-xs text-[#657080]">Sudah termasuk fasilitas perjalanan di atas.</p>
            <a
              href="https://wa.me/6285930005544"
              className="mt-6 flex items-center justify-center gap-2 bg-[#f5b915] px-4 py-3 text-sm font-bold"
            >
              <Phone size={16} /> Pesan Sekarang
            </a>
          </div>
        </aside>
      </div>

      <BookingBar price="Rp 425.000" />
      <Footer />
    </main>
  )
}