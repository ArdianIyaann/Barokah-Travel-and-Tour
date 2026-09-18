import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Bus,
  Check,
  Clock3,
  FileText,
  Globe,
  GraduationCap,
  Mail,
  Map,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
  Route,
  ScrollText,
  ShieldCheck,
  Stamp,
  Ticket,
  UserCheck,
  Waves,
} from 'lucide-react'
import { BannerSlideshow } from '@/components/banner-slideshow'
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

const layanan = [
  'Tour Package Domestik dan Mancanegara',
  'Study Tour, Study Banding, Kunjungan Kerja, KKL, MICE, EO, atau WO',
  'Wisata Nusantara dan Mancanegara',
  'Persewaan Transportasi Wisata',
  'Transport Organizer',
  'Tiket Pesawat / Kereta Api',
  'Agen Resmi PT. Taman Impian Jaya Ancol',
]

const layananIcon = [Plane, GraduationCap, Map, Bus, Route, Ticket, Waves]

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
      <section id="beranda" className="relative min-h-[650px] text-white">
        <BannerSlideshow />
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

      <section id="tentang" className="relative overflow-hidden bg-[#edf5ef] py-20">
        <div aria-hidden className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#2ca84a]/10 blur-3xl"></div>
        <div aria-hidden className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#1b4f9c]/10 blur-3xl"></div>
        <div className="container-wide relative grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#2ca84a] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#2ca84a]"></span> Tentang Kami
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#1b3555] md:text-4xl">Barokah Tour & Travel</h2>
            <p className="mt-4 leading-relaxed text-[#657080]">
              Barokah Tour & Travel adalah jasa pariwisata yang berada di bawah naungan PT. Bina Barokah Sejahtera dengan lisensi:
            </p>
            <p className="mt-4 leading-relaxed text-[#657080]">
              Kami membantu perjalanan wisata, pendidikan, dan perusahaan dengan pelayanan yang amanah dan profesional.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              <li className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#1b3555] shadow-sm"><ShieldCheck size={15} className="text-[#2ca84a]" /> Berizin resmi</li>
              <li className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#1b3555] shadow-sm"><Award size={15} className="text-[#2ca84a]" /> Anggota ASITA</li>
              <li className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#1b3555] shadow-sm"><Waves size={15} className="text-[#2ca84a]" /> Agen Resmi Ancol</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#dfe4e8] bg-white shadow-lg">
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#163d78] to-[#1b4f9c] px-6 py-4">
              <FileText size={18} className="text-white" />
              <h3 className="font-bold text-white">Lisensi & Data Resmi</h3>
            </div>
            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-[#657080]">Kelengkapan Izin</p>
              <ul className="mt-3 grid gap-4 sm:grid-cols-2">
                <li className="flex items-start gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef3ff] text-[#1b4f9c]"><UserCheck size={16} /></span><span><strong className="block text-[#1b3555]">Penanggung jawab</strong><span className="text-sm text-[#657080]">Rizal Bahtiar, S.Psi.</span></span></li>
                <li className="flex items-start gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef3ff] text-[#1b4f9c]"><ScrollText size={16} /></span><span><strong className="block text-[#1b3555]">Akta Notaris</strong><span className="text-sm text-[#657080]">AHU-0045694.AH.01.012018</span></span></li>
                <li className="flex items-start gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef3ff] text-[#1b4f9c]"><BadgeCheck size={16} /></span><span><strong className="block text-[#1b3555]">SIUP, TDUP, NIB</strong><span className="text-sm text-[#657080]">8120004912783</span></span></li>
                <li className="flex items-start gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef3ff] text-[#1b4f9c]"><Stamp size={16} /></span><span><strong className="block text-[#1b3555]">ASITA</strong><span className="text-sm text-[#657080]">0704/IX/DPP/2018</span></span></li>
              </ul>
              <p className="mt-6 text-xs font-bold uppercase tracking-wider text-[#657080]">Kontak</p>
              <ul className="mt-3 grid gap-4 sm:grid-cols-2">
                <li className="flex items-start gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef3ff] text-[#1b4f9c]"><MapPin size={16} /></span><span><strong className="block text-[#1b3555]">Alamat</strong><span className="text-sm text-[#657080]">Graha Barokah Jl. Cisaat Sukamanah, Kec. Cisaat, Kab. Sukabumi (43152)</span></span></li>
                <li className="flex items-start gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef3ff] text-[#1b4f9c]"><Phone size={16} /></span><span><strong className="block text-[#1b3555]">No. Telepon</strong><span className="text-sm text-[#657080]">(0266) 230-408 / 0859 3000 5544</span></span></li>
                <li className="flex items-start gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef3ff] text-[#1b4f9c]"><Mail size={16} /></span><span><strong className="block text-[#1b3555]">E-mail</strong><span className="text-sm text-[#657080]">adminbarokahtour@gmail.com</span></span></li>
                <li className="flex items-start gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef3ff] text-[#1b4f9c]"><Globe size={16} /></span><span><strong className="block text-[#1b3555]">Website</strong><span className="text-sm text-[#657080]">www.barokahtour.com</span></span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="layanan" className="container-wide py-20">
        <SectionHeading
          label="Yang kami tawarkan"
          title="Layanan Kami"
          text="Barokah Tour & Travel adalah perusahaan jasa pariwisata yang berada di bawah naungan PT. Bina Barokah Sejahtera dengan lisensi:"
        />
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]">
          {layanan.map((item, i) => {
            const Icon = layananIcon[i]
            return (
              <article key={item} className="group rounded-xl border border-[#dfe4e8] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#eef3ff] text-[#1b4f9c] transition duration-300 group-hover:bg-[#1b4f9c] group-hover:text-white">
                  <Icon size={20} />
                </span>
                <p className="mt-4 text-sm font-semibold leading-snug text-[#1b3555]">{item}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="container-wide py-20">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#163d78] to-[#1b4f9c] px-8 py-12 shadow-xl md:flex md:items-center md:justify-between md:gap-8 md:px-12">
          <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl"></div>
          <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-[#f5b915]/20 blur-2xl"></div>
          <div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">Butuh Bantuan Merencanakan Perjalanan?</h2>
            <p className="mt-1 text-white/70">Tim Barokah siap membantu menjawab kebutuhan Anda.</p>
          </div>
          <a
            href="https://wa.me/6285930005544"
            className="mt-6 flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 py-3.5 text-sm font-bold text-white shadow-lg duration-300 hover:-translate-y-0.5 hover:shadow-xl md:mt-0"
          >
            <MessageCircle size={18} /> Chat via WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}