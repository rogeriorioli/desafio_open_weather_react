import styled from 'styled-components';

export const Container = styled.div`
    div {
        display : flex;
        justify-content : center;
        align-items : center;
        flex-direction : column;
        height : 100vh;
        padding : 50px 0;
        background-color : #000;
        color : #fff;
        &:after {
            content : "";
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                background-image : url('https://cruisewhitsundays.imgix.net/2019/04/CWS-Whitehaven-Beach-Drone-shot-person-standing-in-water-landscape_1920.jpg?fit=crop&w=500&h=595&dpr=2.625' );
                height : 100%;
                opacity : 0.3;
                z-index: 0;
                background-size : cover;
                background-position : center center;
        }
        h2 {
            position : relative;
            z-index : 1;
        }
        img {
            width : 150px;
            position : relative;
            z-index : 1;
        }
        span {
            font-size : 40px;
            font-weight : bold;
            z-index : 1;
        }
        &.Rain {
            &:after {
                background-image : url('https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80');
            }
        
        }
        &.Clouds {
            &:after {
                background-image : url('https://images.unsplash.com/photo-1505224526312-64368469c1f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')

            }
        }
        &.Clear {
            &:after{
                background-image : url('https://images.unsplash.com/photo-1495333258329-fe29ba3a7b4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
            }

        }
        &.Haze {
            &:after {
                background-image : url('https://images.unsplash.com/photo-1423209086112-cf2c8acd502f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80')
            }
        }
    }
`;
