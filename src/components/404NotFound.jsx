import React from 'react'

export default function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Page Not Found</p>
        <a href="/" style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}>Go Back Home</a>
        
    </div>
  )
}

