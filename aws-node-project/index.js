
const AWS =  require('aws-sdk');
const dynamodb = new AWS.DynamoDB({});

const ServerlessClient = require('serverless-postgres')
const { Client } = require('pg');
const { json } = require('sequelize');



exports.test = async() =>{

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};

exports.checkName = async() =>{
 try{
    
    // let client = await pgClient();
    // console.log(
    // await client.connect());
    // const result = await client.query(`SELECT first_name from customers limit 1`); 
  return "result";
  }catch(error){
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' })
    };
  }
}
exports.createAccount = async (event) => {
  const params = {
    TableName: 'myTableName',
    AttributeDefinitions: [
      { AttributeName: 'id', AttributeType: 'S' }
    ],
    KeySchema: [
      { AttributeName: 'id', KeyType: 'HASH' }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5
    }
  };
  try {
    const data = await dynamodb.createTable(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error creating table' })
    };
  }
};


exports.getData = async (event) =>{ 
  var params = {
    Key: {
      "name": {
        S: event.pathParameters.name
      }
    }, 
    TableName: "customersNamesTable"
    };
    let data = await dynamodb.getItem(params).promise();
    return data.Item;     
}

exports.checkAddress = async (event) =>{
  console.log(event);
  var params = {
    Key: {
     "address": {
       S: event.pathParameters.address
      }
    }, 
    TableName: "customersAddressTable"
   };
  let data = await dynamodb.getItem(params).promise();
  return data.Item;

}


exports.createCustomerAccount = async (event) =>{
  try{
    var params = {
      Item: {
       "customerId": {
         S: "3"
        }, 
       "name": {
         S: "No One You Know"
        }, 
       "address": {
         S: "Call Me Today"
        }
      }, 
      ReturnConsumedCapacity: "TOTAL", 
      TableName: "customersAccountTable"
     };
    let data = await dynamodb.putItem(params).promise();
    return data;
  }catch(er){

  }

}
