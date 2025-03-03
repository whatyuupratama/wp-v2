'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import './InfiniteScroll.css';
import Image from 'next/image';

interface SocialMediaItem {
  Profile: string;
  Pengikut: number;
  Mengikuti?: number; // Optional property
  Suka?: string; // Optional property
  Repository?: number; // Optional property
  Link: string;
  Username?: string;
}

interface InfinitySosmed {
  Tiktok: SocialMediaItem[];
  Linkedin: SocialMediaItem[];
  Medium: SocialMediaItem[];
  Github: SocialMediaItem[];
  Instagram: SocialMediaItem[];
}

const infinitysosmed: InfinitySosmed = {
  Tiktok: [
    {
      Profile:
        'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9685129468f53b75801dd179916031cc~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&nonce=48433&refresh_token=88e8b61dfa96cc974aa79f1bb731eb35&x-expires=1741158000&x-signature=FWNGUIWVDxPtyIuEU%2Fp1Kq583nA%3D&idc=sg1&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474',
      Pengikut: 1452,
      Mengikuti: 0,
      Username: 'cafetiramisy u🔖',

      Suka: '298.9K',
      Link: 'https://www.tiktok.com/@vitamindc_',
    },
    {
      Profile:
        'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/697fb49551cb6a197ba191ed4903881b~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&nonce=57575&refresh_token=0cec60d7b30c241fcf7d2a231aca01e1&x-expires=1741158000&x-signature=lSOXgHhQR2PYck9YnvzRx8Tq7KQ%3D&idc=sg1&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474',
      Pengikut: 687,
      Mengikuti: 6,
      Username: 'archivesc.w2',
      Suka: '124.2K',
      Link: 'https://www.tiktok.com/@archivesc.w2',
    },
  ],
  Linkedin: [
    {
      Profile:
        'https://media.licdn.com/dms/image/v2/D5603AQHX47A8cgf__A/profile-displayphoto-shrink_400_400/B56ZSm2HleHwAg-/0/1737965993781?e=1746662400&v=beta&t=HTJUFEd6tQvhP9LCqYU7iCaQWVLJhcy3kHOXNXGaAF0',
      Pengikut: 1.625,
      Mengikuti: 48,
      Username: 'Wahyu Pratama',

      Link: 'https://www.linkedin.com/in/wahyupratamaa/',
    },
  ],
  Medium: [
    {
      Profile:
        'https://media.licdn.com/dms/image/v2/D5603AQHX47A8cgf__A/profile-displayphoto-shrink_400_400/B56ZSm2HleHwAg-/0/1737965993781?e=1746662400&v=beta&t=HTJUFEd6tQvhP9LCqYU7iCaQWVLJhcy3kHOXNXGaAF0',
      Pengikut: 3,
      Username: 'Wahyu Pratama',

      Link: 'https://medium.com/@wahyupratama_',
    },
  ],
  Github: [
    {
      Profile: 'https://avatars.githubusercontent.com/u/111998022?v=4',
      Pengikut: 5,
      Mengikuti: 7,
      Repository: 45,
      Username: 'whatyuupratama',
      Link: 'https://github.com/whatyuupratama',
    },
  ],
  Instagram: [
    {
      Profile:
        'https://instagram.fsub8-2.fna.fbcdn.net/v/t51.2885-19/481830789_1200112991444395_3563037592228029706_n.jpg?_nc_ht=instagram.fsub8-2.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2AFtM9VPM02bK7dIyqJTqNmCGAvcMSGKnNgbcKG24Ow0Puq0Qse6oGyKQnV9bETV3Da8cztSIzoWwCR1InTt1Dxv&_nc_ohc=sqRDa7Va8h8Q7kNvgFHWH4d&_nc_gid=04d056eaca8b40dfb783e389a475610e&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYCVQfx2_aeZmUbJXHRr3uAC5qz8X2MyA7WmCAa_BQLZ0A&oe=67CB1DAA&_nc_sid=7a9f4b',
      Pengikut: 2.643,
      Mengikuti: 634,
      Username: 'archivesc.w2',
      Link: 'https://www.instagram.com/archivesc.w2/',
    },
  ],
};

gsap.registerPlugin(Observer);

