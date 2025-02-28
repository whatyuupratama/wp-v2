/* eslint-disable @next/next/no-img-element */
import { BlurFade } from '@/components/magicui/blur-fade';

const images = Array.from(
  { length: 6 },
  (_, i) => `/images/image${i + 1}.jpeg`
);

export function BlurFadeDemo() {
  return (
    <section id='photos'>
      <div className='columns-2 gap-4 sm:columns-3'>
        {images.map((imageUrl, idx) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
            <img
              className='mb-4 size-full rounded-lg object-contain'
              src={imageUrl}
              alt={`Local image ${idx + 1}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
