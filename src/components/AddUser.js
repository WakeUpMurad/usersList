import React from 'react';
import user from "./User";

class AddUser extends React.Component {

    userAdd = {}
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            age: 2,
            isHappy: false,
        }
    }
    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input type="text" placeholder='Имя' onChange={(e) => this.setState({first_name: e.target.value})}/>
                <input type="text" placeholder='Фамилия' onChange={(e) => this.setState({last_name: e.target.value})}/>
                <textarea name="email" id="email" cols="30" rows="5" placeholder='Email' onChange={(e) => this.setState({email: e.target.value})}></textarea>
                <input type="text" placeholder='Возраст' onChange={(e) => this.setState({age: e.target.value})}/>
                <label htmlFor="isHappy">Счастив?</label>
                <input type="checkbox" id='isHappy' placeholder='Имя' onChange={(e) => this.setState({isHappy: e.target.checked})}/>
                <button type='button' onClick={() => {
                    this.myForm.reset();
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                        age: this.state.age,
                        isHappy: this.state.isHappy,
                    }
                    if (this.props.user)
                        this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd)
                }}>Добавить</button>
            </form>
        )
    }
}
export default AddUser;