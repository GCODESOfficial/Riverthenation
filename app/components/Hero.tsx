import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/Hero.svg"
        alt="Worship"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark + warm overlay */}
      {/* <div className="absolute inset-0 bg-black/50" /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" /> */}

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          <h1 className="font-serif text-white text-4xl md:text-5xl font-semibold leading-tight">
            A Place to Encounter Christ
          </h1>

          <p className="mt-5 max-w-xl mx-auto text-gray-300 text-sm md:text-base">
            Gather with believers to worship deeply, grow in faith, and
            experience God&apos;s presence together.
          </p>

          <button className="mt-8 rounded-full bg-yellow-500 px-7 py-3 text-sm font-semibold text-black hover:bg-yellow-400 transition">
            Join the Fellowship
          </button>
        </div>
      </div>

      {/* Soft white glow at bottom */}
      {/* <div className="absolute bottom-0 left-0 h-40 w-full bg-white" /> */}

      {/* Floating Quote Card */}
      <div className="relative z-20 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl bg-white px-10 py-12 text-center shadow-xl">
            <div className="text-7xl text-gray-400 leading-none">&ldquo;</div>

            <p className="mt-6 font-serif text-lg text-gray-700 leading-relaxed">
              And this gospel of the kingdom will be preached in the whole world
              as a testimony to all nations, and then the end will come.
            </p>

            <p className="mt-6 text-sm font-semibold text-red-500">
              - Matthew 24:14 (NIV)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
