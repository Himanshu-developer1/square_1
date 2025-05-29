import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-500 sm:text-5xl md:text-6xl">
              About Us
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Discover our story and mission
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-900">Our Story</h2>
              <p className="text-lg text-gray-500">
                We started with a simple idea: to create something meaningful
                and impactful. Our journey began with passion and dedication,
                evolving into what we are today.
              </p>
              <p className="text-lg text-gray-500">
                Through innovation and commitment to excellence, we continue to
                grow and serve our community with the best solutions possible.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-900">Our Mission</h2>
              <p className="text-lg text-gray-500">
                We strive to deliver exceptional value through innovative
                solutions while maintaining the highest standards of quality and
                customer satisfaction.
              </p>
              <div className="mt-8">
                <ul className="space-y-4">
                  {["Innovation", "Quality", "Integrity", "Excellence"].map(
                    (value) => (
                      <li key={value} className="flex items-center">
                        <svg
                          className="h-6 w-6 text-green-500"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="ml-3 text-lg text-gray-700">
                          {value}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="bg-white shadow rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-500">
                We'd love to hear from you. Reach out to us for any questions or
                inquiries.
              </p>
              <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