const InfiniteScroll: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getTiltTransform = (): string => {
    return 'rotateX(20deg) rotateZ(-20deg) skewX(20deg)';
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items: (SocialMediaItem & { type: keyof InfinitySosmed })[] =
      Object.entries(infinitysosmed).flatMap(([key, value]) =>
        (value as SocialMediaItem[]).map((item) => ({
          ...item,
          type: key as keyof InfinitySosmed,
        }))
      );

    if (items.length === 0) return;

    const divItems = gsap.utils.toArray<HTMLDivElement>(container.children);
    if (!divItems.length) return;

    const firstItem = divItems[0];
    const itemStyle = getComputedStyle(firstItem);
    const itemHeight = firstItem.offsetHeight;
    const itemMarginTop = parseFloat(itemStyle.marginTop) || 0;
    const totalItemHeight = itemHeight + itemMarginTop;
    const totalHeight =
      itemHeight * items.length + itemMarginTop * (items.length - 1);

    const wrapFn = gsap.utils.wrap(-totalHeight, totalHeight);

    divItems.forEach((child, i) => {
      const y = i * totalItemHeight;
      gsap.set(child, { y });
    });

    const observer = Observer.create({
      target: container,
      type: 'wheel,touch,pointer',
      preventDefault: true,
      onPress: ({ target }) => {
        if (target instanceof HTMLElement) {
          target.style.cursor = 'grabbing';
        }
      },
      onRelease: ({ target }) => {
        if (target instanceof HTMLElement) {
          target.style.cursor = 'grab';
        }
      },
      onChange: ({ deltaY, isDragging, event }) => {
        const d = event.type === 'wheel' ? -deltaY : deltaY;
        const distance = isDragging ? d * 5 : d * 10;
        divItems.forEach((child) => {
          gsap.to(child, {
            duration: 0.5,
            ease: 'expo.out',
            y: `+=${distance}`,
            modifiers: {
              y: gsap.utils.unitize(wrapFn),
            },
          });
        });
      },
    });

    let rafId: number;
    const autoplay = true;
    const autoplayDirection = 'down'; // Change to "up" for upward movement
    const autoplaySpeed = 1; // Adjust speed as needed

    if (autoplay) {
      const directionFactor = autoplayDirection === 'down' ? 1 : -1;
      const speedPerFrame = autoplaySpeed * directionFactor;

      const tick = () => {
        divItems.forEach((child) => {
          gsap.set(child, {
            y: `+=${speedPerFrame}`,
            modifiers: {
              y: gsap.utils.unitize(wrapFn),
            },
          });
        });
        rafId = requestAnimationFrame(tick);
      };

      tick();
    }

    return () => {
      observer.kill();
      cancelAnimationFrame(rafId);
    };
  }, []);

  const getPath = (type: keyof InfinitySosmed): string => {
    switch (type) {
      case 'Tiktok':
        return '/images/tiktok.png';
      case 'Linkedin':
        return '/images/linkedin.png';
      case 'Medium':
        return '/images/medium.png';
      case 'Github':
        return '/images/github.png';
      case 'Instagram':
        return '/images/instagram.png';
      default:
        return '/images/default_icon.png';
    }
  };

  const items: (SocialMediaItem & { type: keyof InfinitySosmed })[] =
    Object.entries(infinitysosmed).flatMap(([key, value]) =>
      (value as SocialMediaItem[]).map((item) => ({
        ...item,
        type: key as keyof InfinitySosmed,
      }))
    );

  return (
    <>
      <style jsx>
        {`
          .infinite-scroll-wrapper {
            max-height: 100%;
          }

          .infinite-scroll-container {
            width: 30rem;
            cursor: grab;
          }

          .infinite-scroll-item {
            height: 150px;
            margin-top: -0.5em;
          }

          .cursor-pointer {
            cursor: pointer;
          }

          .card-link {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: inherit;
          }
        `}
      </style>
      <div className='infinite-scroll-wrapper' ref={wrapperRef}>
        <div
          className='infinite-scroll-container'
          ref={containerRef}
          style={{
            transform: getTiltTransform(),
          }}
        >
          {items.map((item, i) => (
            <div
              className='infinite-scroll-item flex flex-col items-center justify-center gap-2 cursor-pointer'
              key={i}
            >
              <a
                href={item.Link}
                target='_blank'
                rel='noopener noreferrer'
                className='card-link'
              >
                <div className='flex items-center gap-2'>
                  <Image
                    src={item.Profile}
                    alt={'image'}
                    width={30}
                    height={30}
                    className='rounded-full'
                  />
                  <span className='text-sm'>{item.Username}</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <Image
                    src={getPath(item.type)}
                    alt={`${item.type}`}
                    width={10}
                    height={10}
                    className='text-xs'
                  />
                  <span className='text-[10px]'>{item.type}</span>
                </div>
                <div className='flex gap-2 text-xs'>
                  {' '}
                  <div>{item.Pengikut} Pengikut</div>
                  {'Mengikuti' in item && <div>{item.Mengikuti} Mengikuti</div>}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfiniteScroll;
