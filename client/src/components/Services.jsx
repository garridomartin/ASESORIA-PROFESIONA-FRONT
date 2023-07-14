import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const Services = () => {
  return (
    <div
      id='services'
      className='flex flex-col items-center justify-center grid-rows-7 h-screen bg-slate-300 pt-20'
    >
      <div className='div1 col-span-7 row-span-1 flex items-center justify-center'>
        <p className='bg-slate-600 rounded font-bold text-3xl leading-10 text-white text-center w-[300px]'>
          What we offer?
        </p>
      </div>

      <div className='flex items-center w-1/2 bg-white mx-auto justify-center py-20 my-20'>
        <div className='bg-white flex flex-col items-center justify-center'>
          <h2 className='text-xl font-bold mb-2'>Service</h2>
          <p className='text-gray-600 text-justify w-[800px]'>
            Introducing "ServiceNet," a dynamic and innovative company that is
            revolutionizing the service industry. With a vision akin to that of
            Amazon, ServiceNet focuses solely on providing a diverse range of
            services to cater to the needs of individuals and businesses alike.
            From home maintenance and repair to virtual assistance, tutoring,
            event planning, and professional consulting, ServiceNet aims to be
            the ultimate one-stop destination for all service requirements.
            ServiceNet stands out from the competition by placing an unwavering
            emphasis on quality and convenience. Through advanced technology and
            a meticulously curated network of trusted service providers,
            ServiceNet ensures that customers have access to skilled
            professionals who consistently deliver exceptional service
            experiences. Whether you require an urgent plumber or a long-term
            personal trainer, ServiceNet has the perfect solution to meet your
            needs. With a user-friendly platform accessible through a seamless
            website and mobile app, ServiceNet makes the process of finding and
            booking services a breeze. The intuitive interface provides
            comprehensive provider profiles, detailed customer reviews, and
            transparent pricing information, empowering customers to make
            well-informed decisions with confidence. ServiceNet's commitment to
            customer satisfaction extends beyond the booking process. Rigorous
            vetting procedures ensure that only the most qualified and reliable
            service providers become part of the ServiceNet network.
            Additionally, secure payment options, robust customer support, and a
            satisfaction guarantee all work together to ensure that customers
            receive top-notch service and have peace of mind throughout their
            entire service journey. Join the ServiceNet community today and
            unlock a new era of service provision. Say goodbye to the
            frustrations of finding trustworthy service providers, and embrace
            the convenience, quality, and reliability that ServiceNet offers.
            Experience the transformative power of exceptional service with
            ServiceNet, where your satisfaction is our top priority.{' '}
          </p>
        </div>
      </div>

      <div className='div2 col-span-7 row-span-1 flex items-center justify-center mt-10'>
        <Link
          to='/allServices'
          className='text-blue-950 font-bold mb-20 bg-white rounded-md py-4 w-[200px] flex justify-center items-center shadow-lg hover:transition-all hover:bg-blue-950 hover:text-white'
        >
          Go to Services
        </Link>
      </div>
    </div>
  );
};

export default Services;
