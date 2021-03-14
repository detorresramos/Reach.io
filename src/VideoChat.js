import React from 'react'
import './App.css'
import 'firebase/database'
import classnames from 'classnames'

export default class VideoChat extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoggedIn: true,
      userToCall: null,
      username: null
    }
  }

  onLoginClicked = async () => {
    await this.props.onLogin(this.state.username)
    this.setState({
      isLoggedIn: true
    })
  }

  onStartCallClicked = () => {
    this.props.startCall(this.state.username, this.state.userToCall)
  }

  renderVideos = () => {
    return <div className={classnames('videos', { active: this.state.isLoggedIn })}>
      <div styles={{maxWidth: "100px"}}>
        <label>{this.state.username}</label>

        <video ref={this.props.setLocalVideoRef} autoPlay playsInline></video>
      </div>
      <div>
        <label>{this.props.connectedUser}</label>
        <video ref={this.props.setRemoteVideoRef} autoPlay playsInline></video>
      </div>

    </div>
  }

  renderForms = () => {
    return (
      <div key='a' className='form'>
        <label>Call to</label>
        <input value={this.state.userToCall} type="text" onChange={e => this.setState({ userToCall: e.target.value })} />
        <button onClick={this.onStartCallClicked} id="call-btn" className="btn btn-primary">Call</button>

      </div>
      )
  }

  render () {
    return <section id="container">
      {<div key='a' className='form'>
        <label>Call to</label>
        <input value={this.state.userToCall} type="text" onChange={e => this.setState({ userToCall: e.target.value })} />
        <button onClick={this.onStartCallClicked} id="call-btn" className="btn btn-primary">Call</button>

      </div>}

      {this.renderVideos()}

    </section>
  }
}
