exports.handler = async function (e, c){
  return{
    statusCode: 200,
    body: JSON.stringify({
      name:' me',
      age: 2,
      email: '3m@gmail.com'
    })
  }
}