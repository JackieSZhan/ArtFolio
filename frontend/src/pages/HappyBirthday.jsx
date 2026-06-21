import { useState, useRef } from 'react';
import './HappyBirthday.css';

function HappyBirthday() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="birthday-page">
      <h1 className="birthday-title">Happy Birthday, 靓靓! 🎂</h1>

      <div className="cake-scene">
        <div className="confetti-layer" id="confetti-layer"></div>

        {/* Plate */}
        <div className="cake-plate"></div>

        {/* Cake layers */}
        <div className="cake-bottom"></div>
        <div className="cake-bottom-frosting"></div>
        <div className="cake-top"></div>
        <div className="cake-top-frosting"></div>

        {/* Sprinkles */}
        <div className="sprinkle sprinkle-1"></div>
        <div className="sprinkle sprinkle-2"></div>
        <div className="sprinkle sprinkle-3"></div>

        {/* Candles */}
        <div className="candle candle-1"></div>
        <div className="flame flame-0"></div>
        <div className="candle candle-2"></div>
        <div className="flame flame-1"></div>
        <div className="candle candle-3"></div>
        <div className="flame flame-2"></div>
      </div>

      <button className="confetti-btn" onClick={triggerConfetti}>
        ✨ Make a wish
      </button>

      <div className="audio-player">
        <audio ref={audioRef} src="/birthday-song.mp3"></audio>
        <button className="audio-btn" onClick={toggleAudio}>
          {isPlaying ? '⏸ 先欠着 电音蝌蚪实在太难哈哈哈' : '▶ Play a song'}
        </button>
      </div>
    </div>
  );
}

function triggerConfetti() {
  const layer = document.getElementById('confetti-layer');
  const colors = ['#D85A30', '#D4537E', '#7F77DD', '#1D9E75', '#EF9F27', '#378ADD'];
  for (let i = 0; i < 28; i++) {
    const piece = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 260;
    const delay = Math.random() * 0.3;
    const duration = 1.4 + Math.random() * 0.8;
    const size = 5 + Math.random() * 4;
    piece.style.position = 'absolute';
    piece.style.left = left + 'px';
    piece.style.top = '0px';
    piece.style.width = size + 'px';
    piece.style.height = size + 'px';
    piece.style.background = color;
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    piece.style.animation = `confettiFall ${duration}s ease-in ${delay}s forwards`;
    layer.appendChild(piece);
    setTimeout(() => piece.remove(), (duration + delay) * 1000 + 400);
  }
}

export default HappyBirthday;