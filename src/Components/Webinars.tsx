import Link from 'next/link'
import React from 'react'
import { Button } from "./ui/moving-border";
import { HoverEffect } from "@/Components/ui/card-hover-effect"; 
import { title } from 'process';
const Webinars = () => {
  const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];
  return (
    <div className='py-12 bg-gray-900 '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>

            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'> Webinars</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance your musical journey</p>
            </div>
            <div className='text-center mt-10'>
              <HoverEffect  items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}/>
              </div>
            <div className='text-center mt-10 '>
            <Link href='/course'>
            <Button
              borderRadius='1.75rem'
              className='bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800'
            >
              View all Webinars
            </Button>
          </Link>
            </div>
        </div>
        </div>
  )
}

export default Webinars