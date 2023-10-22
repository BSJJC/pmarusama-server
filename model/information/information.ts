import { Schema, model, Document } from 'mongoose';

type Tinformation = Document & {
  date: string;
  title: string;
  text: string;
};

const informationModelSchema = new Schema<Tinformation>({
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

const informationModel = model<Tinformation>('information', informationModelSchema);

export default informationModel;