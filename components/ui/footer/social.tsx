import React from 'react';
import { socialItems } from './socialItens';

export default function Social() {
  return (
    <div className="flex items-center justify-center gap-6 w-full max-w-6xl mx-auto">
      {socialItems.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-28 flex flex-col items-center justify-center text-center group"
        >
          <social.Icon className="w-8 h-8 text-gray-500 group-hover:text-gray-400 mb-1 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-semibold group-hover:text-gray-400">
              {social.name}
            </h4>
            <span className="text-xs text-gray-600 group-hover:text-gray-400 break-words">
              {social.userInSocialMedia}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
