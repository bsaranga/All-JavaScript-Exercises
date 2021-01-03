const React = require('react')
const {Route, Switch} = require('react-router-dom')
const Home = require('./core/Home')
const Users = require('./user/Users')

const MainRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/users" component={Users}/>
            </Switch>
        </div>
    )
}

module.exports = MainRouter