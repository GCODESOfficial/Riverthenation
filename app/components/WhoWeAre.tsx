import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="bg-[#faf7f2] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">

          {/* Images */}
          <div className="flex gap-2 md:gap-0.5">
            {/* Image 1 */}
            <div className="group relative h-[320px] w-1/2 overflow-hidden rounded-2xl">
              <Image
                src="/images/who-we-1.svg"
                alt="Worship leader"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

            {/* Image 2 */}
            <div className="group relative h-[320px] w-1/3 overflow-hidden rounded-2xl">
              <Image
                src="/images/who-we-2.svg"
                alt="Praise session"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900">
              Who We Are
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed text-sm md:text-base">
              We are a Christian fellowship committed to creating a spiritual
              home where believers grow together, grow in faith, and build
              meaningful relationships in the love of Christ.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
              Our fellowship is a place for people who desire more than religion.
              It is a place where we open the Bible together, pray together,
              ask honest questions, share life, and allow the Holy Spirit to
              transform us into the image of Christ.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
              Whether you are just beginning your journey of faith or have
              walked with God for many years, there is a space for you here.
            </p>

            <button className="mt-8 rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white hover:bg-red-500 transition">
              Become a Member
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
