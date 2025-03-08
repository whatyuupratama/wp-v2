'use client';
import React from 'react';
import { HeroParallax } from '@/components/ui/hero-parallax';

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: 'Shadcn UI',
    link: 'https://ui.shadcn.com/',
    thumbnail: '/acerternity/shadcn.png',
  },
  {
    title: 'Magic UI',
    link: 'https://magicui.design/',
    thumbnail: '/acerternity/magicui.png',
  },
  {
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/rogue.png',
  },

  {
    title: 'Editorially',
    link: 'https://editorially.org',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/editorially.png',
  },
  {
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/editrix.png',
  },
  {
    title: 'Reactbits',
    link: 'https://www.reactbits.dev/',
    thumbnail: '/acerternity/reactbits.png',
  },

  {
    title: 'Frostin Dev',
    link: 'https://www.frostin.dev/',
    thumbnail: '/acerternity/frostin.png',
  },
  {
    title: 'Hover Dev',
    link: 'https://www.hover.dev/',
    thumbnail: '/acerternity/hoverdev.png',
  },
  {
    title: 'SmartBridge',
    link: 'https://smartbridgetech.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/smartbridge.png',
  },
  {
    title: 'Renderwork Studio',
    link: 'https://renderwork.studio',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/renderwork.png',
  },

  {
    title: 'Getjustd',
    link: 'https://getjustd.com/',
    thumbnail: '/acerternity/getjustd.png',
  },
  {
    title: 'Aceternity UI',
    link: 'https://ui.aceternity.com',
    thumbnail: '/acerternity/aceternity.png',
  },
  {
    title: 'Chakra UI',
    link: 'https://chakra-ui.com/',
    thumbnail: '/acerternity/chakraui.png',
  },
  // {
  //   title: 'Invoker Labs',
  //   link: 'https://invoker.lol',
  //   thumbnail:
  //     'https://aceternity.com/images/products/thumbnails/new/invoker.png',
  // },
  // {
  //   title: 'E Free Invoice',
  //   link: 'https://efreeinvoice.com',
  //   thumbnail:
  //     'https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png',
  // },
];
