const express = require('express');
const mongoose = require('mongoose');
require("./db/conn");
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors())


const userRoutes = require('./routes/userRoutes');
app.use('/user', userRoutes);
const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', adminRoutes);
const mandirRoutes = require('./routes/mandirRoutes');
app.use('/mandir', mandirRoutes);
const eventRoutes = require('./routes/eventRoutes');
app.use('/event', eventRoutes);
const significacneRoutes = require('./routes/significanceRoutes');
app.use('/significance', significacneRoutes);
const imageRoutes = require('./routes/imageUploadRoutes');
app.use('/image', imageRoutes);
const subscribeRoutes = require('./routes/subscribeRoutes');
app.use('/subscribe', subscribeRoutes);
const pushNotificationRoutes = require('./routes/pushNotificationRoutes');
app.use('/notification', pushNotificationRoutes);
const historyRoutes = require('./routes/historyRoutes');
app.use('/history', historyRoutes);
const twilioRoutes = require('./routes/twillioRoutes');
app.use('/twilio', twilioRoutes);
const calendarEventRoutes = require('./routes/calenderEventRoutes');
app.use('/calendarEvent', calendarEventRoutes);
const horoscopeRoutes = require('./routes/horoscopeRoutes');
app.use('/horoscope', horoscopeRoutes);
const entertainmentRoutes = require('./routes/entertainmentRoutes');
app.use('/entertainment', entertainmentRoutes);




app.get("/", (req,res)=>{
    res.send("Hello! THIS IS MY MANDIR BACKEND");
});

app.use('/uploads', express.static('./uploads'));


const port = process.env.PORT || 8080

app.listen(port, () =>{
    console.log(`app is running at ${port}`);
})