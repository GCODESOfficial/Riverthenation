import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="bg-[#faf7f2] py-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Card Container */}
        <div className="relative overflow-hidden rounded-2xl bg-white p-8 md:p-14">
          <div className="grid items-center gap-12 md:grid-cols-2">
            
            {/* LEFT: Text */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900">
                Our Mission & <br className="hidden md:block" />
                Vision
              </h2>

              <p className="mt-6 max-w-lg text-sm md:text-base leading-relaxed text-gray-600">
                Revive The Nations Ministry is an Evangelistic ministry with the
                vision to preach the gospel across the nations of the earth,
                bringing revival to humanity and advancing the kingdom of God.
              </p>
            </div>

            {/* RIGHT: Images */}
            <div className="relative flex flex-col items-center md:items-end gap-0.5">
              
              {/* Top Image */}
              <div className="relative h-[100px] w-full max-w-[260px] overflow-hidden rounded-xl">
                <Image
                  src="/images/mission-top.svg"
                  alt="Congregation"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Main Image */}
              <div className="relative h-[300px] w-full max-w-[260px] overflow-hidden rounded-2xl">
                <Image
                  src="/images/mission-main.svg"
                  alt="Minister praying"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Image */}
              <div className="relative h-[100px] w-full max-w-[260px] overflow-hidden rounded-xl">
                <Image
                  src="/images/mission-bottom.svg"
                  alt="Church members"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
