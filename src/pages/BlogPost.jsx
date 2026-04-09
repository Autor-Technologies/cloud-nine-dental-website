import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, Clock, Tag, ArrowRight, Calendar, Sparkles } from 'lucide-react'
import { getBlogBySlug, BLOGS } from '../data/blogs'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getBlogBySlug(slug)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <>
      <Helmet>
        <title>{post.title} | Cloud Nine Dental Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage} />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Hero banner */}
      <div className="relative mt-[80px] h-[380px] sm:h-[480px] overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.coverAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/60 to-navy/20" />

        {/* Jess headshot — top right */}
        {post.jessImage && (
          <div className="absolute top-6 right-4 sm:right-8 flex flex-col items-center gap-2">
            <div className="relative">
              <img
                src={post.jessImage}
                alt="Jess — AI Dental Receptionist at Cloud Nine Dental"
                className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover object-top"
                style={{ border: '3px solid #C8A020', boxShadow: '0 0 0 4px rgba(200,160,32,0.25)' }}
              />
              <span className="absolute bottom-0.5 right-0.5 w-4 h-4 sm:w-5 sm:h-5 bg-green-400 border-2 border-white rounded-full" />
            </div>
            <span className="font-urbanist font-bold text-white text-[11px] sm:text-[13px] tracking-wide drop-shadow">Jess</span>
          </div>
        )}

        <div className="absolute inset-0 flex flex-col justify-end max-w-[860px] mx-auto px-4 sm:px-6 pb-10">
          {/* Kerala's First badge */}
          {post.jessImage && (
            <div className="inline-flex items-center gap-2 bg-brand-yellow rounded-full px-4 py-1.5 mb-4 w-fit shadow-lg">
              <Sparkles size={13} className="text-navy-dark" />
              <span className="font-urbanist font-bold text-navy-dark text-[12px] tracking-wide">
                Kerala's First AI Dental Receptionist
              </span>
            </div>
          )}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-bold font-urbanist uppercase tracking-[0.12em] px-3 py-1 rounded-full"
              style={{ background: `${post.categoryColor}30`, color: post.categoryColor, border: `1px solid ${post.categoryColor}60` }}
            >
              <Tag size={10} /> {post.category}
            </span>
            <span className="text-white/60 text-[12px] flex items-center gap-1.5">
              <Clock size={11} /> {post.readTime}
            </span>
            <span className="text-white/60 text-[12px] flex items-center gap-1.5">
              <Calendar size={11} /> {post.date}
            </span>
          </div>
          <h1 className="font-display text-white font-bold text-[clamp(22px,3vw,38px)] leading-tight max-w-[720px]">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Article body */}
      <section className="py-14 bg-white">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">

          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-[13px] font-urbanist font-semibold text-brand-blue hover:text-navy transition-colors mb-10"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          {/* Author bar */}
          <div className="flex items-center gap-3 mb-10 pb-8 border-b border-gray-100">
            <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-urbanist font-bold text-sm flex-shrink-0">
              {post.author.split(' ').map(w => w[0]).join('').slice(0, 2)}
            </div>
            <div>
              <div className="font-urbanist font-semibold text-navy text-[14px]">{post.author}</div>
              <div className="text-body text-[12px]">{post.authorRole}</div>
            </div>
          </div>

          {/* Sections */}
          <div className="prose-article">
            {post.sections.map((section, i) => (
              <Section key={i} section={section} />
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="text-[12px] font-urbanist font-semibold text-brand-blue bg-[#F4F8EC] border border-[#D6E2C4] px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-navy rounded-2xl p-8 text-center">
            <h3 className="font-display text-white font-bold text-[22px] mb-3">
              Ready to experience it yourself?
            </h3>
            <p className="text-green-200/70 text-[14px] mb-6">
              Book your appointment with Jess — available 24/7 at Cloud Nine Dental, Ernakulam.
            </p>
            <Link to={post.relatedCTA.to} className="btn-amber inline-flex">
              {post.relatedCTA.text} <ArrowRight size={15} />
            </Link>
          </div>

          {/* More posts */}
          {BLOGS.filter(b => b.slug !== post.slug).length > 0 && (
            <div className="mt-14">
              <h3 className="font-display font-bold text-navy-mid text-[20px] mb-6">More Articles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {BLOGS.filter(b => b.slug !== post.slug).slice(0, 2).map(related => (
                  <Link
                    key={related.slug}
                    to={`/blog/${related.slug}`}
                    className="group flex gap-4 items-start bg-[#F4F8EC] rounded-2xl p-4 border border-[#D6E2C4] hover:shadow-md transition-shadow"
                  >
                    <img
                      src={related.coverImage}
                      alt={related.coverAlt}
                      className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                    />
                    <div>
                      <span
                        className="text-[10px] font-bold font-urbanist uppercase tracking-wider"
                        style={{ color: related.categoryColor }}
                      >
                        {related.category}
                      </span>
                      <h4 className="font-urbanist font-semibold text-navy text-[13px] leading-snug mt-1 group-hover:text-brand-blue transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

function Section({ section }) {
  switch (section.type) {
    case 'intro':
      return (
        <p className="text-[16px] text-body leading-[1.85] mb-8 font-medium">
          <MDText text={section.body} />
        </p>
      )
    case 'heading':
      return (
        <h2 className="font-display font-bold text-navy-mid text-[22px] sm:text-[26px] mt-10 mb-4 leading-snug">
          {section.text}
        </h2>
      )
    case 'body':
      return (
        <div className="text-[15px] text-body leading-[1.85] mb-6 space-y-4">
          {section.body.split('\n\n').map((para, i) => (
            <p key={i}><MDText text={para} /></p>
          ))}
        </div>
      )
    case 'list':
      return (
        <ul className="mb-6 space-y-3 pl-1">
          {section.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[15px] text-body leading-relaxed">
              <span className="mt-1.5 w-5 h-5 rounded-full bg-[#F4F8EC] border border-[#D6E2C4] flex items-center justify-center flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue block" />
              </span>
              <span><MDText text={item} /></span>
            </li>
          ))}
        </ul>
      )
    case 'highlight':
      return (
        <blockquote className="my-8 border-l-4 border-brand-yellow bg-[#F4F8EC] px-6 py-5 rounded-r-2xl">
          <p className="font-display text-navy-mid text-[17px] sm:text-[19px] italic leading-snug mb-2">
            {section.text}
          </p>
          {section.attribution && (
            <cite className="text-[13px] text-body not-italic font-urbanist font-semibold">
              {section.attribution}
            </cite>
          )}
        </blockquote>
      )
    default:
      return null
  }
}

/** Render **bold** markdown inline */
function MDText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**')
          ? <strong key={i} className="font-semibold text-navy-mid">{part.slice(2, -2)}</strong>
          : part
      )}
    </>
  )
}
