const { Component } = React

class Login extends Component {
    handleFormSubmit = event => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        authenticateUser(username, password, error => {
            if (error) {
                alert(error.message)

                return
            }

            sessionStorage.username = username

            this.props.onUserLoggedIn()
        })  
    }

    handleRegisterLinkClick = event => {
        event.preventDefault()

        this.props.onRegisterLinkClicked()
    }

    render() {
        return <div className="login-box">
            <form className="Container" onSubmit={this.handleFormSubmit}>
            <div className="user-box">
                <input className="Input Input--light" type="text" name="username"  />
                <label>Username</label>               
                </div>
                <div class="user-box">
                <input className="Input Input--light" type="password" name="password" />
                <label>Password</label>
                </div>
                <div class="user-box">
                <button className="Button Btn-ani Button--light">Login</button>
               
                </div>
                <a href="#" onClick={this.handleRegisterLinkClick}>Go Register</a>
            </form>
        </div>
    }
}