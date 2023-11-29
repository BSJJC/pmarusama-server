import { Schema, model, Document } from 'mongoose';

type TInformation = Document & {
  informationType: 'form' | 'url';
  date: number;
  title: string;
  data: object;
};

const informationModelSchema = new Schema<TInformation>({
  informationType: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
});

const informationModel = model<TInformation>('information', informationModelSchema);

export default informationModel;
