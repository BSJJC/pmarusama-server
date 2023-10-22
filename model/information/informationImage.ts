import { Schema, model, Document } from 'mongoose';

type TInformationImage = Document & {
  name: string;
  imageBuffer: Buffer;
};

const informationImageModelSchema = new Schema<TInformationImage>({
  name: {
    type: String,
    required: true,
  },
  imageBuffer: {
    type: Buffer,
    required: true,
  },
});

const InformationImageModel = model<TInformationImage>('InformationImage', informationImageModelSchema);

export default InformationImageModel;
