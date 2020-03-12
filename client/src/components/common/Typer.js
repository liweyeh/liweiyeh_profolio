import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  'cursor': {
    marginLeft: theme.spacing(0.3),
    borderLeft: '.1em solid',
    animationName: '$blinker',
    animationDuration: '0.7s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite'
  },
  '@keyframes blinker': {
    from: { opacity: 1 },
    to: { opacity: 0 }
  }
}));

const Typer = () => {
  const [text, setText] = useState('');
  const classes = useStyles();
  // TODO: Accomdate language change
  const language = navigator.language.split(/[-_]/)[0] === 'ja' ? 'en' : 'en';

  // TODO: Need japapnese translation
  const fullText =
    language === 'en'
      ? "Welceom to Liwei's portfolio  :) "
      : "Welceom to Liwei's portfolio  :) ";

  useEffect(() => {
    const handleType = curText => {
      curText = fullText.substring(0, curText.length + 1);
      setText(curText);
      setTimeout(() => handleType(curText), 200);
    };

    handleType('');
  }, [fullText]);

  return (
    <>
      <Typography
        color='secondary'
        variant='h3'
        style={{ textAlign: 'center' }}
      >
        {text}
        <span className={classes.cursor}></span>
      </Typography>
    </>
  );
};

export default Typer;
