
export default function Loading() {
  
  return (
    <>
      <div className="border border-blue-300 shadow rounded-md p-4 w-full mx-auto mt-4 md:pt-12">
        <div className="animate-pulse flex space-x-4">

          <div className="flex-1 space-y-6 py-1">

            <div className="grid grid-cols-5 gap-4">
              <div className="h-3 bg-slate-700 rounded col-start-2 col-span-3 md:col-start-3 md:col-span-1"></div>
            </div>

            <div className="grid grid-cols-7 ">
              <div className="h-1 bg-slate-700 rounded col-span-1"></div>
            </div>

            <div className="animate-pulse rounded bg-slate-700 h-44 md:h-96 w-full mt-4"></div>

            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
