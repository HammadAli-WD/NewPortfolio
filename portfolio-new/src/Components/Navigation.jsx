import React from 'react'
import styled from 'styled-components'
import avatar from '../images/avatar.jpg'
import { Link } from "react-router-dom";
function Navigation() {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            <ul className="nav-items">
                <li className="nav-items">
                    <Link to="/home" activeClassName="active-class" exact>Home</Link>
                </li>
                <li className="nav-items">
                    <Link to="/home" activeClassName="active-class" exact>About</Link>
                </li>
                <li className="nav-items">
                    <Link to="/home" activeClassName="active-class" exact>Experience</Link>
                </li>
                <li className="nav-items">
                    <Link to="/home" activeClassName="active-class" exact>Projects</Link>
                </li>
                <li className="nav-items">
                    <Link to="/home" activeClassName="active-class" exact>Blogs</Link>
                </li>
                <li className="nav-items">
                    <Link to="/home" activeClassName="active-class" exact>Contact</Link>
                </li>
            </ul>
            <footer className="footer">
                <a href="" target="_blank" rel="noreferrer"> Copyright &copy; {new Date().getFullYear()} {<br />} Hammad Ali </a>
            </footer>

        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
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
        text-align: center;
        .active-class{
            background-color: var(--primary-color-light);
            color: white;
        }
        li{
            display: block;
            a{
                display: block;
                padding: .45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                &:hover{
                    cursor: pointer;
                    color: var(--white-color);
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var( --primary-color);
                    transition: All 0.5s cubic-bezier(1,-0.3,.22,.94) ;
                    opacity: 0.25;
                    z-index: -1;
                }
            }
            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }
    footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        p{
            padding: 1.3rem 0;
            font-size: 1.1rem;
            display: block;
            text-align: center;
        }
    }
`

export default Navigation