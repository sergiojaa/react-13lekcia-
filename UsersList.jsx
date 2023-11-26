import { Component } from "react";
import UserItem from "./UserItem";

class UsersList extends Component{
    // konstruktoris gamodzaxeba
    constructor(props){
        super(props) 
        console.log('constructor log')
        this.state = {
            show:true,
            inputValue: '',
            users: [{id:1,  name: "giga"}, { id:2, name: "sergi"}]
        }
    }
    // state = {
    //     inputValue: '',
    //     users: [{id:1,  name: "giga"}, { id:2, name: "sergi"}]
    // }
    static getDrivedStateFromProps(props, state){
        console.log('drived state log')
        return{
            name:'aragorn'
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(data => data.json())
        .then(res => console.log(res))
    }
    // shouldComponentUpdate(nextProps, nextState){
    //     return !(this.state.show == nextState.show && this.state.users ==  nextState.users)
    // }
    
    onChange = (event) =>{
        const value = event.target.value
        this.setState({
            inputValue: value
        })
    }
    addUser = (event) => {
        event.preventDefault()
        const user = {
            id: this.state.users.length + 1,
            name: this.state.inputValue
        }
        this.setState({
            users: [...this.state.users, user],
            inputValue: ''
        })
    }
    removeUser = (id) => {
        const users = this.state.users.filter((user) => user.id !== id)
        this.setState({
            users
        })
    }
    toggle = () => {
        this.setState((prevState) => {
            return {
                show: !prevState.show
            }
        })
    }
    open = () => {
        this.setState({show: true})
    }
    nextToDO = () => {
        this.setState((prevState) =>{
            return {
                todoId: prevState + 1
            }
        })
    }
    render(){
        console.log('render log',this.state)
        return(
            <div className="users">
                <form onSubmit={this.addUser}  className="user-form" >
                    <input type="text" onChange={this.onChange}  value={this.state.inputValue} />
                    <button type="submit" >add user</button>
                </form>
                <button onClick={this.toggle}>close </button>
                <button onClick={this.open}>open  </button>
                <button onClick={this.nextToDO}>next To DO</button>
                {this.state.show && this.state.users.map((user,) => (
                    <UserItem key={user.id} id= {user.id} name={user.name} action={this.removeUser} />
                ))}
            </div>
        )
    }
}
export default UsersList