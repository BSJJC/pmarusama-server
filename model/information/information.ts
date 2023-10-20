import { Schema, model, Document } from 'mongoose';

interface Iinformation extends Document {
  text: string;
}

const informationModelSchema = new Schema<Iinformation>({
  text: {
    type: String,
    required: true,
  },
});

const informationModel = model<Iinformation>('information', informationModelSchema);

export default informationModel;
