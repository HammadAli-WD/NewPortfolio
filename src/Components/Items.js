import React from 'react'
import styled from 'styled-components';

function Items({year, title, subTitle, text}) {
    return (
        <ItemsStyled>
            
            <div className="right-content">                
                <h5>{title}</h5>
                <p>{year}</p>
                <h6>{subTitle}</h6>
                <p>{text}</p>
            </div>
        </ItemsStyled>
    )
}

const ItemsStyled = styled.div`
    //display: flex;
    @media screen and (max-width: 421px){
        p, h5, h6{
            font-size: 80%;
        }
    }
    &:not(:last-child){
        padding-bottom: 3rem;
    }
    .left-content{
        //width: 80%;
        padding-left: 10px;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: -10px;
            top: 5px;
            height: 15px;
            width: 10px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--background-dark-color);
        }
        p{
            display: inline-block;
        }
    }
    .right-content{
        padding-left: 5rem;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 15px;
            height: 2px;
            width: 3rem;
            background-color: var(--border-color);
        }
        h5{
            color: var(--primary-color);
            font-size: 2rem;
            padding-bottom: .4rem;
        }
        h6{
            padding-bottom: .6rem;
            font-size: 1.5rem;
        }
    }
`;
export default Items;