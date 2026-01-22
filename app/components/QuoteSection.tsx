export default function QuoteSection() {
  return (
    <div className="relative bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl bg-white px-10 py-6 text-center shadow-lg">
          <div className="text-5xl text-gray-400">&ldquo;</div>

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
  );
}
