'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function IntroBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-rose-200">
      <div
        className={`transition-all duration-1000 ease-out transform ${
          show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <Image
          src="/images/bismillah.jpg" // Update path if different
          alt="Bismillah"
          width={600}
          height={300}
          className="mx-auto drop-shadow-md"
          priority
        />
      </div>
    </div>
  );
}
