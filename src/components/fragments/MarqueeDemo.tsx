import { cn } from '@/lib/utils';
import { Marquee } from '@/components/magicui/marquee';
import Image from 'next/image';

const reviews = [
  {
    name: 'Bagus Wahyu Setiawan',
    username: '@punky',
    body: 'Gokil yuuu websitemu! Desainnya emang juara banget dah!',
    img: 'https://avatar.vercel.sh/wahyu',
  },
  {
    name: 'Rizky Anggara',
    username: '@rizky_anggara',
    body: 'Wih, keren abis! Desainnya clean banget, suka deh sama gaya modernnya!',
    img: 'https://avatar.vercel.sh/rizky',
  },
  {
    name: 'Tari Fitriani',
    username: '@tari_fitri',
    body: 'Aduh, desain websitenya estetik banget! Bikin betah scroll terus nih.',
    img: 'https://avatar.vercel.sh/tari',
  },
  {
    name: 'Doni Wijaya',
    username: '@doniwijaya',
    body: 'Gila sih desainnya! Setiap halaman ada aja yang bikin terpukau.',
    img: 'https://avatar.vercel.sh/doni',
  },
  {
    name: 'Siti Marliah',
    username: '@sitimarliah',
    body: 'Website ini beneran user-friendly banget, plus keren abis! Mantap!',
    img: 'https://avatar.vercel.sh/siti',
  },
  {
    name: 'Budi Santoso',
    username: '@budisantoso',
    body: 'Ini website bikin aku kagum! Desainnya menarik perhatian banget, sumpah!',
    img: 'https://avatar.vercel.sh/budi',
  },
  {
    name: 'Zyphorix Aleron',
    username: '@zyphorix_aleron',
    body: 'Website mu mengesankan banget! Top markotop dah desainnya.',
    img: 'https://avatar.vercel.sh/zyphorix',
  },
  {
    name: 'Vylorn Satria',
    username: '@vylorn_satria',
    body: 'Simpel tapi elegan banget! Keren parah sih ini!',
    img: 'https://avatar.vercel.sh/vylorn',
  },
  {
    name: 'Xantheos Viranda',
    username: '@xantheos_viranda',
    body: 'Desainnya clean dan fresh banget! Seger liatnya.',
    img: 'https://avatar.vercel.sh/xantheos',
  },
  {
    name: 'Fyloxis Prabowo',
    username: '@fyloxis_prabowo',
    body: 'Gokil! Website ini profesional banget, dan yang pasti menarik!',
    img: 'https://avatar.vercel.sh/fyloxis',
  },
  {
    name: 'Orlinar Budiarta',
    username: '@orlinar_budiarta',
    body: 'Desainnya bener-bener menawan! Suka banget deh sama detail-detailnya.',
    img: 'https://avatar.vercel.sh/orlinar',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  // Ambil inisial nama
  const initials = name ? name.charAt(0).toUpperCase() : '?'; // Ambil huruf pertama, jadikan uppercase, atau gunakan "?" jika nama kosong

  return (
    <figure
      className={cn(
        'relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className='flex flex-row items-center gap-2'>
        {/* Menggunakan inisial sebagai pengganti gambar */}
        <div className='relative flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700'>
          <span className='text-sm font-semibold text-gray-800 dark:text-gray-200'>
            {initials}
          </span>
        </div>
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white'>
            {name}
          </figcaption>
          <p className='text-xs font-medium dark:text-white/40'>{username}</p>
        </div>
      </div>
      <blockquote className='mt-2 text-sm text-zinc-400'>{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className='relative flex w-full flex-col items-center justify-center overflow-hidden'>
      <Marquee pauseOnHover className='[--duration:20s]'>
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className='[--duration:20s]'>
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background'></div>
    </div>
  );
}
