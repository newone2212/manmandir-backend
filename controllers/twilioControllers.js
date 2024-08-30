// Twilio configuration
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const twilio = require('twilio')(accountSid, authToken);

// Generate a random OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Store generated OTPs (you should use a database in production)
const otpStorage = new Map();

module.exports={
// Generate and send OTP
sendOtp:async(req, res) => {
  const { to } = req.body;
  const otp = generateOTP();

  // Store the OTP for verification
  otpStorage.set(to, otp);

  twilio.messages
    .create({
      body: `Your OTP is: ${otp}`,
      from: '+18447357010',
      to: to,
    })
    .then(() => {
      res.json({ message: 'OTP sent successfully' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Failed to send OTP' });
    });
},


//verify otp
verifyOtp:async(req,res)=>{
  const { phoneNumber, otp } = req.body;
  const storedOTP = otpStorage.get(phoneNumber);

  if (storedOTP === otp) {
    otpStorage.delete(phoneNumber);
    res.json({ message: 'OTP verified successfully' });
  } else {
    res.status(400).json({ error: 'Invalid OTP' });
  }
}
}