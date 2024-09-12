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
    return fName;
  }catch(error){
  return error;
  }
}

exports.checkAddress = async() =>{
  try{
    let add = "2A";
    return add;
  }catch(error){
    return error;
  }
}


exports.createAccount = async(event) =>{
  try{
      return event.body;
  }catch(error){
    return error;
  }
}
