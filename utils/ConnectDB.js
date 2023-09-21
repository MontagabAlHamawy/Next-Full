const mongoose = require('mongoose');

export default async function ConnectDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/fullnext',
      { useUnifiedTopology: true, useNewUrlParser: true });

    console.log('Connected DB  successfully !')

  } catch (error) {
    console.log(error)
  }
}
