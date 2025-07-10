import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  longUrl: { type: String, required: true },
  short_code: { type: String, required: true , unique: true  },
  created: { type: Date, default: Date.now },
  expired: Date,
  clickCount: { type: Number, default: 0 }
});

const Url = mongoose.model('Url', urlSchema);

export default Url;