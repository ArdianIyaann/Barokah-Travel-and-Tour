'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, ChevronDown, Clock3, MapPin, Menu, Phone, Star, Users, X } from 'lucide-react'
import { useState } from 'react'

export function Logo({ light=false }: { light?: boolean }) {
  return <Link href="/" className="flex items-center" aria-label="Barokah Tour and Travel">
    <img src="/logo.png" alt="Barokah Tour and Travel" width={467} height={160} className="h-10 w-auto object-contain" />
  </Link>
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="absolute top-0 z-40 w-full bg-transparent text-white"><div className="container-wide flex h-[76px] items-center justify-between"><Logo light /><nav className="desktop-nav flex items-center gap-7 text-sm font-semibold"><Link href="#beranda">Beranda</Link><Link href="#paket">Paket Wisata</Link><Link href="/panduan" onClick={()=>setOpen(false)}>Panduan Peserta</Link><Link href="/#tentang" onClick={()=>setOpen(false)}>Tentang Kami</Link><Link href="#kontak">Kontak</Link></nav><a href="https://wa.me/6285930005544" className="hidden items-center gap-2 rounded-md bg-[#f5b915] px-4 py-2.5 text-sm font-bold text-[#1d2733] sm:flex"><Phone size={15}/> Hubungi Kami</a><button className="sm:hidden" onClick={()=>setOpen(!open)} aria-label="Buka menu">{open?<X/>:<Menu/>}</button></div>{open&&<nav className="container-wide flex flex-col gap-4 bg-[#1b4f9c] px-4 pb-5 text-sm font-semibold sm:hidden"><Link href="#beranda" onClick={()=>setOpen(false)}>Beranda</Link><Link href="#paket" onClick={()=>setOpen(false)}>Paket Wisata</Link><Link href="/panduan" onClick={()=>setOpen(false)}>Panduan Peserta</Link><Link href="/#tentang" onClick={()=>setOpen(false)}>Tentang Kami</Link><Link href="#kontak" onClick={()=>setOpen(false)}>Kontak</Link></nav>}</header>
}

export function BackLink({ href='/', label='Kembali' }: { href?: string; label?: string }) {
  return <Link href={href} className="inline-flex items-center gap-2 rounded-md border border-[#dfe4e8] bg-white px-3 py-2 text-sm font-bold text-[#1b4f9c] shadow-sm hover:bg-[#f4f7fa]"><ArrowLeft size={16} /> {label}</Link>
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

export function TrustStrip() {
  return (
    <section className="trust-strip border-y border-[#dfe4e8] bg-white py-7" aria-label="Mitra dan izin resmi">
      <div className="trust-marquee">
        <div className="trust-marquee-track">
          {Array.from({ length: TRUST_COPIES }, (_, i) => (
            <div className="trust-marquee-group" key={i} aria-hidden={i !== 0}>
              <TrustItems />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer(){return <footer id="kontak" className="bg-[#163d78] py-12 text-white"><div className="container-wide grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]"><div><Logo light/><p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">Mitra perjalanan terpercaya dari Sukabumi untuk menjelajah Indonesia bersama keluarga, sekolah, dan perusahaan.</p></div><div><h3 className="mb-4 font-sans text-sm font-bold uppercase tracking-wider">Tautan Cepat</h3><div className="flex flex-col gap-3 text-sm text-white/70"><Link href="/#paket">Paket Wisata</Link><Link href="/panduan">Panduan Peserta</Link><Link href="/#tentang">Tentang Kami</Link></div></div><div><h3 className="mb-4 font-sans text-sm font-bold uppercase tracking-wider">Hubungi Kami</h3><div className="space-y-2 text-sm text-white/70"><p>Graha Barokah, Jl. Cisaat Sukamanah, Kab. Sukabumi 43152</p><p>0859-3000-5544 / 0857-3122-2878</p><p>admbarokahtour@gmail.com</p></div></div></div><div className="container-wide mt-10 border-t border-white/15 pt-5 text-xs text-white/50">© {new Date().getFullYear()} PT. Bina Barokah Sejahtera. Semua hak dilindungi.</div></footer>}

export function BookingBar(){return <><div className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-between border-t border-[#dfe4e8] bg-white p-3 shadow-lg md:hidden"><div><p className="text-[11px] text-[#657080]">Mulai dari</p><strong className="text-[#1b4f9c]">Rp 425.000</strong></div><a href="https://wa.me/6285930005544" className="rounded-md bg-[#f5b915] px-4 py-2.5 text-sm font-bold">Pesan via WhatsApp</a></div><div className="fixed right-8 bottom-8 z-20 hidden md:block"><a href="https://wa.me/6285930005544" className="flex items-center gap-2 rounded-md bg-[#f5b915] px-5 py-3 font-bold shadow-lg"><Phone size={17}/> Konsultasi Sekarang</a></div></>}

export { Check, ChevronDown, Clock3, MapPin, Star, Users, ArrowRight }
