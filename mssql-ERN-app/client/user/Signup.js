const React = require('react')
const useState = React.useState
const create = require('./api-user').create

module.exports = function Signup() {

    const [values, setValues] = useState({
        name: '',
        password: '',
        confirmPassword: '',
        email: '',
        open: false,
        error: ''
    })

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value})
    }

    const onSubmit = () => {
        if(values.password !== values.confirmPassword) {
            alert('Passwords do not match')
        }else{
            const user = {
                name: values.name || undefined,
                email: values.email || undefined,
                hashed_password: values.password || undefined
            }

            create(user).then((data) => console.log(data))
        }
    }

    return (
        <div>
            
        </div>
    );
}