"use client"
import React from 'react';
import Image from 'next/image';

const About = () => {
  const features = [
    {
      image: "/first.jpg",
      title: "Explore Nature",
      description: "Through tree plantation drives, nature walks, and workshops on sustainable living, we aim to inspire change and promote harmony between humanity and nature."
    },
    {
      image: "/second.jpg",
      title: "Join Our Community",
      description: "Arham is not just a club; it&apos;s a movement where we engage in environmental action, working together to create a lasting impact on our campus and beyond."
    },
    {
      image: "/third.jpg",
      title: "Make an Impact",
      description: "From eco-friendly events to hands-on initiatives, we&apos;re fostering a more sustainable future, making our campus greener, cleaner, and full of life."
    }
  ];

  return (
    <section className="min-h-screen bg-[#232E26] py-12 px-4 md:px-8 lg:px-12 font-poiret">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl lg:text-[72px] font-bold text-[#D9EFDE]">
          About Us
        </h1>
      </div>

      <div className="bg-[#D9EFDE] rounded-[26px] p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[#232E26] text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Welcome to Arham
            </h2>
            <p className="text-[#232E26] text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto font-semibold leading-relaxed">
              The Nature&apos;s Club of GGSIPU EDC, a vibrant community of students united by a shared passion for the environment and sustainability. Nestled in the blackened heart of Delhi, our club serves as a platform to explore, appreciate, and protect the natural world within our campus and beyond. We believe in small moves, big waves.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start mb-12">
            {/* Mission Text */}
            <div className="space-y-6 p-6 bg-white/40 rounded-2xl shadow-sm">
              <h3 className="text-[#232E26] text-2xl md:text-3xl font-bold mb-4">
                Our Mission
              </h3>
              <p className="text-[#232E26] text-lg md:text-xl font-semibold leading-relaxed">
                Our mission is to cultivate a sense of responsibility towards the environment among our members and the larger community. We aim to collaborate with environmental organizations, engage in research, and work on initiatives that address pressing ecological challenges such as pollution, biodiversity loss, and climate change.
              </p>
              <p className="text-[#232E26] text-lg md:text-xl font-semibold leading-relaxed">
                Join us as we embark on this journey to reconnect with nature, learn from it, and take meaningful steps toward building a greener, cleaner, and more sustainable future. Together, let&apos;s be the change the world needs!
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="group transform transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-[3/4] bg-[#232E26] rounded-2xl overflow-hidden relative shadow-lg">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#232E26] via-transparent opacity-60" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-[#D9EFDE]">
                      <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                      <p className="text-sm font-medium leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="bg-[#232E26] text-[#D9EFDE] rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#D9EFDE] rounded-full mr-4"></span>
              Recent Achievements
            </h3>
            <div className="space-y-4">
              <p className="text-lg md:text-xl font-semibold leading-relaxed">
                On October 25th, we spearheaded a significant plantation drive for the &ldquo;Swachh Bharat 4.0&rdquo; initiative, resulting in over 150 saplings being planted across the campus. The drive prioritized native species to enrich the local ecosystem, reflecting our commitment to environmental care and cleanliness.
              </p>
              <div className="pt-4 flex justify-end">
                <span className="text-sm font-medium px-4 py-2 bg-[#D9EFDE]/10 rounded-full">
                  150+ Saplings Planted
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;