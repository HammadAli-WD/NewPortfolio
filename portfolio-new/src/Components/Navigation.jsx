import React from 'react'
import styled from 'styled-components'
import avatar from '../images/avatar.jpg'
import { NavLink } from "react-router-dom";
export default function Navigation() {
    return (
        <NavigationStyles>
            <div className="avatar">
                <img src={avatar} alt="" />
                <ul className="nav-items">
                    <li className="nav-items">
                        <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                    </li>
                    <li className="nav-items">
                        <NavLink to="/" activeClassName="active-class" exact>About</NavLink>
                    </li>
                    <li className="nav-items">
                        <NavLink to="/" activeClassName="active-class" exact>Experience</NavLink>
                    </li>
                    <li className="nav-items">
                        <NavLink to="/" activeClassName="active-class" exact>Projects</NavLink>
                    </li>
                    <li className="nav-items">
                        <NavLink to="/" activeClassName="active-class" exact>Blogs</NavLink>
                    </li>
                    <li className="nav-items">
                        <NavLink to="/" activeClassName="active-class" exact>Contact</NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <a href="" target="_blank" rel="noreferrer"> Copyright &copy; {new Date().getFullYear()} {<br />} Hammad Ali </a>
                </footer>
            </div>
        </NavigationStyles>
    )
}

const NavigationStyles = styled.nav`
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
height: 100%;
width: 100%;
border-right: 1px solid var(--border-color);
.avatar{
    width: 100%;
    border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        img{
            width: 70%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
}
.nav-items{
            width: 100%;
            .nav-item{
                list-style: none;
                text-align: center;

                a{
                    text-decoration:none;
                    font-size: inherit;
                    color: inherit;
                    text-align: center;
                    display: block;
                    padding: .5rem 0;
                    position: relative;
                    &::before{
                         content:'';
                         position: absolute;
                         top: 0;
                         left: 0;
                         width: .4rem;
                         height: 100%;
                         background-color: #0381ff33;
                         transform-origin: bottom ;
                         transform: scale(0);
                         overflow-x:hidden ;
                         transition: transform .2s, .2s width .06s cubic-bezier(1,-0.16,0,1.35);

                    }

                    &:hover::before{
                        width: 100%;
                        transform: scale(1);

                    }
                }
            }
        }

        .footer{
            width:100%;
            text-align:center;
            border-top: 1px solid #2e344e;
            a{
                color:inherit;
                width:55%;
                font-size: 1.1rem;
                text-align:center;
                padding:1rem 0;

            }

        }
`