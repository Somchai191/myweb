import {
  faFacebook,
  faInstagram,
  faLine
} from '@fortawesome/free-brands-svg-icons';

import {
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact() {
  const socialLinks = [
    {
      icon: faFacebook,
      label: 'Facebook',
      color: 'text-blue-600',
      href: 'https://www.facebook.com/ami.go.161722'
    },
    {
      icon: faInstagram,
      label: 'Instagram',
      color: 'text-pink-500',
      href: 'https://www.instagram.com/hobb_p002/'
    },
    {
      icon: faLine,
      label: 'LINE',
      color: 'text-green-500',
      href: 'https://line.me/ti/p/g5BGbcPGzb'
    }
  ];

  const contactInfos = [
    {
      icon: faPhone,
      label: '095-893-5107',
      color: 'text-blue-500',
      href: 'tel:0958935107'
    },
    {
      icon: faEnvelope,
      label: 'Somchaimanhoeng@gmail.com',
      color: 'text-red-500',
      href: 'mailto:Somchaimanhoeng@gmail.com'
    }
  ];

  return (
    <div className="flex flex-col items-center bg-[#f7d8f8] p-6 rounded-lg shadow-lg w-full max-w-xl mx-auto mt-35">
      <h1 className="text-4xl font-bold text-center mb-8 font-mali">ติดต่อผมได้ที่</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-xl px-4 py-2 rounded-lg bg-white hover:bg-gray-200 transition duration-200"
          >
            <FontAwesomeIcon icon={item.icon} className={`w-6 h-6 ${item.color}`} />
            <span className="text-gray-800">{item.label}</span>
          </a>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {contactInfos.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white"
          >
            <FontAwesomeIcon icon={item.icon} className={`w-6 h-6 ${item.color}`} />
            <span className="text-gray-800">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
