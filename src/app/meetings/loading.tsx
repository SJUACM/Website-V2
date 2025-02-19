export default function Loading() {
  return (
    <div className="text-center items-center justify-center max-w-7xl mx-auto px-8">
      <div className="p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-black border border-neutral-800 w-auto sm:w-[24rem] rounded-xl p-8 h-[42rem] animate-pulse"
            >
              <div className="h-8 bg-neutral-800 rounded-lg w-3/4 mb-4"></div>
              <div className="h-60 bg-neutral-800 rounded-xl mb-4"></div>
              <div className="h-4 bg-neutral-800 rounded-lg w-1/4 mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-neutral-800 rounded-lg"></div>
                <div className="h-4 bg-neutral-800 rounded-lg"></div>
                <div className="h-4 bg-neutral-800 rounded-lg w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
