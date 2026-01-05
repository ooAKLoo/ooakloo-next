import { useEffect, useState } from 'react';

export function useTypewriter(
  text: string,
  speed: number = 100,
  deleteSpeed: number = 50,
  pause: number = 2000
): [string, boolean] {
  const [output, setOutput] = useState('');
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    // If text is empty, return and hide cursor
    if (!text) {
      setOutput('');
      return;
    }

    const sections = text.split(/{{|}}/);
    let currentSection = 0;
    let index = 0;
    let isDeleting = false;
    let permanentText = '';
    let timeoutId: ReturnType<typeof setTimeout>;

    function type() {
      if (currentSection >= sections.length) {
        timeoutId = setTimeout(() => {
          setIsCursorVisible(false);
        }, 4000);
        return;
      }

      const section = sections[currentSection];
      let updatedText = permanentText;

      if (isDeleting) {
        updatedText += section.substr(0, --index);
      } else {
        updatedText += section.substr(0, ++index);
      }

      setOutput(updatedText);

      if (!isDeleting && index === section.length) {
        if (currentSection % 2 === 1) {
          timeoutId = setTimeout(() => {
            isDeleting = true;
            type();
          }, pause);
        } else {
          permanentText += section;
          currentSection++;
          index = 0;
          type();
        }
      } else if (isDeleting && index === 0) {
        isDeleting = false;
        currentSection++;
        type();
      } else {
        timeoutId = setTimeout(type, isDeleting ? deleteSpeed : speed);
      }
    }

    type();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [text, speed, deleteSpeed, pause]);

  return [output, isCursorVisible];
}
