export const servicesData = [
  {
    title: "Service 1",
    description: "Description for Service 1.",
    visitLink: "#",
    codeLink: "#",
  },
  {
    title: "Service 2",
    description: "Description for Service 2.",
    visitLink: "#",
    codeLink: "#",
  },
  {
    title: "Service 3",
    description: "Description for Service 3.",
    visitLink: "#",
    codeLink: "#",
  },
  {
    title: "Service 4",
    description: "Description for Service 4.",
    visitLink: "#",
    codeLink: "#",
  },

  // Add more services as needed
];

const Services = () => {
  return (
    <div className="h-[calc(100vh-5px)] w-full  dark:bg-gray-700 dark:text-white   py-36 flex items-center">
      <div className="container mx-auto text-gray-200">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col mb-4 xl:mb-0">
            <div>
              <h2 className="text-3xl xl:mt-8 text-center dark:text-white text-black">
                My Services
              </h2>
            </div>
          </div>
          <div className="w-full xl:max-w-[65%]"></div>
        </div>

        {/* Grid Component */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="dark:bg-gray-900 bg-slate-100 text-black dark:text-white  p-6 rounded-lg transition duration-300 ease-in-out transform hover:bg-pink-500"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2">{service.description}</p>
              <div className="mt-4 flex justify-between">
                <a
                  href={service.visitLink}
                  className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition duration-300"
                >
                  Visit
                </a>
                <a
                  href={service.codeLink}
                  className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded transition duration-300"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
