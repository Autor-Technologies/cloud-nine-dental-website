export const BLOGS = [
  {
    slug: 'keralas-first-ai-dental-receptionist',
    title: "Kerala's First AI Dental Receptionist: How Cloud Nine Dental Is Transforming Patient Care",
    excerpt:
      'Meet Jess — the AI dental receptionist at Cloud Nine Dental, Ernakulam. Available 24/7, she books appointments, answers questions, and makes your first interaction with the clinic effortless.',
    category: 'Innovation',
    categoryColor: '#C8A020',
    date: 'April 9, 2026',
    readTime: '5 min read',
    author: 'Cloud Nine Dental Team',
    authorRole: 'Cloud Nine Dental, Kochi',
    coverImage:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&h=630&fit=crop&auto=format&q=80',
    jessImage:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&auto=format&q=80',
    coverAlt: 'Modern dental clinic reception at Cloud Nine Dental, Ernakulam',
    sections: [
      {
        type: 'intro',
        body: `When you call a dental clinic after hours, you typically get a voicemail. When you message on Instagram, you wait days. When you try to book online, you're redirected to a form that no one checks until Monday morning.\n\nAt Cloud Nine Dental in Padivattom, Ernakulam, we decided that wasn't good enough — so we built something better. We'd like to introduce **Jess**, Kerala's first AI dental receptionist, and tell you exactly why we built her.`,
      },
      {
        type: 'heading',
        text: 'What Is an AI Dental Receptionist?',
      },
      {
        type: 'body',
        body: `Jess is a conversational AI agent built specifically for Cloud Nine Dental. She lives on our website and is available every single day — including Sundays and public holidays — from the moment you land on our page.\n\nShe's not a generic chatbot that replies with "Please call us during working hours." She knows our services, our dentists, our clinic timings, our location in Ernakulam, and can guide you through booking an appointment in under two minutes.`,
      },
      {
        type: 'heading',
        text: 'What Can Jess Do?',
      },
      {
        type: 'list',
        items: [
          '**Book appointments instantly** — no forms, no waiting for confirmation calls',
          '**Answer questions** about any of our 9 dental services, from teeth whitening to dental implants',
          '**Tell you about our doctors** — Dr. Jadeep R K A and Dr. Swathy J Menon — their specialisations and approach',
          '**Provide directions and parking info** for our Padivattom clinic',
          '**Explain treatment processes** and what to expect before your first visit',
          "**Clarify pricing and insurance queries** so you're never surprised at the front desk",
          '**Suggest treatments** based on what you describe, so you come prepared',
        ],
      },
      {
        type: 'heading',
        text: 'Why Did We Build This?',
      },
      {
        type: 'body',
        body: `The honest answer: our patients asked us to.\n\nKochi is a busy city. People are working late, commuting, managing families. The window between "I should book a dental appointment" and "I'll do it tomorrow" is often just a few seconds. If a patient has a toothache at 10 PM and can't get a response, they either suffer through the night or end up at a 24-hour pharmacy instead of a proper dental consultation.\n\nWe believe healthcare access shouldn't stop at 8 PM. Jess makes it possible for anyone to start their dental journey with Cloud Nine — at midnight if needed.`,
      },
      {
        type: 'highlight',
        text: '"The goal was never to replace the human warmth at our front desk. It was to extend it — to every hour of the day."',
        attribution: '— Dr. Jadeep R K A, Cloud Nine Dental',
      },
      {
        type: 'heading',
        text: 'Is This the Future of Dental Clinics in Kerala?',
      },
      {
        type: 'body',
        body: `We believe so. Kerala has always punched above its weight in healthcare — our literacy, our awareness of medical access, our demand for quality care. What we've historically lacked is the technology layer that makes that care truly frictionless.\n\nAI receptionists aren't about cutting costs or reducing jobs. They're about ensuring that a patient who searches "dentist near Padivattom" at 11 PM doesn't have to wake up the next morning having forgotten to book. The human dentists, hygienists, and front desk staff at Cloud Nine remain the heart of what we do. Jess just makes sure no one falls through the cracks in between.`,
      },
      {
        type: 'heading',
        text: 'Privacy and Your Data',
      },
      {
        type: 'body',
        body: `We understand that conversations about health can feel personal. Any information you share with Jess is used solely to help you book or understand your care at Cloud Nine Dental. We do not sell, share, or use this data for advertising. You can read our full privacy commitment on our Contact page.`,
      },
      {
        type: 'heading',
        text: 'Try It Yourself',
      },
      {
        type: 'body',
        body: `Jess is live on our website right now. You'll see her popup when you first visit — tap "Book Now" or ask her anything about your dental health. She's waiting.\n\nIf you'd prefer to speak to a real person, we're always reachable at **+91 90379 09046** during clinic hours (Mon–Sat: 9 AM–8 PM, Sun: 10 AM–2 PM).`,
      },
    ],
    tags: ['AI', 'Innovation', 'Dental Technology', 'Kerala', 'Cloud Nine Dental'],
    relatedCTA: {
      text: 'Book an Appointment with Jess',
      to: '/booking',
    },
  },
]

export function getBlogBySlug(slug) {
  return BLOGS.find(b => b.slug === slug) ?? null
}
