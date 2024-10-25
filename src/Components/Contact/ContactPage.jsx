import React, { useState } from 'react';
import { Mail, MapPin, Phone, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
import ReactPlayer from 'react-player';
import bgVideo from '../../assets/video/bgVideo.mp4'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen ">
            {/* Contact Page with Image Background */}
            <div
                className=" min-h-screen bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=945,fit=crop/Yyv2WR90PyhOLWlB/andre-benz-jb7tls6fw_i-unsplash-mp87p2XRXWibjBRx.jpg')",
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    backgroundBlend: 'overlay'
                }}
            >
                <div className="container  mx-auto px-4 w-full md:w-3/4 lg:w-3/5 py-16 pt-[10rem]">
                    <h1 className="text-5xl font-bold text-white text-center mb-4">Contact Us</h1>
                    <p className="text-white text-center mb-12">
                        Trabli is ready to provide the right solution according to your needs
                    </p>

                    <div className="flex flex-col md:flex-row ">
                        {/* Contact Information */}
                        <div className="bg-[#888888] w-[60%] p-6 rounded-lg flex-1 flex flex-col justify-between">
                            <h2 className="text-3xl font-bold text-white mb-8">Get in touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-white rounded-full p-3">
                                        <MapPin className="h-6 w-6 text-gray-800" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold">Head Office</h3>
                                        <p className="text-gray-200">158, Vikash Colony, BAG - 1 Pakka Bag,<br />Etawah, Etawah- 206001, Uttar Pradesh</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-white rounded-full p-3">
                                        <Mail className="h-6 w-6 text-gray-800" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold">Email Us</h3>
                                        <p className="text-gray-200">support@trabli.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-white rounded-full p-3">
                                        <Phone className="h-6 w-6 text-gray-800" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold">Call Us</h3>
                                        <p className="text-gray-200">+91-9971855077</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-white font-bold mb-4">Follow our social media</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors">
                                        <Linkedin className="h-5 w-5 text-gray-800" />
                                    </a>
                                    <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors">
                                        <Instagram className="h-5 w-5 text-gray-800" />
                                    </a>
                                    <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors">
                                        <Facebook className="h-5 w-5 text-gray-800" />
                                    </a>
                                    <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors">
                                        <Twitter className="h-5 w-5 text-gray-800" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-6 rounded-lg flex-1 flex flex-col justify-between">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-[#f1f1f1] p-3 border rounded-lg"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2">Last name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-[#f1f1f1] p-3 border rounded-lg"
                                        placeholder="Your last name"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2">Your email*</label>
                                    <input
                                        type="email"
                                        className="w-full bg-[#f1f1f1]  p-3 border rounded-lg"
                                        placeholder="Your email address"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2">Message*</label>
                                    <textarea
                                        className="w-full p-3 bg-[#f1f1f1]  border rounded-lg h-32"
                                        placeholder="Enter your message"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>

                    </div>

                    <div className="flex justify-center space-x-8 my-16">
                        <button className="bg-gray-500 text-white  w-[20rem] py-[2rem] text-nowrap text-3xl font-extrabold rounded-full hover:bg-gray-600 transition-colors">
                            Suggestions Form
                        </button>
                        <button className="bg-gray-500 text-white  w-[20rem] py-[2rem] text-3xl font-extrabold rounded-full hover:bg-gray-600 transition-colors">
                            Help
                        </button>
                        <button className="bg-gray-500 text-white w-[20rem] py-[2rem] text-3xl font-extrabold rounded-full hover:bg-gray-600 transition-colors">
                            Our Team
                        </button>
                    </div>
                </div>



            </div>

            {/* Office Location Section */}
            <div className=" min-h-screen flex justify-center flex-col items-center overflow-hidden bg-video">
                <video
                    src='../../assets/video/bgVideo.mp4'
                    autoPlay
                    loop
                    muted
                    className='absolute top-0 left-0 w-full h-full object-cover -z-10'
                />
                {/* Additional content can go here */}



                {/* Main Content */}
                <div className=" z-10 w-[100%]">
                    {/* Office Section */}
                    <div className="bg-[#b3af9e] h-[35%]">
                        <div className="w-[80%] mx-auto flex flex-col justify-center">
                            <div className="flex w-full">
                                {/* Left Side - Office Information */}
                                <div className='w-[40%] py-12 px-4'>
                                    <h2 className="text-5xl font-extrabold text-gray-800 mb-6">Our office</h2>
                                    <p className="text-gray-600 mb-8">
                                        Inform visitors about your business location and working hours.
                                    </p>

                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Address</h3>
                                    <p className="text-gray-600 mb-8">
                                        158, Vikash Colony, BAG - 1 Pakka Bag,<br />
                                        Etawah, Etawah- 206001, Uttar Pradesh
                                    </p>

                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Contacts</h3>
                                    <p className="text-gray-600">
                                        +91-9971855077<br />
                                        support@trabli.com
                                    </p>
                                </div>

                                {/* Right Side - Map */}
                                <div className="w-[40%] bg-gray-300 px-4 overflow-hidden">
                                    <iframe
                                        className="w-full h-full"
                                        loading="lazy"
                                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=158%2C%20Vikash%20Colony%2C%20BAG%20-%201%20Pakka%20Bag%20Etawah%2C%20Etawah-%20206001%2C%20Uttar%20Pradesh&zoom=10&maptype=roadmap">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Button Section */}
                    <div className="container mx-auto h-[24rem] px-4  flex justify-center flex-col items-center">
                        <div className="flex flex-col md:flex-row justify-between space-x-[8rem]">
                            <button className="bg-white px-16 text-black font-bold py-3 rounded-full hover:bg-gray-100 transition-colors mb-4 md:mb-0">
                                For Business Owners
                            </button>
                            <button className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors mb-4 md:mb-0">
                                For Investors
                            </button>
                            <button className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors mb-4 md:mb-0">
                                For Users
                            </button>
                        </div>
                    </div>
                </div>
            </div>








        </div >
    );
};

export default ContactPage;