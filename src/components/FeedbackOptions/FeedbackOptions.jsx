import PropTypes from 'prop-types';
import { FeedbackButtons, Button } from './FeedbackOptions.styled'

export const FeedbackOptions = ({onLeaveFeedback, options}) => {
    return (
        <FeedbackButtons>
            {options.map(reaction => (
                <Button key={reaction} onClick={() => onLeaveFeedback(reaction)}>{reaction}</Button>))
            }
        </FeedbackButtons>
    )    
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
