//Dependencies
import React from 'react';
import { Typography } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { PropTypes } from 'prop-types';

const Text = ({ color, msgID, defaultMsg, variant }) => {
  return (
    <Typography
      color={color}
      variant={variant}
      noWrap
      style={{ textAlign: 'center' }}
    >
      <FormattedMessage id={msgID} defaultMessage={defaultMsg} />
    </Typography>
  );
};

export default Text;

Text.propTypes = {
  color: PropTypes.string,
  msgID: PropTypes.string,
  defaultMsg: PropTypes.string
};
