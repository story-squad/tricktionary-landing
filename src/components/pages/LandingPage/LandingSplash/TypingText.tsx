import React, { useEffect, useMemo, useState } from 'react';

const wordList: string[] = ['Turbocharge', 'Empower', 'Unleash'];

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

    setTiming(200 - Math.random() * 100);
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
      <span className="typing-text">{text}</span>
      <span className={`blink${blinkerVisible ? '' : ' off'}`}>|</span>
      <br />
      your kid&apos;s creativity!
    </div>
  );
};

export default TypingText;
