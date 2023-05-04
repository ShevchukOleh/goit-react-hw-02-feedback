import PropTypes from 'prop-types';
import { List, ListItem } from './Statistics.styled'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <List>
            <ListItem>Good: { good }</ListItem>
            <ListItem>Neutral: { neutral }</ListItem>
            <ListItem>Bad: { bad }</ListItem>
            <ListItem>Total: { total }</ListItem>
            <ListItem>Positive Feedback: { positivePercentage }%</ListItem>
        </List>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};