import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Component() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center py-12 px-4">
        <div className="flex flex-col md:flex-row w-full max-w-6xl justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2 flex items-center">
            <div className="text-left">
              
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">About Us</h2>
              <h1 className="mt-4 text-2xl md:text-4xl font-bold leading-tight text-gray-900">
                We Better Your Needs And Develop A Customized Plan That Fits Your Unique Needs
              </h1>
              <p className="mt-4 text-lg text-gray-700">
             Authentic Events is Subsidiary company of TC Kira Investment Group. We are a profit-making company dedicated to adding value to the MICE sector in Rwanda and the region.
              </p>
              <Link href="/about-us">
                <Button className="mt-6 w-full md:w-48 bg-blue-600 text-white roundnow">Learn More</Button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">

          <Image
                  alt="Crossover 2023"
                  className="object-cover rounded-lg shadow-lg mx-auto"
                  height="500"
                  src="https://res.cloudinary.com/dholzaaws/image/upload/v1730389929/2Q4A0251_t7hjav.jpg"
                  style={{
                    aspectRatio: "600/500",
                    objectFit: "cover",
                  }}
                  width="600"
                />
        {/*     <img
            loading="lazy"
              alt="Event Stadium"
              className="object-cover rounded-lg shadow-lg mx-auto"
              src="https://res.cloudinary.com/dxtjjbk95/image/upload/v1708470138/Authentic%20Events/53085570225_68fd931bb8_o_cgrsev.jpg"
              style={{
                height: "500px",
                maxWidth: "600px",
                width: "100%",
              }}
            />
            */}
          </div>
          </div>
      </section>
    </>
  );
}
