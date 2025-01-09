const Timeline = () => {
  return (
    <div className="mx-10 mt-32">
      <div className="border-2 border-gray-300 shadow-sm mx-10 px-7 py-7 rounded-xl sh">
        <h2 className="pb-5 font-bold font-instrumentSans text-6xl text-center italic tracking-widest">
          Timeline
        </h2>
        <ol className="sm:flex items-center">
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex justify-center items-center bg-blue-900 rounded-full ring-0 ring-gray-300 sm:ring-8 w-6 h-6 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="sm:flex hidden bg-gray-300 w-full h-0.5"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="font-semibold text-lg">Flowbite Library v1.0.0</h3>
              <time className="block mb-2 font-normal text-gray-500 text-sm leading-none">
                Released on December 2, 2021
              </time>
              <p className="font-normal text-base">
                Get started with dozens of web components and interactive
                elements.
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex justify-center items-center bg-blue-900 rounded-full ring-0 ring-gray-300 sm:ring-8 w-6 h-6 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="sm:flex hidden bg-gray-300 w-full h-0.5"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="font-semibold text-lg">Flowbite Library v1.2.0</h3>
              <time className="block mb-2 font-normal text-gray-500 text-sm leading-none">
                Released on December 23, 2021
              </time>
              <p className="font-normal text-base">
                Get started with dozens of web components and interactive
                elements.
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex justify-center items-center bg-blue-900 rounded-full ring-0 ring-gray-300 sm:ring-8 w-6 h-6 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="sm:flex hidden bg-gray-300 w-full h-0.5"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="font-semibold text-lg">Flowbite Library v1.3.0</h3>
              <time className="block mb-2 font-normal text-sm dark:text-gray-500 leading-none">
                Released on January 5, 2022
              </time>
              <p className="font-normal text-base">
                Get started with dozens of web components and interactive
                elements.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Timeline;
