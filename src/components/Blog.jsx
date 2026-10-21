import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, Tag, ArrowRight, X, Sparkles, Search, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Blog() {
  const { blogs } = portfolioData;
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'AI & Agents', 'APIs & Transit', 'FinTech & Web', 'IoT & Hardware'];

  const filteredBlogs = (blogs || []).filter((post) => {
    const matchesCat = activeCategory === 'All' || post.category === activeCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(query) ||
      post.summary.toLowerCase().includes(query) ||
      post.tags.some((t) => t.toLowerCase().includes(query));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="blog" className="py-16 md:py-24 relative z-10">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-950/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen size={13} className="text-cyan-400" />
            Writing &amp; Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white block">
            ENGINEERING BLOG
          </h2>
          <div className="w-16 h-1 mx-auto mt-3 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Deep-dives into AI agent orchestration, MCP protocols, high-frequency transit telemetry, and full-stack system architecture.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.25)]'
                    : 'bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-cyan-400 focus:outline-none text-xs text-slate-200 placeholder:text-slate-500 transition-colors"
            />
          </div>

        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredBlogs.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedBlog(post)}
              className="group cursor-pointer flex flex-col rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900/90 to-[#081528]/95 border border-cyan-400/15 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(8,145,178,0.25)]"
            >
              {/* Cover Image Banner */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover filter saturate-[0.85] contrast-[1.05] group-hover:scale-105 group-hover:saturate-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 backdrop-blur-md">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                
                {/* Metadata */}
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-cyan-400" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} className="text-cyan-400" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug mb-3">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                  {post.summary}
                </p>

                {/* Tags and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-800/80 text-slate-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
                    Read Article
                    <ArrowRight size={14} />
                  </span>
                </div>

              </div>
            </article>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <BookOpen size={36} className="mx-auto text-slate-600 mb-3" />
            <p className="text-slate-400 text-sm">No articles matched your search query.</p>
          </div>
        )}

      </div>

      {/* Full-screen Reader Modal */}
      {selectedBlog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedBlog(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-3xl bg-[#091526] border border-cyan-400/30 p-6 sm:p-10 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-cyan-500 hover:text-slate-950 transition-all"
              aria-label="Close article modal"
            >
              <X size={20} />
            </button>

            {/* Header info */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-cyan-950 border border-cyan-400/40 text-cyan-300 mb-3">
                {selectedBlog.category}
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4">
                {selectedBlog.title}
              </h2>

              <div className="flex items-center gap-4 text-xs text-slate-400 pb-4 border-b border-slate-800">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-cyan-400" />
                  {selectedBlog.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-cyan-400" />
                  {selectedBlog.readTime}
                </span>
                <span>By <strong>Saksham Talwar</strong></span>
              </div>
            </div>

            {/* Content Display */}
            <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 prose prose-invert max-w-none">
              {selectedBlog.content.split('\n\n').map((block, idx) => {
                if (block.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="text-xl font-bold text-white pt-4 pb-1 border-b border-cyan-400/20 text-cyan-300">
                      {block.replace('### ', '')}
                    </h3>
                  );
                }
                if (block.startsWith('```')) {
                  const cleaned = block.replace(/```[a-z]*/, '').replace(/```$/, '').trim();
                  return (
                    <pre key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 overflow-x-auto text-xs font-mono text-cyan-200">
                      <code>{cleaned}</code>
                    </pre>
                  );
                }
                if (block.startsWith('- ')) {
                  const items = block.split('\n').map((line) => line.replace(/^- /, ''));
                  return (
                    <ul key={idx} className="space-y-2 pl-2">
                      {items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-slate-300">
                          <CheckCircle size={16} className="text-cyan-400 shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={idx} className="text-slate-300 leading-relaxed">
                    {block}
                  </p>
                );
              })}
            </div>

            {/* Article Footer */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {selectedBlog.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-cyan-300 border border-cyan-400/20">
                    #{tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedBlog(null)}
                className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
