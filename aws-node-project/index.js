module.exports.handler = async (event) => {
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
   let fName = "ragini";
   const response = {
    statusCode: 200,
    body: JSON.stringify({ message: `Data received successfully , ${fName}` })
  };
  return response;
  }catch(error){
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' })
    };
  }
}

exports.checkAddress = async() =>{
  try{
    let add = "2A";
    const response = {
      statusCode: 200,
      body: JSON.stringify({ message: `Data received successfully , ${add}` })
    };
    return response;
  }catch(error){
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' })
    };
  }
}


exports.createAccount = async(event) =>{
  try{
    const data = JSON.stringify(event.body);
    const response = {
      statusCode: 200,
      body: JSON.stringify({ message: `Data received successfully , ${data}` })
    };
    return response;
  }catch(error){
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: `Internal server error,${error}` })
    };
  }
}
