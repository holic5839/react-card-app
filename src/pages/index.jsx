import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const CardWrapper = styled.div`
    padding: 15px;
    width: 300px;
    height: 500px;
    border: 1px solid #e5e5e5;
    border-radius: 15px;
    box-shadow: 20px 20px 20px 0 rgba(0, 0, 0, 0.1);
`;

const Main = () => {
    return (
        <CardContainer>
            <CardWrapper>카드</CardWrapper>
        </CardContainer>
    );
};

export default Main;
