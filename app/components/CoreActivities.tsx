import Image from "next/image";

const activities = [
  {
    title: "Bible Study\nGathering",
    image: "/images/activity-1.svg",
  },
  {
    title: "Discipleship &\nMentorship",
    image: "/images/activity-2.svg",
  },
  {
    title: "Community\nOutreach",
    image: "/images/activity-3.svg",
  },
  {
    title: "Youth & Campus\nFellowship",
    image: "/images/activity-4.svg",
  },
  {
    title: "Prayer & Worship\nNights",
    image: "/images/activity-5.svg",
  },
  {
    title: "House\nFellowship",
    image: "/images/activity-6.svg",
  },
];

export default function CoreActivities() {
  return (
    <section className="bg-[#faf7f2] py-24">
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900">
            Core Activities
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-600">
            Our fellowship life is structured around key expressions of
            spiritual growth and community.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3">
          {activities.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Text */}
              <div className="absolute inset-0 flex items-end p-4 md:p-6">
                <p className="whitespace-pre-line text-sm md:text-base font-semibold text-white leading-tight">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
