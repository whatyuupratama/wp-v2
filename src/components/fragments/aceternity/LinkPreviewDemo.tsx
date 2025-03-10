'use client';
import React from 'react';
import { motion } from 'motion/react';
import { LinkPreview } from '@/components/ui/link-preview';

export function LinkPreviewDemo() {
  return (
    <div className='flex justify-center items-center h-[40rem] flex-col px-4'>
      <p className='text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10'>
        Yuk, coba kemudahan bikin antarmuka pengguna dengan
        <LinkPreview
          url='https://ui.aceternity.com/'
          className='font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500'
        >
          Aceternity UI!
        </LinkPreview>{' '}
        <LinkPreview
          url='https://chakra-ui.com/'
          className='font-bold text-blue-500' // Warna Solid Biru
        >
          Chakra UI
        </LinkPreview>{' '}
        punya komponen-komponen React yang gampang diakses dan bisa kamu
        sesuaikan. Dengan
        <LinkPreview
          url='https://getjustd.com/'
          className='font-bold bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-lime-500' // Gradien Hijau ke Lime
        >
          Getjustd
        </LinkPreview>{' '}
        proses pengembangan jadi lebih cepat dan praktis. Di{' '}
        <LinkPreview
          url='https://www.reactbits.dev/'
          className='font-bold text-orange-500' // Warna Solid Oranye
        >
          Reactbits
        </LinkPreview>{' '}
        kamu bisa nemuin cuplikan kode dan sumber daya React yang super berguna.
        <LinkPreview
          url='https://www.frostin.dev/'
          className='font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-yellow-500' // Gradien Merah ke Kuning
        >
          Frostin Dev
        </LinkPreview>{' '}
        juga siap bantu dengan solusi pengembangan yang modern dan efisien.
        <LinkPreview
          url='https://ui.shadcn.com/'
          className='font-bold text-purple-500' // Warna Solid Ungu
        >
          Shadcn UI
        </LinkPreview>{' '}
        Dan juga
        <LinkPreview
          url='https://magicui.design/'
          className='font-bold bg-clip-text text-transparent bg-gradient-to-br from-pink-400 to-rose-500' // Gradien Pink ke Rose
        >
          Magic UI
        </LinkPreview>{' '}
      </p>
      <p className='text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto'>
        Visit{' '}
        <LinkPreview
          url='https://ui.aceternity.com'
          className='font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500'
        >
          Aceternity UI
        </LinkPreview>{' '}
        for amazing Tailwind and Framer Motion components.
      </p>
    </div>
  );
}
