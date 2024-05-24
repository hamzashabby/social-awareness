const express = require('express');
const router = express.Router();
const Campaign = require('../models/Campaign');

// @route   GET /api/campaigns
// @desc    Get all campaigns
// @access  Public
router.get('/', async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.json(campaigns);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST /api/campaigns
// @desc    Create a campaign
// @access  Public
router.post('/', async (req, res) => {
  const { title, description, goal } = req.body;

  try {
    const newCampaign = new Campaign({
      title,
      description,
      goal
    });

    const campaign = await newCampaign.save();
    res.json(campaign);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
