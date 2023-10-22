import { Schema, model, Document } from 'mongoose';

type TInformationImage = Document & {
  imageBuffer: Buffer;
};

const informationImageModelSchema = new Schema<TInformationImage>({
  imageBuffer: {
    type: Buffer,
    required: true,
  },
});

const InformationImageModel = model<TInformationImage>('InformationImage', informationImageModelSchema);

export default InformationImageModel;
