import React, {PureComponent} from 'react';

import PageHeadingWrapper from '../styled/PageHeadingWrapper';
import PageMainHeading from '../styled/PageMainHeading';
import PageSubHeading from '../styled/PageSubHeading';
import PageHeadingButton from '../styled/PageHeadingButton';

class PageHeading extends PureComponent {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    /* Notka dla Maldzi!
    
    Zeby zrobic super onClicka, trzeba wykorzystac stan. Fajnie by bylo, gdyby bylo to za pomoca Reduxa
    (bo docelowo chcemy go uzywac), ale mozna tez skorzystac z Reactowego this.state i setState.
    Tak czy inaczej, trzeba zrobic zmienna w stanie (np. isVisible) i dac jej domyslnie false. Ta zmienna ma byc
    przekazywana do komponentu form jako props i ma byc warunek, ze jesli isVisible === false, to komponent jest niewidoczny,
    jak true, to ma sie pojawiac. 

    :)
    
    */

    handleClick() {
        console.log('lol')
    }
    render(){
        return (
        <PageHeadingWrapper>
            <PageSubHeading>
                Welcome to FitHabit
            </PageSubHeading>
            <PageMainHeading>
                Sign Up and let's start this great adventure of building healthy habits. On our gym it's gonna be easy and fun!
            </PageMainHeading>
            <PageHeadingButton>
                Sign Up
            </PageHeadingButton>
            <PageHeadingButton onClick={this.handleClick}>
                Sign In
            </PageHeadingButton>
        </PageHeadingWrapper>
               
        );
    }
}

export default PageHeading;