import React, { useEffect, useMemo, useState } from 'react';

const wordList: string[] = ['exciting', 'productive', 'fun again'];

const TypingText = (): React.ReactElement => {
  const [text, setText] = useState('');
  const [back, setBack] = useState(false);
  const [current, setCurrent] = useState(0);
  const [timing, setTiming] = useState(0);
  const wordListMemo = useMemo(() => wordList, []);

  const [blinkerVisible, setBlinkerVisible] = useState(true);
  const toggleBlinker = () => setBlinkerVisible((cur) => !cur);

  const tick = () => {
    if (back)
      setText((cur) => wordListMemo[current].substring(0, cur.length - 1));
    else setText((cur) => wordListMemo[current].substring(0, cur.length + 1));

    setTiming((200 - Math.random() * 100) / (back ? 2 : 1));
  };

  useEffect(() => {
    if (!back && text === wordListMemo[current]) {
      setTiming(2000);
      setBack(true);
    } else if (back && text === '') {
      setTiming(500);
      setBack(false);
      setCurrent((cur) => (cur === wordListMemo.length - 1 ? 0 : cur + 1));
    }
    setTimeout(tick, timing);
  }, [text, back]);

  useEffect(() => {
    const blinkTimer = setTimeout(toggleBlinker, 650);
    return () => clearTimeout(blinkTimer);
  }, [blinkerVisible]);

  return (
    <div className="typing-text-wrapper">
      <p>
        Make your meetings
        <br />
        <span className="typing-text">{text}</span>
        <span className={`blink${blinkerVisible ? '' : ' off'}`}>|</span>
      </p>
      <br />
      <p>
        <a href="http://tricktionary.monster">Play Now</a>
      </p>
    </div>
  );
};

export default TypingText;
