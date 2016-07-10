import React, { Component } from 'react'
import render from 'react-dom'
import 'aws-sdk/dist/aws-sdk'
const AWS = window.AWS
AWS.config.region = 'us-east-1'
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  AccountId: "219198288256",
  RoleArn: "arn:aws:iam::219198288256:role/Cognito_portfolioUnauth_Role",
  IdentityPoolId: 'us-east-1:9d5bbf36-8223-4ed5-83f8-f06b53138fa6'
})

class EventPlanner extends Component {
  submit(refs) {
    const lambda = new AWS.Lambda()

    const {
      inputEmail: email,
      inputFname: fname,
      inputLname: lname,
      inputEvent: event
    } = refs

    lambda.invoke({
      FunctionName: 'portfolio-lambda-event-planner-create-user',
      Payload: JSON.stringify({
        Item: {
          email: email.value,
          fname: fname.value,
          lname: lname.value,
          event: event.value
        }
      })
    }, (error, data) => {
      if (error) {
        console.error('error', error)
      }
    })
  }

  render() {
    return (
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" ref="inputEmail" type="text" placeholder="name@example.com" />
        <label htmlFor="fname">First Name:</label>
        <input id="fname" ref="inputFname" type="text" />
        <label htmlFor="lname">Last Name:</label>
        <input id="lname" ref="inputLname" type="text" />
        <label htmlFor="event">Event:</label>
        <input id="event" ref="inputEvent" type="text" placeholder="Party" />
        <button onClick={ () => this.submit(this.refs) }></button>
      </div>
    )
  }
}

render.render(
  <EventPlanner />,
  document.getElementById('react-entry')
)
