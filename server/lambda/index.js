const { DynamoDBClient, PutItemCommand } = require('@aws-sdk/client-dynamodb');

const client = new DynamoDBClient({ region: 'eu-central-1' });

exports.handler = async (event) => {
  const body = typeof event.body === 'string' ? JSON.parse(event.body) : event;

  const params = {
    TableName: 'iot-sensor-data',
    Item: {
      deviceId:    { S: body.deviceId },
      timestamp:   { S: body.timestamp },
      temperature: { N: String(body.temperature) },
      humidity:    { N: String(body.humidity) },
      pressure:    { N: String(body.pressure) }
    }
  };

  await client.send(new PutItemCommand(params));

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Veri kaydedildi' })
  };
};