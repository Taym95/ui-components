import React from 'react';
import styled from 'styled-components';
import ReCyCleTheme from '../src/ReCyCleTheme';

const theme = {
    primary: '#006b94',
};

// Ugly hacks because Storybook inserts two divs between the <body> and our React component root
const Wrapper = styled.div`
    height: 100%;

    > div, > div > div {
        height: 100%;
    }
`;

export default story =>
    <ReCyCleTheme theme={theme}>
        <Wrapper>
            {story()}
        </Wrapper>
    </ReCyCleTheme>;
