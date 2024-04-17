const express = require('express')
const router = express.Router()

// get all products 
router.get('/products' , (req ,res) => {
    res.status(200)
    res.json([
        {
            prodctName : 'Iphone 16',
            productPrice : '$1300',

        },

        {
            ProductName : 'Iphond 14',
            productPrice : '$1400',
        },

        {
            ProductName : 'Iphond 13',
            productPrice : '$1600',
        }
    ])
})



// get a single product
router.get('/products/:id' , (req , res) => {
    res.status(200)
    res.json({
        ProductName : 'Iphond 15',
        productPrice : '$1200',
    })
})

// create a product
router.post('/products' , (req , res) => {
    res.status(200)
    res.json({
        message: "product added succesfully"
    })
})

// Updating a Product
router.put('/products/:id' , (req , res) => {
    res.status(200)
    res.json({
        message: "Produt updated successfully"
    })
})

// deleting a product
router.delete('/products/:id' , (req , res) => {
    res.status(200)
    res.json({
        message: "Produt Deleted successfully"
    })
})


module.exports = router;