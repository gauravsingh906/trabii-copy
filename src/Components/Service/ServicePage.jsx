import React from 'react';
import { motion } from 'framer-motion';

const ServicePage = () => {
    // Data for services
    const services = [
        {
            title: 'Event Discovery and Booking',
            price: '10,000',
            description: 'Find and book the best events effortlessly.',
            image: 'https://via.placeholder.com/400x300', // Replace with actual image URL or import your own image files
        },
        {
            title: 'Event Hosting and Promotion',
            price: '10,000',
            description: 'Host and promote your events seamlessly.',
            image: 'https://via.placeholder.com/400x300',
        },
        {
            title: 'AI-Powered Event Recommendations',
            price: 'As per Event Requirements',
            description: 'Get AI-driven recommendations tailored to your needs.',
            image: 'https://via.placeholder.com/400x300',
        },
        {
            title: 'Social Features and Engagement',
            price: 'Free for Users',
            description: 'Boost engagement through social interactions.',
            image: 'https://via.placeholder.com/400x300',
        },
    ];

    // Framer Motion animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hover: { scale: 1.05, transition: { duration: 0.3 } },
    };

    return (
        <motion.div

            className="overflow-hidden pb-[2rem]"
            variants={cardVariants}
            initial="hidden"
            animate="visible"

        >
            <div className="container mx-auto mt-[6rem] font-montserrat  p-6">
                <h1 className="text-4xl  text-start text-wrap w-[40px] tracking-wider leading-tight font-400 text-[7rem] mb-6 ">Our services</h1>
                <p className="text-start text-xl font-bold text-gray-600 mb-12">
                    Here are four key services that TraBii provides to everyone
                </p>

                {/* Services grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 row-start-1 gap-8 pr-[8rem]">
                    {services.map((service, index) => (
                        <div
                            className="overflow-hidden w-100"

                        >
                            <div className="border  shadow-md overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1532547616536-557a0d4d29ad?auto=format&fit=crop&w=861&h=452"
                                    alt={service.title}
                                    className="w-full h-80  object-cover"
                                />
                            </div>
                            <motion.div

                                className="overflow-hidden p-2 "
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible">
                                <h3 className="text-2xl font-bold my-4">{service.title}</h3>
                                <span className=" text-2xl ">Rs {service.price}</span>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ServicePage;
