const express = require('express');
const router = express.Router();

const { Expo } = require('expo-server-sdk');

module.exports={
  pushNotification: async (req, res) => {
    const expo = new Expo();
    const { tokens, title, body } = req.body;

      // Check if tokens is an array
      if (!Array.isArray(tokens)) {
        return res.status(400).json({ success: false, error: 'Tokens must be an array' });
      }
  
    // Create an array of messages to send
    const messages = tokens.map((token) => ({
      to: token,
      sound: 'default',
      title,
      body,
    }));
  
    try {
      const chunks = expo.chunkPushNotifications(messages);
      const tickets = [];
  
      for (const chunk of chunks) {
        const ticketChunk = await expo.sendPushNotificationsAsync(chunk);
        tickets.push(...ticketChunk);
      }
  
      res.json({ success: true, tickets });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Error sending push notifications' });
    }
  }
}