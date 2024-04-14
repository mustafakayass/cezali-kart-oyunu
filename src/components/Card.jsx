import React, { useState, useEffect } from 'react';
import Cezalar from '../Cezalar';

const Card = ({ category }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [seenCezalar, setSeenCezalar] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState('bg-blue-500'); // Başlangıçta mavi renk
  const [message, setMessage] = useState('Başlamak için tıkla');
  const [cezaIndex, setCezaIndex] = useState(0);

  useEffect(() => {
    // Her kategori değiştiğinde random bir index seç
    const randomIndex = Math.floor(Math.random() * Cezalar[category].length);
    setCezaIndex(randomIndex);
    setSeenCezalar([]); // Yeniden başladığımızda görülen cezaları sıfırla
  }, [category]);

  const handleClick = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      setBackgroundColor(getBackgroundColor(category));
      setMessage(getRandomCeza());
    } else {
      setIsFlipped(false);
      setBackgroundColor('bg-blue-500'); // Kartı çevirdiğimizde arka plan rengini mavi yap
      setMessage('Başlamak için tıkla');
    }
  };

  const getRandomCeza = () => {
    const cezalar = Cezalar[category];
    if (seenCezalar.length === cezalar.length) {
      return "Bu seviyedeki cezalar bitti diğer zorluk seviyelerinden devam edebilirsin :) ";
    } else {
      let nextIndex = cezaIndex;
      while (seenCezalar.includes(nextIndex)) {
        nextIndex = (nextIndex + 1) % cezalar.length;
      }
      setSeenCezalar([...seenCezalar, nextIndex]);
      setCezaIndex(nextIndex);
      return cezalar[nextIndex];
    }
  };

  const getBackgroundColor = (difficulty) => {
    switch (difficulty) {
      case 'kolay':
        return 'bg-green-500';
      case 'orta':
        return 'bg-orange-500';
      case 'zor':
        return 'bg-red-500';
      default:
        return 'bg-blue-500'; // Varsayılan olarak mavi
    }
  };

  return (
    <div style={{ userSelect: "none"}} className="flex flex-col justify-center items-center h-screen">
      <div className={`w-3/4 h-3/4 border border-gray-300 rounded-lg shadow-lg cursor-pointer relative ${backgroundColor}`} onClick={handleClick}>
        <div className={`absolute top-0 left-0 w-full h-full flex justify-center items-center transform transition-transform duration-500 ${isFlipped ? 'rotate-y-0' : 'rotate-y-180'}`}>
          <p className="text-gray-800 font-bold text-xl text-center px-4 py-2">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
