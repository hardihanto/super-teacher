'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function Home() {
  const router = useRouter()
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === 'authenticated') {
      if (session?.user?.role === 'admin') {
        router.push('/admin')
      } else {
        router.push('/teacher')
      }
    }
  }, [status, session, router])

  if (status === 'loading') {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a' }}>
        <div style={{ textAlign: 'center' }}>
          <div className="spinner" style={{ margin: '0 auto 16px' }}></div>
          <p style={{ color: 'white' }}>Memuat...</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(-45deg, #0f172a, #1e293b, #0f172a, #1e3a8a)', backgroundSize: '400% 400%', animation: 'gradient 15s ease infinite' }}>
      {/* Navigation */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>S</span>
            </div>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>Super Teacher</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link href="/login" style={{ color: '#d1d5db', padding: '8px 16px' }}>Masuk</Link>
            <Link href="/register" className="btn-primary">Daftar Gratis</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{ paddingTop: '128px', paddingBottom: '80px', padding: '128px 24px 80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center', maxWidth: '896px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(59, 130, 246, 0.2)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '9999px', padding: '8px 16px', marginBottom: '24px' }}>
            <span style={{ width: '8px', height: '8px', background: '#34d399', borderRadius: '50%', animation: 'pulse 2s infinite' }}></span>
            <span style={{ color: '#60a5fa', fontSize: '14px', fontWeight: '500' }}>Platform Manajemen Kelas Terdepan</span>
          </div>
          
          <h1 style={{ fontSize: '72px', fontWeight: 'bold', color: 'white', marginBottom: '24px', lineHeight: '1.1' }}>
            Super-Teacher<br />
            <span style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)', Webkit
