const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const {Product} = require("./model/product");
const {Users} = require("./model/users");
const app = express();
require("dotenv/config");

app.use(express.json());
app.use(morgan("tiny"));
const api = process.env.API_URL;

app.get(`${api}/products`, async (req, res) => {
  let users = await Product.find();
  res.json(users);
  if (!users) {
    res.send("Product  topilmadi");
  } else {
    res.send(users);
  }
});

app.post(`${api}/product`, async (req, res) => {
  const product = await new Product({
    name: req.body.name,
    model: req.body.model,
  });
  product.save();

  res.send(product);
  then(() => {
    console.log(product);
  }).catch((err) => {
    console.log(err);
  });
});

//id
app.get(`${api}/product/:id`, async (req, res) => {
  let users = await Product.findById(req.params.id);
  if (!users) {
    res.send("Product  topilmadi");
  } else {
    res.send(users);
  }
});

//Users
//get
app.get(`${api}/user`, async (req, res) => {
	let user = await Users.find();
	res.json(user);
	if (!user) {
	  res.send("User  topilmadi");
	} else {
	  res.send(user);
	}
  });
  //ger/id
  app.get(`${api}/user/:id`, async (req, res) => {
	let users = await Users.findById(req.params.id);
	if (!users) {
	  res.send("User  topilmadi");
	} else {
	  res.send(users);
	}
  });
  
  //post
  app.post(`${api}/users`, async (req, res) => {
	const user = await new Users({
	  name: req.body.name,
	  surname: req.body.surname,
	  age: req.body.age,
	  job: req.body.job,
	});
	user.save();
	res.send(user);
	then(() => {
	  console.log(user);
	}).catch((err) => {
	  console.log(err);
	});
  });    


    

mongoose
  .connect(`${process.env.MONGOLINK}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "products",
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(`${process.env.PORT}`, () => {
  console.log("localhost 4000 da ishga tushdi");
});



//mogoose
mongoose
  .connect(`${process.env.MONGOLINK}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "user",
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(`${process.env.PORTT}`, () => {
  console.log("localhost 3000 da ishga tushdi");
});
      