'use client';
import React from 'react';
import { motion } from 'motion/react';
import { LinkPreview } from '@/components/ui/link-preview';

export function LinkPreviewDemo() {
  return (
    <div className='flex justify-center items-center h-[40rem] flex-col px-4'>
      <p className='text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10'>
        Yuk, coba kemudahan bikin antarmuka pengguna dengan
        <LinkPreview url='https://ui.aceternity.com/' className='font-bold'>
          Aceternity UI!
        </LinkPreview>{' '}
        <LinkPreview url='https://chakra-ui.com/' className='font-bold'>
          Chakra UI
        </LinkPreview>{' '}
        punya komponen-komponen React yang gampang diakses dan bisa kamu
        sesuaikan. Dengan
        <LinkPreview url='https://getjustd.com/' className='font-bold'>
          Getjustd
        </LinkPreview>{' '}
        proses pengembangan jadi lebih cepat dan praktis. Di{' '}
        <LinkPreview url='https://www.reactbits.dev/' className='font-bold'>
          Reactbits
        </LinkPreview>{' '}
        kamu bisa nemuin cuplikan kode dan sumber daya React yang super berguna.
        <LinkPreview url='https://www.frostin.dev/' className='font-bold'>
          Frostin Dev
        </LinkPreview>{' '}
        juga siap bantu dengan solusi pengembangan yang modern dan efisien.
        <LinkPreview url='https://ui.shadcn.com/' className='font-bold'>
          Shadcn UI
        </LinkPreview>{' '}
        Dan juga
        <LinkPreview url='https://magicui.design/' className='font-bold'>
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
