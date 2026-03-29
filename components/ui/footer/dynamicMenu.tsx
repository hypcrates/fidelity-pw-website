import React from 'react';
import { NavItems } from '../header/_data/navItemns';

export default function DynamicMenu() {
  return (
    <>
      {NavItems.map((item, index) => (
        <div key={index} className="min-w-[120px]">
          <h3 className="text-base font-semibold mb-4">{item.label}</h3>
          <ul className="space-y-2">
            {item.subItems?.map((subItem, subIndex) => (
              <li key={subIndex}>
                <a
                  href={subItem.href}
                  className="text-gray-600 hover:text-white text-sm transition-colors"
                >
                  {subItem.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
