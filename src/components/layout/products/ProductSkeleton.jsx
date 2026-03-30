const ProductSkeleton = () => {
  return (
    <div className="p-6 w-full h-full flex flex-col rounded-2xl border-2 border-gray-100 space-y-4 bg-white animate-pulse">
      {/* Tag Skeleton */}
      <div className="absolute top-4 right-4 w-20 h-6 bg-gray-200 rounded-full"></div>

      {/* Icon Skeleton */}
      <div className="p-3.5 rounded-xl border border-gray-100 w-fit bg-gray-100">
        <div className="w-6 h-6 bg-gray-200 rounded"></div>
      </div>

      {/* Name & Description Skeleton */}
      <div className="space-y-3 grow">
        <div className="h-7 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-100 rounded w-full"></div>
          <div className="h-4 bg-gray-100 rounded w-5/6"></div>
        </div>
      </div>

      {/* Price Skeleton */}
      <div className="pt-2 flex items-baseline gap-2">
        <div className="h-8 bg-gray-200 rounded w-16"></div>
        <div className="h-4 bg-gray-100 rounded w-10"></div>
      </div>

      {/* Features List Skeleton */}
      <div className="space-y-3 py-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gray-100 rounded-full shrink-0"></div>
            <div className="h-4 bg-gray-100 rounded w-full"></div>
          </div>
        ))}
      </div>

      {/* Button Skeleton */}
      <div className="pt-4">
        <div className="h-11 bg-gray-200 rounded-xl w-full"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
