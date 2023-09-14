import PropTypes from 'prop-types';

export const Button = ({ onCklick }) => {
  return (
    <button type="button" onClick={() => onCklick()}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onCklick: PropTypes.func.isRequired,
};
