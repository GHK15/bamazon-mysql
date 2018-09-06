var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
    printTable();
    takeOrder();
  }

function takeOrder() {
    connection.query("SELECT * FROM bamazon", function(err, results) {
        if (err) throw err;

    inquirer
    .prompt([
      {
      name: "itemID",
      type: "list",
      choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      message: "What is the item ID of the product you would like to purchase?"
      },
      {
      name: "itemQuantity",
      type: "input",
      message: "How many would you like?"
      }
    ])
    .then(function(answer) {
        var row = `SELECT * FROM bamazon WHERE item_id = ${answer.itemID}`
        var purchaseQuantity = answer.itemQuantity; 
        
        connection.query(row, function (err, res) {
            if (err) throw err;
            var stockQuantity = res[0].stock_quantity;
            if (purchaseQuantity <= stockQuantity) {
                    var updateQuantity = stockQuantity - purchaseQuantity;
                    var sqlUpdate = `UPDATE bamazon SET stock_quantity = ${updateQuantity} WHERE item_id = ${answer.itemID}`
                    connection.query(sqlUpdate, function (err, result) {
                        if (err) throw err;
                        console.log("****************************************************");
                        console.log("Transaction Successful! Thank you for your business.");
                        console.log("----------------------------------------------------")
                        console.log("RECEIPT | Item: " + res[0].product_name + " | Quantity: " + purchaseQuantity + " | Total: $" + res[0].price*purchaseQuantity + " | ");
                        console.log("----------------------------------------------------");
                        console.log("UPDATED PRODUCT TABLE:");
                        printTable();
                        connection.end();
                    });
                    
            }
            else {
                console.log("Insufficient quantity!")
            }
        })
    })
    .catch(function(err) {
        console.log(err);
    })  
    })
}

function printTable () {
    var printTable = "SELECT * FROM bamazon"
    connection.query(printTable, function(err, res) {
        if (err) throw err;
        console.table(res)
    })
}