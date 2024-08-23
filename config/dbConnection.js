const mongoose = require("mongoose");
// const dotenv = require("dotenv").config();

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(
      process.env.CONNECTION_STRING,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
    );

    console.log(
      "Database connected",
        connect.connection.host,
        connect.connection.name
    );
  } catch (error) {
    console.log("err");
    // process.exit(1);
  }
};
module.exports = connectDb ;



















// // const mongoose = require("mongoose");
// // const dotenv = require("dotenv").config();
// // const TextDecoderFatal = undefined;
// // const connectDb = async () => {
// //   try {
// //     const connect = await mongoose.connect(
// //         // process.env.CONNECTION_STRING
// //    "mongodb+srv://vengalrao845:Helpme@123Apperture@cluster0.2n89tgt.mongodb.net/?retryWrites=true&w=majority&appName=MyContactsApp"

// //         , {
// //       useNewUrlParser: true,
// //       useUnifiedTopology: true,
// //     });
// //     console.log(
// //       "Database connected:",
// //       connect.connection.host,
// //       connect.connection.name
// //     );
// //   } catch (error) {
// //     console.error("Error connecting to the database:", error);
// //     process.exit(1);
// //   }
// // };

// // module.exports = { connectDb };

// const mongoose = require("mongoose");
// const dotenv = require("dotenv").config();

// const connectDb = async () => {
//   try {
//     const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(
//       "Database connected:",
//       connect.connection.host,
//       connect.connection.name
//     );
//   } catch (error) {
//     console.log("jjjjjjjjjjj");
//     console.log(process.env.CONNECTION_STRING);
//     // console.error("Error connecting to the database:", error);
//     // process.exit(1);
//   }
// };

// module.exports = connectDb;
