import React from 'react';
// Styles
import { Wrapper, Content, Text } from './HeroImage.styles';

const HeroImage = ({ image, tittle, text }) =>(
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{tittle}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
)

export default HeroImage;