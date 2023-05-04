import styled from 'styled-components';

export const FeedbackButtons = styled.div`
    display: flex;
    gap: 15px;
`;

export const Button = styled.button`
    padding: 5px 15px;
    border: 1px solid gray;
    border-radius: 3px;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: .03em;

    &:first-child {
        background-color: green;
        color: white;
    }
    &:last-child {
        background-color: red;
        color: white;
    }
`;