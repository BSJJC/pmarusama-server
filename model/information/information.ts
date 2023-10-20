import { Schema, model, Document } from 'mongoose';

interface Iinformation extends Document {
  date: string;
  title: string;
  text: string;
}

const informationModelSchema = new Schema<Iinformation>({
  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const informationModel = model<Iinformation>('information', informationModelSchema);

export default informationModel;
