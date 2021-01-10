import { React } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { clearJWT, isAuthenticated } from '../auth/auth-helper'
import { Button } from 'antd'
import '../styles/core/header.css'

const Header = withRouter(({history}) => {
    function isActive(history, path) {
        if(history.location.pathname === path) {
            return {color: '#ff4081'}
        }
    }
    console.log(isAuthenticated())
    return (
      <span>
        <Link className="linkTag" to="/" style={isActive(history, "/")}>
          Home
        </Link>
        <Link
          className="linkTag"
          to="/users"
          style={isActive(history, "/users")}
        >
          Users
        </Link>
        {!isAuthenticated() && (
          <span>
            <Link
              className="linkTag"
              to="/signup"
              style={isActive(history, "/signup")}
            >
              Sign up
            </Link>
            <Link
              className="linkTag"
              to="/signin"
              style={isActive(history, "/signin")}
            >
              Sign in
            </Link>
          </span>
        )}
        {isAuthenticated() && (
          <span>
            <Link
              className="linkTag"
              to={`/user/${isAuthenticated().user.id}`}
              style={isActive(history, `/user/${isAuthenticated().user.id}`)}
            >
              My Profile
            </Link>
            <Button
              size="small"
              shape="round"
              type="primary"
              onClick={() => {
                clearJWT(() => history.push("/"));
              }}
            >
              Signout
            </Button>
          </span>
        )}
      </span>
    );
})

export default Header