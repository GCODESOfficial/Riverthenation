'use client';

/**
 * Core Activities Section Component
 * 3x2 grid of activity cards with overlaid text
 * From Figma: Core Activities frame (node-id 2:2233)
 */

const activities = [
  {
    title: 'Bible Study\nGathering',
    bgClass: 'bg-[url(/images/frame-2085661807.jpg)]',
  },
  {
    title: 'Discipleship &\nMentorship',
    bgClass: 'bg-[url(/images/frame-2085661808.jpg)]',
  },
  {
    title: 'Community\nOutreach',
    bgClass: 'bg-[url(/images/frame-1000005631.jpg)]',
  },
  {
    title: 'Youth & Campus\nFellowship',
    bgClass: 'bg-[url(/images/frame-1000005634.jpg)]',
  },
  {
    title: 'Prayer & Worship\nNights',
    bgClass: 'bg-[url(/images/fb-img-1730.jpg)]',
  },
  {
    title: 'House\nFellowship',
    bgClass: 'bg-[url(/images/anthony.jpg)]',
  },
];

export default function CoreActivitiesSection() {
  return (
    <div className="space-y-12">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-[#121212] text-[44px] font-serif leading-tight tracking-[1px]">
          Core Activities
        </h2>
        <p className="text-[#6b6b6b] text-[20px] leading-[1.284] tracking-[0.4px]">
          Our fellowship life is structured around key expressions of spiritual growth and community
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-5">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="relative h-[357px] rounded-[18px] overflow-hidden group"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-black opacity-30" />

            {/* Text Label at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center px-4 py-4">
              <p className="text-white text-[20px] font-semibold leading-tight text-center whitespace-pre-line">
                {activity.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
