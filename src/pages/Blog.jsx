import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import { BLOGS } from '../data/blogs'

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | Cloud Nine Dental – Ernakulam, Kochi</title>
        <meta
          name="description"
          content="Dental tips, clinic news, and expert insights from the team at Cloud Nine Dental, Padivattom, Ernakulam."
        />
      </Helmet>

      {/* Page banner */}
      <div className="page-banner">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <span className="section-label text-brand-yellow">Our Blog</span>
          <h1 className="text-white font-display text-[clamp(28px,3.5vw,46px)] font-bold leading-tight mt-2">
            Insights from Cloud Nine Dental
          </h1>
          <p className="text-green-200/70 text-[15px] mt-3 max-w-xl mx-auto">
            Dental tips, clinic news, and the latest in dental technology — straight from our team.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">

          {/* Featured post */}
          {BLOGS.length > 0 && (
            <div className="mb-16">
              <span className="section-label">Latest Post</span>
              <FeaturedCard post={BLOGS[0]} />
            </div>
          )}

          {/* Remaining posts grid */}
          {BLOGS.length > 1 && (
            <>
              <h2 className="section-title mb-8">More Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {BLOGS.slice(1).map(post => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          )}

          {/* Empty state for future posts */}
          {BLOGS.length === 1 && (
            <div className="mt-4 border-t border-gray-100 pt-12 text-center">
              <p className="text-body text-sm">More articles coming soon.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

function FeaturedCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#F4F8EC] rounded-3xl overflow-hidden border border-[#D6E2C4] hover:shadow-xl transition-shadow duration-300">
        {/* Image */}
        <div className="h-[260px] lg:h-auto overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.coverAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        {/* Content */}
        <div className="p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-bold font-urbanist uppercase tracking-[0.12em] px-3 py-1 rounded-full"
              style={{ background: `${post.categoryColor}20`, color: post.categoryColor }}
            >
              <Tag size={10} /> {post.category}
            </span>
            <span className="text-body text-[12px] flex items-center gap-1">
              <Clock size={11} /> {post.readTime}
            </span>
          </div>
          <h2 className="font-display text-[clamp(20px,2.2vw,28px)] font-bold text-navy-mid leading-snug mb-4 group-hover:text-brand-blue transition-colors">
            {post.title}
          </h2>
          <p className="text-body text-[14px] leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-urbanist font-semibold text-navy text-[13px]">{post.author}</div>
              <div className="text-body text-[12px]">{post.date}</div>
            </div>
            <span className="flex items-center gap-1.5 font-urbanist font-bold text-brand-blue text-[13px] group-hover:gap-2.5 transition-all">
              Read Article <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

function PostCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 card-hover">
      <div className="h-[200px] overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.coverAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-[11px] font-bold font-urbanist uppercase tracking-[0.12em] px-2.5 py-0.5 rounded-full"
            style={{ background: `${post.categoryColor}20`, color: post.categoryColor }}
          >
            {post.category}
          </span>
          <span className="text-body text-[11px]">{post.readTime}</span>
        </div>
        <h3 className="font-display font-bold text-navy-mid text-[16px] leading-snug mb-2 group-hover:text-brand-blue transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-body text-[13px] leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between text-[12px]">
          <span className="text-body">{post.date}</span>
          <span className="font-urbanist font-bold text-brand-blue flex items-center gap-1 group-hover:gap-2 transition-all">
            Read <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  )
}
