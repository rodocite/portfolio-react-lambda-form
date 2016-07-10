const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient()

exports.handler = (event, context) => {
  console.log('Adding a new item...')
  event['TableName'] = 'portfolio-lambda-event-planner'

  dynamo.put(event, (err) => {
    if (err) {
      console.error('Unable to add item. Error JSON:', JSON.stringify(err, null, 2))
    } else {
      console.log('Added item:', JSON.stringify(event, null, 2))
    }
  })
}
