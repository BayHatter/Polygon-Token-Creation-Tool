import React from 'react';

// Sample ads data (you can update this with real ad links and images)
const ads = [
  {
    url: "https://picfry.com",
    image: "https://picfry.com/picfry.jpg",
    alt: "Ad 1",
  },

];

export default function Sidebar() {
  return (
    <div className="w-[300px] flex-shrink-0 space-y-4">
      {ads.map((ad, index) => (
        <div key={index} className="text-center">
          <a href={ad.url} target="_blank" rel="noopener noreferrer">
            <img
              src={ad.image}
              alt={ad.alt}
              className="w-[300px] h-[250px] object-cover"
            />
          </a>
        </div>
      ))}
    </div>
  );
}
