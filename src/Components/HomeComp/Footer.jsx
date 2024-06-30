import React from "react";

const socialMediaIcons = {
  Facebook: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-6 h-6"
      fill="currentColor"
    >
      <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82V14.706h-3.11v-3.62h3.11V8.414c0-3.1 1.89-4.788 4.654-4.788 1.323 0 2.462.098 2.794.142v3.24h-1.916c-1.506 0-1.797.717-1.797 1.766v2.316h3.592l-.467 3.62h-3.125V24h6.125C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z" />
    </svg>
  ),
  Twitter: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-6 h-6"
      fill="currentColor"
    >
      <path d="M23.954 4.569c-.885.391-1.83.656-2.825.775 1.013-.608 1.794-1.574 2.163-2.723-.949.564-2.004.974-3.127 1.195-.896-.959-2.173-1.557-3.594-1.557-2.717 0-4.92 2.204-4.92 4.919 0 .385.043.76.127 1.123-4.088-.205-7.72-2.166-10.148-5.144-.422.723-.664 1.561-.664 2.457 0 1.69.86 3.179 2.17 4.055-.8-.025-1.554-.245-2.213-.614v.062c0 2.362 1.678 4.335 3.911 4.784-.409.111-.84.171-1.287.171-.314 0-.615-.03-.911-.086.617 1.926 2.41 3.329 4.533 3.368-1.66 1.3-3.751 2.076-6.025 2.076-.392 0-.779-.022-1.16-.067 2.148 1.379 4.7 2.183 7.45 2.183 8.94 0 13.836-7.405 13.836-13.836 0-.211 0-.423-.015-.632.951-.689 1.777-1.548 2.428-2.529z" />
    </svg>
  ),
  Instagram: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-6 h-6"
      fill="currentColor"
    >
      <path d="M12 2.163c3.204 0 3.584.013 4.849.07 1.259.057 2.084.262 2.573.44.626.221 1.077.484 1.544.95.466.466.73.917.951 1.543.177.489.383 1.314.439 2.573.057 1.265.07 1.645.07 4.849s-.013 3.584-.07 4.849c-.057 1.259-.262 2.084-.44 2.573-.221.626-.484 1.077-.95 1.544-.466.466-.917.73-1.543.951-.489.177-1.314.383-2.573.439-1.265.057-1.645.07-4.849.07s-3.584-.013-4.849-.07c-1.259-.057-2.084-.262-2.573-.44-.626-.221-1.077-.484-1.544-.95-.466-.466-.73-.917-.951-1.543-.177-.489-.383-1.314-.439-2.573C2.175 15.584 2.163 15.204 2.163 12s.013-3.584.07-4.849c.057-1.259.262-2.084.44-2.573.221-.626.484-1.077.95-1.544.466-.466.917-.73 1.543-.951.489-.177 1.314-.383 2.573-.439C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.737 0 8.332.014 7.053.071 5.766.128 4.837.355 4.067.72c-.795.384-1.471.896-2.146 1.572-.675.675-1.187 1.351-1.572 2.146-.365.77-.592 1.699-.649 2.986C.014 8.332 0 8.737 0 12s.014 3.668.071 4.947c.057 1.287.284 2.216.649 2.986.384.795.896 1.471 1.572 2.146.675.675 1.351 1.187 2.146 1.572.77.365 1.699.592 2.986.649C8.332 23.986 8.737 24 12 24s3.668-.014 4.947-.071c1.287-.057 2.216-.284 2.986-.649.795-.384 1.471-.896 2.146-1.572.675-.675 1.187-1.351 1.572-2.146.365-.77.592-1.699.649-2.986.057-1.279.071-1.684.071-4.947s-.014-3.668-.071-4.947c-.057-1.287-.284-2.216-.649-2.986-.384-.795-.896-1.471-1.572-2.146-.675-.675-1.351-1.187-2.146-1.572-.77-.365-1.699-.592-2.986-.649C15.668.014 15.263 0 12 0z" />
      <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.295 0-4.162-1.867-4.162-4.162s1.867-4.162 4.162-4.162 4.162 1.867 4.162 4.162-1.867 4.162-4.162 4.162zM18.406 4.594c-.796 0-1.44.644-1.44 1.44s.644 1.44 1.44 1.44 1.44-.644 1.44-1.44-.644-1.44-1.44-1.44z" />
    </svg>
  ),
};

const SocialMediaIcon = ({ platform }) => (
  <div className="w-8 h-8 p-2 bg-gray-700 hover:bg-gray-500 cursor-pointer rounded-full flex items-center justify-center text-white">
    {socialMediaIcons[platform]}
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-95 text-white py-10 px-5 md:px-20">
      <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">
        <div className="flex flex-col md:w-1/3">
          <h2 className="text-xl font-bold mb-4">Social Media</h2>
          <div className="flex space-x-4">
            <SocialMediaIcon platform="Facebook" />
            <SocialMediaIcon platform="Twitter" />
            <SocialMediaIcon platform="Instagram" />
          </div>
        </div>

        <div className="flex flex-col md:w-1/3">
          <div className="flex items-center mb-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrqzNW16xPLPoYPLJWbuicgDGy64n83FKfFg&s"
              alt="logo"
              className="w-7 h-7 mr-4 rounded-full"
            />
            <h2 className="text-xl font-bold">Cal Fit</h2>
          </div>
          <p className="text-gray-300">
            Highlight benefits of each exercise, both physical and mental.
          </p>
        </div>

        <div className="flex flex-col md:w-1/3">
          <ul className="space-y-2">
            <li>
              <a href="#about" className="text-gray-300 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#promos" className="text-gray-300 hover:text-white">
                Promos
              </a>
            </li>
            <li>
              <a href="#news" className="text-gray-300 hover:text-white">
                News & Blog
              </a>
            </li>
            
            <li>
              <a href="#support" className="text-gray-300 hover:text-white">
                Support
              </a>
            </li>
            <li>
              <a href="#faq" className="text-gray-300 hover:text-white">
                FAQ
              </a>
            </li>
            
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-5 text-center">
        <p className="text-gray-500">© 2024 CalFitness</p>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start space-y-2 md:space-y-0 mt-2 md:mt-0">
          <a href="#terms" className="text-gray-500 hover:text-white">
            Terms of Use
          </a>
          <a href="#privacy" className="text-gray-500 hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
