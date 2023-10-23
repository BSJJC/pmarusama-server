import { Schema, model, Document } from 'mongoose';

type Tinformation = Document & {
  date: number;
  title: string;
};

const informationModelSchema = new Schema<Tinformation>({
  date: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const informationModel = model<Tinformation>('information', informationModelSchema);

export default informationModel;
