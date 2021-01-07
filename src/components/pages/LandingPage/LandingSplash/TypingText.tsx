import React, { useEffect, useMemo, useState } from 'react';

const wordList: string[] = [' Turbocharge ', ' Empower ', ' Unleash '];

const TypingText = (): React.ReactElement => {
  const [text, setText] = useState('');
  const [back, setBack] = useState(false);
  const [current, setCurrent] = useState(0);
  const [timing, setTiming] = useState(0);
  const wordListMemo = useMemo(() => wordList, []);

  const [blinkerVisible, setBlinkerVisible] = useState(true);
  const toggleBlinker = () => setBlinkerVisible((cur) => !cur);

  const tick = () => {
    const fullText = wordListMemo[current];
    if (back) setText((cur) => fullText.substring(0, cur.length - 1));
    else setText((cur) => fullText.substring(0, cur.length + 1));

    setTiming(200 - Math.random() * 100);

    console.log({ text, current, back });
    if (!back && text === fullText) {
      setTiming(2000);
      setBack(true);
    } else if (back && text === '') {
      setTiming(500);
      setBack(false);
      setCurrent((cur) => (cur === wordListMemo.length - 1 ? 0 : cur + 1));
    }
  };

  useEffect(() => {
    setTimeout(tick, timing);
  }, [text, back]);

  useEffect(() => {
    const blinkTimer = setTimeout(toggleBlinker, 650);
    return () => clearTimeout(blinkTimer);
  }, [blinkerVisible]);

  return (
    <div className="typing-text">
      {text}
      <span className={`blink${blinkerVisible ? '' : ' off'}`}>|</span>
    </div>
  );
};

export default TypingText;
