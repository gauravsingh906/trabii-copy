import React from 'react';

const services = [
    {
        title: 'Event Discovery and Booking',
        price: 'Rs 10,000',
        image: 'https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?auto=format&fit=crop&w=1080&h=757',
    },
    {
        title: 'Event Hosting and Promotion',
        price: 'Rs 10,000',
        image: 'https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?auto=format&fit=crop&w=1080&h=757',
    },
    {
        title: 'AI-Powered Event Recommendations',
        price: 'As per Event Requirements',
        image: 'https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?auto=format&fit=crop&w=1080&h=757',
    },
    {
        title: 'Social Features and Engagement',
        price: 'Free for Users',
        image: 'https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?auto=format&fit=crop&w=1080&h=757',
    }
];


const ServicesSection = () => {

    return (
        <div className="min-h-screen overflow-x-scroll my-2 mb-[20vh] bg-white">
            <div className="container mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="text-start mb-8">
                    <h1 className="text-8xl  mb-8">
                        Our
                        <br />
                        services
                    </h1>
                    <p className="text-gray-600 text-xl">
                        Here are four key services that TraBli provides to everyone
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid w-[100] grid-cols-1 md:grid-cols-2 gap-14 mr-[14rem] ml-2">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl rounded-lg"
                        >
                            {/* Image with overlay */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-white opacity-90">
                                    {service.price}
                                </p>

                                {/* Hover Button */}
                                <button className="mt-4 bg-white text-black px-6 py-2 rounded-full opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;