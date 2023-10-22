import { Schema, model, Document } from 'mongoose';

type TDiscographyCover = Document & {
  coverBuffer: Buffer;
};

const discographyCoverModelSchema = new Schema<TDiscographyCover>({
  coverBuffer: {
    type: Buffer,
    required: true,
  },
});

const DiscographyCoverModel = model<TDiscographyCover>('DiscographyCover', discographyCoverModelSchema);

export default DiscographyCoverModel;
