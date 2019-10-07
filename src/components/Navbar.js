import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import { Logo } from "./Logo";
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  
  input {
    margin-right: 2px
  }
`

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{
          backgroundColor: 'var(--bg)',
          color: 'var(--textNormal)',
          transition: 'color 0.2s ease-out, background 0.2s ease-out',
        }}
      >
        <div className="container">
          <Logo />
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo"
              style={{ paddingTop: 0 }}>
              <h3 className="has-text-weight-bold is-size-3">Trunorth</h3>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
            <div className="navbar-end">
              <ThemeToggler>
                {({ theme, toggleTheme }) => (
                  <Label>
                    <input
                      type="checkbox"
                      onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                      checked={theme === 'dark'}
                    />{' '}
                    Dark mode
                 </Label>
                )}
              </ThemeToggler>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
