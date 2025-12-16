import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS, GALLERY_ITEMS, BLOG_POSTS } from '../constants';
import BlogPost from '../components/BlogPost';

interface StoriesProps {
  lang: Language;
}

const Stories: React.FC<StoriesProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [filter, setFilter] = useState<'all' | 'photo' | 'video' | 'blog'>('all');

  const filteredGallery = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.type === filter);

  const showBlogs = filter === 'all' || filter === 'blog';
  const showGallery = filter !== 'blog';

  return (
    <div className="min-h-screen bg-[#FFF8E1] dark:bg-slate-950 pt-24 pb-16 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 font-bengali-support">{t.stories_title}</h1>
          
          <div className="flex justify-center gap-2 mt-8 flex-wrap">
            {[
              { id: 'all', label: t.filter_all },
              { id: 'photo', label: t.filter_photos },
              { id: 'video', label: t.filter_videos },
              { id: 'blog', label: t.filter_blogs }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as any)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  filter === f.id 
                    ? 'bg-[#D32F2F] text-white shadow-lg shadow-red-200 dark:shadow-red-900/50' 
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-slate-700 border border-orange-100 dark:border-slate-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          {showGallery && filteredGallery.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
              {filteredGallery.map((item, idx) => (
                <div 
                  key={item.id} 
                  className="group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-orange-100 dark:border-slate-800 animate-on-scroll"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={item.src} 
                      alt={item.caption} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                     <p className="text-slate-800 dark:text-slate-200 font-medium">{lang === 'bn' ? item.captionBn : item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {showBlogs && (
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${!showGallery ? 'mt-0' : ''}`}>
              {BLOG_POSTS.map((post, idx) => (
                <div key={post.id} className="animate-on-scroll" style={{ transitionDelay: `${idx * 100}ms` }}>
                  <BlogPost post={post} lang={lang} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stories;