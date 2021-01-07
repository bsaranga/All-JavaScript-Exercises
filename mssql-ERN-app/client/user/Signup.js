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
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="name"
              placeholder="Full Name"
              required
              onChange={handleChange('name')}
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange('email')}
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange('password')}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
              required
              onChange={handleChange('confirmPassword')}
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1"
              onClick={onSubmit}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    );
}