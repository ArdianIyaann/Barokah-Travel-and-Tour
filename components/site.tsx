'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, ChevronDown, Clock3, MapPin, Menu, Phone, Star, Users, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Logo({ light=false }: { light?: boolean }) {
  return <Link href="/" className="flex items-center" aria-label="Barokah Tour and Travel">
    <img src="/logo.png" alt="Barokah Tour and Travel" width={467} height={160} className="h-10 w-auto object-contain" />
  </Link>
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="absolute top-0 z-[70] w-full bg-transparent text-white">
      <div className="container-wide flex h-[76px] items-center justify-between">
        <Logo light />
        <nav className="desktop-nav flex items-center gap-7 text-sm font-semibold">
          {([['Beranda','#beranda'],['Paket Wisata','#paket'],['Panduan Peserta','/panduan'],['Tentang Kami','/#tentang'],['Kontak','#kontak']] as const).map(([label, href]) => (
            <Link key={label as string} href={href as string} onClick={()=>setOpen(false)} className="group relative inline-block transition-colors duration-300 hover:text-[#f5b915]">
              {label as string}
              <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[#f5b915] transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>
        <a href="https://wa.me/6285930005544" className="hidden items-center gap-2 rounded-md bg-[#f5b915] px-4 py-2.5 text-sm font-bold text-[#1d2733] transition-colors duration-200 hover:bg-[#e4aa09] sm:flex"><Phone size={15}/> Hubungi Kami</a>
        <button className="relative z-[70] flex h-10 w-10 items-center justify-center sm:hidden" onClick={()=>setOpen(!open)} aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open}>
          <span className={`absolute transition-all duration-300 ${open ? 'rotate-90 scale-75 opacity-0' : 'opacity-100'}`}><Menu /></span>
          <span className={`absolute transition-all duration-300 ${open ? 'opacity-100' : '-rotate-90 opacity-0'}`}><X /></span>
        </button>
      </div>
      <div className={`fixed inset-0 z-50 bg-[#09204a]/50 backdrop-blur-sm transition-opacity duration-300 sm:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onClick={()=>setOpen(false)} aria-hidden />
      <nav className={`absolute left-0 right-0 top-[76px] z-[60] mx-auto w-[min(1120px,calc(100%-2rem))] rounded-2xl border border-[#dfe4e8] bg-white p-4 text-[#1d2733] shadow-2xl transition-all duration-300 sm:hidden ${open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-3 opacity-0'}`}>
        <div className="flex flex-col divide-y divide-[#f1f3f5] text-sm font-semibold">
          <Link href="#beranda" onClick={()=>setOpen(false)} className="-mx-3 rounded-lg px-3 py-3 transition-colors duration-200 hover:bg-[#f1f3f5]">Beranda</Link>
          <Link href="#paket" onClick={()=>setOpen(false)} className="-mx-3 rounded-lg px-3 py-3 transition-colors duration-200 hover:bg-[#f1f3f5]">Paket Wisata</Link>
          <Link href="/panduan" onClick={()=>setOpen(false)} className="-mx-3 rounded-lg px-3 py-3 transition-colors duration-200 hover:bg-[#f1f3f5]">Panduan Peserta</Link>
          <Link href="/#tentang" onClick={()=>setOpen(false)} className="-mx-3 rounded-lg px-3 py-3 transition-colors duration-200 hover:bg-[#f1f3f5]">Tentang Kami</Link>
          <Link href="#kontak" onClick={()=>setOpen(false)} className="-mx-3 rounded-lg px-3 py-3 transition-colors duration-200 hover:bg-[#f1f3f5]">Kontak</Link>
        </div>
        <a href="https://wa.me/6285930005544" className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#f5b915] px-4 py-2.5 text-sm font-bold text-[#1d2733] transition-colors duration-200 hover:bg-[#e4aa09]"><Phone size={15}/> Hubungi Kami</a>
      </nav>
    </header>
  )
}

export function BackLink({ href='/', label='Kembali' }: { href?: string; label?: string }) {
  return <Link href={href} className="flex items-center gap-2 text-sm font-bold text-[#1b4f9c]"><ArrowLeft size={16} /> {label}</Link>
}

export function SectionHeading({ label, title, text }: { label:string; title:string; text?:string }) { return <div className="mb-9 max-w-2xl"><p className="eyebrow mb-2">{label}</p><h2 className="text-3xl font-bold text-[#1b3555] md:text-4xl">{title}</h2>{text&&<p className="mt-3 leading-relaxed text-[#657080]">{text}</p>}</div> }

function TrustItems() {
  return (
    <>
      <p className="text-xs font-bold uppercase tracking-wider text-[#657080]">Dipercaya & berizin</p>
      <span className="font-bold text-[#1b4f9c]">ASITA <small className="block text-[9px] font-normal text-[#657080]">MEMBER</small></span>
      <span className="font-bold text-[#2ca84a]">Wonderful Indonesia</span>
      <span className="font-bold text-[#1b4f9c]">ANCOL <small className="block text-[9px] font-normal text-[#657080]">OFFICIAL AGENT</small></span>
    </>
  )
}

const TRUST_COPIES = 5
const ITEMS_PER_GROUP = 4

export function TrustStrip() {
  return (
    <section className="trust-strip border-y border-[#dfe4e8] bg-white py-7" aria-label="Mitra dan izin resmi">
      <div className="trust-marquee">
        <div className="trust-marquee-track">
          {Array.from({ length: TRUST_COPIES }, (_, i) => (
            <div className="trust-marquee-group" key={i} aria-hidden={i !== 0}>
              {Array.from({ length: ITEMS_PER_GROUP }, (_, j) => (
                <TrustItems key={j} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer(){return <footer id="kontak" className="bg-[#163d78] py-12 text-white"><div className="container-wide grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]"><div><Logo light/><p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">Mitra perjalanan terpercaya dari Sukabumi untuk menjelajah Indonesia bersama keluarga, sekolah, dan perusahaan.</p></div><div><h3 className="mb-4 font-sans text-sm font-bold uppercase tracking-wider">Tautan Cepat</h3><div className="flex flex-col gap-3 text-sm text-white/70"><Link href="/#paket">Paket Wisata</Link><Link href="/panduan">Panduan Peserta</Link><Link href="/#tentang">Tentang Kami</Link></div></div><div><h3 className="mb-4 font-sans text-sm font-bold uppercase tracking-wider">Hubungi Kami</h3><div className="space-y-2 text-sm text-white/70"><p>Graha Barokah, Jl. Cisaat Sukamanah, Kab. Sukabumi 43152</p><p>0859-3000-5544 / 0857-3122-2878</p><p>adminbarokahtour@gmail.com</p></div></div></div><div className="container-wide mt-10 border-t border-white/15 pt-5 text-xs text-white/50">© {new Date().getFullYear()} PT. Bina Barokah Sejahtera. Semua hak dilindungi.</div></footer>}

export function BookingBar() {
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    const footer = document.getElementById('kontak')
    if (!footer) return
    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), { threshold: 0.15 })
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])
  return <><div className={`fixed bottom-0 left-0 right-0 z-30 flex items-center justify-between border-t border-[#dfe4e8] bg-white p-3 shadow-lg transition-transform duration-300 md:hidden ${hidden ? 'translate-y-full' : ''}`}><div><p className="text-[11px] text-[#657080]">Mulai dari</p><strong className="text-[#1b4f9c]">Rp 425.000</strong></div><a href="https://wa.me/6285930005544" className="rounded-md bg-[#f5b915] px-4 py-2.5 text-sm font-bold">Pesan via WhatsApp</a></div><div className={`fixed right-8 bottom-8 z-20 hidden transition-opacity duration-300 md:block ${hidden ? 'pointer-events-none opacity-0' : 'opacity-100'}`}><a href="https://wa.me/6285930005544" className="flex items-center gap-2 rounded-md bg-[#f5b915] px-5 py-3 font-bold shadow-lg"><Phone size={17}/> Konsultasi Sekarang</a></div></>
}

export { Check, ChevronDown, Clock3, MapPin, Star, Users, ArrowRight }
