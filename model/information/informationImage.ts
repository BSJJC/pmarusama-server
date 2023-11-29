import { Schema, model, Document } from 'mongoose';

type TInformationImage = Document & {
  imageID: string;
  imageBuffer: Buffer;
};

const informationImageSchema = new Schema<TInformationImage>({
  imageID: {
    type: String,
    require: true,
  },
  imageBuffer: {
    type: Buffer,
    required: true,
  },
});

const InformationImageModel = model<TInformationImage>('informationImage', informationImageSchema);

export default InformationImageModel;
