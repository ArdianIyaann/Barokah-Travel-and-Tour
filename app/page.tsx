import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, Check, Clock3, Phone } from 'lucide-react'
import { Footer, Navbar, SectionHeading, TrustStrip } from '@/components/site'
import { SearchWidget } from '@/components/search'

export const metadata: Metadata = {
  title: 'Barokah Tour and Travel | Paket Wisata & Perjalanan dari Sukabumi',
  description:
    'Paket wisata domestik & mancanegara, study tour, persewaan transportasi wisata, dan tiket. Agen resmi Ancol dan mitra ASITA dari Sukabumi.',
  openGraph: {
    title: 'Barokah Tour and Travel | Jelajahi Indonesia',
    description: 'Rencanakan perjalanan nyaman dan berkesan bersama Barokah Tour and Travel dari Sukabumi.',
    type: 'website',
  },
}

const services = [
  'Tour Package Domestik & Mancanegara',
  'Study Tour / KKL / MICE',
  'Persewaan Transportasi Wisata',
  'Tiket Pesawat / Kereta Api',
  'Agen Resmi Ancol',
]

const packages = [
  {
    title: 'Open Trip Ancol–Dufan',
    href: '/paket/open-trip-ancol-dufan',
    duration: '1 Hari',
    price: 'Rp 425.000',
    badge: 'Paling diminati',
    image:
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80',
    keywords: ['ancol', 'dufan', 'jakarta'],
    highlights: ['Tiket masuk Dufan', 'Transportasi AC', 'Makan siang'],
  },
  {
    title: 'Open Trip Yogyakarta',
    href: '/paket/open-trip-yogyakarta',
    duration: '3D2N',
    price: 'Rp 1.450.000',
    badge: 'Pilihan keluarga',
    image:
      'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=900&q=80',
    keywords: ['yogyakarta', 'jogja', 'borobudur', 'malioboro'],
    highlights: ['Transportasi wisata', 'Hotel & sarapan', 'Wisata pilihan'],
  },
]

export default function Home() {
  return (
    <main>
      <section id="beranda" className="hero-image min-h-[650px] text-white">
        <Navbar />
        <div className="container-wide flex min-h-[650px] items-center pb-12 pt-28">
          <div className="max-w-2xl">
            <p className="animate-fade-up delay-1 eyebrow !text-[#f5b915]">Teman perjalanan keluarga Indonesia</p>
            <h1 className="animate-fade-up delay-2 mt-4 text-5xl font-bold leading-[1.08] md:text-7xl">
              Jelajahi Indonesia, <em className="font-serif italic font-normal text-[#f5b915]">lebih bermakna.</em>
            </h1>
            <p className="animate-fade-up delay-3 mt-5 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
              Rencanakan perjalanan yang nyaman dan berkesan bersama Barokah Tour and Travel dari Sukabumi.
            </p>
            <div className="animate-fade-up delay-4">
              <SearchWidget packages={packages} />
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section id="paket" className="container-wide py-20">
        <SectionHeading
          label="Pilihan perjalanan"
          title="Paket Populer"
          text="Temukan perjalanan yang sudah kami siapkan untuk menemani waktu terbaik Anda."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {packages.map((item) => (
            <article key={item.title} className="group overflow-hidden border border-[#dfe4e8] bg-white shadow-sm">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 bg-[#f5b915] px-3 py-1 text-xs font-bold">{item.badge}</span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1b3555]">{item.title}</h3>
                    <p className="mt-1 flex items-center gap-1 text-sm text-[#657080]">
                      <Clock3 size={14} /> {item.duration}
                    </p>
                  </div>
                  <strong className="whitespace-nowrap text-lg text-[#1b4f9c]">{item.price}</strong>
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
          ))}
        </div>
      </section>

      <section id="tentang" className="bg-[#edf5ef] py-20">
        <div className="container-wide grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">Layanan kami</p>
            <h2 className="mt-2 text-3xl font-bold text-[#1b3555] md:text-4xl">
              Semua kebutuhan perjalanan, dalam satu tempat.
            </h2>
            <p className="mt-4 leading-relaxed text-[#657080]">
              Kami membantu perjalanan wisata, pendidikan, dan perusahaan dengan pelayanan yang amanah dan profesional.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((s, i) => (
              <div key={s} className="flex items-start gap-3 border-b border-[#cbded0] py-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2ca84a] text-xs font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-sm font-semibold text-[#1b3555]">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5b915] py-12">
        <div className="container-wide flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1b3555]">Butuh Bantuan Merencanakan Perjalanan?</h2>
            <p className="mt-1 text-[#1b3555]/75">Tim Barokah siap membantu menjawab kebutuhan Anda.</p>
          </div>
          <a
            href="https://wa.me/6285930005544"
            className="flex items-center gap-2 bg-[#1b4f9c] px-5 py-3 text-sm font-bold text-white"
          >
            <Phone size={16} /> Chat via WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}