import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/queue', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
    console.log('connected!');
})

const MQueueSchema = new mongoose.Schema({
    name: String,
    queueNumber: String, 
    wasAttended: { type: Boolean, default: false },
}, { timestamps: true })

const MQueue = mongoose.model('Mqueue', MQueueSchema);
export { MQueue };