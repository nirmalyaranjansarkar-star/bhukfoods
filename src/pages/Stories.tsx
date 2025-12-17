import React, { useState } from 'react';
import { Language, BlogPost as BlogPostType } from '../types';
import { TRANSLATIONS, GALLERY_ITEMS, BLOG_POSTS } from '../constants';
import BlogPost from '../components/BlogPost';

interface StoriesProps {
  lang: Language;
}

const Stories: React.FC<StoriesProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [filter, setFilter] = useState<'all' | 'photo' | 'video' | 'blog'>('all');
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);

  const filteredGallery = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.type === filter);

  const showBlogs = filter === 'all' || filter === 'blog';
  const showGallery = filter !== 'blog';

  const handleReadMore = (post: BlogPostType) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

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
                  <BlogPost post={post} lang={lang} onReadMore={handleReadMore} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Blog Reading Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>
          
          <div className="bg-white dark:bg-slate-900 w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl overflow-y-auto relative z-10 border border-slate-200 dark:border-slate-800 animate-on-scroll is-visible">
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors z-20 text-slate-800 dark:text-white"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Hero Image */}
            <div className="h-64 md:h-80 w-full relative">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="bg-[#D32F2F] text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-3 inline-block">
                  Blog
                </span>
                <h2 className="text-2xl md:text-4xl font-bold leading-tight font-bengali-support">
                  {lang === 'bn' ? selectedPost.titleBn : selectedPost.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-10">
              <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  {selectedPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {selectedPost.readTime} read
                </span>
                <span className="ml-auto italic">By Bhuk Foods Kitchen Team</span>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line font-bengali-support">
                {lang === 'bn' ? selectedPost.contentBn : selectedPost.content}
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white mb-4">Share this story</h4>
                <div className="flex gap-2">
                  <button className="bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity flex items-center gap-2">
                    WhatsApp
                  </button>
                  <button className="bg-[#1877F2] text-white px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity flex items-center gap-2">
                    Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stories;