const MyApps = () => {
  return (
    <section className="border-2 border-gray-300 shadow-gray-400 shadow-sm mx-10 mt-32 px-4 py-3 rounded-xl">
      <div className="mx-auto px-4 container">
        <h2 className="mb-8 font-bold font-instrumentSans text-6xl text-center italic tracking-widest">
          My Apps
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              className="bg-black hover:shadow-lg rounded-lg transform transition-transform overflow-hidden hover:scale-105 size-20"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpuYdLEzBvwemix8pwsncUkLLOQqnByncadg&s"
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyApps;
