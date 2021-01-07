const React = require('react')
const {Route, Switch} = require('react-router-dom')
const Home = require('./core/Home')
const Signup = require('./user/Signup')
const Users = require('./user/Users')

const MainRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/users" component={Users}/>
                <Route path="/signup" component={Signup}/>
            </Switch>
        </div>
    )
}

module.exports = MainRouter