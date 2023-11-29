import { Schema, model, Document } from 'mongoose';

type TInformation = Document & {
  date: number;
  title: string;
  informationType: 'form' | 'url';
  data: object;
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
  informationType: {
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
