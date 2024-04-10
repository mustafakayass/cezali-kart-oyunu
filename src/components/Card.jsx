import React, { useState, useEffect } from 'react';
import Cezalar from '../Cezalar';

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cezaIndex, setCezaIndex] = useState({ difficulty: 'kolay', index: 0 });
  const [seenCezalar, setSeenCezalar] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState('bg-blue-500'); // Başlangıçta mavi renk
  const [message, setMessage] = useState('Başlamak için tıkla');

  useEffect(() => {
    // Her sayfa yenilendiğinde random bir index seç
    const randomDifficulty = ['kolay', 'orta', 'zor'][Math.floor(Math.random() * 3)];
    const randomIndex = Math.floor(Math.random() * Cezalar[randomDifficulty].length);
    setCezaIndex({ difficulty: randomDifficulty, index: randomIndex });
    setSeenCezalar([]); // Yeniden başladığımızda görülen cezaları sıfırla
  }, []);

  const handleClick = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      setBackgroundColor(getBackgroundColor(cezaIndex.difficulty));
      setMessage(getRandomCeza(cezaIndex.difficulty));
      markCezaAsSeen(cezaIndex);
    } else {
      setIsFlipped(false);
      setBackgroundColor('bg-blue-500'); // Kartı çevirdiğimizde arka plan rengini mavi yap
      setMessage('Başlamak için tıkla');
    }
  };


  const markCezaAsSeen = (index) => {
    setSeenCezalar([...seenCezalar, index]);
  };

  const getRandomCeza = (difficulty) => {
    const cezalar = Cezalar[difficulty];
    const randomIndex = Math.floor(Math.random() * cezalar.length);
    return cezalar[randomIndex];
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
