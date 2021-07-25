import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'

export default function Sidebar() {
    return (
        <SidebarStyled>
            <Navigation />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
width: 16.3rem;
height: 100vh;
position: fixed;
background-color: var(--sidebar-dark-color);

`