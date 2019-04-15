import React, {Fragment} from 'react';
import styled from 'tachyons-components'
import Bg from './bglang'

const Wrapper = styled('div')`

`
const Text = styled('div')`nb6` 
const TextThin = styled('div')`fw1` 


const Header = (props) => (
    <div className="wieneke">
    <Wrapper className="texter">
        <h1> <Text>HELLO!</Text> </h1>
        <h1> <Text>I'M</Text> </h1>
        <h1> <Text>SIMILAR</Text> </h1>
        <h1> <Text>OBJECTS</Text> </h1>
        <TextThin>I like poop. </TextThin>
    </Wrapper>
    </div>
    );

  export default Header;