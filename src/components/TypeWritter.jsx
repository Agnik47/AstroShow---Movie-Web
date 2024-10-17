// TypeWritter.jsx
import React from "react";

const useTypingEffect = (words, typingSpeed = 150, deletingSpeed = 100, pauseTime = 1000) => {
  const [text, setText] = React.useState('');
  const [wordIndex, setWordIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentWord = words[wordIndex];
    
    const type = () => {
      if (!isDeleting && text.length < currentWord.length) {
        setText(currentWord.slice(0, text.length + 1));
      } else if (isDeleting && text.length > 0) {
        setText(text.slice(0, -1));
      } else if (text.length === 0 && isDeleting) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setIsDeleting(true);
      }
    };

    const typingTimer = setTimeout(() => {
      type();
    }, isDeleting ? deletingSpeed : text.length === currentWord.length ? pauseTime : typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

const TypeWritter = ({ words, typingSpeed, deletingSpeed, pauseTime }) => {
  const typedText = useTypingEffect(words, typingSpeed, deletingSpeed, pauseTime);
  return <span>{typedText}</span>;
};

export default TypeWritter;