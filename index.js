const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection URL
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        // Connect to MongoDB
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db('reliefAid');
        const user = db.collection('users');
        const good = db.collection('goods');
        const gallery = db.collection("galleries");
        const testimonial = db.collection("testimonials");
        const supply = db.collection("supplies");

        // User Registration
        app.post('/api/v1/register', async (req, res) => {
            const { name, email, password } = req.body;

            // Check if email already exists
            const existingUser = await user.findOne({ email });
            if (existingUser) {
                return res.status(400).json({
                    success: false,
                    message: 'User already exists'
                });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Insert user into the database
            await user.insertOne({ name, email, password: hashedPassword });

            res.status(201).json({
                success: true,
                message: 'User registered successfully'
            });
        });
       // Get all users
app.get('/api/v1/users', async (req, res) => {
    try {
        const users = await user.find().toArray();
        res.status(200).json({
            success: true,
            message: 'Users retrieved successfully',
            data: users
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ 
            success: false,
            message: 'Internal server error' 
        });
    }
});

        // User Login
        // User Login
app.post('/api/v1/login', async (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    const foundUser = await user.findOne({ email });
    if (!foundUser) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare hashed password
    const isPasswordValid = await bcrypt.compare(password, foundUser.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ email: foundUser.email }, process.env.JWT_SECRET, { expiresIn: process.env.EXPIRES_IN });

    res.json({
        success: true,
        message: 'Login successful',
        token
    });
});



        // ==============================================================
        app.get('/api/v1/goods', async (req, res) => {
            try {
                const goods = await good.find().toArray();
                res.status(200).json({
                    success: true,
                    message: 'Goods retrieved successfully',
                    data: goods
                });
            } catch (error) {
                console.error('Error fetching users:', error);
                res.status(500).json({ 
                    success: false,
                    message: 'Internal server error' 
                });
            }
        });
        app.get('/api/v1/goods/:id', async (req, res) => {
            try {
                const id = req.params.id;
                
                 const query = { _id: new ObjectId(id) };
                 const singleGood = await good.findOne(query); // Use findById method of Mongoose to find a good by its ID
                 console.log(singleGood);
                if (!singleGood) {
                    return res.status(404).json({ 
                        success: false,
                        message: 'Good not found'
                    });
                }
        
                res.status(200).json({ 
                    success: true,
                    message: 'Good retrieved successfully',
                    data: singleGood
                });
            } catch (error) {
                console.error('Error fetching good:', error);
                res.status(500).json({ 
                    success: false,
                    message: 'Internal server error' 
                });
            }
        });
        
        //gallery

        app.get('/api/v1/galleries', async (req, res) => {
            try {
                const galleries = await gallery.find().toArray();
                res.status(200).json({
                    success: true,
                    message: 'Gallery retrieved successfully',
                    data: galleries
                });
            } catch (error) {
                console.error('Error fetching users:', error);
                res.status(500).json({ 
                    success: false,
                    message: 'Internal server error' 
                });
            }
        });
        app.get('/api/v1/testimonials', async (req, res) => {
            try {
                const testimonials = await testimonial.find().toArray();
                res.status(200).json({
                    success: true,
                    message: 'Testimonials retrieved successfully',
                    data: testimonials
                });
            } catch (error) {
                console.error('Error fetching users:', error);
                res.status(500).json({ 
                    success: false,
                    message: 'Internal server error' 
                });
            }
        });
        app.get('/api/v1/supplies', async (req, res) => {
            try {
                const supplies = await supply.find().toArray();
                res.status(200).json({
                    success: true,
                    message: 'Supplies retrieved successfully',
                    data: supplies
                });
            } catch (error) {
                console.error('Error fetching users:', error);
                res.status(500).json({ 
                    success: false,
                    message: 'Internal server error' 
                });
            }
        });
        app.post("/api/v1/supplies", async (req, res) => {
          try {
            const { title, category, image, amount, description } = req.body;
            const newSupply = {
              title,
              category,
              image,
              amount,
              description,
            };
            console.log(newSupply);
            const result=await supply.insertOne(newSupply)
            res.status(200).json({
                success: true,
                message: "New Supply found successfully",
                data: result,
              });
          } catch (error) {
            console.error("error posting supply", error);
            res.status(500).json({
              success: false,
              message: "Internal server error or supplu not posted",
              error,
            });
          }
        });

        app.get("/api/v1/supplies/:id", async (req, res) => {
          try {
            const id = req.params.id;
            // console.log(id);
            const query = { _id: new ObjectId(id) };
            const singleSupply = await supply.findOne(query);
            // console.log(singleSupply);
            if (!singleSupply) {
              return res.status(401).json({
                success: false,
                message: "Supply not found",
              });
            }
            res.status(200).json({
              success: true,
              message: "Supply found successfully",
              data: singleSupply,
            });
          } catch (error) {
            // console.error("error fetching supply", error);
            res.status(500).json({
              success: false,
              message: "Internal server error or Supply not found",
              error,
            });
          }
        });
        app.delete("/api/v1/supplies/:id",async(req,res)=>{
            try {
                const id=req.params.id;
                console.log(id)
                const query={_id:new ObjectId(id)};
                const result=await supply.deleteOne(query);
                res.status(200).json({
                    success:true,
                    message:"Supply deleted successfully",
                    data:result
                })
            } catch (error) {
                console.error("error fetching supply", error);
                res.status(500).json({
                  success: false,
                  message: "Internal server error or Supply not delted",
                  error,
                });
            }
        })
        // ==============================================================


        // Start the server
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });

    } finally {
    }
}

run().catch(console.dir);

// Test route
app.get('/', (req, res) => {
    const serverStatus = {
        message: 'Server is running smoothly',
        timestamp: new Date()
    };
    res.json(serverStatus);
});