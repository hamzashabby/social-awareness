const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('Connection error', err);
});

// Define Campaign model
const CampaignSchema = new mongoose.Schema({
  title: String,
  description: String,
  goal: Number,
  progress: Number
});

const Campaign = mongoose.model('Campaign', CampaignSchema);

// Mock data
const campaigns = [
  {
    title: "Save the Rainforest",
    description: "An initiative to protect the rainforest from deforestation and preserve its biodiversity.",
    goal: 100000,
    progress: 45000
  },
  {
    title: "Clean Oceans",
    description: "A campaign focused on reducing ocean pollution and protecting marine life.",
    goal: 150000,
    progress: 75000
  },
  {
    title: "Education for All",
    description: "Providing educational resources and support to underprivileged children.",
    goal: 200000,
    progress: 120000
  },
  {
    title: "Healthcare Access",
    description: "Improving access to healthcare services in rural and underserved communities.",
    goal: 250000,
    progress: 180000
  },
  {
    title: "Feed the Hungry",
    description: "An initiative to combat hunger and provide meals to those in need.",
    goal: 50000,
    progress: 30000
  },
  {
    title: "Animal Rescue",
    description: "Supporting animal rescue efforts and providing shelter for abandoned animals.",
    goal: 75000,
    progress: 35000
  }
];

// Insert mock data into the database
Campaign.insertMany(campaigns)
  .then(() => {
    console.log('Data inserted');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Insert error', err);
    mongoose.connection.close();
  });
