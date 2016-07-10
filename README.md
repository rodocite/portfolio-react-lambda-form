# Portfolio - React/Lambda Event Planner App
This project is a "serverless" proof of concept using Amazon Lambda.

# Why?
I've always been interested in Lambda. This is a first set of projects where I'm back-end functionality into AWS Lambda instead of using a traditional provisioned server.

# Status
- All core parts hooked up and working. Front-end served on S3, Lambda for creating records defined, and DynamoDB tables created.
- Webpack is not compatible with the Node AWS SDK lib. As a workaround, visit: http://andrewhfarmer.com/aws-sdk-with-webpack/
- I had to use Cognito to allow front-end access to Lambda; it might be better to have a light weight server handling some authentication instead of going fully 'serverless'

# TODO
- Deploy from CLI
- Travis or CircleCI
- Flesh out form
- User Creation / Update
- Display data
- Validations

# Stack
- Amazon Lambda
- AWS DynamoDB
- AWS S3
- AWS Cognito
- React
- Webpack
- Babel
- ES6

# Visit
http://portfolio-lambda-event-planner.s3-website-us-west-2.amazonaws.com/
