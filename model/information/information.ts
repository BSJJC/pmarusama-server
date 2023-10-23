import { Schema, model, Document } from 'mongoose';

type TInformation = Document & {
  date: number;
  title: string;
};

const informationModelSchema = new Schema<TInformation>({
  date: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const informationModel = model<TInformation>('information', informationModelSchema);

export default informationModel;
