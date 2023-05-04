import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';


export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    addFeedback = type => {
        this.setState(prevState => ({
            [type]: prevState[type] + 1
        }));
    };

    Total = () => {
        return Object.values(this.state).reduce((acc, el) => acc + el, 0);
    }

    PositiveFeedback = () => {
        const totalReaction = this.Total();

        if (!totalReaction) return 0;

        return Math.round((this.state.good * 100) /  totalReaction);
    }

    render() {
        const totalFeedback = this.Total();
        const positiveFeedback = this.PositiveFeedback();
        const { good, neutral, bad} = this.state;
        
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions onLeaveFeedback={this.addFeedback} options={Object.keys(this.state)}/>
                </Section>

                <Section title="Statistics">
                    <div>
                        {!totalFeedback ? (<Notification message="There is no feedback" />) : (<Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={totalFeedback}
                            positivePercentage={positiveFeedback}/>
                        )}
                    </div>
                </Section>
            </div>
        );
    };
}