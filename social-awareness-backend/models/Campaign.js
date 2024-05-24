const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  goal: {
    type: Number,
    required: true
  },
  progress: {
    type: Number,
    required: true,
    default: 0
  }
});

module.exports = mongoose.model('Campaign', CampaignSchema);
